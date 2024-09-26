function filterHidden () {
    const filters = document.querySelectorAll(".filter");

    filters.forEach(function (filter) {
        filter.addEventListener('click', (e) => {
            const link = filter.querySelector(".filter__link");
            const linkHide = filter.querySelector(".filter__link-hide");
            const itemHidden = filter.querySelector(".filter__items-hidden");
            
            
            // link.style.display = "none";
            // linkHide.style.display = "block";
            // itemHidden.style.display = "block";
        
            
        })
    })
}

export default filterHidden;