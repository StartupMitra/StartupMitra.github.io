
    $(document).ready(function(){

     
      $('#alert').hide()
      $('#error').hide()
              

        $('#signin').click(function(){
          
            
          /*inputEmail inputPassword signin  these are the ids of html dom elemts for login */             
            username=$('#inputEmail').val()
            password=$('#inputPassword').val()
            user_data={"username":username,"password":password}
            
     
            var settings = {
                "url": "http://127.0.0.1:5000/login",
                "method": "POST",
                "timeout": 0,
                "headers": {
                
                  "Content-Type": "application/json"
                },
                "data": JSON.stringify(user_data),
              };
              
              $.ajax(settings).done(function (response) {
                
               
                 response["token"];
                 sessionStorage.setItem("token", response["token"]);
                 if(sessionStorage.getItem("token")=="invalid user")
                 {
                  $('#alert').show()
                  $('#error').show()
                  
                  
                 }
                 else{
                   
                  //window.location.href = "http://stackoverflow.com";
                  alert(sessionStorage.getItem("token"))
                  $('#inputEmail').val(sessionStorage.getItem("token"))
                 }
                 
                  });

              });

        });
  