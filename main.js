//tempo regressivo
var end = new Date("Dec 25, 2025 00:00:00").getTime();

var x = setInterval(function(){
    var now = new Date().getTime();
    var diff = end - now;
    
    // Calcula dias, horas, minutos e segundos diretamente
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (diff < 0) {
        clearInterval(x);
        document.getElementById("Count").innerHTML = "NATAL CHEGOU!";
        return;
    }

    // Adiciona zero à esquerda se necessário
    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var myh1 = document.getElementById("Count");
    myh1.innerHTML = `${days} dias ${hours}:${minutes}:${seconds}`;

},1000);