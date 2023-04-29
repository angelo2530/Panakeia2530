var times = document.getElementById('times');
var nav1 = document.getElementById('nav1');
var noir = document.getElementById('noir');
times.addEventListener('click', function(){
    nav1.style.display = "absolute";
    nav1.style.right = "-200px";
    nav1.style.top = "0";
    noir.style.display = "none";
});
var menu = document.getElementById('menu');
menu.addEventListener('click', function(){
    noir.style.display = "block";
    nav1.style.display = "absolute";
    nav1.style.right = "0";
    nav1.style.top = "0";
});
