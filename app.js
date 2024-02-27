const timer = setInterval(function () {
    const today = new Date().getTime();
    const dueDate = new Date('2024-03-01T00:00:00').getTime();
    const diff = dueDate - today;

    const seconds = diff / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;

    document.querySelector('#date').innerText = `${Math.floor(days)}`;
    document.querySelector('#seconds').innerText = `.${days.toFixed(6).substring(2)}`;
}, 70);

