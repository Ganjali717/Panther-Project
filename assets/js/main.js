//Header-dropdown menu
let itworks = document.querySelector('#howitwork');
let headresources = document.querySelector('#headresources');
let dropdownmenu = document.querySelector('.dropdown-menu-header');
let seconddropdownmenu = document.querySelector('.second-dropdown-menu-header');
let dropdownicon = document.querySelector('.dropdown-icon');

itworks.addEventListener('click', function(){ 
    dropdownmenu.classList.add("active-dropdown");
    dropdownicon.classList.add("open");
});
headresources.addEventListener('click', function(){ 
    seconddropdownmenu.classList.add("active-dropdown");
    dropdownicon.classList.add("open");
});


//Cards-love
const workersimg = Array.from(document.querySelectorAll('.workers-img .worker'));
const workerscomment = Array.from(document.querySelectorAll('.workers-comments .workers-comments-item'));
const clearActives = () => {
    workersimg.forEach(workersimg => {
        workersimg.classList.remove('active');
    });
    workerscomment.forEach(workerscomment => {
        workerscomment.classList.remove('active');
    });
}
workersimg.forEach(workersimg => {
    workersimg.onclick = function () {
        clearActives();
        const targetId = workersimg.getAttribute('data-target') //home
        const targetContent = document.getElementById(targetId);
        workersimg.classList.add('active');
        targetContent.classList.add('active');
    }
});



