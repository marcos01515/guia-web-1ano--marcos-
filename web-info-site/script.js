// Aguarda o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Animação suave para navegação
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Adiciona efeito de destaque nas seções ao rolar
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.5s ease-out';
        observer.observe(section);
    });

    // Animação do robô e mensagem
    const robot = document.querySelector('.robot');
    const messageBubble = document.querySelector('.message-bubble');
    const messages = [
        'Olá, bom dia! Espero que estejam bem!',
        'Vamos aprender sobre desenvolvimento web?',
        'Tecnologia é fascinante, não é?',
        'Estou aqui para ajudar vocês!'
    ];
    let currentMessage = 0;

    // Troca a mensagem do robô periodicamente
    setInterval(() => {
        currentMessage = (currentMessage + 1) % messages.length;
        messageBubble.style.opacity = '0';
        setTimeout(() => {
            messageBubble.textContent = messages[currentMessage];
            messageBubble.style.opacity = '1';
        }, 500);
    }, 5000);

    // Efeito de hover no robô
    robot.addEventListener('mouseenter', () => {
        robot.style.transform = 'scale(1.1)';
    });

    robot.addEventListener('mouseleave', () => {
        robot.style.transform = 'scale(1)';
    });

    // Efeito de destaque nos itens importantes
    document.querySelectorAll('strong').forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.color = getComputedStyle(document.documentElement)
                .getPropertyValue('--secondary-color');
        });

        element.addEventListener('mouseleave', function() {
            this.style.color = '';
        });
    });

    // Adiciona contador de progresso na leitura
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // Easter egg - Clique secreto no robô
    let clicks = 0;
    robot.addEventListener('click', () => {
        clicks++;
        if (clicks >= 5) {
            robot.style.animation = 'spin 1s linear';
            setTimeout(() => {
                robot.style.animation = '';
                clicks = 0;
            }, 1000);
        }
    });
});

// Adiciona estilos dinamicamente
const style = document.createElement('style');
style.textContent = `
    .progress-bar {
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: var(--secondary-color);
        z-index: 1000;
        transition: width 0.3s ease;
    }

    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
