function createli(){
let para = document.createElement('p');
para.textContent = 'You clicked the p!';
document.body.appendChild(para);
}

const ps = document.querySelectorAll('p');

for(let i = 0 ; i < buttons.length ; i++){
  ps[i].addEventListener('click',createli);
}
