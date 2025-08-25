// Exemplo de uso de localStorage para persistir tema de cor
const themeToggle = document.createElement('button');
themeToggle.textContent = 'Alternar tema';
themeToggle.style.margin = '1rem';
document.body.insertBefore(themeToggle, document.body.firstChild);

function setTheme(theme) {
  document.body.style.background = theme === 'dark' ? '#222' : '#f7f7f7';
  document.body.style.color = theme === 'dark' ? '#f7f7f7' : '#222';
  localStorage.setItem('siteTheme', theme);
}

themeToggle.addEventListener('click', () => {
  const currentTheme = localStorage.getItem('siteTheme') === 'dark' ? 'light' : 'dark';
  setTheme(currentTheme);
});

// Inicializa tema salvo
const savedTheme = localStorage.getItem('siteTheme') || 'light';
setTheme(savedTheme);
