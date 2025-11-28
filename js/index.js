let navLinks = document.querySelectorAll(".main .container-navigation ul a");
let overviewKeys = document.querySelectorAll(".overview .container-con .con");


navLinks.forEach(function(link){
    link.addEventListener(`click`, function(){
        active(link);
    })
});
overviewKeys.forEach(function(key){
    key.addEventListener(`click`, function(){
        let slideToKey = key.getAttribute("data-bs-slide-to");
        for(let link of navLinks){
            if (slideToKey === link.getAttribute("data-bs-slide-to")){
                active(link);
            }
        }
    })
});

