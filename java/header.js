// disse const betyder jeg skaber/definerer en variabel jeg så kan putte funktioner på
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-wrapper");

// sådan her er en anden måde at gøre det på

// hamburger.addEventListener("click", () => {
//   menu.classList.toggle("hidden");
// });

// man tager fat i hamburger, siger når eventet klik sker. så kommeer funktionen toggleClass på.
hamburger.addEventListener("click", toggleClass);

// vi definerer hvad funktionen toggle class gør. Vi tager fat i menu og så tagr vi fat i menus classes. Herefter kan vi så tlføje classen toggle. Som gør at hidden bliver slået til.
function toggleClass() {
  menu.classList.toggle("hidden");
}
