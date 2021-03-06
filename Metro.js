var lineCode = "";
var userLine = "";
var lineColor = "";
var userColor = "";
var trainColor = "";
var userStation = "";
var stationCode = "";
var prevStation1 = "";
var prevStation2 = "";
var prevStation3 = "";
var destination = "";
var direction = "";
var allTrains = [];
var yourTrains = [];


var lineImg = "";

var stationDisplay = []; //obj for the stations involved in main display

//line arrays need to convert these to objects with Ids
var redLine = [{
    "name": "Shady Grove",
    "id": "A15"
}, {
    "name": "Rockville",
    "id": "A14"
}, {
    "name": "Twinbrook",
    "id": "A13"
}, {
    "name": "White Flint",
    "id": "A12"
}, {
    "name": "Grovesnor-Strathmore",
    "id": "A11"
}, {
    "name": "Medical Center",
    "id": "A10"
}, {
    "name": "Bethesda",
    "id": "A09"
}, {
    "name": "Friendship Heights",
    "id": "A08"
}, {
    "name": "Tenleytown-AU",
    "id": "A07"
}, {
    "name": "Van Ness-UDC",
    "id": "A06"
}, {
    "name": "Cleveland Park",
    "id": "A05"
}, {
    "name": "Woodley Park",
    "id": "A04"
}, {
    "name": "Dupont Circle",
    "id": "A03"
}, {
    "name": "Farragut North",
    "id": "A02"
}, {
    "name": "Metro Center",
    "id": "A01"
}, {
    "name": "Gallery Place-China Town",
    "id": "B01"
}, {
    "name": "Judiciary Square",
    "id": "B02"
}, {
    "name": "Union Station",
    "id": "B03"
}, {
    "name": "NoMa-Galludet U",
    "id": "B35"
}, {
    "name": "Rhode Island Ave-Brentwood",
    "id": "B04"
}, {
    "name": "Brookland-CUA",
    "id": "B05"
}, {
    "name": "Fort Totten",
    "id": "B06"
}, {
    "name": "Takoma",
    "id": "B07"
}, {
    "name": "Silver Spring",
    "id": "B08"
}, {
    "name": "Forest Glen",
    "id": "B09"
}, {
    "name": "Wheaton",
    "id": "B10"
}, {
    "name": "Glenmont",
    "id": "B11"
}];

var orangeLine = [{
    "name": "Vienna",
    "id": "K08"
}, {
    "name": "Dunn Loring",
    "id": "K07"
}, {
    "name": "West Falls Church",
    "id": "K06"
}, {
    "name": "East Falls Church",
    "id": "K05"
}, {
    "name": "Ballston-MU",
    "id": "K04"
}, {
    "name": "Virginia Square-GMU",
    "id": "K03"
}, {
    "name": "Clarendon",
    "id": "K02"
}, {
    "name": "Court House",
    "id": "K01"
}, {
    "name": "Rosslyn",
    "id": "C05"
}, {
    "name": "Foggy Bottom-GWU",
    "id": "C04"
}, {
    "name": "Farragut West",
    "id": "C03"
}, {
    "name": "McPherson Square",
    "id": "C02"
}, {
    "name": "Metro Center",
    "id": "C01"
}, {
    "name": "Federal Triangle",
    "id": "D01"
}, {
    "name": "Smithsonian",
    "id": "D02"
}, {
    "name": "L'Enfant Plaza",
    "id": "D03"
}, {
    "name": "Federal Center SW",
    "id": "D04"
}, {
    "name": "Capitol South",
    "id": "D05"
}, {
    "name": "Eastern Market",
    "id": "D06"
}, {
    "name": "Potomac Ave",
    "id": "D07"
}, {
    "name": "Stadium-Armory",
    "id": "D08"
}, {
    "name": "Minnesota Ave",
    "id": "D09"
}, {
    "name": "Deanwood",
    "id": "D10"
}, {
    "name": "Cheverly",
    "id": "D11"
}, {
    "name": "Landover",
    "id": "D12"
}, {
    "name": "New Carrollton",
    "id": "D13"
}];

var blueLine = [{
    "name": "Franconia-Springfield",
    "id": "J03"
}, {
    "name": "Van Dorn Street",
    "id": "J02"
}, {
    "name": "King Street - Old Town",
    "id": "C13"
}, {
    "name": "Braddock Road",
    "id": "C12"
}, {
    "name": "Potomac Yard",
    "id": "C11"
}, {
    "name": "Ronald Reagan Washington National Airport",
    "id": "C10"
}, {
    "name": "Crystal City",
    "id": "C09"
}, {
    "name": "Pentagon City",
    "id": "C08"
}, {
    "name": "Pentagon",
    "id": "C07"
}, {
    "name": "Arlington Cemetary",
    "id": "C06"
}, {
    "name": "Rosslyn",
    "id": "C05"
}, {
    "name": "Foggy Bottom-GWU",
    "id": "C04"
}, {
    "name": "Farragut West",
    "id": "C03"
}, {
    "name": "McPherson Square",
    "id": "C02"
}, {
    "name": "Metro Center",
    "id": "C01"
}, {
    "name": "Federal Triangle",
    "id": "D01"
}, {
    "name": "Smithsonian",
    "id": "D02"
}, {
    "name": "L'Enfant Plaza",
    "id": "D03"
}, {
    "name": "Federal Center SW",
    "id": "D04"
}, {
    "name": "Capitol South",
    "id": "D05"
}, {
    "name": "Eastern Market",
    "id": "D06"
}, {
    "name": "Potomac Ave",
    "id": "D07"
}, {
    "name": "Stadium-Armory",
    "id": "D08"
}, {
    "name": "Benning Road",
    "id": "G01"
}, {
    "name": "Capitol Heights",
    "id": "G02"
}, {
    "name": "Addison Road",
    "id": "G03"
}, {
    "name": "Morgan Boulevard",
    "id": "G04"
}, {
    "name": "Largo Town Center",
    "id": "G05"
}];

var greenLine = [{
    "name": "Branch Ave",
    "id": "F11"
}, {
    "name": "Suitland",
    "id": "F10"
}, {
    "name": "Naylor Road",
    "id": "F09"
}, {
    "name": "Southern Ave",
    "id": "F08"
}, {
    "name": "Congress Heights",
    "id": "F07"
}, {
    "name": "Anacostia",
    "id": "F06"
}, {
    "name": "Navy Yard - Ballpark",
    "id": "F05"
}, {
    "name": "Waterfront",
    "id": "F04"
}, {
    "name": "L'Enfant Plaza",
    "id": "F03"
}, {
    "name": "Archives",
    "id": "F02"
}, {
    "name": "Gallery Place",
    "id": "F01"
}, {
    "name": "Mount Vernon Square",
    "id": "E01"
}, {
    "name": "Shaw-Howard University",
    "id": "E02"
}, {
    "name": "U Street",
    "id": "E03"
}, {
    "name": "Columbia Heights",
    "id": "E04"
}, {
    "name": "Georgia Ave-Petworth",
    "id": "E05"
}, {
    "name": "Fort Totten",
    "id": "E06"
}, {
    "name": "West Hyattsville",
    "id": "E07"
}, {
    "name": "Prince George's Plaza",
    "id": "E08"
}, {
    "name": "College Park-UMD",
    "id": "E09"
}, {
    "name": "Greenbelt",
    "id": "E10"
}];

var yellowLine = [{
    "name": "Huntington",
    "id": "C15"
}, {
    "name": "Eisenhower Ave",
    "id": "C14"
}, {
    "name": "King Street-Old Town",
    "id": "C13"
}, {
    "name": "Braddock Road",
    "id": "C12"
}, {
    "name": "Potomac Yard",
    "id": "C11"
}, {
    "name": "Ronald Reagan Washington National Airport",
    "id": "C10"
}, {
    "name": "Crystal City",
    "id": "C09"
}, {
    "name": "Pentagon City",
    "id": "C08"
}, {
    "name": "Pentagon",
    "id": "C07"
}, {
    "name": "L'Enfant Plaza",
    "id": "F03"
}, {
    "name": "Archives-Navy Memorial-Penn Quarter",
    "id": "F02"
}, {
    "name": "Gallery Place",
    "id": "F01"
}, {
    "name": "Mount Vernon Square",
    "id": "E01"
}, {
    "name": "Shaw-Howard University",
    "id": "E02"
}, {
    "name": "U Street",
    "id": "E03"
}, {
    "name": "Columbia Heights",
    "id": "E04"
}, {
    "name": "Georgia Ave-Petworth",
    "id": "E05"
}, {
    "name": "Fort Totten",
    "id": "E06"
}, {
    "name": "West Hyattsville",
    "id": "E07"
}, {
    "name": "Prince George's Plaza",
    "id": "E08"
}, {
    "name": "College Park-UMD",
    "id": "E09"
}, {
    "name": "Greenbelt",
    "id": "E10"
}];

var silverLine = [{
    "name": "Wiehle-Reston East",
    "id": "N06"
}, {
    "name": "Spring Hill",
    "id": "N04"
}, {
    "name": "Greensboro",
    "id": "N03"
}, {
    "name": "Tysons Corner",
    "id": "N02"
}, {
    "name": "McLean",
    "id": "N01"
}, {
    "name": "East Falls Church",
    "id": "K05"
}, {
    "name": "Ballston-MU",
    "id": "K04"
}, {
    "name": "Virginia Square-GMU",
    "id": "K03"
}, {
    "name": "Clarendon",
    "id": "K02"
}, {
    "name": "Court House",
    "id": "K01"
}, {
    "name": "Rosslyn",
    "id": "C05"
}, {
    "name": "Foggy Bottom-GWU",
    "id": "C04"
}, {
    "name": "Farragut West",
    "id": "C03"
}, {
    "name": "McPherson Square",
    "id": "C02"
}, {
    "name": "Metro Center",
    "id": "C01"
}, {
    "name": "Federal Triangle",
    "id": "D01"
}, {
    "name": "Smithsonian",
    "id": "D02"
}, {
    "name": "L'Enfant Plaza",
    "id": "D03"
}, {
    "name": "Federal Center SW",
    "id": "D04"
}, {
    "name": "Capitol South",
    "id": "D05"
}, {
    "name": "Eastern Market",
    "id": "D06"
}, {
    "name": "Potomac Ave",
    "id": "D07"
}, {
    "name": "Stadium-Armory",
    "id": "D08"
}, {
    "name": "Benning Road",
    "id": "G01"
}, {
    "name": "Capitol Heights",
    "id": "G02"
}, {
    "name": "Addison Road",
    "id": "G03"
}, {
    "name": "Morgan Boulevard",
    "id": "G04"
}, {
    "name": "Largo Town Center",
    "id": "G05"
}];

function alerts() { //APPPEND IS NOT WORKING YET
    $(function() {
        var params = {
            "api_key": "abc3f2f368624a3b95358b442ceb43d5",
            // Request parameters
        };
        $.ajax({
                url: "https://api.wmata.com/Incidents.svc/json/Incidents?" + $.param(params),
                type: "GET",
            })
            .done(function(data) {

                for (var i = 0; i < data.Incidents.length; i++) {
                    if (data.Incidents[i].LinesAffected == lineCode + ";") {
                        console.log(data.Incidents[i].IncidentType);
                        $("#additionalInfo").append("<h6>" + data.Incidents[i].IncidentType + " : </h6><p>" + data.Incidents[i].Description + "</p>");
                    }
                }
                console.log(data);
            });
    });
}

function wait() {
  $(function() {
    var params = {
        "api_key": "abc3f2f368624a3b95358b442ceb43d5",
          // Request parameters
      };

        $.ajax({
                url: "https://api.wmata.com/StationPrediction.svc/json/GetPrediction/" + stationCode + "?" + $.param(params),
                type: "GET",
            })
            .done(function(data) {
                yourTrains.length = 0;
                for (var i = 0; i < data.Trains.length; i++) {
                    if (data.Trains[i].Group === direction) {
                        yourTrains.push(data.Trains[i]);
                        console.log(yourTrains);
                    }
                }
                infoDisplay();

            })
            .fail(function() {
                alert("error");
            });
    });
}


function infoDisplay() {
    if (yourTrains[0].Min == "BRD") {
        $("#arriveTime").html("Boarding");

    } else if (yourTrains[0].Min == "ARR") {
        $("#arriveTime").html("Arriving");
    } else if (yourTrains[0].Car === null) {
        $("#arriveTime").html("No Passengers");
        $("#carsnumber").html("No Passengers");
    } else {
        $("#arriveTime").html(yourTrains[0].Min + " Min");
    }
    $("#destination").html(yourTrains[0].DestinationName);
    destination = yourTrains[0].DestinationName;
    $("#carsnumber").html(yourTrains[0].Car + " Car Train");

    switch (yourTrains[0].Line) {
        case "RD":
            trainColor = "Red";
            $("#traincolor").css("color", "#e51434");
            break;
        case "GR":
            trainColor = "Green";
            $("#traincolor").css("color", "#0eab4a");
            break;
        case "YL":
            trainColor = "Yellow";
            $("#traincolor").css("color", "#EDCE00");
            break;
        case "SV":
            trainColor = "Silver";
            $("#traincolor").css("color", "#9d9f9d");
            break;
        case "BL":
            trainColor = "Blue";
            $("#traincolor").css("color", "#3381FF");
            break;
        case "OR":
            trainColor = "Orange";
            $("#traincolor").css("color", "#f38512");
            break;
    }

    $("#traincolor").html(trainColor);
}



function lineSelect() {
    $("#lineModal").show();
    $(".lineBtn").click(function() {

        $("#lineModal").fadeOut(300);
        lineCode = $(this).attr("id");

        switch (lineCode) {
            case "RD":
                lineColor = "#e51434";
                userLine = redLine;
                lineImg = "./Redline/RedLineFull.png";
                userColor = "Red";
                break;
            case "GR":
                lineColor = "#0eab4a";
                userLine = greenLine;
                lineImg = "./Greenline/GreenLineFull.png";
                userColor = "Green";
                break;
            case "YL":
                lineColor = "#EDCE00";
                userLine = yellowLine;
                lineImg = "./Yellowline/YellowLineFull.png";
                userColor = "Yellow";
                break;
            case "SV":
                lineColor = "#9d9f9d";
                userLine = silverLine;
                lineImg = "./Silverline/SilverLineFull.png";
                userColor = "Silver";
                break;
            case "BL":
                lineColor = "#3381FF";
                userLine = blueLine;
                lineImg = "./Blueline/BlueLineFull.png";
                userColor = "Blue";
                break;
            case "OR":
                lineColor = "#f38512";
                userLine = orangeLine;
                lineImg = "./Orangeline/OrangeLineFull.png";
                userColor = "Orange";
                break;
            default:
                lineColor = "red";
                userLine = redLine;
                lineImg = "./Images/ColorMetro-1.png";
                userColor = "Red";
                break;
        } //switch for setting line color
        $("#arriveTime").css("color", lineColor);
        $("#destination").css("color", lineColor);
        $("#carsnumber").css("color", lineColor);
        $(".linebar").css("background-color", lineColor);
        $("#additionalInfo").css("color", lineColor);
        for (var i = 0; i < userLine.length; i++) {
            $("#stationList").append("<li>" + userLine[i].name + "</li>"); //creating the menu station list with names
            $("#stationList").css("color", lineColor);
        }
        openListMenu();
        $("#lineGraphic").append("<img src=" + lineImg + " id='lineImg' />");


    });
}

function openListMenu() { //displays the list of station names
    $("#stationMenu").show();
    document.getElementById("stationMenu").style.width = "370px";
    document.getElementById("main").style.marginLeft = "370px";
    document.getElementById("main").style.opacity = "0.3";
    stationSelect();
}

function stationSelect() { //what to do when a station is clicked
    $("li").click(function() {
        userStation = $(this).html();

      for (var j = 0; j < userLine.length; j++){//true for all instances, code is always what is clicked
        if (userLine[j].name === userStation) {
          stationCode = userLine[j].id;
      }
    }
        $("#directionList").append("<li>" + userLine[0].name + "</li>");
        $("#directionList").append("<li>" + userLine[userLine.length - 1].name + "</li>");
        closeNav();
        openDirection();
    });
}



function closeNav() { //generic close menu function
    document.getElementById("stationMenu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.opacity = "1";
    $("#stationMenu").hide();
    $("#directionMenu").hide();
}

Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {
      this.splice(i, 1);
      i--;
    }
  }
   return this;
};

function openDirection() { //switches menu to direction list with end points.  What to do when direction is clicked.
    $("#directionMenu").show();
    document.getElementById("directionMenu").style.width = "370px";
    document.getElementById("main").style.marginLeft = "370px";
    document.getElementById("main").style.opacity = "0.3";
    $("#directionList").css("color", lineColor);
    $("li").click(function() {
        document.getElementById("directionMenu").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("main").style.opacity = "1";
        $("#directionMenu").hide();
        if ($(this).html() == userLine[0].name) {
            direction = "2";
            $("#displayDirection").append("<h3><i class='fa fa-arrow-left fa-2x' aria-hidden='true'></i> " + userLine[0].name + "</h3>");
            for (var i = 0; i < userLine.length; i++){
              if (userLine[i].name == userStation){
                stationDisplay.push(userLine[i], userLine[i + 1], userLine[i + 2], userLine[i + 3]);
                stationDisplay.clean(undefined);
                console.log(stationDisplay);
              }
            }
            for (var j = 0; j < stationDisplay.length; j++){
              $("#stationnames").append("<div class='col-xs-2 col-xs-offset-1 stationLabel'>" + stationDisplay[j].name + "</div>");
            }

            $("#stationnames div:first").css("border", "solid " + lineColor + " 1px");
            $("#stationnames div:first").css("border-radius", "20px");
              console.log(stationDisplay);
            }

         else {
            direction = "1";
            $("#displayDirection").append("<h3> " + userLine[userLine.length - 1].name + "<i class='fa fa-arrow-right fa-2x' aria-hidden='true'></i></h3>");
            $("#displayDirection").addClass("col-xs-offset-9");
            for (var k = 0; k < userLine.length; k++){
              if (userLine[k].name == userStation){
                stationDisplay.push(userLine[k], userLine[k - 1], userLine[k - 2], userLine[k - 3]);
                stationDisplay.clean(undefined);
                console.log(stationDisplay);
              }
            }
            for (var l = stationDisplay.length - 1; l >= 0; l--){
              $("#stationnames").append("<div class='col-xs-2 col-xs-offset-1 stationLabel'>" + stationDisplay[l].name + "</div>");

            }
            $("#stationnames div:last").css("border", "solid " + lineColor + " 1px");
            $("#stationnames div:last").css("border-radius", "20px");

            console.log(direction);
        }

        $("#lineContainer").hide();
        $("#main").show();
        wait();
        alerts();
        setInterval(wait, 5000);
    });
}

$(document).ready(function() {
    lineSelect();
    $("#stationMenu").hide();
    $("#directionMenu").hide();
    $("#main").hide();
    $("#reset").click(function(){
      location.reload();
    });

});
