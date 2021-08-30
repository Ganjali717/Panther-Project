//Header-dropdown menu
let itworks = document.querySelector('#howitwork');
let headresources = document.querySelector('#headresources');
let dropdownmenu = document.querySelector('.dropdown-menu-header');
let seconddropdownmenu = document.querySelector('.second-dropdown-menu-header');
let dropdownicon = document.querySelector('bi bi-arrow-down-short');

itworks.addEventListener('click', function(){ 
    dropdownmenu.classList.add("active-dropdown");
    dropdownicon.classList.add("open");
});
headresources.addEventListener('click', function(){ 
    seconddropdownmenu.classList.add("active-dropdown");
});



