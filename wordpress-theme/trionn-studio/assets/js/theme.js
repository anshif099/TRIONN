(function () {
  'use strict';

  const doc = document;
  const root = doc.documentElement;
  const body = doc.body;
  const config = window.TRIONN || {};
  let soundEnabled = window.localStorage.getItem('trionn-sound') === 'on';
  let hoverAudio = null;

  function finishLoading() {
    root.classList.add('page-ready');
    const loader = doc.querySelector('.site-loader');
    if (loader) loader.classList.add('is-hidden');
  }

  if (doc.readyState === 'complete') finishLoading();
  else window.addEventListener('load', finishLoading, { once: true });
  window.setTimeout(finishLoading, 2600);

  const soundButton = doc.querySelector('.sound-toggle');
  function updateSoundButton() {
    if (soundButton) soundButton.setAttribute('aria-pressed', String(soundEnabled));
  }
  function playSound(url, volume) {
    if (!soundEnabled || !url) return null;
    try {
      const audio = new Audio(url);
      audio.volume = typeof volume === 'number' ? volume : 1;
      audio.play().catch(function () {});
      return audio;
    } catch (error) {
      return null;
    }
  }
  window.TrionnSound = {
    enabled: function () { return soundEnabled; },
    play: playSound
  };
  updateSoundButton();
  if (soundButton) {
    soundButton.addEventListener('click', function () {
      soundEnabled = !soundEnabled;
      window.localStorage.setItem('trionn-sound', soundEnabled ? 'on' : 'off');
      updateSoundButton();
      if (soundEnabled) playSound(config.sound && config.sound.hover, 0.35);
    });
  }

  doc.querySelectorAll('a, button, [data-tilt], [data-team-card]').forEach(function (element) {
    element.addEventListener('mouseenter', function () {
      if (!soundEnabled || !config.sound || !config.sound.hover) return;
      if (hoverAudio) {
        hoverAudio.pause();
        hoverAudio = null;
      }
      hoverAudio = playSound(config.sound.hover, 0.08);
    });
  });

  const menuButton = doc.querySelector('.menu-toggle');
  const menu = doc.querySelector('.site-menu');
  function setMenu(open) {
    body.classList.toggle('menu-open', open);
    if (menuButton) menuButton.setAttribute('aria-expanded', String(open));
    if (menu) menu.setAttribute('aria-hidden', String(!open));
  }
  if (menuButton) menuButton.addEventListener('click', function () { setMenu(!body.classList.contains('menu-open')); });
  const menuBackdrop = doc.querySelector('.site-menu__backdrop');
  if (menuBackdrop) menuBackdrop.addEventListener('click', function () { setMenu(false); });
  doc.querySelectorAll('.site-menu a').forEach(function (link) { link.addEventListener('click', function () { setMenu(false); }); });
  doc.addEventListener('keydown', function (event) { if (event.key === 'Escape') setMenu(false); });

  const cursor = doc.querySelector('.cursor');
  if (cursor && window.matchMedia('(pointer:fine)').matches) {
    let pointerX = -100;
    let pointerY = -100;
    let renderX = -100;
    let renderY = -100;
    window.addEventListener('pointermove', function (event) { pointerX = event.clientX; pointerY = event.clientY; });
    (function renderCursor() {
      renderX += (pointerX - renderX) * 0.18;
      renderY += (pointerY - renderY) * 0.18;
      cursor.style.transform = 'translate3d(' + renderX + 'px,' + renderY + 'px,0) translate(-50%,-50%)';
      window.requestAnimationFrame(renderCursor);
    }());
    doc.querySelectorAll('a,button,[data-tilt],[data-team-card]').forEach(function (target) {
      target.addEventListener('mouseenter', function () { cursor.classList.add('is-active'); });
      target.addEventListener('mouseleave', function () { cursor.classList.remove('is-active'); });
    });
  }

  const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }) : null;
  doc.querySelectorAll('.reveal').forEach(function (item) {
    if (revealObserver) revealObserver.observe(item);
    else item.classList.add('is-visible');
  });

  const counterObserver = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      const node = entry.target;
      const end = Number(node.dataset.count || 0);
      const started = performance.now();
      const duration = 1400;
      function update(time) {
        const progress = Math.min(1, (time - started) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        node.textContent = String(Math.round(end * eased));
        if (progress < 1) window.requestAnimationFrame(update);
      }
      window.requestAnimationFrame(update);
      counterObserver.unobserve(node);
    });
  }, { threshold: 0.5 }) : null;
  doc.querySelectorAll('[data-count]').forEach(function (counter) {
    if (counterObserver) counterObserver.observe(counter);
    else counter.textContent = counter.dataset.count;
  });

  if (window.matchMedia('(pointer:fine) and (prefers-reduced-motion:no-preference)').matches) {
    doc.querySelectorAll('[data-tilt]').forEach(function (card) {
      card.addEventListener('pointermove', function (event) {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = 'perspective(900px) rotateX(' + (-y * 4) + 'deg) rotateY(' + (x * 5) + 'deg)';
      });
      card.addEventListener('pointerleave', function () { card.style.transform = ''; });
    });
  }

  const aboutLion = doc.querySelector('.about-hero__lion img');
  if (aboutLion && window.matchMedia('(pointer:fine)').matches) {
    doc.querySelector('.about-hero').addEventListener('pointermove', function (event) {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      aboutLion.style.transform = 'scale(1.035) translate(' + (x * -10) + 'px,' + (y * -8) + 'px)';
    });
  }

  let lastScroll = window.scrollY;
  const header = doc.querySelector('[data-header]');
  window.addEventListener('scroll', function () {
    const current = window.scrollY;
    if (header && current > 180) header.classList.toggle('is-hidden', current > lastScroll && !body.classList.contains('menu-open'));
    if (header && current <= 180) header.classList.remove('is-hidden');
    lastScroll = current;
  }, { passive: true });

  doc.querySelectorAll('.accordion__item button').forEach(function (button) {
    button.addEventListener('click', function () {
      const item = button.closest('.accordion__item');
      const open = !item.classList.contains('is-open');
      item.classList.toggle('is-open', open);
      button.setAttribute('aria-expanded', String(open));
    });
  });

  doc.querySelectorAll('.back-to-top').forEach(function (button) {
    button.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  });

  doc.querySelectorAll('.inquiry-form').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!window.fetch || !config.ajaxUrl) return;
      event.preventDefault();
      if (!form.reportValidity()) return;
      const status = form.querySelector('.form-status');
      const submit = form.querySelector('[type=submit]');
      form.classList.remove('is-error', 'is-success');
      form.classList.add('is-sending');
      submit.disabled = true;
      status.textContent = 'Sending…';
      window.fetch(config.ajaxUrl, { method: 'POST', body: new FormData(form), credentials: 'same-origin' })
        .then(function (response) { return response.json().then(function (json) { return { ok: response.ok, json: json }; }); })
        .then(function (result) {
          const message = result.json && result.json.data && result.json.data.message ? result.json.data.message : 'Please try again.';
          if (!result.ok || !result.json.success) throw new Error(message);
          form.classList.add('is-success');
          status.textContent = message;
          form.reset();
        })
        .catch(function (error) {
          form.classList.add('is-error');
          status.textContent = error.message || 'The inquiry could not be sent.';
        })
        .finally(function () {
          form.classList.remove('is-sending');
          submit.disabled = false;
        });
    });
  });
}());

