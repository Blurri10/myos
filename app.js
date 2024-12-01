const months = {
    0: 'january',
    1: 'february',
    2: 'march',
    3: 'april',
    4: 'may',
    5: 'june',
    6: 'july',
    7: 'august',
    8: 'september',
    9: 'october',
    10: 'november',
    11: 'december',
}

setInterval(function () {

    const today = new Date();
    const currentMonth = today.getMonth();
    let nextMonth = '';
    let year = today.getFullYear();

    if (currentMonth === 11) {
        nextMonth = `01`;
        year++;
    } else {
        nextMonth = (currentMonth + 2) < 10 ? `0${currentMonth + 2}` : `${currentMonth + 2}`;
    }

    const dueDate = new Date(`${year}-${nextMonth}-01T00:00:00`);
    const diff = dueDate.getTime() - today.getTime();

    const seconds = diff / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const idx = days.toFixed(6).indexOf(".");

    document.querySelector('#date').innerText = `${Math.floor(days)}`;
    document.querySelector('#seconds').innerText = `${days.toFixed(6).substring(idx)}`;
    document.querySelector('#month').innerText = months[currentMonth];
}, 70);
