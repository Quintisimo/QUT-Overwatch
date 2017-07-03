(function($) {
   function dismissNav() {
     $('.mobile-nav').removeClass('is-visible');
   }

  $(document).ready(function() {
    $('.person').click(function() {
      $(this).toggleClass('flipped');
    });

    $('.player-id').click(function() {
      var rank = $(this).children().text();
      rank = rank.replace("#", "-");
      window.open("https://masteroverwatch.com/profile/pc/us/" + rank);
    });

    $('a').on('click', function(event) {
      var size = $('html').css('font-size').replace('px', ''),
      height = 8*size;

      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top - height
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });

    $('#mobile-nav-toggle').click(function(e) {
      $('.mobile-nav').addClass('is-visible');
      e.stopPropagation();
    });

    $('#mobile-nav-dismiss').click(dismissNav);
    $(document).click(dismissNav);
  });
}(jQuery));
