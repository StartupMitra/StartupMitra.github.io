$(document).ready(function(){

  var title=session_title=sessionStorage.getItem("title")
  user=sessionStorage.getItem("username")
  $('#user').text(user)
  data={"username":user}
  $("#companyinfo").hide()
  $("#pitch").hide()
  $("#team").hide()
  $("#image").hide()
  $("#plan").hide()
  

  var settings = {
    "url": "http://127.0.0.1:5000/projects",
    "method": "POST",
    "timeout": 0,
    "headers": {
    
      "Content-Type": "application/json"
    },
    "data": JSON.stringify(data),
  };
    
    $.ajax(settings).done(function (response) {
  
      total=response.data.length
      $('#total').text(total)
      $('#progress').text(total)
      
      for(var i=0;i<=total;i++)
      {
        title=response.data[i].title
        domain=response.data[i].domain
        stage=response.data[i].stage
        total_raised=response.data[i].total_raised
        sum=total+total_raised
       
        
        
            $( "#table" ).append('<tbody><tr><td>'+title+'</td><td>'+domain+'</td><td>'+stage+'</td><td>'+total_raised+'</td><td><a href="www.google.com">Explore</td></tr></tbody>');  
       
      
      }
    
  });

  $('#create').click(function(){

    window.location.href="file:///F:/StartupMitra/StartupMitra.github/companyinfo.html"
    $("#companyinfo").show()
    $("#pitch").show()
    $("#image").show()
   $("#plan").show()
  
 
   
  });
    
});   
 