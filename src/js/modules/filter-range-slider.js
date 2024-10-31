function filterSlider() {
  document.querySelectorAll('.volume-range-control').forEach(control => {
      const elements = {
          minSlider: control.querySelector('.min-volume'),
          maxSlider: control.querySelector('.max-volume'),
          minValueInput: control.querySelector('.min-value'),
          maxValueInput: control.querySelector('.max-value'),
          sliderTrack: control.querySelector('.slider-track')
      };

      const { minSlider, maxSlider, minValueInput, maxValueInput, sliderTrack } = elements;
      const minLimit = parseFloat(control.dataset.min);
      const maxLimit = parseFloat(control.dataset.max);

      [minSlider, maxSlider, minValueInput, maxValueInput].forEach(el => {
          el.min = minLimit;
          el.max = maxLimit;
      });

      minSlider.value = minValueInput.value;
      maxSlider.value = maxValueInput.value;

      function updateRange(type) {
          const minValue = parseFloat(minSlider.value);
          const maxValue = parseFloat(maxSlider.value);

          if (type === 'min' && minValue >= maxValue) minSlider.value = maxValue - 0.1;
          if (type === 'max' && maxValue <= minValue) maxSlider.value = minValue + 0.1;

          minValueInput.value = minSlider.value;
          maxValueInput.value = maxSlider.value;
          fillColor();
      }

      function updateInputValue(type) {
          let minValue = parseFloat(minValueInput.value);
          let maxValue = parseFloat(maxValueInput.value);

          if (type === 'min') {
              minValue = Math.max(minLimit, Math.min(minValue, maxSlider.value - 0.1));
              minSlider.value = minValue;
              minValueInput.value = minValue;
          } else if (type === 'max') {
              maxValue = Math.min(maxLimit, Math.max(maxValue, minSlider.value + 0.1));
              maxSlider.value = maxValue;
              maxValueInput.value = maxValue;
          }
          fillColor();
      }

      function fillColor() {
          const minValue = parseFloat(minSlider.value);
          const maxValue = parseFloat(maxSlider.value);
          const minPercent = ((minValue - minLimit) / (maxLimit - minLimit)) * 100;
          const maxPercent = ((maxValue - minLimit) / (maxLimit - minLimit)) * 100;

          sliderTrack.style.setProperty('--min-value', minPercent / 100);
          sliderTrack.style.setProperty('--max-value', maxPercent / 100);
          sliderTrack.classList.add('active');
      }

      minSlider.addEventListener('input', () => updateRange('min'));
      maxSlider.addEventListener('input', () => updateRange('max'));
      minValueInput.addEventListener('input', () => updateInputValue('min'));
      maxValueInput.addEventListener('input', () => updateInputValue('max'));

      fillColor();
  });
}

export default filterSlider;