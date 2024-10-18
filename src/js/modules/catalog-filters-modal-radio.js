function catalogFiltersModalRadio() {
    document.addEventListener('DOMContentLoaded', () => {
        const filters = document.querySelector('.catalog__items-filters-modal');
        const openFiltersButton = document.querySelector('.catalog__items-filters-left');
        const closeFiltersButton = document.querySelector('.catalog-modal-btnClose');

        
        openFiltersButton.addEventListener('click', () => {
            filters.style.display = 'block';    
        });

        closeFiltersButton.addEventListener('click', () => {
            filters.style.display = 'none';   
        });
    });
}


export default catalogFiltersModalRadio;