function catalogFiltersModalRadio() {
    document.addEventListener('DOMContentLoaded', () => {
        const filters = document.querySelector('.catalog__items-filters-modal');
        const openFiltersButton = document.querySelector('.catalog__items-filters-left');
        const closeFiltersButton = document.querySelector('.catalog-modal-btnClose');
        const body = document.querySelector('body'); 

        openFiltersButton.addEventListener('click', () => {
            filters.style.display = 'block';
            body.classList.add('no-scroll');    
        });

        closeFiltersButton.addEventListener('click', () => {
            filters.style.display = 'none';
            body.classList.remove('no-scroll');  
        });
    });
}

export default catalogFiltersModalRadio;