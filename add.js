function createli(){
let para = document.createElement('li');
para.textContent = 'You clicked the ul!';
document.body.appendChild(para);
}

const buttons = document.querySelectorAll('ul');

for(let i = 0 ; i < buttons.length ; i++){
  buttons[i].addEventListener('click',createli);
}
