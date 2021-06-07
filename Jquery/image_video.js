$(document).ready(function(){
   user=sessionStorage.getItem("username")
   session_title=sessionStorage.getItem("title")
   $('#user').text(user)
       
    $('#save').click(function(){
        alert($('#logo').val())
        
       
     title=session_title
     logo=$('#logo').val()
     banner=$('#banner').val()    
     ppt=$('#ppt').val() 
     video=$('#video').val()
     
     
    
      
              
     
user_data= {
         "title":title,
         "logo":logo,
         "banner":banner,
         "ppt":ppt,
         "video":video
         
         
     }

       var settings = {
           "url": "http://127.0.0.1:5000/image_video",
           "method": "POST",
           "timeout": 0,
           "headers": {
           
             "Content-Type": "application/json"
           },
           "data": JSON.stringify(user_data),
         };
         
         $.ajax(settings).done(function (response) {

         if(response["result"]==1)
            {
               alert("data submitted succesfully")
               $('#save').val("saved")
               window.location.href="dashboard.html"
            }
         else {
             alert("Data registration is failed")

            }
             });
             
          });
        

          
 });

 
