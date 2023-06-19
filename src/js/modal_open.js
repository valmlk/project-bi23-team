const bodyElement = document.querySelector('body');

function openModal() {
  bodyElement.classList.add('modal-open');
}

function closeModal() {
  bodyElement.classList.remove('modal-open');
}