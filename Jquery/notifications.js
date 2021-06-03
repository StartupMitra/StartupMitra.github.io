$(document).ready(function(){

  var title=session_title=sessionStorage.getItem("title")
  user=sessionStorage.getItem("username")
  data={"title":"jbl"}
  

  var settings = {
    "url": "http://127.0.0.1:5000/notifications",
    "method": "POST",
    "timeout": 0,
    "headers": {
    
      "Content-Type": "application/json"
    },
    "data": JSON.stringify(data),
  };
    
    $.ajax(settings).done(function (response) {
  
      total=response.data.length
      
      
      for(var i=0;i<=total;i++)
      {
        request=response.data[i].request
        time=response.data[i].time
        
        $( "#add" ).append('<a href="#"><div class="notification"><span>'+request+'</span><label>'+time+'</label></div> </a>');  
       
  
      }
      
   
    
    });
  });
    
   