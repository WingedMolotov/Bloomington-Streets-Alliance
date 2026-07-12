let activeCard = 0;
let oldCard = 0;
const cards = document.querySelectorAll('.card');
const indicators = document.querySelectorAll('#indicator div');
const prevButton = document.getElementById('prevCard');
const nextButton = document.getElementById('nextCard');

function updateCardDisplay() {
    cards[oldCard].classList.remove('slideOut');
    void cards[oldCard];
    cards[oldCard].classList.add('slideOut');
    cards[oldCard].style.display = 'none';

    cards[activeCard].classList.remove('slideIn');
    void cards[activeCard];
    cards[activeCard].classList.add('slideIn');
    cards[activeCard].style.display = 'block';

    indicators[oldCard].style.backgroundColor = '#ffffff';
    indicators[activeCard].style.backgroundColor = '#f8c423';
}

for (let i = 0; i < cards.length; i++) {
    cards[i].parentElement.style.display = 'none';
}
cards[activeCard].parentElement.style.display = 'block';
indicators[oldCard].style.backgroundColor = '#ffffff';
indicators[activeCard].style.backgroundColor = '#f8c423';

prevButton.addEventListener('click', () => { 
    oldCard = activeCard;
    if (activeCard > 0) {
        activeCard--;
    } else {
        activeCard = cards.length - 1;
    }
    updateCardDisplay();
});
nextButton.addEventListener('click', () => { 
    oldCard = activeCard;
    if (activeCard < cards.length - 1) {
        activeCard++;
    } else {
        activeCard = 0;
    }
    updateCardDisplay();
});