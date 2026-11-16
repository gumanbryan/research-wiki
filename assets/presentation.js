const deck = document.querySelector('.deck');
const slides = [...deck.querySelectorAll('.slide')];
const navigation = document.querySelector('.navigation');
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');
const page = document.querySelector('#page');
let index = 0;

function showSlide(target) {
  index = Math.max(0, Math.min(slides.length - 1, target));
  slides.forEach((slide, position) => { slide.hidden = position !== index; });
  previous.disabled = index === 0;
  next.disabled = index === slides.length - 1;
  page.textContent = `${index + 1} / ${slides.length}`;
}

if (slides.length) {
  navigation.hidden = false;
  showSlide(0);
  previous.addEventListener('click', () => showSlide(index - 1));
  next.addEventListener('click', () => showSlide(index + 1));
  document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey ||
        !['ArrowLeft', 'ArrowRight'].includes(event.key) ||
        event.target.closest?.('input, textarea, select, [contenteditable]')) return;
    event.preventDefault();
    showSlide(index + (event.key === 'ArrowRight' ? 1 : -1));
  });
}

window.addEventListener('DOMContentLoaded', () => {
  window.renderMathInElement?.(deck, {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false }
    ],
    throwOnError: false
  });
});
