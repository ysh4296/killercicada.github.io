function createParagraph(){
  let script = document.createElement('script');
  script.src = "add.js";
  document.body.append(script);
let para = document.createElement('p');
para.textContent = 'You clicked the button!';
document.body.appendChild(para);
}

const buttons = document.querySelectorAll('li');

for(let i = 0 ; i < buttons.length ; i++){
  buttons[i].addEventListener('click',createParagraph);
}
