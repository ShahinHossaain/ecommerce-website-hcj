const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const sideNavClose = document.getElementById('sideNavClose');

console.log(bar)

bar && bar.addEventListener('click', () => {
    nav.classList.add('active');
})

sideNavClose.addEventListener('click', () => {
    nav.classList.remove('active');
})



