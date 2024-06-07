document.addEventListener('DOMContentLoaded', () => {
    const newsCards = document.querySelectorAll('.news-card');
    let currentCardIndex = 0;

    function showCard(index) {
        newsCards.forEach((card, i) => {
            if (i === index) {
                card.style.transform = 'translateX(0)';
                card.style.opacity = '1';
            } else if (i < index) {
                card.style.transform = 'translateX(-100%)';
                card.style.opacity = '0';
            } else {
                card.style.transform = 'translateX(100%)';
                card.style.opacity = '0';
            }
        });
    }
    const hammertime = new Hammer(document.body);
    hammertime.on('swipeleft', () => {
        if (currentCardIndex < newsCards.length - 1) {
            currentCardIndex++;
            showCard(currentCardIndex);
        }
    });

    hammertime.on('swiperight', () => {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            showCard(currentCardIndex);
        }
    });
    showCard(currentCardIndex);
});
