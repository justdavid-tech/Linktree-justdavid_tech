/* ---------------------------------------------------------------
   1. Insert current year in footer
---------------------------------------------------------------- */
document.getElementById('currentYear').textContent = new Date().getFullYear();

/* ---------------------------------------------------------------
   2. Navbar toggler icon swap (uses Boxicons)
---------------------------------------------------------------- */
const toggler = document.querySelector('.navbar-toggler');
if (toggler){
  toggler.innerHTML = `
  <i class='bx bx-menu fs-1'></i>
  <i class='bx bx-x fs-1'></i>
  `;
  toggler.classList.add('collapsed');               // default closed
  toggler.addEventListener('click',()=>toggler.classList.toggle('collapsed'));
}

/* ---------------------------------------------------------------
   3. Social-button reveal on scroll
---------------------------------------------------------------- */
const links = document.querySelectorAll('.buttons a');
const observer = new IntersectionObserver(
  entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.style.opacity = 1;
        e.target.style.transform = 'translateY(0)';
      }
    });
  },
  {threshold:.4}
);

links.forEach(link=>{
  link.style.opacity = 0;
  link.style.transform = 'translateY(20px)';
  link.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(link);
});

/* ---------------------------------------------------------------
   4. Light ⇄ Dark theme switcher with persistence
---------------------------------------------------------------- */
const themeToggle = document.getElementById('themeToggle');
const prefersDark   = window.matchMedia('(prefers-color-scheme: dark)').matches;
const storedTheme   = localStorage.getItem('theme');

/* Apply stored or system preference on load */
if ((storedTheme === 'dark') || (!storedTheme && prefersDark)) {
  document.body.classList.add('dark');
}
updateToggleTooltip();

/* Click handler */
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const current = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', current);
  updateToggleTooltip();
});

/* Tooltip reflects next action */
function updateToggleTooltip() {
  themeToggle.title = document.body.classList.contains('dark')
    ? 'Use light mode' 
    : 'Use dark mode';
}


document.getElementById('backButton').onclick = function () {
    window.location.href = "/html/index.html";
} 

