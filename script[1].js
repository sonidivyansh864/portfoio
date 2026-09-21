const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];
function setStars() {
  canvas.width = innerWidth * devicePixelRatio; canvas.height = innerHeight * devicePixelRatio;
  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  stars = Array.from({ length: Math.min(150, Math.floor(innerWidth / 7)) }, () => ({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, r: Math.random() * 1.3 + .15, a: Math.random() * .7 + .1, v: Math.random() * .008 + .003 }));
}
function drawStars() { ctx.clearRect(0, 0, innerWidth, innerHeight); stars.forEach(s => { s.a += s.v; const opacity = .15 + (Math.sin(s.a) + 1) * .25; ctx.fillStyle = `rgba(185,211,255,${opacity})`; ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill(); }); requestAnimationFrame(drawStars); }
setStars(); drawStars(); addEventListener('resize', setStars);
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle'); const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', open); toggle.textContent = open ? 'Close' : 'Menu'; });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); toggle.textContent = 'Menu'; toggle.setAttribute('aria-expanded', 'false'); }));
