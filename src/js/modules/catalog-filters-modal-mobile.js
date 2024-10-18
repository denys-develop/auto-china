function catalogFiltersModalMobile() {
    document.addEventListener('DOMContentLoaded', () => {
        const filters = document.querySelector('.filters');
        const header2 = document.querySelector('.header2');
        const openFiltersButton = document.querySelector('.catalog__items-filters-right');
        const closeFiltersButton = document.querySelector('.filters-mobile-btnClose');

        
        openFiltersButton.addEventListener('click', () => {
            filters.style.display = 'block';  
            header2.style.display = 'none';   
        });

        closeFiltersButton.addEventListener('click', () => {
            filters.style.display = 'none';   
            header2.style.display = 'block'; 
        });
    });
}


export default catalogFiltersModalMobile;