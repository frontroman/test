let slideIndex = 0;
showSlides(slideIndex);
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("prev").addEventListener("click", function(){
        slideIndex -= 1;
        showSlides(slideIndex); 
    })
});

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("next").addEventListener("click", function(){
        slideIndex += 1;
        showSlides(slideIndex);
    })
});


function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("slides");
    if(n > slides.length-1){
        slideIndex = 0;
    }

    if(n < 0){
        slideIndex = slides.length-1;
    }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    slides[slideIndex].style.display = "block";
};



