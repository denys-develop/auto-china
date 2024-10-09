function btnFav() {
    const autoCard = document.querySelectorAll('.auto-card');
    // let favorite = [];
  
    autoCard.forEach(function (card) {
        card.addEventListener("click", (e) => {
            const btnFavor = card.querySelector(".btn-favorite");
        
            if (e.target.classList.contains('icon-favorite-btn')) {
                const btnFavModal = card.querySelector(".fav-btn-modal");

                btnFavor.classList.toggle('btn-favorite--selected');
                
                if(card.querySelector('.btn-favorite--selected')) {
                    btnFavModal.style.display = "block";
                    // favorite.filter((cardFavorited) => cardFavorited.id);


                    setTimeout(function(){
                        btnFavModal.style.display = "none";
                    }, 1200)
                } else {
                    // favorite.push(card)
                }
            } 
        })
    })
};
export default btnFav;