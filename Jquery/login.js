
    $(document).ready(function(){

        $('#submit').click(function(){
          
            username=$('#username').val()
            password=$('#password').val()
            user_data={"firstName":username,"lastName":password}
            
     
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

              alert("hey") 
              alert(settings.data)  //returned data from server  settig.data
             
              
              

              });

        });
  