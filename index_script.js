var data,xmlhttp;
window.onload = function(){
  //set page
  document.getElementById("menu_button").setAttribute("onClick", "Active_side");
  document.getElementById("overlay").setAttribute("onClick", "Deactive_side");
  //get data
  xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : alert("XMLHTTP를 지원하지 않는 브라우저입니다");
  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState==4 && xmlhttp.status==200) {
        load_post(0);
      }
  }
  xmlhttp.open("GET","/post_list.json",true);
  xmlhttp.send();
}
function load_post(num) {
  document.querySelector(".content_post").innerHTML = ""; 
  document.querySelector(".button_list").innerHTML = ""; 
  data = JSON.parse(xmlhttp.responseText);
    for(let i = 0 ; i+num*10 < data.post_list.length && i < 10 ; i++){
    var A = document.createElement("a");
    if(data.post_list[i+num*10].thum != ""){
      var thum = document.createElement("span");
      thum.className = "thum";
      var img = document.createElement('img');
      img.src = data.post_list[i+num*10].thum;
      thum.append(img);
      A.appendChild(thum);
    }
    var title = document.createElement("span");
    title.className = "title";
    title.appendChild(document.createTextNode(data.post_list[i+num*10].title));
    A.appendChild(title); 
    var date = document.createElement("span");
    date.className = "date";
    date.appendChild(document.createTextNode(data.post_list[i+num*10].date));
    A.appendChild(date);
    var excerpt = document.createElement("span");
    excerpt.className = "excerpt";
    excerpt.appendChild(document.createTextNode(data.post_list[i+num*10].excerpt));
    A.appendChild(excerpt);
    A.href = data.post_list[i+num*10].url;
    var D = document.createElement("div");
    D.className = "post";
    D.append(A);
    document.querySelector(".content_post").append(D);
  }
  create_button(num+1);
}
function create_button(cur){
  //front button
  if(cur-3 > 1){
    var B = document.createElement("div");
    B.className = "post_button";
    B.innerHTML = "<";
    if(i !== cur) B.addEventListener('click',load_post.bind(null,(cur-10) >= 1 ? cur-10 : 1));
    document.querySelector(".button_list").append(B);
  } else {
    var B = document.createElement("div");
    B.className = "empty_button";
    B.innerHTML = " ";
    document.querySelector(".button_list").append(B);
  }
  for(var i = cur-3 ; i <= cur+3 ; i++){
    if(i <= 0 || i > Math.ceil(data.post_list.length/10)){
      var B = document.createElement("div");
      B.className = "empty_button";
      B.innerHTML = " ";
      document.querySelector(".button_list").append(B);
      continue;
    }
    var B = document.createElement("div");
    B.className = "post_button";
    B.innerHTML = i;
    if(i !== cur) B.addEventListener('click',load_post.bind(null,i-1));
    document.querySelector(".button_list").append(B);
  }
  //back button
  if(cur+3 < Math.ceil(data.post_list.length/10)){
    var B = document.createElement("div");
    B.className = "post_button";
    B.innerHTML = ">";
    if(i !== cur) B.addEventListener('click',load_post.bind(null,cur+4));
    document.querySelector(".button_list").append(B);
  } else {
    var B = document.createElement("div");
    B.className = "empty_button";
    B.innerHTML = " ";
    document.querySelector(".button_list").append(B);
  }
}
function Active_side(){
  document.getElementById("menu").add('active');
  document.getElementById("overlay").style.display = 'block';
}
function Deactive_side(){
  document.getElementById("menu").remove('active');
  document.getElementById("overlay").style.display = 'none';
}

