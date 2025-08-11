const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark-mode');
  updateIcon('dark');
} else {
  document.documentElement.classList.remove('dark-mode');
  updateIcon('light');
}

themeToggleBtn.addEventListener('click', () => {
  if (document.documentElement.classList.contains('dark-mode')) {
    document.documentElement.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    updateIcon('light');
  } else {
    document.documentElement.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    updateIcon('dark');
  }
});

function updateIcon(theme) {
  if (theme === 'dark') {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  } else {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  }
}
