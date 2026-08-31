const targets = await (await fetch('http://127.0.0.1:9229/json/list')).json()
const target = targets.find((item) => item.type === 'page' && item.url === 'https://trionn-lake.vercel.app/')

if (!target) throw new Error('Homepage browser target was not found')

const socket = new WebSocket(target.webSocketDebuggerUrl)
const pending = new Map()
let nextId = 0

socket.addEventListener('message', ({data}) => {
  const message = JSON.parse(data)
  const handler = pending.get(message.id)
  if (handler) {
    pending.delete(message.id)
    handler(message)
  }
})

await new Promise((resolve) => socket.addEventListener('open', resolve, {once: true}))

function send(method, params = {}) {
  const id = ++nextId
  socket.send(JSON.stringify({id, method, params}))
  return new Promise((resolve) => pending.set(id, resolve))
}

const expression = `JSON.stringify({
  images: [...document.images].map((image) => ({
    src: image.getAttribute('src'),
    currentSrc: image.currentSrc,
    alt: image.alt,
    complete: image.complete,
    naturalWidth: image.naturalWidth,
    naturalHeight: image.naturalHeight,
    rect: image.getBoundingClientRect().toJSON(),
    html: image.outerHTML.slice(0, 500)
  })),
  resources: performance.getEntriesByType('resource')
    .filter((entry) => /\\.(?:png|jpe?g|webp|avif|svg|gif)(?:\\?|$)/i.test(entry.name))
    .map((entry) => ({name: entry.name, responseStatus: entry.responseStatus, duration: entry.duration}))
})`

const result = await send('Runtime.evaluate', {expression, returnByValue: true})
const data = JSON.parse(result.result.result.value)
console.log(JSON.stringify({
  images: data.images
    .filter((image, index, images) => images.findIndex((item) => item.src === image.src) === index)
    .map(({src, currentSrc, complete, naturalWidth, naturalHeight, alt}) => ({src, currentSrc, complete, naturalWidth, naturalHeight, alt})),
  failedResources: data.resources.filter((resource) => resource.responseStatus && resource.responseStatus !== 200)
}, null, 2))
socket.close()
