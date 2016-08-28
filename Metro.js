var lineCode = ""
var userLine = "";
var lineColor = "";

//line arrays
var redLine = ["Shady Grove", "Rockville", "Twinbrook", "White Flint", "Grovesnor-Strathmore", "Medical Center", "Bethesda", "Friendship Heights", "Tenleytown-AU", "Van Ness-UDC", "Cleveland Park", "Woodley Park", "Dupont Circle", "Farragut North", "Metro Center", "Gallery Place-China Town", "Judiciary Square", "Union Station", "NoMa-Galludet U", "Rhode Island Ave-Brentwood", "Brookland-CUA", "Fort Totten", "Takoma", "Silver Spring", "Forest Glen", "Wheaton", "Glenmont"];
var orangeLine = ["Vienna", "Dunn Loring", "West Falls Church", "East Falls Church", "Ballston-MU", "Virginia Square-GMU", "Clarendon", "Court House", "Rosslyn", "Foggy Bottom-GWU", "Farragut West", "McPherson Square", "Metro Center", "Federal Triangle", "Smithsonian", "L'Enfant Plaza", "Federal Center SW", "Capitol South", "Eastern Market", "Potomac Ave", "Stadium-Armory", "Minnesota Ave", "Deanwood", "Cheverly", "Landover", "New Carrollton"];
var blueLine = ["Franconia-Springfield", "Van Dorn Street", "King Street - Old Town", "Braddock Road", "Potomac Yard", "Ronald Reagan Washington National Airport", "Crystal City", "Pentagon City", "Pentagon", "Arlington Cemetary", "Rosslyn", "Foggy Bottom-GWU", "Farragut West", "McPherson Square", "Metro Center", "Federal Triangle", "Smithsonian", "L'Enfant Plaza", "Federal Center SW", "Capitol South", "Eastern Market", "Potomac Ave", "Stadium-Armory", "Benning Road", "Capitol Heights", "Addison Road", "Morgan Boulevard", "Largo Town Center"];
var greenLine = ["Branch Ave", "Suitland", "Naylor Road", "Southern Ave", "Congress Heights", "Anacostia", "Navy Yard - Ballpark", "Waterfront", "L'Enfant Plaza", "Archives", "Gallery Place", "Mount Vernon Square", "Shaw-Howard University", "U Street", "Columbia Heights", "Georgia Ave-Petworth", "Fort Totten", "West Hyattsville", "Prince George's Plaza", "College Park-UMD", "Greenbelt"];
var yellowLine = ["Huntington", "Eisenhower Ave", "King Street-Old Town", "Braddock Road", "Potomac Yard", "Ronald Reagan Washington National Airport", "Crystal City", "Pentagon City", "Pentagon", "L'Enfant Plaza", "Archives-Navy Memorial-Penn Quarter", "Gallery Place", "Mount Vernon Square", "Shaw-Howard University", "U Street", "Columbia Heights", "Georgia Ave-Petworth", "Fort Totten", "West Hyattsville", "Prince George's Plaza", "College Park-UMD", "Greenbelt"];
var silverLine = ["Wiehle-Reston East", "Spring Hill", "Greensboro", "Tysons Corner", "McLean", "East Falls Church", "Ballston-MU", "Virginia Square-GMU", "Clarendon", "Court House", "Rosslyn", "Foggy Bottom-GWU", "Farragut West", "McPherson Square", "Metro Center", "Federal Triangle", "Smithsonian", "L'Enfant Plaza", "Federal Center SW", "Capitol South", "Eastern Market", "Potomac Ave", "Stadium-Armory", "Benning Road", "Capitol Heights", "Addison Road", "Morgan Boulevard", "Largo Town Center"]





/*  setInterval(function(){
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
}, 10000);*/


function lineSelect () {
	$("#lineModal").show();
	$(".lineBtn").click(function(){
		$("#main").show();
		$("#lineModal").fadeOut(300);
		lineCode = $(this).attr("id");
		switch (lineCode){
			case "RD":
			lineColor = "red";
			userLine = redLine;
			break;
			case "GR":
			lineColor = "green";
			userLine = greenLine;
			break;
			case "YL":
			lineColor = "#EDCE00";
			userLine = yellowLine;
			break;
			case "SV":
			lineColor = "grey";
			userLine = silverLine;
			break;
			case "BL":
			lineColor = "blue";
			userLine = blueLine;
			break;
			case "OR":
			lineColor = "#FF7C0A";
			userLine = orangeLine;
			break;
			default:
			lineColor = "red";
			userLine = redLine;
			break;
		}//switch for setting line color
			$(".linebar").css("background-color", lineColor);
			for (var i = 0; i < userLine.length; i++){
				$("#stationList").append("<li>" + userLine[i] + "</li>");
				$("#stationList").css("color", lineColor);
			}
			openListMenu();
	});
}
function openListMenu () {
	$("#stationMenu").show();
	document.getElementById("stationMenu").style.width = "370px";
	document.getElementById("main").style.marginLeft = "370px";
	document.getElementById("main").style.opacity = "0.3";

}

function closeNav () {
	document.getElementById("stationMenu").style.width = "0";
	document.getElementById("main").style.width = "0";
	document.getElementById("main").style.opacity = "1";
	$("#stationMenu").hide();
}

function openDirection () {
	document.getElementById("directionMenu").style.width = "370px";
	document.getElementById("main").style.marginLeft = "370px";
	document.getElementById("main").style.opacity = "0.3";


}

$(document).ready(function(){
	lineSelect();
	$("#stationMenu").hide();
	$("#directionMenu").hide();
	$("#main").hide();

})
