function cardSliderMobile() {
  const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        const indicatorsContainer = document.querySelector('.slider-indicators');

        let currentIndex = 0;
        let indicators = [];

        let startX = 0;
        let endX = 0;

        function initIndicators() {
            indicatorsContainer.innerHTML = '';
            indicators = [];
            for (let i = 0; i < slides.length; i++) {
                const indicator = document.createElement('span');
                indicator.classList.add('indicator');
                if (i === currentIndex) {
                    indicator.classList.add('active');
                }
                indicator.addEventListener('click', () => {
                    currentIndex = i;
                    updateSlider();
                });
                indicatorsContainer.appendChild(indicator);
                indicators.push(indicator);
            }
        }

        function updateSlider() {
            slider.style.transform = `translateX(-${currentIndex * 97}%)`;

            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }

        slider.addEventListener('touchstart', (event) => {
            startX = event.touches[0].clientX;
        });

        slider.addEventListener('touchmove', (event) => {
            endX = event.touches[0].clientX;
        });

        slider.addEventListener('touchend', () => {
            const swipeDistance = startX - endX;

            if (swipeDistance > 100) {
                currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
            } else if (swipeDistance < -100) {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
            }
            updateSlider();
        });

        initIndicators();
        updateSlider();
}


export default cardSliderMobile;