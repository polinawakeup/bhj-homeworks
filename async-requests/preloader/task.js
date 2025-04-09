const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const loader = document.getElementById('loader');
        loader.classList.remove('loader_active');

        let currencies = JSON.parse(xhr.responseText).response.Valute;

        const items = document.getElementById('items');

        for (currency in currencies) {
            const currencyObj = { itemCode: currencies[currency].CharCode, itemValue: currencies[currency].Value }
            
            const item = document.createElement('div');
            item.classList.add('item');
            item.innerHTML = `<div class="item__code">${currencyObj.itemCode}</div>
            <div class="item__value">${currencyObj.itemValue}</div>
            <div class="item__currency">руб.</div>`

            items.appendChild(item);
        }
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();