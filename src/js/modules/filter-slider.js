function filterSlider () {
    const sliders = document.querySelectorAll('input[type="range"]');

    sliders[0].addEventListener('input', (e) => {
    if(+sliders[0].value > +sliders[1].value){
        sliders[1].value = +sliders[0].value;
    }
    });

    sliders[1].addEventListener('input', (e) => {
    if(+sliders[1].value < +sliders[0].value){
        sliders[0].value = +sliders[1].value;
    }
    });

    sliders.forEach((slider) => {
    slider.addEventListener('change', () => {
        console.log(`from ${sliders[0].value} to ${sliders[1].value}`);
    })
    });
}

export default filterSlider; 