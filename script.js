function openEnvelope() {
    var overlay = document.querySelector('.overlay');
    var envelope = document.querySelector('.envelope');
    var hearts = document.querySelector('.hearts');

    overlay.style.display = 'flex';
    envelope.style.display = 'block';

    setTimeout(function () {
        hearts.innerHTML = '💖💖💖';
    }, 1000);
}

