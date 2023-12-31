let search = document.querySelector('.form');

document.querySelector('#search-btn').onclick = () =>{
    search.classList.toggle('active');
}
document.querySelector('section').onclick = () =>{
    search.classList.remove('active');
}


let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}


window.onscroll = () =>{
  if(window.scrollY > 80){
document.querySelector('.header-2').classList.add('active')
  }else{
    document.querySelector('.header-2').classList.remove('active')
  }
}
window.onload = () =>{
  if(window.scrollY > 80){
document.querySelector('.header-2').classList.add('active')
  }else{
    document.querySelector('.header-2').classList.remove('active')
  }
  load()
}


function loader (){
  document.querySelector('.loader-container').classList.add('active');
}

function load(){
  setTimeout(loader, 4000);
}















var swiper = new Swiper(".book-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  
  var swiper = new Swiper(".featured-slider", {
    loop:true,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".arrival-slider", {
    loop:true,
    centeredSlides: true,
    grabCurser:true,
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      300: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },

  });


  var swiper = new Swiper(".reviews-slider", {
    loop:true,
    centeredSlides: true,
    grabCurser:true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      300: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },

  });
  var swiper = new Swiper(".blogs-slider", {
    loop:true,
    centeredSlides: true,
    grabCurser:true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      300: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },

  });


