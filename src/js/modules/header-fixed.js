function headerFixed() {
    const header1 = document.querySelector(".header");
    const header2div = document.querySelector(".header2div");
    
    let lastScroll1 = window.scrollY; 

    function toggleHeaders(scroll1) {
        if(scroll1 > 0) {
            header1.style.display = "none";
            header2div.style.display = "block";
        } else {
            header1.style.display = "block";
            header2div.style.display = "none";
        }
    }

    toggleHeaders(lastScroll1);

    window.addEventListener("scroll", () => {
        let scroll1 = window.scrollY;   
        toggleHeaders(scroll1);
        lastScroll1 = scroll1;
    });
}

export default headerFixed;