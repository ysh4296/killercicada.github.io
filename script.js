function createParagraph(){
let para = document.createElement('li');
para.textContent = 'You clicked the button!';
document.body.appendChild(para);
}

const buttons = document.querySelectorAll('li');

for(let i = 0 ; i < buttons.length ; i++){
  buttons[i].addEventListener('click',createParagraph);
}
