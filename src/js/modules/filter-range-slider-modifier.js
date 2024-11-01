function filterRangeSliderModifier() {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.new-slider').forEach(control => {
            const minSlider = control.querySelector('.new-min-volume');
            const maxSlider = control.querySelector('.new-max-volume');
            const minValueInput = control.querySelector('.new-min-value');
            const maxValueInput = control.querySelector('.new-max-value');
            const minLimit = parseFloat(control.dataset.min);
            const maxLimit = parseFloat(control.dataset.max);

            minSlider.value = minLimit;
            maxSlider.value = maxLimit;
            minValueInput.dataset.rawValue = minLimit;
            maxValueInput.dataset.rawValue = maxLimit;

            formatInputValue(minValueInput);
            formatInputValue(maxValueInput);

            minSlider.addEventListener('input', () => {
                let minValue = parseFloat(minSlider.value);
                if (minValue >= parseFloat(maxSlider.value)) {
                    minValue = parseFloat(maxSlider.value) - parseFloat(minSlider.step);
                }
                minValueInput.dataset.rawValue = minValue;
                formatInputValue(minValueInput);
                formatInputValue(maxValueInput);
            });

            maxSlider.addEventListener('input', () => {
                let maxValue = parseFloat(maxSlider.value);
                if (maxValue <= parseFloat(minSlider.value)) {
                    maxValue = parseFloat(minSlider.value) + parseFloat(maxSlider.step);
                }
                maxValueInput.dataset.rawValue = maxValue;
                formatInputValue(maxValueInput);
                formatInputValue(minValueInput);
            });

            [minValueInput, maxValueInput].forEach(input => {
                input.addEventListener('input', () => {
                    input.dataset.rawValue = input.value.replace(/\s/g, '');
                    formatInputValue(input);
                });
                input.addEventListener('blur', () => {
                    input.value = formatNumber(input.dataset.rawValue);
                });
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