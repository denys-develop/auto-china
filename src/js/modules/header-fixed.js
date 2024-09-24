function headerFixed() {
    const header1 = document.querySelector(".header");
    const header2div = document.querySelector(".header2div");
    
    let lastScroll1 = 0;
    
    window.addEventListener("scroll", () => {
        let scroll1 = window.scrollY;   
    
        if(scroll1 > lastScroll1) {
            header1.style.display = "none";
            header2div.style.display = "block";
        } 

        if(scroll1 === 0) {
            header1.style.display = "block";
            header2div.style.display = "none";
        }
        
        lastScroll1 = scroll1;
    });
}

export default headerFixed; 