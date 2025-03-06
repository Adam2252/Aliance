const navbar = document.querySelector(".navbar")
const logo = document.querySelector(".logo-svg use")
const mMenuToggle = document.querySelector(".mobile-menu-toggle")
const menu = document.querySelector(".mobile-menu")

const openMenu = (event) => {
    menu.classList.add("is-open");
    document.body.style.overflow="hidden";
    navbar.classList.add('navbar-light')
    logo.href.baseVal = "img/icons.svg#logo-li2ght";
};

const closeMenu = (event) => {
    menu.classList.remove("is-open");
    document.body.style.overflow="";
    navbar.classList.remove('navbar-light')
    logo.href.baseVal = "img/icons.svg#logo-light";
};

window.addEventListener('scroll', () => {
    if(this.scrollY > 10){
        navbar.classList.add('navbar-light')
        logo.href.baseVal = "img/icons.svg#logo-li2ght";
    } else {
        navbar.classList.remove('navbar-light')
        logo.href.baseVal = "img/icons.svg#logo-light";
    }
});

mMenuToggle.addEventListener("click", (event) => {
    event.preventDefault();
    if (menu.classList.contains("is open")){
        closeMenu();
    } else{
        openMenu();
    }
})

