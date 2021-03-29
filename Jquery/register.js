$(document).ready(function(){

    $('#otp').click(function(){
                  
        mobile=$('#inputEmail').val()
        alert("OTP send successfully")
         
         user_data={"email":mobile}
          
   
          var settings = {
              "url": "http://127.0.0.1:5000/send_otp",
              "method": "POST",
              "timeout": 0,
              "headers": {
              
                "Content-Type": "application/json"
              },
              "data": JSON.stringify(user_data),
            };
            
            $.ajax(settings).done(function (response) {
              
            });

      });

      $('#verify').click(function(){
          
        otp=$('#verifyOTP').val()
        
       
         
         user_data={"otp":otp}
          
   
          var settings = {
              "url": "http://127.0.0.1:5000/validate_otp",
              "method": "POST",
              "timeout": 0,
              "headers": {
              
                "Content-Type": "application/json"
              },
              "data": JSON.stringify(user_data),
            };
            
            $.ajax(settings).done(function (response) {
                
               
               
               if(response["result"]=="0")
               {
                  alert("Email Verified Sucessfully")
                  $('#verify').text("Verified")
               }
               else{
                 $('#verify').text("OTP is Incorrect")
               }

                });
             });

             
      $('#register').click(function(){
          
          
         first_name=$('#firstName').val()     
         last_name= $('#lastName').val() 
         email=$('#inputEmail').val()
         mobile=$('#inputMobile').val()    
         password=$('#inputPassword').val()           
       
         
         user_data={"name":first_name,"last_name":last_name,"email":email,"mobile":mobile,"password":password}
          
   
          var settings = {
              "url": "http://127.0.0.1:5000/register",
              "method": "POST",
              "timeout": 0,
              "headers": {
              
                "Content-Type": "application/json"
              },
              "data": JSON.stringify(user_data),
            };
            
            $.ajax(settings).done(function (response) {
                
               
               
                      });
                
             });

             
    });
    
