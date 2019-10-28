var tl = {
	initialize: function() {
		$(".event1-span .calculate-btn").on("click", tl["calculateEvent"].bind(null, 1));
		$(".event2-span .calculate-btn").on("click", tl["calculateEvent"].bind(null, 2));
	},
	
		
	calculateEvent: function(eventNum) {
		var fee = parseInt($(".event"+eventNum+"-span .fee").val());
		var numEntrants = parseInt($(".event"+eventNum+"-span .num-entrants").val());
		var numPayouts = parseInt($(".event"+eventNum+"-span .num-payouts").val());
		var bonus = parseInt($(".event"+eventNum+"-span .bonus").val());
		
		
		switch(true) {
				case eventNum == 1: 
					fee = fee || 5;
					numEntrants = numEntrants || 40;
					numPayouts = numPayouts || 0;
					bonus = bonus || 0;
					break;
				case eventNum == 2: 
					fee = fee || 10;
					numEntrants = numEntrants || 15;
					numPayouts = numPayouts || 0;
					bonus = bonus || 0;
					break;
				case eventNum == 3: 
					fee = fee || 1;
					numEntrants = numEntrants || 10;
					numPayouts = numPayouts || 0;
					bonus = bonus || 0;
					break;
				default:
					break;
		}
			
				
		if (!numPayouts){
			if (numEntrants < 10)
				numPayouts = 2;
			else if (numEntrants < 40)
				numPayouts = 3;
			else if (numEntrants < 60)
				numPayouts = 4;
			else if (numEntrants < 80)
				numPayouts = 6;
			else
				numPayouts = 8;
		}
			
		var total = fee * numEntrants;
		total += parseInt(bonus);
		
		var percent = [];
		
		for ( i = 0; i < 8; i++){
			percent[i] = 0;
		}
				
		switch(numPayouts){
			case 1:
			case 2:
				percent[0] = .7;
				percent[1] = .3;
				break;
			case 3:
				percent[0] = .6;
				percent[1] = .3;
				percent[2] = .1;
				break;
			case 4:
			case 5:
				percent[0] = .5;
				percent[1] = .25;
				percent[2] = .15;
				percent[3] = .1; 
				break;
			case 6:
			case 7:
				percent[0] = .45;
				percent[1] = .25;
				percent[2] = .15;
				percent[3] = .10;
				percent[4] = .025;
				percent[5] = .025;
				break;
			case 8:
				percent[0] = .425;
				percent[1] = .225;
				percent[2] = .15;
				percent[3] = .1;
				percent[4] = .03;
				percent[5] = .03;
				percent[6] = .02;
				percent[7] = .02;
				break;
			default:
				$("#11Pay").html("no");
				break;
		}
		
			
		$("#"+eventNum+"total").html(Math.round(total));
		
		for ( i = 0; i < percent.length; i++){
			var j = i + 1;
			
			if (eventNum == 2)
				$("#" + eventNum + j + "Pay, #" + eventNum + j + "PayT").html((total * percent[i]/2));
			else
				$("#" + eventNum + j + "Pay").html(Math.round(total * percent[i]));
			
			$("#" + eventNum + j + "Per").html(Math.round(100 * percent[i]) + '%');
		}
	}
};

$(tl.initialize);
