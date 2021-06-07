$(document).ready(function(){
      
       
  user=sessionStorage.getItem("username")
  $('#user').text(user)

 /* $('#user').text(user)
       $("#div1").hide();
       //$("#div2").hide();
       $("#div2").css({top: 4,position:'absolute'});
         
        
        user_data={"title":"fdfd"}
        var settings = {
          "url": "http://127.0.0.1:5000/check_status",
          "method": "POST",
          "timeout": 0,
          "headers": {
          
            "Content-Type": "application/json"
          },
          "data": JSON.stringify(user_data),
        };
        
        $.ajax(settings).done(function (response) {
          

        if(response["status"]=="complet")
           {
            $("#div1").show();
            }
       
           else{
            $("#div2").show();
          }
           });
   */        
         
   
         $('#save').click(function(){
         

        username=user
        title= $('#title').val() 
        website=$('#website').val()
        country=$('#country').val()    
        mobile=$('#mobile').val() 
        domain=$('#domain').val()
        stage=$('#stage').val()
        ideal_investor_role=$('#ideal_investor_role').val()
        previous_round_funding=$('#previous_round_funding').val()
        total_raising=$('#total_raising').val()
        total_raised=$('#total_raised').val()
        minimum_investment=$('#minimum_investment').val()

        sessionStorage.setItem("title",title);
        //status=$('#save').val()
       
         
                 
         //user_data={"username":username,"title":title,"website":website,"country":country,"mobile":mobile,"domain":domain,"stage":stage,"ideal_investor_role":ideal_investor_role,"previous_round_funding":previous_round_funding,"total_raising":total_raising,"total_raised":total_raised,"minimum_investment":minimum_investment}
        user_data= {
            "username":username,
            "title":title,
            "website":website,
            "country":country,
            "mobile":mobile,
            "domain":domain,
            "stage":stage,
            "ideal_investor_role":ideal_investor_role,
            "previous_round_funding":previous_round_funding,
            "total_raising":total_raising,
            "total_raised":total_raised,
            "minimum_investment":minimum_investment
            
        }
   
          var settings = {
              "url": "http://127.0.0.1:5000/company_info",
              "method": "POST",
              "timeout": 0,
              "headers": {
              
                "Content-Type": "application/json"
              },
              "data": JSON.stringify(user_data),
            };
            
            $.ajax(settings).done(function (response) {
              alert("done")

            if(response["result"]==1)
               {
                  alert("data sumittd")
                  $('#save').val("saved")
                  window.location.href="pitch.html"
                  
                  
               }
            else if(response["result"]==0){
                alert("Please Enter Unique Titile")

               }
               else{
                   alert("error")
               }
                 });
                
             });
           

             
    });
  
    
