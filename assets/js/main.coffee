# Facebook widget
((d, s, id) ->
  js
  fjs = d.getElementsByTagName(s)[0]
  if d.getElementById(id)
    return
  js = d.createElement(s); js.id = id
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=263835507426067"
  fjs.parentNode.insertBefore(js, fjs)
) document, 'script', 'facebook-jssdk'

# jQuery
(($) ->

  $(document).ready ->

    # Dismisses mobile navigation
    dismissNav = -> $('.mobile-nav').removeClass('is-visible')

    # Filps persons face on click
    $('.person').click ->
      $(this).toggleClass('flipped')
      return

    # Displays players rank when rank is clicked
    $('.player-id').click ->
      rank = $(this).children().text()
      rank = rank.replace("#", "-")
      window.open("https://masteroverwatch.com/profile/pc/us/" + rank)
      return

    # Smooth scroll
    $('a').click (event) ->
      size = $('html').css('font-size').replace('px', '')
      height = 8*size

      if this.hash != ""
        event.preventDefault()
        hash = this.hash
        $('html, body').animate({
          scrollTop: $(hash).offset().top - height
        }, 800, ->
          window.location.hash = hash
          return
        )
      return

    # Animates mobile navigation on click
    $('#mobile-nav-toggle').click (e) ->
      $('.mobile-nav').addClass('is-visible')
      e.stopPropagation()
      return

    # Dismisses mobile navgation
    $('#mobile-nav-dismiss').click(dismissNav)
    $(document).click(dismissNav)
    return
) jQuery
