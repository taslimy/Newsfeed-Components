
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

 // Tween //
 /* H1 */ TweenMax.from("h1", 3, { x: 300, opacity: 0, scale: 0.5 });
 /* Burger Menu */ TweenMax.to(".menu-button", 2.5, { rotation: 360 });
 /* Article */ TweenMax.to('h2', 2.5, { ease: Bounce.easeOut, x: 200 });
 /* Date */ TweenMax.to('.date', 2.5, { ease: Bounce.easeOut, y: -45 });