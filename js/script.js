$(document).ready(function() {
    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Highlight the top nav when clicked
    $('.navbar-custom .nav li a').click(function() {
        $('.navbar-custom .nav li').removeClass('active');
        $(this).parent().addClass('active');
        if ($(this).text()=='About') {
            $('#mainNav').removeClass('navbar-transparent');
        }
        if ($(this).text()=='Contact') {
            $('#mainNav').removeClass('navbar-transparent');
        }
        if ($(this).text()=='Home') {
            $('#mainNav').addClass('navbar-transparent');
        }
     });
    $('.navbar-brand').click(function() {
        $('.navbar-custom .nav li').removeClass('active');
        $('.navbar-nav li:first-child').addClass('active');
        $('#mainNav').addClass('navbar-transparent');
    });
    // navbar offset
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
    
});