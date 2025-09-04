//tempo regressivo
var end = new Date("Sept 04, 2025 15:00:00").getTime();

var x = setInterval(function(){
var now = new Date().getTime();
var diff = end - now;
var day = Math.floor(diff/(1000*3600*24));
var hour = Math.floor(diff % (1000*3600*24)/(1000*3600));
var min = Math.floor(diff % (1000*3600)/(1000*60));
var sec =Math.floor(diff % (1000*60)/1000);

if(hour < 10){
    hour = '0' + hour
}
if(min < 10){
    min = '0' + min
}
if(sec < 10){
    sec = '0' + sec
}

myh1 = document.getElementById("Count");
myh1.innerHTML = `${hour}:${min}:${sec}`




},1000);