const revealBlocks = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', () => {
    revealBlocks.forEach(block => {
        const { top, bottom } = block.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (bottom > 0 && top < windowHeight) {
            block.classList.add('reveal_active');
        };
    });
})



