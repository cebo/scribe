$(window).load(function(){
    $(".home-intro h1").slabText({
        // Don't slabtext the headers if the viewport is under 380px
        "viewportBreakpoint":380
    });
});



function thirty_pc() {
	var height = $(window).height();
	var thirtypc = (95 * height) / 100;
	var seventypc = (55 * height) / 100;
	var forty = (45 * height) / 100;
	thirtypc = parseInt(thirtypc) + 'px';
	 	$(".home-intro-copy").css('minHeight',thirtypc);
	 	$(".gallery").css('height',thirtypc);
	 	
}

$(document).ready(function() {
	thirty_pc();
	$(window).bind('resize', thirty_pc);
});

 	
 	
$(window).bind('scroll',function(e){
	parallaxScroll();
});


function parallaxScroll(){
	var scrolledY = $(window).scrollTop();
	var scrollBottom = $(window).scrollTop() + $(window).height();

$('.bgWrapper').css('background-position','center -'+((scrolledY*0.2))+'px');
$('.home-intro-copy').css('top','-'+((scrolledY*0.9))+'px');
$('.home-intro').css('transform', 'translate3d(0px, -'+(scrolledY*0.06)+"px"+',0px)');
$('.bg-img').css('transform', 'translate3d(0px,'+(scrolledY*0.06)+"px"+',0px)');
}




$(document).ready(function(){
	
	$(".heightset").css({'height':($(".home-intro").height()+350+'px')});
	
	$(".dripper a").click(function(e){
		e.preventDefault();
		
	});
	
	
	
	$("#comments h2").click(function(e){
	e.preventDefault();
	    var bion = $("#comments");
	    if(bion.hasClass('gone'))
	        bion.removeClass('gone');
	    else
	        bion.addClass('gone');
	});
	
	$(".checker").stick_in_parent()
	
	.on("sticky_kit:stick", function(e) {
    	$(".homecontainer").addClass("housearrest");
    	$(".hiddenauthor").addClass("comeback");
 	 })
	 .on("sticky_kit:unstick", function(e) {
    	$(".homecontainer").removeClass("housearrest");
    	$(".hiddenauthor").removeClass("comeback");
	});
	
	//$(".querybar").stick_in_parent({
	//		offset_top: 78
	//	});
	
	
	$(".openleftnav").click(function(e){
		e.preventDefault();
		$(".lining").removeClass("push-top").removeClass("flipped-right").addClass("flipped-left");
		$(".topnav").removeClass("topready");
		$(".rightnav").removeClass("rightready");
		$(".leftnav").addClass("leftready");
		$("#main").addClass("lstilled");
		$(".closer").removeClass("open-right");
		$(".closer").addClass("open-left");
		
	});
	$(".closeleftnav").click(function(e){
		e.preventDefault();
		$(".lining").removeClass("push-top").removeClass("flipped-left").removeClass("flipped-right");
		$(".topnav").removeClass("topready");
		$(".leftnav").removeClass("leftready");
		$("#main").removeClass("rstilled");
		$("#main").removeClass("lstilled");
		$(this).removeClass("open-left");
		$(this).removeClass("open-right");
	});	
	
	$(".openrightnav").click(function(e){
		e.preventDefault();
		$(".lining").removeClass("push-top").removeClass("flipped-left").addClass("flipped-right");
		$(".topnav").removeClass("topready");
		$(".leftnav").removeClass("leftready");
		$(".rightnav").addClass("rightready");
		$("#main").addClass("rstilled");
		$(".closer").removeClass("open-left");
		$(".closer").addClass("open-right");
		
	});
	
	$(".closerightnav").click(function(e){
		e.preventDefault();
		$(".lining").removeClass("push-top").removeClass("flipped-left").removeClass("flipped-right");
		$(".topnav").removeClass("topready");
		$(".leftnav").removeClass("leftready");
		$("#main").removeClass("rstilled");
		$("#main").removeClass("lstilled");
		$(this).removeClass("open-left");
		$(this).removeClass("open-right");
	});	

	$(".closer").click(function(e){
		e.preventDefault();
		$(".lining").removeClass("push-top").removeClass("flipped-left").removeClass("flipped-right");
		$(".topnav").removeClass("topready");
		$(".leftnav").removeClass("leftready");
		$("#main").removeClass("rstilled");
		$("#main").removeClass("lstilled");
		$(this).removeClass("open-left");
		$(this).removeClass("open-right");
	});
	
	$(".scroll").click(function(event) {
	    event.preventDefault();
	    $('html,body').animate( { scrollTop:$(this.hash).offset().top } , 1000);
	    });
	 
	  
	  
	  $('.authorsection').bind('inview', function (event, visible) {
		  if (visible == true) {
		    	$(this).addClass("appearman")
		  	} else {
		  		$(this).removeClass("appearman")
		  }
		});
		
	  $('.related').bind('inview', function (event, visible) {
		  if (visible == true) {
		    	$(this).addClass("appearman")
		  	} else {
		  		$(this).removeClass("appearman")
		  }
		});

		$('.contentcontainer  img').bind('inview', function (event, visible) {
		  if (visible == true) {
		    	$(this).addClass("appearmann")
		  	} else {
		  		$(this).removeClass("appearmann")
		  }
		});
			
		$('.post').bind('inview', function (event, visible) {
		  if (visible == true) {
		    	$(this).addClass("available")
		  	} else {
		  		
		  }
		});		
	
		  // TABS FUNCTION //
	$('.tabs-wrapper').each(function() {
		$(this).find(".tab-content").hide(); //Hide all content
		$(this).find("ul.tabs li:first").addClass("active").show(); //Activate first tab
		$(this).find(".tab-content:first").show(); //Show first tab content
	});
	$("ul.tabs li").click(function(e) {
		$(this).parents('.tabs-wrapper').find("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(this).parents('.tabs-wrapper').find(".tab-content").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$("li.tab-item:first-child").css("background", "none" );
		$(this).parents('.tabs-wrapper').find(activeTab).fadeIn(); //Fade in the active ID content
		e.preventDefault();
	});
	$("ul.tabs li a").click(function(e) {
		e.preventDefault();
	})
	$("li.tab-item:last-child").addClass('last-item');


	// ACCORDION FUNCTION //		
	$('.ac-btn').click(function() {	

		$('.ac-btn').removeClass('on');
		$('.ac-selected').slideUp('normal');
		$('.ac-content').removeClass('ac-selected');
		$('.ac-content').slideUp('normal');
		if($(this).next().is(':hidden') == true) {
			$(this).addClass('on');
			$(this).next().slideDown('normal');
		 }   
	 });
	$('.ac-btn').mouseover(function() {
		$(this).addClass('over');
	}).mouseout(function() {
		$(this).removeClass('over');										
	});	
	$('.ac-content').hide();		
	
	// TOGGLE FUNCTION //
	$('#toggle-view li').click(function () {
        var text = $(this).children('div.panel');
        if (text.is(':hidden')) {
            text.slideDown('200');
            $(this).children('span').addClass('toggle-minus');     
            $(this).addClass('activated');     
        } else {
            text.slideUp('200');
			$(this).children('span').removeClass('toggle-minus'); 
            $(this).children('span').addClass('toggle-plus'); 
			$(this).removeClass('activated'); 			
        }
         
    });
    
    
    $(function($) {
				
		$("#carousel-gallery").touchCarousel({				
			itemsPerPage: 1,	
			autoplay: true,			
			scrollbar: true,
			scrollbarAutoHide: false,
			scrollbarTheme: "dark",				
			pagingNav: false,
			itemFallbackWidth: 500,
			snapToItems: false,
			scrollToLast: false,
			useWebkit3d: true,				
			loopItems: true
		});			
	});

      		

});
