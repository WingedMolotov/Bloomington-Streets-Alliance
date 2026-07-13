const burger = document.getElementById('burger');
const toprow = document.querySelector('#toprow ul');
const close = document.getElementById('close');
const body = document.body;

burger.addEventListener('click', () => {
    toprow.classList.add('open');
    body.style.overflow = 'hidden';
});
close.addEventListener('click', () => {
    toprow.classList.remove('open');
    body.style.overflow = 'auto';
});