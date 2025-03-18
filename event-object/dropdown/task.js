const dropdownButton = document.querySelector('.dropdown__value');
const dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownButton.addEventListener('click', function(){
    const dropdown = this.closest('.dropdown');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    dropdownList.classList.toggle('dropdown__list_active');
});

dropdownItems.forEach(dropdownItem => {
    dropdownItem.addEventListener('click', function(event){
        event.preventDefault();
    
        const dropdown = this.closest('.dropdown');
        const dropdownList = dropdown.querySelector('.dropdown__list');
        const dropdownValue = dropdown.querySelector('.dropdown__value');
       
        dropdownValue.textContent = this.textContent;
    
        dropdownList.classList.remove('dropdown__list_active');
    });
});

