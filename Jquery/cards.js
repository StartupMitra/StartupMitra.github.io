$(document).ready(function(){

  var settings = {
    "url": "http://127.0.0.1:5000/discover_entreprenuer",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {

    total=response.data.length
    for(var i=0;i<=total;i++)
    {
      title=response.data[i].title
      country=response.data[i].country
      domain=response.data[i].domain
      short_summary=response.data[i].short_summary
      logo=response.data[i].logo
      banner=response.data[i].banner
      
      $( "h2" ).append('<div class="card"><img src="C:/Users/Yogesh/Pictures/f1.png" alt="John" style="width:100%">'+title+'</h1><p class="title">'+short_summary+'</p> <p>Harvard University</p>  <div style="margin: 24px 0;"><a href="#"><i class="fa fa-dribbble"></i></a> <a href="#"><i class="fa fa-twitter"></i></a>  <a href="#"><i class="fa fa-linkedin"></i></a>  <a href="#"><i class="fa fa-facebook"></i></a> </div><p><a href="file:///F:/StartupMitra/StartupMitra.github/profile/'+title+'">View</a></p></div>');  
    }

    });
    });
 
  
 