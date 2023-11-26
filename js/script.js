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

// teste

var elementosBx = document.querySelectorAll('.bx');

// Adicione um ouvinte de evento de clique a cada elemento
elementosBx.forEach(function (elemento) {
    elemento.addEventListener('click', function () {
        // Obtenha o link associado ao elemento clicado
        var link = elemento.querySelector('a');

        // Verifique se há um link e redirecione para ele
        
        if (link) {
            window.open(link.href, '_blank');
        }
    });
});