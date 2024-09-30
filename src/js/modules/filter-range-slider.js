// function filterSlider () {
//     const minSlider = document.getElementById('min-volume');
//     const maxSlider = document.getElementById('max-volume');
//     const minValueInput = document.getElementById('min-value');
//     const maxValueInput = document.getElementById('max-value');
//     const sliderTrack = document.querySelector('.slider-track');

//     function updateRange(value, type) {
//         const minValue = parseFloat(minSlider.value);
//         const maxValue = parseFloat(maxSlider.value);

//         if (type === 'min' && minValue >= maxValue) {
//             minSlider.value = maxValue - 0.0;
//         } else if (type === 'max' && maxValue <= minValue) {
//             maxSlider.value = minValue + 0.0;
//         }

//         minValueInput.value = minSlider.value;
//         maxValueInput.value = maxSlider.value;
//         fillColor();
//     }

//     function updateInputValue(value, type) {
//         let minValue = parseFloat(minValueInput.value);
//         let maxValue = parseFloat(maxValueInput.value);

//         const minLimit = parseFloat(minSlider.min);
//         const maxLimit = parseFloat(maxSlider.max);

//         if (type === 'min') {
//             if (minValue < minLimit) {
//                 minValue = minLimit;
//             }
//             if (minValue >= maxValue) {
//                 minValue = maxValue - 0.1;
//             }
//             minValueInput.value = minValue;
//             minSlider.value = minValue;
//         } else if (type === 'max') {
//             if (maxValue > maxLimit) {
//                 maxValue = maxLimit;
//             }
//             if (maxValue <= minValue) {
//                 maxValue = minValue + 0.1;
//             }
//             maxValueInput.value = maxValue;
//             maxSlider.value = maxValue;
//         }

//         fillColor();
//     }

//     function fillColor() {
//         const minValue = parseFloat(minSlider.value);
//         const maxValue = parseFloat(maxSlider.value);
//         const min = parseFloat(minSlider.min);
//         const max = parseFloat(maxSlider.max);

//         const minPercent = ((minValue - min) / (max - min)) * 100;
//         const maxPercent = ((maxValue - min) / (max - min)) * 100;

//         sliderTrack.style.setProperty('--min-value', minPercent / 100);
//         sliderTrack.style.setProperty('--max-value', maxPercent / 100);
//         sliderTrack.classList.add('active');
//     }

//     minSlider.addEventListener('input', () => updateRange(minSlider.value, 'min'));
//     maxSlider.addEventListener('input', () => updateRange(maxSlider.value, 'max'));

//     minValueInput.addEventListener('input', () => updateInputValue(minValueInput.value, 'min'));
//     maxValueInput.addEventListener('input', () => updateInputValue(maxValueInput.value, 'max'));

//     fillColor();
// }

function filterSlider () {
    document.querySelectorAll('.volume-range-control').forEach(control => {
        const minSlider = control.querySelector('.min-volume');
        const maxSlider = control.querySelector('.max-volume');
        const minValueInput = control.querySelector('.min-value');
        const maxValueInput = control.querySelector('.max-value');
        const sliderTrack = control.querySelector('.slider-track');
      
        const minLimit = parseFloat(control.dataset.min);
        const maxLimit = parseFloat(control.dataset.max);
      
        minSlider.min = minLimit;
        minSlider.max = maxLimit;
        maxSlider.min = minLimit;
        maxSlider.max = maxLimit;
        minValueInput.min = minLimit;
        minValueInput.max = maxLimit;
        maxValueInput.min = minLimit;
        maxValueInput.max = maxLimit;
      
        function updateRange(value, type) {
          const minValue = parseFloat(minSlider.value);
          const maxValue = parseFloat(maxSlider.value);
      
          if (type === 'min' && minValue >= maxValue) {
            minSlider.value = maxValue - 0.1;
          } else if (type === 'max' && maxValue <= minValue) {
            maxSlider.value = minValue + 0.1;
          }
      
          minValueInput.value = minSlider.value;
          maxValueInput.value = maxSlider.value;
          fillColor();
        }
      
        function updateInputValue(value, type) {
          let minValue = parseFloat(minValueInput.value);
          let maxValue = parseFloat(maxValueInput.value);
      
          if (type === 'min') {
            if (minValue < minLimit) minValue = minLimit;
            if (minValue >= maxValue) minValue = maxValue - 0.1;
            minSlider.value = minValue;
            minValueInput.value = minValue;
          } else if (type === 'max') {
            if (maxValue > maxLimit) maxValue = maxLimit;
            if (maxValue <= minValue) maxValue = minValue + 0.1;
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
    
        minSlider.addEventListener('input', () => updateRange(minSlider.value, 'min'));
        maxSlider.addEventListener('input', () => updateRange(maxSlider.value, 'max'));
      
        minValueInput.addEventListener('input', () => updateInputValue(minValueInput.value, 'min'));
        maxValueInput.addEventListener('input', () => updateInputValue(maxValueInput.value, 'max'));
      
        fillColor();
      });
}

export default filterSlider; 