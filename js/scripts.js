const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');

let cost = 800;
totalPrice = 0;

menuButton.addEventListener('click', () => {
  console.log('click');
  menu.classList.toggle('is-open');
});


schemeSvg.addEventListener("click", (event) => {
  if (!event.target.classList.contains('booked')) {
    event.target.classList.toggle('active');
    let totalSeats = schemeSvg.querySelectorAll('.active').length;
    totalPrice = totalSeats * cost;
    totalPriceTag.textContent = totalPrice;
  }
});