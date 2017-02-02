$(document).ready(function() {
    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Highlight the top nav when clicked
    $('.navbar-custom .nav li a').click(function() {
        $('.navbar-custom .nav li').removeClass('active');
        $(this).parent().addClass('active');
        if ($(this).text()=='Profile') {
            $('#mainNav').removeClass('navbar-transparent');
            $('#header').addClass('section-hide');
            $('#about').addClass('section-hide');
        }
        if ($(this).text()=='Contact') {
            $('#mainNav').removeClass('navbar-transparent');
            $('#header').addClass('section-hide');
            $('#about').addClass('section-hide');
        }
        if ($(this).text()=='Home') {
            $('#mainNav').addClass('navbar-transparent');
            $('#header').removeClass('section-hide');
            $('#about').removeClass('section-hide');
        }
     });
    $('.navbar-brand').click(function() {
        $('.navbar-custom .nav li').removeClass('active');
        $('.navbar-nav li:first-child').addClass('active');
        $('#mainNav').addClass('navbar-transparent');
        $('#header').removeClass('section-hide');
        $('#about').removeClass('section-hide');
    });
    // navbar offset
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    

    $("header a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
    
});