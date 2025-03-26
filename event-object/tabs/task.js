const tabs = document.getElementById('tabs1');
const tabItems = Array.from(tabs.querySelectorAll('.tab'));
const tabContents = Array.from(tabs.querySelectorAll('.tab__content'));

tabItems.forEach(tab => {
    tab.addEventListener('click', () => {
        let index = tabItems.indexOf(tab);

        let indexPrevious = tabItems.findIndex(tab => tab.classList.contains('tab_active'));
        if (indexPrevious === -1 || index === indexPrevious) {
            return;
        };

        tabItems[indexPrevious].classList.remove('tab_active');
        tabContents[indexPrevious].classList.remove('tab__content_active');

        tab.classList.add('tab_active');
        tabContents[index].classList.add('tab__content_active');
    })
})