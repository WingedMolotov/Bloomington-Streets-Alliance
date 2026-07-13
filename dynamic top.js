const burger = document.getElementById('burger');
const toprow = document.querySelector('#toprow ul');
const close = document.getElementById('close');

burger.addEventListener('click', () => {
    toprow.classList.add('open');
});
close.addEventListener('click', () => {
    toprow.classList.remove('open');
});