(function () {
  'use strict';

  const lab = document.querySelector('[data-team-lab]');
  if (!lab) return;
  const scanner = lab.querySelector('[data-scanner]');
  const scannerVideo = scanner.querySelector('.scanner__video');
  const scannerIdle = scanner.querySelector('.scanner__idle span');
  const identityName = scanner.querySelector('.scanner__identity strong');
  const identityRole = scanner.querySelector('.scanner__identity span');
  const cards = Array.from(lab.querySelectorAll('[data-team-card]'));
  const originalLabel = scannerIdle.textContent;
  let sequence = 0;

  function speak(key) {
    if (!window.TrionnSound || !window.TRIONN || !window.TRIONN.sound) return;
    window.TrionnSound.play(window.TRIONN.sound[key], 0.95);
  }

  function identify(card) {
    const current = ++sequence;
    scanner.classList.remove('is-detected');
    scanner.classList.add('is-scanning');
    scannerIdle.textContent = 'IDENTIFYING…';
    scannerVideo.pause();
    scannerVideo.removeAttribute('src');
    scannerVideo.load();
    identityName.textContent = '';
    identityRole.textContent = '';
    speak('identifying');

    window.setTimeout(function () {
      if (current !== sequence) return;
      identityName.textContent = card.dataset.name || '';
      identityRole.textContent = card.dataset.role || '';
      scannerVideo.src = card.dataset.video || '';
      scannerVideo.load();
      const play = scannerVideo.play();
      if (play && play.catch) play.catch(function () {});
      scanner.classList.remove('is-scanning');
      scanner.classList.add('is-detected');
      scannerIdle.textContent = 'DETECTED';
      speak('detected');
    }, 1350);
  }

  function resetCard(card) {
    card.style.transition = 'transform .55s cubic-bezier(.2,.75,.25,1)';
    card.style.transform = '';
    window.setTimeout(function () { card.style.transition = ''; }, 580);
  }

  cards.forEach(function (card) {
    let activePointer = null;
    let originX = 0;
    let originY = 0;
    let moveX = 0;
    let moveY = 0;
    let moved = false;

    card.addEventListener('pointerdown', function (event) {
      if (event.button !== undefined && event.button !== 0) return;
      activePointer = event.pointerId;
      originX = event.clientX;
      originY = event.clientY;
      moveX = 0;
      moveY = 0;
      moved = false;
      card.classList.add('is-dragging');
      card.setPointerCapture(activePointer);
    });

    card.addEventListener('pointermove', function (event) {
      if (activePointer !== event.pointerId) return;
      moveX = event.clientX - originX;
      moveY = event.clientY - originY;
      moved = moved || Math.abs(moveX) + Math.abs(moveY) > 8;
      if (window.matchMedia('(max-width:760px)').matches) return;
      card.style.transform = 'translate3d(' + moveX + 'px,' + moveY + 'px,0) scale(1.025)';
    });

    function release(event) {
      if (activePointer !== event.pointerId) return;
      card.classList.remove('is-dragging');
      try { card.releasePointerCapture(activePointer); } catch (error) {}
      activePointer = null;
      const mobile = window.matchMedia('(max-width:760px)').matches;
      const cardRect = card.getBoundingClientRect();
      const scanRect = scanner.getBoundingClientRect();
      const centerX = cardRect.left + cardRect.width / 2;
      const centerY = cardRect.top + cardRect.height / 2;
      const droppedInside = centerX > scanRect.left && centerX < scanRect.right && centerY > scanRect.top && centerY < scanRect.bottom;
      if ((mobile && !moved) || droppedInside) identify(card);
      resetCard(card);
    }
    card.addEventListener('pointerup', release);
    card.addEventListener('pointercancel', function (event) { if (activePointer === event.pointerId) { activePointer = null; card.classList.remove('is-dragging'); resetCard(card); } });
    card.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); identify(card); }
    });
  });

  scanner.addEventListener('dblclick', function () {
    sequence++;
    scanner.classList.remove('is-scanning', 'is-detected');
    scannerIdle.textContent = originalLabel;
    scannerVideo.pause();
  });
}());

