const rotators = Array.from(document.querySelectorAll('.rotator'));

rotators.forEach(rotator => {
    const rotatorCases = Array.from(rotator.children);
    
    function rotate(){
        let index = rotatorCases.findIndex(rotatorCase => rotatorCase.classList.contains('rotator__case_active'));
        rotatorCases[index].classList.remove('rotator__case_active');

        let nextIndex = (index + 1) % rotatorCases.length;
        let nextCase = rotatorCases[nextIndex];

        nextCase.classList.add('rotator__case_active');
        nextCase.style.color = nextCase.dataset.color || 'black';

        setTimeout(rotate, nextCase.dataset.speed || 1000);
    };

    rotate();
});

