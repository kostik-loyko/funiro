export default () => {
   const burger = document.querySelector(".icon-menu");
   burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      document.querySelector(".header__nav").classList.toggle("active");
   })
}