// mnm:209:hamyojo:Sheik:Arsenals:Fox:Winners:ssbm

function createThumbnails() {
	var matches = getMatches();
	setBaseCss();
	
	var i = 0;
	setInterval(function() {
		if (matches[i]) {
			injectMatchIntoHtml(matches[i]);
			renderAndSave();
			i++;
		}		
	}, 5000);
}

function getMatches() {
	var matches = [];

	var input = $("#input").val();
	var	splitMatches = input.split('\n');

	for (i = 0; i < splitMatches.length; i++) {
		var splitMatch = splitMatches[i].split(':');
		var match = {
			event: splitMatch[0],
			number: splitMatch[1],
			player1: splitMatch[2],
			char1: splitMatch[3],
			player2: splitMatch[4],
			char2: splitMatch[5],
			bracket: splitMatch[6],
			game: splitMatch[7]
		};

		matches.push(match);
	}

	return matches;
}

function setBaseCss() {
	$('link[href="css/index.css"]').attr('href','css/index.css');
}

function injectMatchIntoHtml(match) {
	setFoundationImages(match);
	setGameLogo(match);
	setEventCss(match);
	setText(match);
	setCharacterPortraits(match);
}

function setFoundationImages(match) {
	$("#background").attr("src", "img/event/" + match.event + "/background.png");
	$("#foreground").attr("src", "img/event/" + match.event + "/foreground.png");
	$("#gameLogo").attr("src", "img/game/" + match.game + ".png");
}

function setText(match) {
	$("#number").html(match.number);
	$("#p1Name").html(match.player1);
	$("#p2Name").html(match.player2);
	$("#bracket").html(match.bracket);
}

function setCharacterPortraits(match) {
	switch(match.game.toLowerCase()){
		case "ssbu":
		case "samurai":
		case "samuraishowdown":
		case "samuraishow down":
		case "sfv":
		case "tekken":
		case "tekken7":
		case "tekken 7":
			$("#p1Char").attr("src", "img/chars/" + match.game + "/p1/" + match.char1 + ".png");
			$("#p2Char").attr("src", "img/chars/" + match.game + "/p2/" + match.char2 + ".png");
			break;
		default:
			$("#p1Char").attr("src", "img/chars/" + match.game +  "/" + match.char1 + ".png");
			$("#p2Char").css("transform", "scaleX(-1)");
			$("#p2Char").attr("src", "img/chars/" + match.game +  "/" + match.char2 + ".png");
			break;
	}

	if (match.game.toLowerCase() == "ssbu") {
		$("#p1Char").attr("src", "img/chars/" + match.game + "/p1/" + match.char1 + ".png");
		$("#p2Char").css("transform", "scaleX(1)");
		$("#p2Char").attr("src", "img/chars/" + match.game + "/p2/" + match.char2 + ".png");
	} 
	else {
		$("#p1Char").attr("src", "img/chars/" + match.game +  "/" + match.char1 + ".png");
		$("#p2Char").css("transform", "scaleX(-1)");
		$("#p2Char").attr("src", "img/chars/" + match.game +  "/" + match.char2 + ".png");
	}
}

function setGameLogo(match) {
	switch(match.game.toLowerCase()) {
		case "tekken 7":
		case "tekken7":
		case "tekken":
			$("#gameLogo").attr("src", "img/game/tekken.png");
			break;
		case "samurai shodown":
		case "samuraishodown":
		case "samurai":
			$("#gameLogo").attr("src", "img/game/samurai.png");
			break;
		case "slapcity":
		case "slap":
		case "slap city":
			$("#gameLogo").attr("src", "img/game/Slap.png");
			break;
		case "mk11":
		case "mk 11":
		case "mk":
		case "mortal kombat":
		case "mortal kombat 11":
			$("#gameLogo").attr("src", "img/game/MK11.png");
			break;
		case "brawl":
			$("#gameLogo").attr("src", "img/game/Brawl.png");
			break;
		case "p+":
		case "pplus":
			$("#gameLogo").attr("src", "img/game/P+.png");
			break;
		default:
			$("#gameLogo").attr("src", "img/game/" + match.game + ".png");
			break;
	}
}

function setEventCss(match) {
	switch(match.event.toLowerCase()){
		case "mnm":
		case "sw":
		case "iab":
		case "iab!":
		case "dime":
		case "tgtbtm":
			$("#bracket").css({
				"top": "271px",
			    "left": "5px",
    			"font-size": "30px",
    			"text-align": "left",
    			"margin-left": "0"
			});
			break;
		case "kitx":
			$("#bracket").css({
				"top": "271px",
				"left": "50%",
				"font-size": "30px",
				"text-align": "center",
				"margin-left": "-150px"
			});
		case "fmirl":
		case "irl":
			$("#bracket").css({
				"top": "271px",
				"left": "50%",
				"font-size": "30px",
				"text-align": "center",
				"margin-left": "-150px"
			});
			break;
		case "xdl":
			$("#bracket").css("top", "218px");
			$(".text").css("color", "#000");
			$("#gameLogo").hide();
			break;
		case "usw":
		case "ultimatum":
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
			$("#gameLogo").attr("src", "img/game/ssbu_black.png");
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
			$("#gameLogo").show();
		case "rr":
			$(".text").css("color", "#000");
			$("#bracket").css({
				"top": "17px",
				"font-size": "18px"
			});
			$("#number").hide();
			$("#gameLogo").attr("src", "img/game/ssbu_black.png");
			break;
		case "si":
			$(".text").css("color", "#000");
			$("#bracket").css({
				"top": "271px",
			    "left": "5px",
    			"font-size": "30px",
    			"text-align": "left",
    			"margin-left": "0"
			});
			$("#number").hide();
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
		}
	});
}

function wireEvents() {
	$(document).on("click", "#btn-download", createThumbnails);
}

$(document).ready(wireEvents);

