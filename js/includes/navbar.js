document.addEventListener('DOMContentLoaded', () => {
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

   if ($navbarBurgers.length <= 0) {
      return;
   }

   for (el of $navbarBurgers) {
      el.addEventListener('click', () => {
         const target = el.dataset.target;
         const $target = document.getElementById(target);

         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
      });
   }
});
