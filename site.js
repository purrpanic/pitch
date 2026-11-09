document.documentElement.classList.add('js');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reduceMotion.matches) {
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
  }), { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
  reveals.forEach(element => revealObserver.observe(element));
} else reveals.forEach(element => element.classList.add('visible'));

// Exclude intentionally retired slides so hidden sections cannot affect
// active-state detection or the fixed next-screen control.
const screens = [...document.querySelectorAll('[data-screen]:not([hidden])')];
const screenLinks = [...document.querySelectorAll('.screen-nav a')];
const blockLinks = [...document.querySelectorAll('.block-nav a[data-block]')];
const updateScreen = () => {
  const marker = window.scrollY + window.innerHeight * .35;
  let current = screens[0];
  screens.forEach(screen => { if (screen.offsetTop <= marker) current = screen; });
  screens.forEach(screen => screen.classList.toggle('is-current', screen === current));
  screenLinks.forEach(link => {
    const active = link.getAttribute('href') === '#' + current.id;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  const currentBlock = current.id === 'contacts' ? 'contacts' : current.id.startsWith('issue') ? 'issues' : current.id.startsWith('risk') ? 'risks' : current.id.startsWith('gantt') ? 'gantt' : current.id.startsWith('scope') ? 'scope' : current.id.startsWith('raci') ? 'raci' : current.id.startsWith('dev-') ? 'dev' : 'pitch';
  blockLinks.forEach(link => {
    const active = link.dataset.block === currentBlock;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
};
window.addEventListener('scroll', updateScreen, {passive:true});
window.addEventListener('resize', updateScreen, {passive:true});
window.addEventListener('hashchange', updateScreen);
updateScreen();

// Give the game button time to visibly respond before moving to the next screen.
document.querySelectorAll('.next').forEach(button => {
  button.addEventListener('click', event => {
    const destination = document.querySelector(button.getAttribute('href'));
    if (!destination || reduceMotion.matches) return;
    event.preventDefault();
    if (button.classList.contains('is-pressed')) return;
    button.classList.add('is-pressed');
    setTimeout(() => {
      if (destination.classList.contains('dev-plan')) {
        window.scrollTo({ top: destination.offsetTop, behavior: 'smooth' });
      } else {
        destination.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      history.replaceState(null, '', button.getAttribute('href'));
    }, 200);
    setTimeout(() => button.classList.remove('is-pressed'), 520);
  });
});
