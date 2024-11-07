const button = document.getElementById('burger');
const burgerlist = document.getElementById('burgerList');

const cardItems = document.querySelectorAll('.catalog-cards__link');

button.addEventListener('click', function() {
    if(burgerlist.style.display == 'flex'){
        burgerlist.style.display = 'none';
    }
    else{
        burgerlist.style.display = 'flex';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Отменяем стандартное поведение ссылки

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 124; // Смещение на 124 пикселя
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth' // Плавная прокрутка
        });
    });
});

function toggleActive(selectedItem) {
    const items = document.querySelectorAll('.catalog-filtr__item');

    items.forEach(item => {
        item.classList.remove('catalog-filtr__item--active');
    });

    selectedItem.classList.add('catalog-filtr__item--active');

    const selectedCategory = selectedItem.querySelector('.catalog-filtr__text').textContent;
    filterCards(selectedCategory);
}


const cardData = [
    {category: "Сигвеи", image: "Images/Список товаров/Сигвеи/2.jpg", model: "Xiaomi Ninebot mini Pro While (Белый)", cost: "31 480 р.", link: "#"},
    {category: "Гироскутеры", image: "Images/Список товаров/Гироскутеры/2.jpg", model: "Xiaomi Ninebot mini Pro While (Белый)", cost: "31 480 р.", link: "#"},
    {category: "Электросамокаты", image: "Images/Список товаров/Электросамокаты/3.jpg", model: "Xiaomi Ninebot mini Pro While (Белый)", cost: "31 480 р.", link: "#"},
    {category: "Сигвеи", image: "Images/Список товаров/Сигвеи/1.jpg", model: "Xiaomi Ninebot mini Pro While (Белый)", cost: "31 480 р.", link: "#"},
    {category: "Гироскутеры", image: "Images/Список товаров/Гироскутеры/1.jpg", model: "Xiaomi Ninebot mini Pro While (Белый)", cost: "31 480 р.", link: "#"},
    {category: "Сигвеи", image: "Images/Список товаров/Сигвеи/1.jpg", model: "Xiaomi Ninebot mini Pro While (Белый)", cost: "31 480 р.", link: "#"},
    {category: "Электросамокаты", image: "Images/Список товаров/Электросамокаты/1.jpg", model: "Xiaomi Ninebot mini Pro While (Белый)", cost: "31 480 р.", link: "#"},
    {category: "Электросамокаты", image: "Images/Список товаров/Электросамокаты/2.jpg", model: "Xiaomi Ninebot mini Pro While (Белый)", cost: "31 480 р.", link: "#"},
    {category: "Гироскутеры", image: "Images/Список товаров/Гироскутеры/1.jpg", model: "Xiaomi Ninebot mini Pro While (Белый)", cost: "31 480 р.", link: "#"},
    {category: "Сигвеи", image: "Images/Список товаров/Сигвеи/2.jpg", model: "Xiaomi Ninebot mini Pro While (Белый)", cost: "31 480 р.", link: "#"},
    {category: "Сигвеи", image: "Images/Список товаров/Сигвеи/3.jpg", model: "Xiaomi Ninebot mini Pro While (Белый)", cost: "31 480 р.", link: "#"},
    {category: "Сигвеи", image: "Images/Список товаров/Сигвеи/3.jpg", model: "Xiaomi Ninebot mini Pro While (Белый)", cost: "31 480 р.", link: "#"},
    {category: "Гироскутеры", image: "Images/Список товаров/Гироскутеры/3.jpg", model: "Xiaomi Ninebot mini Pro While (Белый)", cost: "31 480 р.", link: "#"},
    {category: "Электросамокаты", image: "Images/Список товаров/Электросамокаты/1.jpg", model: "Xiaomi Ninebot mini Pro While (Белый)", cost: "31 480 р.", link: "#"},
    {category: "Электросамокаты", image: "Images/Список товаров/Электросамокаты/2.jpg", model: "Xiaomi Ninebot mini Pro While (Белый)", cost: "31 480 р.", link: "#"},
    {category: "Гироскутеры", image: "Images/Список товаров/Гироскутеры/2.jpg", model: "Xiaomi Ninebot mini Pro While (Белый)", cost: "31 480 р.", link: "#"},
    {category: "Гироскутеры", image: "Images/Список товаров/Гироскутеры/3.jpg", model: "Xiaomi Ninebot mini Pro While (Белый)", cost: "31 480 р.", link: "#"},
    {category: "Электросамокаты", image: "Images/Список товаров/Электросамокаты/3.jpg", model: "Xiaomi Ninebot mini Pro While (Белый)", cost: "31 480 р.", link: "#"}
];

function filterCards(category) {
    const cardItems = document.querySelectorAll('.catalog-cards__item');

    dataCards = filterByCategory(cardData, category);
    
    for(let i = 0; i < 4; i++){
        cardItems[i].innerHTML = `
            <a href="${dataCards[i].link}" class="catalog-cards__link">
              <div class="catalog-category">
                <span class="catalog-category__text">${dataCards[i].category}</span>
              </div>
              <img src="${dataCards[i].image}" alt="Гироскутер" class="catalog-cards__img" /><span
                class="catalog-cards__model">${dataCards[i].model}</span><span
                class="catalog-cards__cost">${dataCards[i].cost}</span>
            </a>`;
    }
}

function filterByCategory(array, category) {
    const newArray = array.filter(cardData => cardData.category === category);
    if(newArray.length === 0){
        return array;
    }

    return newArray;
}