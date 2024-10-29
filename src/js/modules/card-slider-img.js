function changeImage(element) {
    const largeImageContainer = document.getElementById('large-image');
    const smallImageClone = element.cloneNode(true); 
   
    largeImageContainer.innerHTML = smallImageClone.innerHTML;
   
    const largeImage = largeImageContainer.querySelector('img'); 
    if (largeImage) {
     largeImage.style.width = '774px';
    }
   
    const smallImages = document.querySelectorAll('.card__img-2');
    smallImages.forEach(card => {
     const pictureElement = card.querySelector('picture');
     if (pictureElement) {
      const img = pictureElement.querySelector('img');
      if (img) {
       img.classList.remove('active');
      }
     }
    });
   
    element.classList.add('active');
   }
   
   const smallImages = document.querySelectorAll('.card__img-2');
   
   smallImages.forEach(card => {
    card.addEventListener('mouseover', function() {
     changeImage(card);
    });
});

export default changeImage; 