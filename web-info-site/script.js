// Exemplo de interatividade simples
window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a').forEach(function(link) {
        link.addEventListener('click', function() {
            window.scrollTo({
                top: document.querySelector(this.getAttribute('href')).offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });
});
