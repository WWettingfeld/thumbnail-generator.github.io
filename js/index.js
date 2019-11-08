var tokens = [];

$(document).ready(function() {
	$("#thumbnail").css("font-family", "Tahoma");
	
	$(document).on("click", "#btn-download", function(){
		fillArrays();
		determineCss();
		fillHTML(tokens[0]);
		
		var i = 0;
		setInterval(function() {
			if (tokens[i]) {
				fillHTML(tokens[i]);
				renderAndSave();
				i++;
			}		
		}, 5000);
	});
});


// MNM		:209	:hamyojo:Sheik	:Arsenals	:Fox	:Winners	:Melee
// event	:num	:p1		:c1		:p2			:c2		:bracket	:game
// 0		:1		:2		:3		:4			:5		:6			:7		
function fillArrays() {
	var matchInfo = [];
	var token = [];
	var input = $("#input").val();
	
	matchInfo = input.split('\n');

	for(i = 0; i < matchInfo.length; i++) {
		for (j = 0; j < 8; j++) {
			token = matchInfo[i].split(':');
		}

		tokens[i] = token;
	}
}

function determineCss() {
	$('link[href="css/index.css"]').attr('href','css/index.css');
}

function fillHTML(t) {
	$("#background").attr("src", "img/event/" + t[0] + "/background.png");
	$("#foreground").attr("src", "img/event/" + t[0] + "/foreground.png");
	$("#gameLogo").attr("src", "img/game/" + t[7] + ".png");
	$("#number").html(t[1]);

	var game = setGameCss(t);
	setEventCss(t);

	$("#p1Name").html(t[2]);
	$("#p2Name").html(t[4]);
	$("#bracket").html(t[6]);

	switch(t[7].toLowerCase()){
		case "ssbu":
		case "samurai":
		case "samuraishowdown":
		case "samuraishow down":
		case "sfv":
		case "tekken":
		case "tekken7":
		case "tekken 7":
			$("#p1Char").attr("src", "img/chars/" + game + "/p1/" + t[3] + ".png");
			$("#p2Char").attr("src", "img/chars/" + game + "/p2/" + t[5] + ".png");
			break;
		default:
			$("#p1Char").attr("src", "img/chars/" + game +  "/" + t[3] + ".png");
			$("#p2Char").css("transform", "scaleX(-1)");
			$("#p2Char").attr("src", "img/chars/" + game +  "/" + t[5] + ".png");
			break;
	}

	if (t[7].toLowerCase() == "ssbu") {
		$("#p1Char").attr("src", "img/chars/" + game + "/p1/" + t[3] + ".png");
		$("#p2Char").css("transform", "scaleX(1)");
		$("#p2Char").attr("src", "img/chars/" + game + "/p2/" + t[5] + ".png");
	} 
	else {
		$("#p1Char").attr("src", "img/chars/" + game +  "/" + t[3] + ".png");
		$("#p2Char").css("transform", "scaleX(-1)");
		$("#p2Char").attr("src", "img/chars/" + game +  "/" + t[5] + ".png");
	}
}

function setGameCss(t) {
	var game;

	switch(t[7].toLowerCase()) {
		case "tekken 7":
		case "tekken7":
		case "tekken":
			game = "tekken";
			$("#gameLogo").attr("src", "img/game/tekken.png");
			break;
		case "samurai shodown":
		case "samuraishodown":
		case "samurai":
			game = "samurai";
			$("#gameLogo").attr("src", "img/game/samurai.png");
			break;
		case "slapcity":
		case "slap":
		case "slap city":
			game = "Slap";
			$("#gameLogo").attr("src", "img/game/Slap.png");
			break;
		case "mk11":
		case "mk 11":
		case "mk":
		case "mortal kombat":
		case "mortal kombat 11":
			game = "mk11";
			$("#gameLogo").attr("src", "img/game/MK11.png");
			break;
		case "brawl":
			game = "PM";
			$("#gameLogo").attr("src", "img/game/Brawl.png");
			break;
		case "p+":
		case "pplus":
			game = "PM";
			$("#gameLogo").attr("src", "img/game/P+.png");
			break;
		default:
			game = t[7];
			break;
	}

	return game;
}

function setEventCss(t) {
	switch(t[0].toLowerCase()){
		case "mnm":
		case "sw":
		case "iab":
		case "iab!":
		case "dime":
		case "kitx":
		case "fmirl":
		case "irl":
		case "tgtbtm":
			$("#bracket").css({
				"top": "271px",
			    "left": "5px",
    			"font-size": "30px",
    			"text-align": "left",
    			"margin-left": "0"
			});
			$("#gameLogo").attr("src", "img/game/" + t[7] + ".png");
			break;
		case "xdl":
			$("#bracket").css("top", "218px");
			$(".text").css("color", "#000");
			$("#gameLogo").hide();
			break;
		case "usw":
		case "ultimatum":
			//$("#bracket").css("top", "216px");
			$(".text").css("color", "#fff");
			$("#gameLogo").show();
			break;
		case "nfa":
		case "sbw":
			$("#bracket").css("top", "216px");
			$(".text").css("color", "#fff");
			$("#number").hide();
			$("#gameLogo").show();
			break;
		case "rushdown":
			$("#bracket").css("top", "216px");
			$(".text").css("color", "#000");
			$("#gameLogo").attr("src", "img/game/SSBU_black.png");
			$("#gameLogo").show();
			break;
		case "fxi":
		case "fxl":
		case "akon":
			$("#bracket").css("top", "220px");
			$(".text").css("color", "#fff");
			$("#gameLogo").show();
			$("#number").hide();
			$("#gameLogo").attr("src", "img/game/SSBU_long.png");
			break;
		case "ltc7":
		case "ltc":
			$(".text").css("font-style", "bold");
			// $("#gameLogo").attr("src", "img/game/ltc7/" + t[7] + ".png");
			$("#gameLogo").show();
		case "rr":
			$(".text").css("color", "#000");
			$("#bracket").css("font-size", "18px");
			$("#bracket").css("top", "17px");
			$("#number").hide();
			$("#gameLogo").attr("src", "img/game/SSBU_black.png");
			$("gameLogo").hide();
			break;
		default:
			$("#number").show();
			$("#gameLogo").show();
			break;
	}
}

function renderAndSave() {
	html2canvas(document.getElementById("thumbnail"), {
	  onrendered: function(canvas) {
		var img = canvas.toDataURL("image/png");

		Canvas2Image.saveAsPNG(canvas, 888, 500);
	
		// $('#link-download').attr("href", img);
		// $('#link-download').attr("download", token[2] + ' ' + 'vs' + ' ' + token[4] + ' ' + token[6]);
	  }
	});
}

