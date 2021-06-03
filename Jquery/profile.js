$(document).ready(function(){

    alert("hey Userprifile")
    function getUrl()
    {
        var vars=[],hash;
        var hashes=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
        $('#cancel').hide()
        for(var i=0;i<hashes.length;i++)
        {
            hash=hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]]=hash[1];
        }
        return vars;
    }
    var title=session_title=sessionStorage.getItem("title")
    var profile_name=getUrl()['profile']
    data={"profile_name":profile_name}
    alert(profile_name)
    alert(title)

    var settings = {
        "url": "http://127.0.0.1:5000/entreprenuer_profile",
        "method": "POST",
        "timeout": 0,
        "headers": {
        
          "Content-Type": "application/json"
        },
        "data": JSON.stringify(data),
      };
      
      
      $.ajax(settings).done(function (response) {
    
       });

       $('#request').click(function(){
           alert("hey")
           data={"title":profile_name,"request":title}
           var settings = {
            "url": "http://127.0.0.1:5000/send_request",
            "method": "POST",
            "timeout": 0,
            "headers": {
            
              "Content-Type": "application/json"
            },
            "data": JSON.stringify(data),
          };
          
          
          $.ajax(settings).done(function (response) {
              if(response['data']=="1"){
                  $('#request').hide()
                  $('#cancel').show()
              }
              else{
                $('#request').val("request")
                $('#cancel').hide()
              }
        
           });


    });
      });
   
    
   