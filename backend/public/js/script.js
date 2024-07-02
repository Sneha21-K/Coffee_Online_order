



// let loginForm = document.querySelector('.login-form');

// document.querySelector('#login-btn').onclick = () =>{
//    loginForm.classList.add('active');
// }

// document.querySelector('#close-login-form').onclick = () =>{
//    loginForm.classList.remove('active');
// }

// let menu = document.querySelector('#menu-btn');
// let navbar = document.querySelector('.header .nav');

// menu.onclick = () =>{
//    menu.classList.toggle('fa-times');
//    navbar.classList.toggle('active');
// }

// window.onscroll = () =>{
//    loginForm.classList.remove('active');
//    menu.classList.remove('fa-times');
//    navbar.classList.remove('active');

//    if(window.scrollY > 0){
//       document.querySelector('.header').classList.add('active');
//    }else{
//       document.querySelector('.header').classList.remove('active');
//    }
// }
// if (document.querySelectorAll(".A input")[0]!=="")
// {
//    if (document.querySelectorAll(".A input")[1]!=="")
//    {
//       if (document.querySelectorAll(".A input")[2]!=="")
//       {
//          if (document.querySelectorAll(".A input")[3]!=="")
//          {
            
//          }
//       }
//    }
// }
// // script.js
// // script.js

document.addEventListener('DOMContentLoaded', function() {
    let loginForm = document.querySelector('.login-form');
 
    // Open login form when clicking login button
    document.querySelector('#login-btn').onclick = () => {
       loginForm.classList.add('active');
    }
 
    // Close login form when clicking close button
    document.querySelector('#close-login-form').onclick = () => {
       loginForm.classList.remove('active');
    }
 
    // Toggle menu button and navbar
    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.header .nav');
    
    menu.onclick = () => {
       menu.classList.toggle('fa-times');
       navbar.classList.toggle('active');
    }
 
    // Close login form, menu, and navbar on scroll
    window.onscroll = () => {
       loginForm.classList.remove('active');
       menu.classList.remove('fa-times');
       navbar.classList.remove('active');
 
       if (window.scrollY > 0) {
          document.querySelector('.header').classList.add('active');
       } else {
          document.querySelector('.header').classList.remove('active');
       }
    }
 
    // Open order form when clicking "Order now" links in gallery section
    const orderNowLinks = document.querySelectorAll('.gallery .link-btn');
    orderNowLinks.forEach(link => {
       link.addEventListener('click', (event) => {
          event.preventDefault();
          loginForm.classList.add('active');
       });
    });
 });
 