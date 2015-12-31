
function getOffsetTop( elem )
{
  var offsetTop = 0;
  do {
    if ( !isNaN( elem.offsetTop ) )
    {
        offsetTop += elem.offsetTop;
    }
  } while( elem = elem.offsetParent );
  return offsetTop;
}
var SectionAnimator = function(){
var states = {
  "first-section": true,
  "second-section": true,
  "third-section": true
};
this.animate = function(idName){
  if (states[idName]){
    if ($("body").scrollTop() + window.innerHeight >= getOffsetTop(document.getElementById(idName)) + 300) {
      $("#" + idName + " .row").animate({opacity: 1, "padding-top": "-=100"}, 1000);
      states[idName] = false;
    }
  }
}
}
sectionAnimator = new SectionAnimator();
var size = $("#img01").css("background-size");
console.log(size);


//ENTRY POINT
$(function(){


document.addEventListener("scroll", function(){
  if (window.innerWidth > 768) {
      sectionAnimator.animate("first-section");
      sectionAnimator.animate("second-section");
      sectionAnimator.animate("third-section");
  }
});
if (window.innerWidth > 768) {
    $("#img01").animate({opacity: 1}, 400, function(){
      $("#img02").animate({opacity: 1}, 400, function(){
        $("#img03").animate({opacity: 1}, 400, function(){
          $("#img04").animate({opacity: 1}, 400, function(){
            $("#img05").animate({opacity: 1}, 400, function(){
              $("#img06").animate({opacity: 1}, 400, function(){
                $("#img07").animate({opacity: 1}, 400, function(){
                  $("#img08").animate({opacity: 1}, 400, function(){
                  });
                });
              });
            });
          });
        })
      });
    });
} 
else {
    $(".row").css({"opacity":1, "padding-top":0});
    $(".gallery").css("opacity",1);
}
});
        