/**
* Author: typo
* Date: JAN2017
* Name: Thumbnail Generator
* Version: 1.x
**/

var event,
	number,
	bracket,
	game;
var p1Name,
	t1Name,
	p1Char,
	t1Char;
var p2Name,
	t2Name,
	p2Char,
	t2Char;
var inputType = 3;
var inputField;
var counter=0;

$( document ).ready(function() {
	$("#batch").css("display", "block");
	//$("#string").addClass("active");
});
	
function generate(){

	switch(inputType){
		case 1:
			inputField = $("#Form_Individual")[0];
			
			event = inputField.elements[1].value;
			number = inputField.elements[2].value;
			bracket = inputField.elements[3].value;
			
			p1Name = inputField.elements[5].value;
			t1Name = inputField.elements[6].value;
			p1Char = inputField.elements[7].value;
			t1Char = inputField.elements[8].value;
			
			p2Name = inputField.elements[10].value;
			t2Name = inputField.elements[11].value;
			p2Char = inputField.elements[12].value;
			t2Char = inputField.elements[13].value;
			
			if (t1Name && t2Name){
				$("#p1Name,#p2Name").css("font-size", "20px");
				$("#p1char,#p2char").css("width", "60%");
				$("#p1char,#p2char").css("top", "10%");
			}
			assignHTML();
			break;
		case 2: 											//String input
			inputField = $("#Form_String")[0];			// gets string from 
			singlesArray = inputField.elements.concatenationS.value.split(':', 7);
			doublesArray = inputField.elements.concatenationD.value.split(':', 7);

			if (singlesArray){
				event = singlesArray[0];
				number = singlesArray[1];
				p1Name = singlesArray[2];
				p1Char = singlesArray[3];
				p2Name = singlesArray[4];
				p2Char = singlesArray[5];
				bracket = singlesArray[6];
			} else {
				event = doublesArray[0];
				number = doublesArray[1];
				p1Name = doublesArray[2];
				p1Char = doublesArray[3];
				t1Name = doublesArray[4];
				t1Char = doublesArray[5];

				p2Name = doublesArray[6];
				p2Char = doublesArray[7];
				t2Name = doublesArray[8];
				t2Char = doublesArray[9];
				bracket = doublesArray[10];
				
				$("#p1Name,#p2Name").css("font-size", "20px");
				$("#p1char,#p2char").css("width", "60%");
				$("#p1char,#p2char").css("top", "10%");
			}
			assignHTML();
			break;
		case 3:
			
				var rawBatch = $("#batch_input").val();			// read in batch 
				var splitBatch = rawBatch.split('\n');				// turns batch into strings
				var strings;

				strings = splitBatch[counter].split(':');				// splits string

				event = strings[0];							// assign string
				number = strings[1];
				p1Name = strings[2];
				p1Char = strings[3];
				p2Name = strings[4];
				p2Char = strings[5];
				bracket = strings[6];

				assignHTML();
			break;
		default:
			break;
	}

	
	// window.alert(" p1Name: " + p1Name + "\n p1Char: " +  p1Char + "\n t1Name: " +  t1Name +	"\n t1Char: " +  t1Char + "\n\n p2Name: " + p2Name + "\n p2Char: " +  p2Char +	"\n t2Name: " +  t2Name + "\n t2Char: " +  t2Char );
				
}
function assignHTML(){

	eventDifferences();
	$("#background").attr("src", "event/" + event + "/background.png");
	$("#bars").attr("src", "event/" + event + "/bars.png");
	$("#vs").attr("src", "event/" + event + "/vs.png");
	$("#game").attr("src", "img/game/" + game + ".png");
	$("#number").html(number);
	$("#bracket").html(bracket);
	
	$("#p1Name").html(p1Name);
	$("#t1Name").html(t1Name);
	$("#p1Char").attr("src", "img/chars/" + game +  "/" + p1Char + ".png");
	$("#t1Char").attr("src", "img/chars/" + game +  "/" + t1Char + ".png");
	
	$("#p2Name").html(p2Name);
	$("#t2Name").html(t2Name);

	$("#p2Char").attr("src", "img/chars/" + game +  "/" + p2Char + ".png");
	$("#p2Char").attr("transform", "scaleX(-1)");
	$("#t2Char").attr("src", "img/chars/" + game +  "/" + t2Char + ".png");
	setTimeout(render, 2000);
}
function wat(){
	window.alert(event);
}
function eventDifferences() {
	
	if (event.toLowerCase()=="iab"){ event = "iab!";}	
	if (event.toLowerCase()=="sw plano"){ event = "sw";}	
	
	switch(event.toLowerCase()) {
	// -- Weekly
		case "mnm":
			game="melee";
			$("#thumb").css("font-family", "Century Gothic");
			$("#number").css("color", "#cccccc");
			$("#number").css("bottom", "50px");
			$("#number").css("right", "200px");
			break;

		case "iab":
		case "iab!":
			game="pm";
			$("#thumb").css("font-family", "Century Gothic");
			$("#number").css("color", "red");
			$("#number").css("bottom", "50px");
			$("#number").css("right", "180px");
			break;

		case "sw":
		case "sw plano":
			game="smash4";
			$("#thumb").css("font-family", "Segoe UI");
			$("#number").css("color", "#dedede");
			$("#number").css("bottom", "70px");
			$("#number").css("right", "150px");
			break;

	// -- Monthly
		case "br":
			game="pm";
			$("#thumb").css("font-family", "Century Gothic");
			$("#number").hide();
			break;

		case "dime":
			game="melee";
			$("#thumb").css("font-family", "Century Gothic");
			$("#number").hide();
			break;

		case "cyc":
		case "cyclone":
			$("#thumb").css("font-family", "Century Gothic");
			$("#number").hide();
			$("#bracket").css("bottom", "470%");
			$("#bracket").css("text-align", "center");
			gameSelection(number.toLowerCase());
			$("#game").attr("src", "img/game/" + game + ".png");
			break;

		case "cirque":
		case "cirque du melee":
			$("#thumb").css("font-family", "Century Gothic");
			$("#number").hide();
			$("#bracket").css("bottom", "470%");
			$("#bracket").css("text-align", "center");
			gameSelection(number.toLowerCase());
			break;

		case "aitc":
			$("#thumb").css("font-family", "Century Gothic");
			$("#number").hide();
			$("#number").css("bottom", "50px");
			$("#number").css("right", "180px");

			gameSelection(number.toLowerCase());
			// $("#game").attr("src", "img/blank.png");
			break;


		case "dba":
			game="smash4";
			$("#thumb").css("font-family", "Segoe UI");
			$("#number").hide();
			break;


		case "sf":
		case "solidfundamentals":
		case "solid fundamentals":
		case "solid fundies":
			$("#thumb").css("font-family", "Franklin Gothic Book");
			$("#number").hide();
			$("#bracket").css("bottom", "470%");
			$("#bracket").css("text-align", "center");
			game = "pm";
			break;

	// - Major
		case "ltc4":
		case "ltc 4":
		case "ltc5":
		case "ltc 5":
			$("#number").hide();
			$("#thumb").css("font-family", "Franklin Gothic Book");
			$("#number").hide();
			$("#bracket").css("bottom", "470%");
			$("#bracket").css("text-align", "center");
			gameSelection(number.toLowerCase());
			break;

		case "ds":
		case "ds!":
		case "dontsleep":
		case "don'tsleep":
		case "dont sleep":
		case "don't sleep":
			$("#thumb").css("font-family", "Franklin Gothic Book");
			$("#number").hide();
			$("#bracket").css("bottom", "470%");
			$("#bracket").css("text-align", "center");
			gameSelection(number.toLowerCase());
			break;

		case "rev":
		case "revelation":
			$("#thumb").css("font-family", "Century Gothic");
			$("#number").hide();
			$("#bracket").css("bottom", "470%");
			$("#bracket").css("text-align", "center");
			gameSelection(number.toLowerCase());
			break;

		case "afsk":
		case "aftershock":
			$("#thumb").css("font-family", "Century Gothic");
			$("#number").hide();
			$("#bracket").css("bottom", "470%");
			$("#bracket").css("text-align", "center");
			gameSelection(number.toLowerCase());
			$("#game").attr("src", "img/game/" + game + ".png");
			break;

		case "ccc":
			$("#thumb").css("font-family", "Century Gothic");
			$("#number").hide();
			$("#bracket").css("bottom", "470%");
			$("#bracket").css("text-align", "center");
			gameSelection(number.toLowerCase());
			break;

		case "ssc":
		case "ssc16":
		case "ssc2016":
			$("#thumb").css("font-family", "Century Gothic");
			$("#number").hide();
			$("#bracket").css("bottom", "470%");
			$("#bracket").css("text-align", "center");
			gameSelection(number.toLowerCase());
			$("#game").attr("src", "img/game/" + game + ".png");
			break;

		case "ab":
		case "ab7":
			$("#thumb").css("font-family", "Century Gothic");
			$("#number").hide();
			$("#bracket").css("bottom", "470%");
			$("#bracket").css("text-align", "center");
			gameSelection(number.toLowerCase());
			$("#game").attr("src", "img/game/" + game + ".png");
			break;

		case "kit":
		case "kit17":
			$("#thumb").css("font-family", "Franklin Gothic Book");
			$("#number").hide();
			$("#bracket").css("bottom", "145%");
			$("#bracket").css("text-align", "center");
			gameSelection(number.toLowerCase());
			$("#game").attr("src", "img/game/" + game + ".png");
			break;

		case "nfa":
			$("#thumb").css("font-family", "Century Gothic");
			$("#number").hide();
			$("#bracket").css("bottom", "470%");
			$("#bracket").css("text-align", "center");
			gameSelection(number.toLowerCase());
			break;

	// -- Obsolete
		case "hitstun":
			game="64";
			$("#thumb").css("font-family", "Segoe UI");
			$("#number").css("color", "#FFC325");
			$("#number").css("bottom", "90px");
			$("#number").css("right", "150px");
			break;

		case "tloc 1k":
			$("#thumb").css("font-family", "Century Gothic");
			$("#number").hide();
			gameSelection(number.toLowerCase());
			$("#vs").attr("src", "event/" + event + "/vs " + game + ".png");
			break;

		case "synergy":
			game="pokken";
			$("#thumb").css("font-family", "Franklin Gothic Book");
			$("#number").hide();
			$("#bracket").css("bottom", "470%");
			$("#bracket").css("text-align", "center");
			break;

		default:
			break;
	}//--------
}
function gameSelection(g){
	switch(g){
		case "64":
			game="64";
			break;
		case "melee":
			game="melee";
			break;
		case "brawl":
			game="brawl";
			break;
		case "pm":
			game="pm";
			break;
		case "smash4":
		case "smash 4":
		case "sm4sh":
		case "wii u":
		case "wiiu":
			game="smash4";
			break;
		case "ki":
			game="ki";
			break;
		case "doa":
			game="doa";
			break;
		default:
			game="melee";
			break;
	}

}


function render() {
	html2canvas(document.getElementById("thumb"), {
	  onrendered: function(canvas) {
		var img = canvas.toDataURL("image/png");

	  // 	setTimeout(function() {
			// return Canvas2Image.saveAsPNG(canvas);
	  // 	}, 2000);
		
		$('#download-link').attr("href", img);
		$('#download-link').attr("download", p1Name + ' ' + 'vs' + ' ' + p2Name + ' ' + bracket);
		// batchSort();
	  }
	});
}
function batchSort(){
 	counter++;
 	generate();
}
function tabSelection(evt, tabName) {
	
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
	
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}