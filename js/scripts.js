$(function(){
     var slideIndex = 1;
	var carouselList = $("#carousel ul");
    setInterval(changeSlide, 3000);
    function changeSlide(slideNumber) {
        if (slideNumber){
            carouselList.animate({'marginLeft':0}, 100, moveFirstSlide);
            carouselList.animate({'marginLeft':(-400*slideNumber)}, 100, moveFirstSlide);
            slideIndex=slideNumber;
        }
        else{
            carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
             console.log ('slideIndex', slideIndex);
        
        slideIndex ++;
        
        if (slideIndex > 5){
            slideIndex = 1;
        }
        }
       
        activeDot(slideIndex);
        
    }
    function moveFirstSlide () {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    }
    function moveLeft(){
        carouselList.animate({'marginLeft':+400}, 500, moveFirstSlide);
        slideIndex --;
        if (slideIndex < 1){
            slideIndex = 5;
            }
        activeDot(slideIndex);
        }
    $(".arrow-left").on("click", function(event) {
	moveLeft();
});
    
    $(".arrow-right").on("click", function(event) {
	changeSlide();
});
   
   function activeDot (slideIndex){
       $("#dots i ").removeClass("active");
       $("#dots i:nth-child("+(slideIndex) +")").addClass("active");
   }
    $("#dots i").on("click", function(event) {
    var clickedDot = $(this).index() +1;
    console.log('Klikniete', clickedDot);
        changeSlide(clickedDot);
});
    
});

