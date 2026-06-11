import axios from 'axios';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
    formEl: document.querySelector('.js-form'),
    submitBtn: document.querySelector('.js-submit-btn'),
    gallery: document.querySelector('.js-gallery'),
    loader: document.querySelector('.loader'),
}
    
// У файлі render - functions.js створи екземпляр SimpleLightbox для роботи з модальним вікном та зберігай функції для відображення елементів інтерфейсу:
const lightBox = new SimpleLightbox();

// Ця функція повинна приймати масив images, створювати HTML - розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh().Нічого не повертає.
const createGallery = images => {
    const markup = images.map((image) => {
        return `<li>
    <img
      src="${image.webformatURL}"
      alt="${image.tags}"
    />
    <p>Likes: ${image.likes}</p>
    <p>Views: ${image.views}</p>
    <p>Comments: ${image.comments}</p>
    <p>Downloads: ${image.downloads}</p>
    </li>`;
    }).join('');

    refs.gallery.insertAdjacentHTML('beforeend', markup);
    
    lightBox.refresh();
};

    // Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
clearGallery(). 
    
    
const showLoader = () => {
    refs.loader.classList.add('show');
};
Ця функція нічого не приймає, повинна додавати клас для відображення лоадера.Нічого не повертає.
    hideLoader().Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера.Нічого не повертає.

