# Tournament date
countDownDate = new Date('Oct 7, 2017 10:00:00').getTime()

# Facebook widget
((d, s, id) ->
  js
  fjs = d.getElementsByTagName(s)[0]
  if d.getElementById(id)
    return
  js = d.createElement(s); js.id = id
  js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=263835507426067'
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

    # Smooth scroll
    $('a').click (event) ->
      size = $('html').css('font-size').replace('px', '')
      height = 8 * size

      if this.hash != ""
        event.preventDefault()
        hash = this.hash
        top = $(hash).offset().top - height
        $('html, body').animate(
          scrollTop: top, 800
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

    # Countdown to tournament
    x = setInterval((->
      now = new Date().getTime();
      distance = countDownDate - now
      days = Math.floor(distance / (1000 * 60 * 60 * 24))
      hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      seconds = Math.floor((distance % (1000 * 60)) / 1000)
      $('#timer').text("#{days}d #{hours}h #{minutes}m #{seconds}s")

      if distance < 0
        clearInterval(x)
        $('#timer').text('Expired')
      return
    ), 1000)

    return
  return
) jQuery
