$(document).ready(function(){

        
       $("#div1").hide();
      // $('#div2').css('padding-top','-299%')
      $("#div2").css({top: 8,position:'absolute'});
       $('#save').click(function(){
        
        

        username="rushikesh"   
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
        status=$('#save').val()
       
         
                 
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

            if(response["result"]==1)
               {
                  alert("data sumittd")
                  $('#save').val("saved")
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
    
