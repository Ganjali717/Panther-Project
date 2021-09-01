//Header-dropdown menu
let itworks = document.querySelector('#howitwork');
let headresources = document.querySelector('#headresources');
let dropdownmenu = document.querySelector('.dropdown-menu-header');
let seconddropdownmenu = document.querySelector('.second-dropdown-menu-header');
let dropdownicon = document.querySelector('.dropdown-icon');
let dropdownicon2 = document.querySelector('.dropdown-icon-2');

itworks.addEventListener('click', function(e){ 
    dropdownmenu.classList.add("active-dropdown");
    dropdownicon.classList.add("open");
    document.addEventListener('click', function(e){
        if(e.target != itworks){
            dropdownmenu.classList.remove("active-dropdown");
            dropdownicon.classList.remove("open");
        }
    });
});
headresources.addEventListener('click', function(e){ 
    seconddropdownmenu.classList.add("active-dropdown");
    dropdownicon2.classList.add("open");
    document.addEventListener('click', function(e){
        if(e.target != headresources){
            seconddropdownmenu.classList.remove("active-dropdown");
            dropdownicon2.classList.remove("open");
        }
    });
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






//Footer input 

const inputfooter = document.querySelector('.footer-input');
const formfooter = document.querySelector('.footer-form');
const textError = document.querySelector('.text-error');
const footsubmit = document.querySelector('.footer-submit');


// inputfooter.addEventListener('input', (event) => {
    



//     if(includesNumber) {
//         textError.classList.add('d-none');
//     }else {
//         textError.classList.remove('d-none');
//     }
// });


formfooter.addEventListener('submit', function(e){
    e.preventDefault();
     if(inputfooter.value.length !== 0){
        textError.classList.add('d-none');
     }
     else{
        textError.classList.remove('d-none');
     }
});

// formfooter.addEventListener('submit', function (event) {
//     event.preventDefault();
// });



