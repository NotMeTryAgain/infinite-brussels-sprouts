var page = 0;
$('.more-sprouts').hide();
$('.more-sprouts').on('click', function(event) {
  event.preventDefault();

  var request = $.ajax({
    method: "GET",
    url: "/tweets.json?page=" + page
  });

  request.done(function(data) {
    data.forEach(function(tweet) {
      var tweetBody = "<div class='body'>" + tweet["text"] + "</div>";
      var tweetUser = "<div class='user'>" + tweet["username"] + "</div>";
      $('.tweets').append(
        "<li class='tweet'>" + tweetBody + tweetUser + "</li>"
      );
    });
  });
  page++
});

$(window).on('scroll', function(){
  if( $(window).scrollTop() == $(document).height() - $(window).height() ) {
    $(".more-sprouts").click();
  }
});
