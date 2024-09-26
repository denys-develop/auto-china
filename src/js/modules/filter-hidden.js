function filterHidden() {
    const filters = document.querySelectorAll(".filter"); 
    
    filters.forEach(function (filter) {
        const link = filter.querySelector(".filter__link");
        const linkHide = filter.querySelector(".filter__link-hide");
        const itemHidden = filter.querySelector(".filter__items-hidden");

        if (!link || !linkHide || !itemHidden) return;
      
        link.addEventListener('click', (e) => {
            e.preventDefault();
            link.style.display = "none";          
            linkHide.style.display = "block";      
            itemHidden.style.display = "block";    
        });
        
        linkHide.addEventListener('click', (e) => {
            e.preventDefault();
            linkHide.style.display = "none";       
            link.style.display = "block";         
            itemHidden.style.display = "none";    
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        filterHidden(); 
    });
}

export default filterHidden;