"use strict";


// Dashboard-function

const menu_items = document.querySelectorAll('.menu__items--list');

menu_items.forEach(item => {
    item.addEventListener('click', () =>{
        
        for (let i = 0; i < menu_items.length; i++){
            menu_items[i].classList.remove("active_item");
        }
        item.classList.add("active_item");
        
    });
});
