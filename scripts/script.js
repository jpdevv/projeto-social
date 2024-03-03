const data = document.getElementById('data');
const hora = document.getElementById('hora');

const getHours = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const hour = hours < 10 ? `0${hours}` : hours;
    const minute = minutes < 10 ? `0${minutes}` : minutes;
    hora.innerHTML = `${hour}:${minute}`;
}

setInterval(() => {
    getHours();
}, 1000);