$(window).load(function(){
				$('#featured').orbit({
					animation:'fade',
					timer:true,
					pauseOnHover:false,
					directionalNav:false,
					captions: true,
					captionAnimation: 'fade',
					captionAnimationSpeed: 0,
					advanceSpeed: 5300
				});
				
				//callling the crowdLoop function
				crowdLoop();
				
				alignVert();
			});
			
function crowdLoop(){
	var anidiv=$('#crowdFundContainer');
	anidiv
		.animate({right:'0px'},800)
		.animate({right:'0px'},3000)
		.animate({right:'-200px'},800)
		.animate({right:'-200px'},800,crowdLoop);
}

function alignVert(){
	$('#sponsBtn').val('S\nP\nO\nN\nS\nO\nR\nS\n');  
}