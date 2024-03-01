const screen = document.getElementById('container');
const data = document.getElementById('data');
const hora = document.getElementById('hora');

const getHours = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const dia = date.getDay();
    const mes = date.getMonth();
    const hour = hours < 10 ? `0${hours}` : hours;
    const minute = minutes < 10 ? `0${minutes}` : minutes;
    hora.innerHTML = `${hour}:${minute}`;
    let dias = "";
    const m = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];
    if (dia === 0) {
        dias = "Domingo";
    }
    else if (dia === 1) {
        dias = "Segunda";
    }
    else if (dia === 2) {
        dias = "Terça";
    }
    else if (dia === 3) {
        dias = "Quarta";
    }
    else if (dia === 4) {
        dias = "Quinta";
    }
    else if (dia === 5) {
        dias = "Sexta";
    }
    else if (dia === 6) {
        dias = "Sábado";
    }
    data.innerText = `${dias}, ${dia} de ${m[mes]}`;
}

setInterval(() => {
    getHours();
}, 1000);