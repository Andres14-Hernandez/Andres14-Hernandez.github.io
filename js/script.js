// ANIMACION REDIRECCION
$(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash; 
        
        $('html, body').animate({
          scrollTop: $(hash).offset().top -100
        }, 1000);
      }
    });
  });


// SEGUIMINETO CURSOR
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) =>{

  let x = e.clientX;
  let y = e.clientY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
});
