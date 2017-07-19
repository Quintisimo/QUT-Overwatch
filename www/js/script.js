(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=263835507426067";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

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
