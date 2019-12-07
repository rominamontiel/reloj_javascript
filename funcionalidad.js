const deg = 6;
const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const seg = document.querySelector("#seg");

setInterval(() => {
    let day = new Date();

    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    seg.style.transform = `rotateZ(${ss}deg)`;    
});

let day = new Date();

var dia = day.getDate();
var mes = day.getMonth() + 1;
var año = day.getFullYear();

var fecha = document.createElement('h1');
fecha.innerHTML = dia + ' . ' + mes + ' . ' + año;
document.getElementById('leyenda').appendChild(fecha);


