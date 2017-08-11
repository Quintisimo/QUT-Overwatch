// Facebook widget
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=263835507426067";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// jQuery
(function($) {

  $(document).ready(function() {

    // Dismisses mobile navigation
    function dismissNav() {
      $('.mobile-nav').removeClass('is-visible');
    }

    // Filps persons face on click
    $('.person').click(function() {
      $(this).toggleClass('flipped');
    });

    // Displays players rank when rank is clicked
    $('.player-id').click(function() {
      var rank = $(this).children().text();
      rank = rank.replace("#", "-");
      window.open("https://masteroverwatch.com/profile/pc/us/" + rank);
    });

    // Smooth scroll
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

    // Animates mobile navigation on click
    $('#mobile-nav-toggle').click(function(e) {
      $('.mobile-nav').addClass('is-visible');
      e.stopPropagation();
    });

    // Dismisses mobile navgation
    $('#mobile-nav-dismiss').click(dismissNav);
    $(document).click(dismissNav);
  });
}(jQuery));
