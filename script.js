// Funcionalidade do Modal do Cardápio
const menuBtn = document.getElementById('menuBtn');
const menuModal = document.getElementById('menuModal');
const closeBtn = document.getElementsByClassName('close')[0];

// Abrir o modal quando clicar no botão de cardápio
menuBtn.addEventListener('click', function(e) {
    e.preventDefault();
    menuModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Impede rolagem da página
});

// Fechar o modal quando clicar no X
closeBtn.addEventListener('click', function() {
    menuModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Permite rolagem da página novamente
});

// Fechar o modal quando clicar fora dele
window.addEventListener('click', function(event) {
    if (event.target == menuModal) {
        menuModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Botão de WhatsApp
const orderBtn = document.getElementById('orderBtn');
orderBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // Substitua o número abaixo pelo número de WhatsApp da Ivanete's Cakes
    const phoneNumber = '5524998569778';
    const message = 'Olá! Gostaria de encomendar um bolo.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});

// Botão de Compartilhamento
const shareBtn = document.getElementById('shareBtn');
shareBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    const shareText = "Confira os deliciosos bolos da Ivanete's Cakes:";
    const shareUrl = "https://bit.ly/ivanetes-cakes";
    
    // Verifica se está em dispositivo móvel
    if (/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)) {
        // Link para WhatsApp em dispositivos móveis
        window.open(`whatsapp://send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`);
    } else {
        // Link para WhatsApp Web em desktops
        window.open(`https://web.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`);
    }
});

// Animações ao rolar a página
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.hero-content, .btn, .description');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // Se o elemento estiver visível na tela
        if(position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('visible');
        }
    });
});

// Adiciona classe para animação inicial
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.querySelector('.hero-content').classList.add('visible');
    }, 300);
});
