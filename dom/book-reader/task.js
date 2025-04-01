const book = document.getElementById('book');
const bookControls = Array.from(book.querySelectorAll('.book__control'));
const bookControlFontSize = bookControls.find(bookControl => bookControl.classList.contains('book__control_font-size'));
const FSButtons = Array.from(bookControlFontSize.children);

FSButtons.forEach(FSButton => {
    FSButton.addEventListener('click', (event) => {
        event.preventDefault();
        
        const currentIndex = FSButtons.findIndex(FSButton => FSButton.classList.contains('font-size_active'));
        if (currentIndex === -1){
            return;
        };

        FSButtons[currentIndex].classList.remove('font-size_active');

        FSButton.classList.add('font-size_active');

        book.classList.remove('book_fs-big', 'book_fs-small');

        const newSize = FSButton.dataset.size;
        if (newSize) {
            book.classList.add(`book_fs-${newSize}`);
        }
    });
});

const bookControlColor = bookControls.find(bookControl => bookControl.classList.contains('book__control_color'));
const colorButtons = Array.from(bookControlColor.children).filter(el => el.classList.contains('color'));

colorButtons.forEach(colorButton => {
    colorButton.addEventListener('click', (event) => {
        event.preventDefault();

        const currentIndex = colorButtons.findIndex(colorButton => colorButton.classList.contains('color_active'));
        if (currentIndex === -1){
            return;
        };
        colorButtons[currentIndex].classList.remove('color_active');

        colorButton.classList.add('color_active');

        book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');

        const newColor = colorButton.dataset.textColor;
        if(newColor) {
            book.classList.add(`book_color-${newColor}`);
        };
    });
});

const bookControlBackground = bookControls.find(bookControl => bookControl.classList.contains('book__control_background'));
const backgroundButtons = Array.from(bookControlBackground.children).filter(el => el.classList.contains('color'));

backgroundButtons.forEach(backgroundButton => {
    backgroundButton.addEventListener('click', (event) => {
        event.preventDefault();

        const currentIndex = backgroundButtons.findIndex(backgroundButton => backgroundButton.classList.contains('color_active'));
        if (currentIndex === -1){
            return;
        };

        backgroundButtons[currentIndex].classList.remove('color_active');

        backgroundButton.classList.add('color_active');

        book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');

        const newBackground = backgroundButton.dataset.bgColor;

        book.classList.add(`book_bg-${newBackground}`);
    });
});