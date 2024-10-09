function changeImage(element) {
    const largeImage = document.getElementById('large-image');
    const smallImage = element.cloneNode(true); 

    largeImage.innerHTML = smallImage.outerHTML;

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

export default changeImage; 