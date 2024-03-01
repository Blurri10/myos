const months = {
    '01': 'december',
    '02': 'january',
    '03': 'february',
    '04': 'march',
    '05': 'april',
    '06': 'may',
    '07': 'june',
    '08': 'july',
    '09': 'august',
    '10': 'september',
    '11': 'october',
    '12': 'november'
}

setInterval(function () {

    const today = new Date();
    let nextMonth = today.getMonth() + 2;
    let year  = today.getFullYear();

    if (nextMonth < 10) {
        nextMonth = "0" + nextMonth;
    }
    else if (nextMonth === 13) {
        nextMonth = 1;
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