// function catalogCountCard () {
//     document.addEventListener('DOMContentLoaded', function() {
//         const catalogItem = document.querySelector('.catalog__item');
//         const catalogContainer = catalogItem.parentElement;
//         const countButtons = document.querySelectorAll('.catalog__item-count-num');

//         countButtons.forEach(button => {
//             button.addEventListener('click', function() {
//                 catalogContainer.innerHTML = '';
                
//                 const count = parseInt(this.textContent);

//                 for (let i = 0; i < count; i++) {
//                     const clone = catalogItem.cloneNode(true); 
//                     catalogContainer.appendChild(clone); 
//                 }

            
//                 document.querySelector('.catalog__item-count-num--active')
//                     .classList.remove('catalog__item-count-num--active');
//                 this.classList.add('catalog__item-count-num--active');
//             });
//         });
//     });
// }

// export default catalogCountCard;