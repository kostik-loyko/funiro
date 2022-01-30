export default () => {

   let isMobile = {
      Android: () => {
         return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: () => {
         return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: () => {
         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: () => {
         return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: () => {
         return navigator.userAgent.match(/IEMobile/i);
      },
      any: () => {
         return (
            isMobile.Android()
            || isMobile.BlackBerry()
            || isMobile.iOS()
            || isMobile.Opera()
            || isMobile.Windows()
         );
      }
   };

   window.onload = () => {
      document.addEventListener("click", documentActions);

      function documentActions(e) {
         const targetElevent = e.target;
         if (window.innerWidth > 768 && isMobile.any()) {
            if (targetElevent.classList.contains("icon-arrow")) {
               targetElevent.closest(".nav__item").classList.toggle("hover");
            }
            if (!targetElevent.closest(".nav__item") && document.querySelectorAll(".nav__item.hover").length > 0) {
               document.querySelectorAll(".nav__item.hover").forEach((item) => {
                  item.classList.remove("hover");
               })
            }
         }
         if (targetElevent.classList.contains("search-form__icon")) {
            document.querySelector(".search-form").classList.toggle("active");
         } else if (!targetElevent.closest(".search-form") && document.querySelector(".search-form.active")) {
            document.querySelector(".search-form").classList.remove("active");
         }
      }
   }
}
