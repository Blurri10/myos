const timer = setInterval(function () {
    const today = new Date().getTime();
    const dueDate = new Date('2024-03-01T00:00:00').getTime();
    const diff = dueDate - today;
    document.querySelector('#test').innerText = `${Math.floor((((diff / 1000) / 60) / 60) % 24)}`;
}, 10);

