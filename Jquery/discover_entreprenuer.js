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
      logo=response.data[i].logo.split("\\").pop()
      
      banner=response.data[i].banner
      
      $( "h2" ).append('<div class="card"><img src="F:/StartupMitra/data/'+logo+'" alt="John" style="width:100%">'+title+'<p class="title">'+country+'</p> '+short_summary+'</p>  <div style="margin: 24px 0;"><a href="#"><i class="fa fa-dribbble"></i></a> <a href="#"><i class="fa fa-twitter"></i></a>  <a href="#"><i class="fa fa-linkedin"></i></a>  <a href="#"><i class="fa fa-facebook"></i></a> </div><p><a href="file:///F:/StartupMitra/StartupMitra.github/profile.html?profile='+title+'">View</a></p></div>');  
    }

    
    });
    });
 
  
 