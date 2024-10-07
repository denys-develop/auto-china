function catalogCardsList () {
    const iconTile = document.querySelector('.catalog__items-icon-tile')
    const iconRow = document.querySelector('.catalog__items-icon-row')

    const iconTileSvg = document.querySelector('.catalog__items-icon-tile-svg')
    const iconRowSvg = document.querySelector('.catalog__items-icon-row-svg')

    const catalogItem1 = document.querySelector('.catalog__item')
    const catalogItem2 = document.querySelector('.catalog__item-2')


    iconTile.addEventListener('click', () => {
        catalogItem1.classList.remove('hide')
        catalogItem2.classList.add('hide')

        iconRowSvg.classList.remove('scale')
        iconTileSvg.classList.add('scale')
      
    })

    iconRow.addEventListener('click', () =>  {
        catalogItem1.classList.add('hide')
        catalogItem2.classList.remove('hide')

        iconTileSvg.classList.remove('scale')
        iconRowSvg.classList.add('scale')
      
    })
}

export default catalogCardsList;