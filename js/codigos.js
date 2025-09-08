// Função para copiar o código para a área de transferência
function copyCode(button) {
    const codeBlock = button.parentElement.querySelector('pre');
    const code = codeBlock.textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copiado!';
        button.style.background = '#28a745';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#333';
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar:', err);
        button.textContent = 'Erro!';
        button.style.background = '#dc3545';
    });
}

// Adicionar botões de cópia a todos os exemplos de código
document.addEventListener('DOMContentLoaded', () => {
    const codeExamples = document.querySelectorAll('.code-example');
    
    codeExamples.forEach(example => {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copiar';
        button.onclick = function() {
            copyCode(this);
        };
        example.appendChild(button);
    });
});
