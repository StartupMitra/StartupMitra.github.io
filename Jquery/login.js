$(document).ready(function(){

    $('#submit').click(function(){
        

        var settings = {
            "url": "127.0.0.1:5000/public",
            "method": "POST",
            "timeout": 0,
            "headers": {
            "Authorization": "Bearer dfdf",
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({"firstName":"hole222","lastName":"rushi"}),
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          });
      

          alert("hey")        
  
});
    
});