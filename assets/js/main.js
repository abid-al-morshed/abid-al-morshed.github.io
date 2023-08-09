/*================Mixitiup filter================*/
var mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item'
    },
    animation: {
        duration: 300
    },
    load: {
        filter: '.app'
    }
    
});


/*==================Active Work================
const linkWork= document.querySelector('.category__btn')
function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach((a) => a.addEventListener('click',activeWork))


/*

contactForm.addEventListener('submit',sendEmail) */