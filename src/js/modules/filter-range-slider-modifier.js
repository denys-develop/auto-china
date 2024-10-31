function filterRangeSliderModifier() {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.number__new-slider').forEach(control => {
            const minSlider = control.querySelector('.new-min-volume');
            const maxSlider = control.querySelector('.new-max-volume');
            const minLimit = parseFloat(control.dataset.min);
            const maxLimit = parseFloat(control.dataset.max);
    
            minSlider.value = minLimit;
            maxSlider.value = maxLimit;
    
            formatInputValue(control.querySelector('.new-min-value'));
            formatInputValue(control.querySelector('.new-max-value'));
    
            control.querySelectorAll('.range-values input').forEach(input => {
                input.addEventListener('input', () => {
                    input.dataset.rawValue = input.value.replace(/\s/g, '');
                    formatInputValue(input);
                });
                input.addEventListener('blur', () => {
                    input.value = formatNumber(input.dataset.rawValue);
                });
            });
            minSlider.addEventListener('input', () => {
                control.querySelector('.new-min-value').dataset.rawValue = minSlider.value;
                formatInputValue(control.querySelector('.new-min-value'));
            });
    
            maxSlider.addEventListener('input', () => {
                control.querySelector('.new-max-value').dataset.rawValue = maxSlider.value;
                formatInputValue(control.querySelector('.new-max-value'));
            });
        });
    });
    function formatInputValue(input) {
        input.value = formatNumber(input.dataset.rawValue || input.value);
    }
    
    function formatNumber(value) {
        return parseFloat(value).toLocaleString('ru-RU');
    }
}

export default filterRangeSliderModifier;