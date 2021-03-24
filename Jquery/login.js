
    $(document).ready(function(){
      
      $('#alert').hide()
      $('#error').hide()
              

        $('#signin').click(function(){
          
            
          /*inputEmail inputPassword signin  these are the ids of html dom elemts for login */             
            username=$('#inputEmail').val()
            password=$('#inputPassword').val()
            user_data={"username":username,"password":password}
            
     
            var settings = {
                "url": "http://127.0.0.1:5000/post",
                "method": "POST",
                "timeout": 0,
                "headers": {
                
                  "Content-Type": "application/json"
                },
                "data": JSON.stringify(user_data),
              };
              
              $.ajax(settings).done(function (response) {
                console.log(response);
                 
              });

               if(username=="rushi" & password=="rushi")
              {
                window.location.href = 'https://startupmitra.github.io/getstarted.html'
              }  
              else{
                $('#alert').show()
                $('#error').show()
              }

              //inputEmail
              //inputPassword
              //signin
              
             // alert(settings.data)  //returned data from server  settig.data
             
              
              

              });

        });
  