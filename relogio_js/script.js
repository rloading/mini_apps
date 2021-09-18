function updateTime() {
    const fullDate = new Date();

    let hours = fullDate.getHours();
    let minutes = fullDate.getMinutes();
    let seconds = fullDate.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = `${hours}:${minutes}:${seconds}`;
    document.querySelector('#time').innerText = time;
    setTimeout(updateTime, 1000);
}

function updateDate() {
    const fullDate = new Date();

    let dayList = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    let monthList = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    let year = fullDate.getFullYear();
    let month = monthList[fullDate.getMonth()];
    let date = fullDate.getDate();
    let day = dayList[fullDate.getDay()];

    let today = `${day}, ${date} de ${month} de ${year}`;
    document.querySelector('#date').innerText = today;
}

updateTime(), updateDate();