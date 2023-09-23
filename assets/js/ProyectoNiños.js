const container = document.querySelector('.ProyectoNiños');
const text = document.querySelector('.ProyectoNiños p');

window.addEventListener('resize', () => {
  const containerHeight = container.offsetHeight;
  const textHeight = text.offsetHeight;

  if (textHeight > containerHeight) {
    const newBottomPos = -(textHeight - containerHeight);
    text.style.bottom = newBottomPos + 'px';
  } else {
    text.style.bottom = '0';
  }
});