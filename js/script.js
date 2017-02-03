$(document).ready(function() {
    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // navbar offset
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    //Smooth scroll
    $("header a, nav a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } // End if
    });
    
    // Highlight navbar when scrolling
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });
});