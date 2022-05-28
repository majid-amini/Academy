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


//Homework-progress-function
const progressBox = document.querySelectorAll(".progress__box");

progressBox.forEach(elem => {
    elem.addEventListener('click', () => {
        for (let i = 0; i < progressBox.length; i++) {
            progressBox[i].classList.remove("active");
        }
        elem.classList.add("active");
    })
    
})
