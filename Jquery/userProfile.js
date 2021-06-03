$(document).ready(function(){
       
   
    user=sessionStorage.getItem("username")
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
    //alert(profile_name)
    //alert(title)

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
          //alert(response.data[0].short_summary)
        banner=response.data[0].banner.split("\\").pop()
        domain=response.data[0].domain
        future= response.data[0].future
        ideal_investor_role= response.data[0].ideal_investor_role
        minimum_investment= response.data[0].minimum_investment
        mobile= response.data[0].mobile
        ppt=response.data[0].ppt
        previous_round_funding=response.data[0].previous_round_funding
        short_summary=response.data[0].short_summary
        stage=response.data[0].stage
        total_raised=response.data[0].total_raised
        total_raising= response.data[0].total_raising
        video=response.data[0].video.split("\\").pop()
        website= response.data[0].website
        business=response.data[0].business
        market=response.data[0].market
        progress=response.data[0].progress
        
        $('#overview').text(short_summary)
        $('#minimum_investment').text(minimum_investment)
        $('#previous_round_funding').text(previous_round_funding)
        $('#total_raised').text(total_raised)
        $('#total_raising').text(total_raising)
        $('#stage').text(stage)
        $('#ideal_investor_role').text(ideal_investor_role)
        $('#website').text(website)
        $('#mobile').text(mobile)
        $('#future').text(future)
        $('#business').text(business)
        $('#market').text(market)
        $('#progress').text(progress)
        $('#banner').attr('src','F:/StartupMitra/data/'+banner)
        $('#video').attr('src','F:/StartupMitra/data/'+video)  
    
       });
        
      

    });
      
   
    
   