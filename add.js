function createli(){
let para = document.createElement('p');
para.textContent = 'You clicked the p!';
document.body.appendChild(para);
}

const buttons = document.querySelectorAll('p');

for(let i = 0 ; i < buttons.length ; i++){
  buttons[i].addEventListener('click',createli);
}
