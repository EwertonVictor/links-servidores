document.getElementById('vava').addEventListener('click', function() {
    redirecionarPara('https://discord.gg/sJzDnVG6');
});

document.getElementById('cornos').addEventListener('click', function() {
    redirecionarPara('https://discord.gg/V486BGJr');
});

document.getElementById('sifu').addEventListener('click', function() {
    redirecionarPara('https://discord.gg/8MEnN82z');
});

function redirecionarPara(url) {
    window.open(url, '_blank');
}