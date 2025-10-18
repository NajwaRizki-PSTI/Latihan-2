const form = document.getElementById('itemForm');
const input = document.getElementById('itemInput');
const errorMessage = document.getElementById('errorMessage');
const list = document.getElementById('daftar');

form.addEventListener('submit', function(event){
  event.preventDefault();
  const value = input.value.trim();

  if (value === '') {
    errorMessage.textContent = 'Field tidak boleh kosong';
    input.classList.remove('valid');
    input.classList.add('invalid');
    return;
  }

  // sukses
  errorMessage.textContent = '';
  input.classList.remove('invalid');
  input.classList.add('valid');

  const newItem = document.createElement('li');
  newItem.textContent = value;
  list.append(newItem);})
