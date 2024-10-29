function catalogFiltersModalRadio() {
    document.addEventListener('DOMContentLoaded', () => {
        const filters = document.querySelector('.catalog__items-filters-modal');
        const catalogModal = document.querySelector('.catalog-modal'); 
        const openFiltersButton = document.querySelector('.catalog__items-filters-left');
        const closeFiltersButton = document.querySelector('.catalog-modal-btnClose');
        const body = document.querySelector('body');
        const headerOverlay = document.querySelector('.header-overlay'); 

        if (openFiltersButton && filters && catalogModal && closeFiltersButton && headerOverlay) {
            openFiltersButton.addEventListener('click', () => {
                filters.style.display = 'block';
                catalogModal.style.display = 'block';
                headerOverlay.style.display = 'block'; 
                body.classList.add('no-scroll');
            });

            closeFiltersButton.addEventListener('click', () => {
                filters.style.display = 'none';
                catalogModal.style.display = 'none'; 
                headerOverlay.style.display = 'none'; 
                body.classList.remove('no-scroll');
            });

            catalogModal.addEventListener('click', (event) => {
                if (event.target === catalogModal) {
                    filters.style.display = 'none';
                    catalogModal.style.display = 'none';
                    headerOverlay.style.display = 'none';
                    body.classList.remove('no-scroll');
                }
            });
        } else {
            console.error('нет элемента');
        }
    });
}

export default catalogFiltersModalRadio;