 let searchForm = document.querySelector('.search-form');


 document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header');
  const homeSection = document.querySelector('#home');

  window.addEventListener('scroll', () => {
      checkHeaderVisibility();
  });

  function checkHeaderVisibility() {
      const homeBottom = homeSection.getBoundingClientRect().bottom;
      if (homeBottom < 0) {
          header.classList.add('hidden');
      } else {
          header.classList.remove('hidden');
      }
  }

  checkHeaderVisibility(); // Initial check in case the page is not scrolled to the top initially
});


document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}
window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnIntereaction:false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay:{
      delay:7500,
      disableOnIntereaction:false,
  },
  centeredSlides:true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});




 

document.getElementById('emailIcon').addEventListener('click', function() {
  window.location.href = 'mailto:ganeshsaiannamaneti9@gmail.com';
});

document.getElementById('instagramIcon').addEventListener('click', function() {
  window.location.href = 'https://www.instagram.com/your_ganeshsai_annamaneti/';
});

document.getElementById('whatsappIcon').addEventListener('click', function() {
  window.location.href = 'https://wa.me/919347349036';
});

document.getElementById('linkedlnIcon').addEventListener('click', function() {
  window.location.href = 'https:www.linkedin.com/in/ganeshsai-annamaneti';
});








 
 



