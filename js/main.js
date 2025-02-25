const navbar = document.querySelector(".navbar")
const logo = document.querySelector(".logo-svg use")
window.addEventListener('scroll', () => {
    if(this.scrollY > 1){
        navbar.classList.add('navbar-light')
        logo.href.baseVal = "img/icons.svg#logo-li2ght";
    } else {
        navbar.classList.remove('navbar-light')
        logo.href.baseVal = "img/icons.svg#logo-light";
    }
})