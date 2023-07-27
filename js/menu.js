let menu = document.querySelector('.menu');
let blockInMenu = document.getElementsByClassName('block-menu');
let navigate = document.querySelector('.navigation');
let body = document.querySelector('.body');
menu.addEventListener('click', ()=>{
    menu.classList.toggle('menu__click');

    for (let i = 0; i < blockInMenu.length; i++) {
        blockInMenu[i].classList.toggle('block-menu__active');       
    }

    navigate.classList.toggle('active')
    
    body.classList.toggle('active__body')

});



let social = document.querySelector('.social');
let call = document.querySelector('.call');
let socialElements = document.getElementsByClassName('social__elementIMG');

social.addEventListener('click', ()=>{
    social.classList.toggle('active__social')
    call.classList.toggle('active__more_e');
    // body.classList.toggle('active__body');

    for (let v = 0; v < socialElements.length; v++){
        socialElements[v].classList.toggle('active__more_e');
    }
    
    

});

document.addEventListener('click', (e)=>{

    if (social.classList[1] == 'active__social') {

        const click = e.composedPath().includes(social);
        if (!click) {
            social.classList.toggle('active__social')
            call.classList.toggle('active__more_e');
            // body.classList.toggle('active__body');

            for (let v = 0; v < socialElements.length; v++){
                socialElements[v].classList.toggle('active__more_e');
            }
            
        }
    }
    
    


});





