
"use strict"

let modalShowButton = document.querySelector('.add-button');
let modalHideButton = document.querySelector('.close-button');
let modal = document.querySelector('.modal');

modalShowButton.addEventListener('click', () => {
    modal.classList.add('modal_active');
})

modalHideButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
})


//Пишите здесь

let arrNews = [];

let form = document.forms.add;
let nameInput = form.elements.name;
let descInput = form.elements.desc;


form.addEventListener('submit', addNews);

let flag = true;

function addNews(event) {
    event.preventDefault();
    nameError.innerHTML = '';
    descError.innerHTML = '';
    flag = true;
    if (nameInput.classList.contains('error_input')) {
        nameInput.classList.remove('error_input');
    }
    if (descInput.classList.contains('error_input')) {
        descInput.classList.remove('error_input');
    }
    if (!nameInput.value) {
        nameError.innerHTML = 'Введите название';
        nameInput.classList.add('error_input');
        flag = false;
    }
    if (!descInput.value) {
        descError.innerHTML = 'Введите описание';
        descInput.classList.add('error_input');
        flag = false;
    }
    if (nameInput.value.length < 8) {
        nameError.innerHTML = 'Введите не менее 8 символов';
        nameInput.classList.add('error_input');
        flag = false;
    }
    if (!descInput.value) {
        descInput.classList.add('error_input');
        flag = false;
    }   
    if (descInput.value.length > 300) {
        descError.innerHTML = 'Введите не более 300 символов';
        descInput.classList.add('error_input');
        flag = false;
    }

    if (flag) {
        arrNews.push({
            title: nameInput.value,
            description: descInput.value
        });
        nameInput.value = '';
        descInput.value = '';
        modal.classList.remove('modal_active');
        displayNews();
    }
}


function displayNews() {
    let newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = '';
    arrNews.forEach(news => {
        let newsItem = document.createElement('div');
        newsItem.classList.add("news-item")
        newsItem.innerHTML = `<h3 class="h3">${news.title}</h3><p class="news-item__p">${news.description}</p>`;
        newsContainer.appendChild(newsItem);
    });
}

document.addEventListener('keydown', function (event) {
    if (event.code === 'KeyB') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white'; 
    } else if (event.code === 'KeyW') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black'; 
    }
});
