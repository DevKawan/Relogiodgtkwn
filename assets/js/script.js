const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

//Data
const dias = document.getElementById('dias');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');

const relogio = setInterval(function time() {

    //Horas
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    //Data
    let day = dateToday.getDate();
    let m = dateToday.getMonth();
    let y = dateToday.getFullYear();

    //Horas
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    //Data
    if (day < 10) day = '0' + day;
    if (m < 10) m = '0' + m;
    if (y < 10) y = '0' + y;

    //Horas
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

    //Data
    dias.textContent = day;
    mes.textContent = m;
    ano.textContent = y;
})


