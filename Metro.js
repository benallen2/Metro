

$(document).ready(function(){
	    setInterval(function(){
	    $(function() {
        var params = {
            "api_key": "abc3f2f368624a3b95358b442ceb43d5",
            // Request parameters
        };
      
        $.ajax({
            url: "https://api.wmata.com/StationPrediction.svc/json/GetPrediction/A05?" + $.param(params),
            type: "GET",
        })
        .done(function(data) {
           
            console.log(data);
            if (data.Trains[0].Min == "BRD"){
            	 $("#arriveTime").html("Boarding");
            }
            else if (data.Trains[0].Min == "ARR"){
            	$("#arriveTime").html("Arriving");
            }
            else {
            $("#arriveTime").html(data.Trains[0].Min + " Min");
        }
            $("#destination").html(data.Trains[0].DestinationName);
            $("#carsnumber").html(data.Trains[0].Car + " Car Train")
        })
        .fail(function() {
            alert("error");
        });
    });
	}, 10000);
})