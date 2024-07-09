var myInput = document.getElementById('myInput');

myInput.addEventListener('input', function () {
  let text = myInput.value;
  if(text.length === 0) return;
  
  let character = document.createElement('div');
  character.innerText = text[text.length - 1];
  document.body.appendChild(character);
});
