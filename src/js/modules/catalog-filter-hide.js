function catalogFilterHide () {
    const openBlockBtn = document.querySelector(".catalog__filter-link-brands");
    const linkHide = document.querySelector(".catalog__filter-link-brands-hide");
    const hideBlockBrands = document.querySelector(".catalog__filter-items-hide-brands");
    
    openBlockBtn.addEventListener("click",  function() {
        hideBlockBrands.style.display = "block";
        openBlockBtn.style.display = "none";
        linkHide.style.display = "block";
    })

    linkHide.addEventListener("click",  function() {
        hideBlockBrands.style.display = "none";
        openBlockBtn.style.display = "block";
        linkHide.style.display = "none";
    })
    

    const openBlockBtnBody = document.querySelector(".catalog__filter-link-body");
    const linkHideBody = document.querySelector(".catalog__filter-link-body-hide");
    const hideBlockBody = document.querySelector(".catalog__filter-items-hide-body");

    openBlockBtnBody.addEventListener("click",  function() {
        hideBlockBody.style.display = "block";
        openBlockBtnBody.style.display = "none";
        linkHideBody.style.display = "block";
    })

    linkHideBody.addEventListener("click",  function() {
        hideBlockBody.style.display = "none";
        openBlockBtnBody.style.display = "block";
        linkHideBody.style.display = "none";
    })
}

export default catalogFilterHide;