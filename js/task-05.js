const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', handleInputChange);

function handleInputChange(event) {
  nameOutput.textContent = event.currentTarget.value;
  if (event.currentTarget.value.trim() === '') {
    nameOutput.textContent = 'Anonymous';
  }
}