let navLinks = document.querySelectorAll(".main .container-navigation ul a");
let overviewKeys = document.querySelectorAll(".overview .container-con .con");
let stillUnEnrollingCourses = document.querySelectorAll(".course-catalog .not-enrolled");
let btnOfstillUnEnrollingCourses = document.querySelectorAll(".course-catalog .not-enrolled button");



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

btnOfstillUnEnrollingCourses.forEach(function(btn){
    btn.addEventListener('click',function(){
        enroll(btn);
    })
})

