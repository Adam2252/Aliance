const navbar = document.querySelector(".navbar")
const logoLight = document.querySelector(".logo-logo-light")
const logo = document.querySelector(".logo")
const mMenuToggle = document.querySelector(".mobile-menu-toggle")
const menu = document.querySelector(".mobile-menu")

const openMenu = (event) => {
    menu.classList.add("is-open");
    mMenuToggle.classList.add("close-menu")
    document.body.style.overflow="hidden";
    navbar.classList.add('navbar-light')
    logo.href.baseVal = "img/icons.svg#logo-li2ght"
};

const closeMenu = (event) => {
    menu.classList.remove("is-open");
    document.body.style.overflow="";
    mMenuToggle.classList.remove("close-menu")
    navbar.classList.remove('navbar-light')
    logo.href.baseVal = "img/icons.svg#logo-light"
};

window.addEventListener('scroll', () => {
    if(this.scrollY > 10){
        navbar.classList.add('navbar-light')
        logo.style.display = "block";
        logoLight.style.display = "none";
    } else {
        navbar.classList.remove('navbar-light');
        logo.style.display = "none";
        logoLight.style.display = "block";
    }
});

mMenuToggle.addEventListener("click", (event) => {
    event.preventDefault();
    if (menu.classList.contains("is-open")){
        closeMenu();
    } else{
        openMenu();
    }
})

const swiperSteps = new Swiper('.steps-slider', {
  speed: 400,
  slidesPerView: 1,
  autoHeight: true,
  navigation: {
      nextEl: '.steps-button-next',
      prevEl: '.steps-button-prev',
    }, 
    breakpoints: {
      // when window width is >= 640px
      576: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 3,
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 4,
      },
    }
});   

const swiper = new Swiper('.swiper', {
    speed: 400,
    slidesPerView: 1,
    navigation: {
        nextEl: '.slider-buttons-next',
        prevEl: '.slider-buttons-prev',
      }, 
      breakpoints: {
        // when window width is >= 320px
        // when window width is >= 640px
        326: {
            slidesPerView: 1,
          },
        576: {
          slidesPerView: 2,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 3,
        },
        // when window width is >= 640px
        1024: {
          slidesPerView: 4,
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 5,
          },
      }
  });   

  const swiperBlog = new Swiper(".blog-slider",{
    speed: 400,
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: ".blog-button-next",
      prevEl: ".blog-button-prev",
    }
  }); 
  
const modal = document.querySelector(".modal");
const modalToggle = document.querySelectorAll('[data-toggle=modal]')
const modalClose = document.querySelectorAll(".modal-close")
modalToggle.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.add("is-open")
  });
});

modalClose.addEventListener("click", (event) => {
  event.preventDefault();
  modal.classList.remove('is-open');
});