import initialLoad from './initial'
import loadMenu from './menu'
import loadContact from './contact'

initialLoad();

let page = document.getElementById('content');

let menuBtn = document.querySelector('.menuTab');
let contactBtn = document.querySelector('.contactTab');

let resetPage = () => {
    page.removeChild(page.lastChild);
}

menuBtn.addEventListener('click', () => {
    resetPage();
    loadMenu();
})

contactBtn.addEventListener('click', () => {
    resetPage();
    loadContact();
})
