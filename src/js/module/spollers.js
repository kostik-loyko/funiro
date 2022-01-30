export default () => {
   const spollersArray = document.querySelectorAll("[data-spollers]");
   if (spollersArray.length > 0) {
      const spollersRegular = Array.from(spollersArray).filter((item, index, self) => {
         return !item.dataset.spollers.split(",")[0];
      })
      if (spollersRegular.length > 0) {
         // initSpollers(spollersRegular);
      }
      const spollersMedia = Array.from(spollersArray).filter((item, index, self) => {
         return item.dataset.spollers.split(",")[0];
      })
      console.log(spollersRegular);
   }

}