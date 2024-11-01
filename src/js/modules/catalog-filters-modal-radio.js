function catalogFiltersModalRadio() {
    document.addEventListener('DOMContentLoaded', () => {
        const selectors = {
            filters: '.catalog__items-filters-modal',
            catalogModal: '.catalog-modal',
            openFiltersButton: '.catalog__items-filters-left',
            closeFiltersButton: '.catalog-modal-btnClose',
            body: 'body',
            headerOverlay: '.header-overlay'
        };
        
        const elements = Object.fromEntries(
            Object.entries(selectors).map(([key, selector]) => [key, document.querySelector(selector)])
        );

        const { filters, catalogModal, openFiltersButton, closeFiltersButton, body, headerOverlay } = elements;

        if (openFiltersButton && filters && catalogModal && closeFiltersButton && headerOverlay) {
            const toggleModalDisplay = (displayValue) => {
                filters.style.display = displayValue;
                catalogModal.style.display = displayValue;
                headerOverlay.style.display = displayValue;
                body.classList.toggle('no-scroll', displayValue === 'block');
            };

            openFiltersButton.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });

                setTimeout(() => toggleModalDisplay('block'), 300); 
            });

            closeFiltersButton.addEventListener('click', () => toggleModalDisplay('none'));

            catalogModal.addEventListener('click', (event) => {
                if (event.target === catalogModal) toggleModalDisplay('none');
            });
        } else {
            console.error('elements missing');
        }
    });
}

export default catalogFiltersModalRadio;