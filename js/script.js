function checkWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
};

checkWebP(function (support) {
    if (support) {
        //Do what you whant =)
        document.querySelector('body').classList.add('webp');
    } else {
        //Do what you whant =)
        document.querySelector('body').classList.add('no-webp');
    }

});

//menu
const menuItemBurger = document.querySelector('.menu__item-burger');
const burger = document.querySelector('.burger');
const burgerButton = document.querySelector('.burger__button');

menuItemBurger.addEventListener('click', () =>{
    burger.classList.add('show');
});
burgerButton.addEventListener('click', () =>{
    burger.classList.remove('show');
});