const images = document.querySelectorAll('.banner-image');
let current = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function cycleImages() {
    current = (current + 1) % images.length;
    showImage(current);
}

// Inicia com a primeira imagem visível
showImage(current);

// Muda a imagem a cada 5 segundos
setInterval(cycleImages, 5000);

document.addEventListener('DOMContentLoaded', function() {
    const quemSomos = document.getElementById('quem-somos');
    const submenu = document.getElementById('submenu');
    
    if (quemSomos && submenu) {
        // Alterna o submenu ao clicar em #quem-somos
        quemSomos.addEventListener('click', function(event) {
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                submenu.style.display = 'block';
            }
        });
        
        // Permite que os cliques nos itens do submenu funcionem sem fechar o menu
        submenu.addEventListener('click', function(event) {
            event.stopPropagation(); // Impede que o clique no submenu feche o menu
        });
    } else {
        console.error('Elemento "quem-somos" ou "submenu" não encontrado.');
    }
});