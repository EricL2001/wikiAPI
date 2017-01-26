$(document).ready(function() {
  $("#btn-search").click(function() {
    var value = $("#wiki-search").val();
    $("ul").empty();
   
    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exchars=200&exlimit=max&explaintext&exintro&rawcontinue&generator=search&gsrnamespace=0&gsrlimit=10&gsrsearch=' + value,
      type: 'GET',
      dataType: 'jsonp',
      success: function(data) {
        var info = data.query.pages;

        $.each(info, function(key, val){
          var title = val.title;
          var description = val.extract;
          var id = val.pageid;

          $("ul").append('<li><a target="blank" href="https://en.wikipedia.org/wiki?curid=' + id +'" <h1 class="title">' + title + '</h1></a><p class="descrip">' + description +'</p></li>');

        }); //for each loop
      } //success function
    }); //ajax call
  }); // click function
}); // document.ready function