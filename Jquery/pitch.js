$(document).ready(function(){

   user=sessionStorage.getItem("username")
   $('#user').text(user)
   session_title=sessionStorage.getItem("title")
   
  
       
    $('#save').click(function(){
      
      title=session_title
      short_summary=$('#short_summary').val()
      business=$('#business').val()    
      market=$('#market').val() 
      progress=$('#progress').val()
      future=$('#future').val()
        alert("hello pitch")
       user_data= {
         "title":title,
         "short_summary":short_summary,
         "business":business,
         "market":market,
         "progress":progress,
         "future":future
         
         
     }

       var settings = {
           "url": "http://127.0.0.1:5000/pitch_info",
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
               window.location.href="file:///F:/StartupMitra/StartupMitra.github/imgnvid.html"
               
            }
         else {
             alert("Data registration is failed")

            }
             });
             
          });
        

          
 });

 
