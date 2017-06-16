(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=263835507426067";
    fjs.parentNode.insertBefore(js, fjs);
  }
 (document, 'script', 'facebook-jssdk'));

$(document).ready(function(){
  $('.person').click(function(){
    $(this).toggleClass('flipped');
  });

  $('a').on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
