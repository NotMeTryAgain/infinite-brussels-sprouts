var page = 2
$('.more-sprouts').hide();
$('.more-sprouts').on('click', function(event) {
  event.preventDefault();
  var request = $.ajax({
    method: "GET",
    url: "/tweets.json?page=" + page
  });

  request.done(function(data) {
    data.forEach(function(tweet) {
      var tweetBody = tweet["text"];
      var tweetUser = tweet["username"];
      $('.tweets').append(
        "<li class='tweet'><div class='body'>" +
        tweetBody + "</div><div class='user'>" + 
        tweetUser + "</div></li>"
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
