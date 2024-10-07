function brandsHidden () {

    const hiddenElements = document.querySelectorAll('.brands-card:nth-of-type(1n+18)');
    const brandsLink = document.querySelector('.brands__link');

    brandsLink.addEventListener('click', function () {
        hiddenElements.forEach( function (card) {
            card.style.display = 'block'
        }) 
        brandsLink.style.display = 'none'
    })
}

export default brandsHidden;