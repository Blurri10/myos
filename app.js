const months = {
    '01': 'january',
    '02': 'february',
    '03': 'march',
    '04': 'april',
    '05': 'may',
    '06': 'june',
    '07': 'july',
    '08': 'august',
    '09': 'september',
    '10': 'october',
    '11': 'november',
    '12': 'december',
}

setInterval(function () {

    const today = new Date();
    const currentMonth = today.getMonth();
    let nextMonth = '';
    let year = today.getFullYear();

    if (currentMonth <= 7) {
        nextMonth = `0${currentMonth + 2}`;
    } else if (currentMonth >= 8 && currentMonth <= 10) {
        nextMonth = `${currentMonth + 2}`;
    } else if (currentMonth === 11) {
        nextMonth = `01`;
        year++;
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
    document.querySelector('#month').innerText = months[nextMonth];
}, 70);
