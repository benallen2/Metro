var lineCode = "";
var userLine = "";
var lineColor = "";
var direction = "";// trains N+E bound are 1, S + W bound are 2
var userStation = "";
var stationCode = "";

//line arrays need to convert these to objects with Ids
var redLine = [{"name":"Shady Grove", "id":"A15"},
{"name":"Rockville", "id":"A14"},
{"name":"Twinbrook", "id":"A13"},
{"name":"White Flint", "id":"A12"},
{"name":"Grovesnor-Strathmore", "id":"A11"},
{"name":"Medical Center", "id":"A10"},
{"name":"Bethesda", "id":"A09"},
{"name":"Friendship Heights", "id":"A08"},
{"name":"Tenleytown-AU", "id":"A07"},
{"name":"Van Ness-UDC", "id":"A06"},
{"name":"Cleveland Park", "id":"A05"},
{"name":"Woodley Park", "id":"A04"},
{"name":"Dupont Circle", "id":"A03"},
{"name":"Farragut North", "id":"A02"},
{"name":"Metro Center", "id":"A01"},
{"name":"Gallery Place-China Town", "id":"B01"},
{"name":"Judiciary Square", "id":"B02"},
{"name":"Union Station", "id":"B03"},
{"name":"NoMa-Galludet U", "id":"B35"},
{"name":"Rhode Island Ave-Brentwood", "id":"B04"},
{"name":"Brookland-CUA", "id":"B05"},
{"name":"Fort Totten", "id":"B06"},
{"name":"Takoma", "id":"B07"},
{"name":"Silver Spring", "id":"B08"},
{"name":"Forest Glen", "id":"B09"},
{"name":"Wheaton", "id":"B10"},
{"name":"Glenmont", "id":"B11"}
];

var orangeLine = [{"name":"Vienna","id":"K08"},
{"name":"Dunn Loring","id":"K07"},
{"name":"West Falls Church","id":"K06"},
{"name":"East Falls Church","id":"K05"},
{"name":"Ballston-MU","id":"K04"},
{"name":"Virginia Square-GMU","id":"K03"},
{"name":"Clarendon","id":"K02"},
{"name":"Court House","id":"K01"},
{"name":"Rosslyn","id":"C05"},
{"name":"Foggy Bottom-GWU","id":"C04"},
{"name":"Farragut West","id":"C03"},
{"name":"McPherson Square","id":"C02"},
{"name":"Metro Center","id":"C01"},
{"name":"Federal Triangle","id":"D01"},
{"name":"Smithsonian","id":"D02"},
{"name":"L'Enfant Plaza","id":"D03"},
{"name":"Federal Center SW","id":"D04"},
{"name":"Capitol South","id":"D05"},
{"name":"Eastern Market","id":"D06"},
{"name":"Potomac Ave","id":"D07"},
{"name":"Stadium-Armory","id":"D08"},
{"name":"Minnesota Ave","id":"D09"},
{"name":"Deanwood","id":"D10"},
{"name":"Cheverly","id":"D11"},
{"name":"Landover","id":"D12"},
{"name":"New Carrollton","id":"D13"}];

var blueLine = [{"name":"Franconia-Springfield", "id":"J03"},
{"name":"Van Dorn Street", "id":"J02"},
{"name":"King Street - Old Town", "id":"C13"},
{"name":"Braddock Road", "id":"C12"},
{"name":"Potomac Yard", "id":"C11"},
{"name":"Ronald Reagan Washington National Airport", "id":"C10"},
{"name":"Crystal City", "id":"C09"},
{"name":"Pentagon City", "id":"C08"},
{"name":"Pentagon", "id":"C07"},
{"name":"Arlington Cemetary", "id":"C06"},
{"name":"Rosslyn", "id":"C05"},
{"name":"Foggy Bottom-GWU", "id":"C04"},
{"name":"Farragut West", "id":"C03"},
{"name":"McPherson Square", "id":"C02"},
{"name":"Metro Center", "id":"C01"},
{"name":"Federal Triangle", "id":"D01"},
{"name":"Smithsonian", "id":"D02"},
{"name":"L'Enfant Plaza", "id":"D03"},
{"name":"Federal Center SW", "id":"D04"},
{"name":"Capitol South", "id":"D05"},
{"name":"Eastern Market", "id":"D06"},
{"name":"Potomac Ave", "id":"D07"},
{"name":"Stadium-Armory", "id":"D08"},
{"name":"Benning Road", "id":"G01"},
{"name":"Capitol Heights", "id":"G02"},
{"name":"Addison Road", "id":"G03"},
{"name":"Morgan Boulevard", "id":"G04"},
{"name":"Largo Town Center", "id":"G05"}];

var greenLine = [{"name":"Branch Ave", "id":"F11"},
{"name":"Suitland", "id":"F10"},
{"name":"Naylor Road", "id":"F09"},
{"name":"Southern Ave", "id":"F08"},
{"name":"Congress Heights", "id":"F07"},
{"name":"Anacostia", "id":"F06"},
{"name":"Navy Yard - Ballpark", "id":"F05"},
{"name":"Waterfront", "id":"F04"},
{"name":"L'Enfant Plaza", "id":"F03"},
{"name":"Archives", "id":"F02"},
{"name":"Gallery Place", "id":"F01"},
{"name":"Mount Vernon Square", "id":"E01"},
{"name":"Shaw-Howard University", "id":"E02"},
{"name":"U Street", "id":"E03"},
{"name":"Columbia Heights", "id":"E04"},
{"name":"Georgia Ave-Petworth", "id":"E05"},
{"name":"Fort Totten", "id":"E06"}, {"name":"West Hyattsville", "id":"E07"}, {"name":"Prince George's Plaza", "id":"E08"}, {"name":"College Park-UMD", "id":"E09"}, {"name":"Greenbelt", "id":"E10"}];

var yellowLine = ["Huntington", "Eisenhower Ave", "King Street-Old Town", "Braddock Road", "Potomac Yard", "Ronald Reagan Washington National Airport", "Crystal City", "Pentagon City", "Pentagon", "L'Enfant Plaza", "Archives-Navy Memorial-Penn Quarter", "Gallery Place", "Mount Vernon Square", "Shaw-Howard University", "U Street", "Columbia Heights", "Georgia Ave-Petworth", "Fort Totten", "West Hyattsville", "Prince George's Plaza", "College Park-UMD", "Greenbelt"];





var silverLine = ["Wiehle-Reston East", "Spring Hill", "Greensboro", "Tysons Corner", "McLean", "East Falls Church", "Ballston-MU", "Virginia Square-GMU", "Clarendon", "Court House", "Rosslyn", "Foggy Bottom-GWU", "Farragut West", "McPherson Square", "Metro Center", "Federal Triangle", "Smithsonian", "L'Enfant Plaza", "Federal Center SW", "Capitol South", "Eastern Market", "Potomac Ave", "Stadium-Armory", "Benning Road", "Capitol Heights", "Addison Road", "Morgan Boulevard", "Largo Town Center"]




/*
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
*/


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
			lineColor = "#3381FF";
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
	stationSelect();
	}

function stationSelect() {
	$("li").click(function(){
		userStation = $(this).html();
		for (var i = 0; i < userLine.length; i++){
			if (userLine[i] === userStation){
				stationCode = redCode[i];
				console.log(stationCode)
			}

		}
		closeNav();
	})
}

function closeNav () {
	document.getElementById("stationMenu").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
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
	console.log(redLine.length);
	console.log(redCode.length);

})
