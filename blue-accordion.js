$(function () {
	/* variables */	
	var thisAccordion;	
	var thisAccordionHeight;
	var item;	
	var firstTimeLoadPage = false;

	

	/* close others */
	function closeOtherAccordion(item){
		$("#container").children().not(item).animate({height:'40px'});	
	}

	/* hash code loader */
	routie({'item1':function () {
			if(firstTimeLoadPage === true){
				$("#accordion1").animate({height:"150px"});
				item = "#accordion1";			
				closeOtherAccordion(item);
			}
		},
		'item2': function () {
			if(firstTimeLoadPage === true){
				$("#accordion2").animate({height:"150px"});
				item = "#accordion2";
				closeOtherAccordion(item);
			}
		},
		'item3': function () {
			if(firstTimeLoadPage === true){
				$("#accordion3").animate({height:"150px"});		
				item = "#accordion3";			
				closeOtherAccordion(item);
			}
		},
		'item4': function () {
			if(firstTimeLoadPage === true){
				$("#accordion4").animate({height:"150px"});
				item = "#accordion4";
				closeOtherAccordion(item);
			}
		}		
	});

	/* open the current accordion has been clicked */
	$(this).find(".accordionTitle").click(function(){
		thisAccordionHeight = $(this).parent().height();
		thisAccordion = $(this).parent();
		if(thisAccordionHeight !== 40){		
			$(this).parent().animate({height:'40px'});				
		}
		else{	
			$(this).parent().animate({height:'150px'});
			item = thisAccordion;			
			closeOtherAccordion(item);	
		}		
	});
	
	/* load first item*/
	function openFirstAccordion(){
		$("#container > div:first-child").animate({height:'150px'});
		item = "#container > div:first-child";	
		closeOtherAccordion(item);
		firstTimeLoadPage = true;
	}
	openFirstAccordion();
		
});
