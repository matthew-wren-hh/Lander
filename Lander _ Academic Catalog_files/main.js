$(document).ready(function () {
  $.ajaxSetup({
    cache: false
    
    
    
  });
  
    if( $(".sortable").length )
    {
        console.log("sortable found!");
        console.log("Elements with .sortable: " + $(".sortable").length);
        
        var elementCount = 1;
        
        $(".sortable").each(function () {
            
            if ($(this).hasClass('small-only')) 
            {
                console.log("Small Only Found!");
                $(this).remove();
            }
            else
            {
                
                var myTable = $(this).attr("id", "sortClass" + elementCount);
                elementCount ++;
                
            }
         });
        
        $.getScript("https://www.lander.edu/_files/js/fancyTable.js", function(){
            // here you can use anything you defined in the loaded script
            $(".sortable").fancyTable({
				sortColumn: 0,
				sortable: true,
                sortOrder: 'asc',
				pagination: false,
				exactMatch: "auto",
				matchCase: false,
				inputPlaceholder: "Search",
				globalSearch: true,
				// globalSearchExcludeColumns: [2,4],
				sortFunction: function(a, b, o){
				    a = $($.parseHTML(a)).text().trim();
				    b = $($.parseHTML(b)).text().trim();
                // 	return((a<b)?-o.sortOrder:(a>b)?o.sortOrder:0);
                	if(a === "" || a === null) return 1;
                    if(b === "" || b === null) return -1;
                    if(a === b) return 0;
                    return a < b ? -o.sortOrder : o.sortOrder;
                }
            // 	perPage:10,
			// 	paginationClass: "btn btn-info"
			});
         });
         
    }
    else
    {
        console.log("sortable does not exist!");
    } 
    
    //Lander Directory
    if ($('.dirItem').length) { 
        const maskEmail = (email = '') => {
           const [name, domain] = email.split('@');
           const { length: len } = name;
           const maskedName = name[0] + '...' + name[len - 1];
           const maskedEmail = maskedName + '@' + domain;
           return maskedEmail;
        };

        const maskPhone = (email = '') => {
           const [prefix, number] = email.split('-');
           const { length: len } = prefix;
           //const maskedPrefix = prefix[0] + '...' + prefix[len - 1];
           const maskedPrefix = '(***) ***';
           const maskedNumber = maskedPrefix + '-' + number;
           return maskedNumber;
        };

        $('.email').each(function(){
            $(this).append( "<div class='hiddenEmail' style='position:absolute; top:0; visibility:hidden;'>" + $(this).find("a").attr("href") + "</div>" );
            //$(this).find("a").attr("href", "");
            $(this).find("a").text( maskEmail( $(this).find("a").text() ) );
         }); 

        $('.panel-text').each(function(){
            $(this).append( "<div class='hiddenNumber' style='position:absolute; top:0; visibility:hidden;'>" + $(this).find("small").first().text() + "</div>" );
            $(this).find("small").first().text( maskPhone( $(this).find("small").first().text() ) );
         });
        /*
        $('.panel-image').each(function(){
            $(this).append('<div class="overlay"></div>');

            // Get the current offset of the image
            var currentElementOffset=$(this).offset();

            // set the current offset of the overlay image
            //alert("top: " + currentElementOffset.top + "<br> left: " + currentElementOffset.left);

            $(".overlay").css({
                top: "-15px", 
                left: "-7px"
            });
            $(".overlay").fadeIn(10);
        });  
        */
        $(".dirItem").on({
            mouseenter: function () {
                $(this).find(".email").find("a").text( $(this).find('.hiddenEmail').text().split(":").pop() );
                $(this).find("small").first().text( $(this).find(".hiddenNumber").text() );
                //$(this).find(".overlay").fadeOut(250);
            },
            mouseleave: function () {
                $(this).find(".email").find("a").text( maskEmail( $(this).find(".email").find("a").text() ) );
                //$(this).find(".email").find("a").attr("href", "");
                $(this).find("small").first().text( maskPhone( $(this).find("small").first().text() ) );
                //$(this).find(".overlay").fadeIn(250);
            }
        });
    }//if
    
    //areas-of-study-search-mobile
    /*
    $('#areas-of-study-mobile-input').on("keyup", function() {
        console.log($(this).val());
        var value = $(this).val().toLowerCase();
        $("#mobile-search-table tr").filter(function() {
            console.log("filter function: " + $(this).text().toLowerCase() + $(this).text().toLowerCase().indexOf(value));
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    */
    
    
    
}); //document ready

$(window).on('load', function () {
  
  $(".rd-navbar-menu-wrap .rd-navbar-nav-wrap .rd-navbar-mobile-scroll .rd-navbar-nav li ul .cu-sub-card").css("display", "block");
  $("body").css("visibility", "visible");
  
  $(".page-overlay").fadeOut(250, function() { $(this).css("display", "none"); });
  
  /*** OMNILERT BOX ***/
  if ($(".SmartBoard_Table").length) {
    $(".omnilert_wrapper").css('display', 'block');
  }

  $(".alert_close").click(function () {
    //alert("Close Clicked!");
    $(".omnilert_wrapper").hide();
  });
  
  /****** BEGIN HOMEPAGE CARD *****/
    /****** BEGIN SCROLL *****/
    if($('.card-button-cover').length){  
        var $win = $(window);
        var $stat = $('.card-button-cover'); // Change this to affect your desired element.
        var scrollTop;
        var prev;
        var diff;
        
            $win.on('scroll', function (e) {
                scrollTop = $win.scrollTop();
                prev = $stat.offset();
                diff = scrollTop - prev.top;
                //console.log("SCROLLING");
                //console.log("DIFF: " + diff);
                if ( diff >= -250 ) {
                  if( !$stat.hasClass("card-showing") && !$stat.hasClass("scroll-stop") ){
                      $( ".ccu-priority-card" ).animate({ "right": "+=265px" }, "slow", stopSlideIn);
                      e.stopImmediatePropagation();
                      $stat.addClass("card-showing");
                      $( ".card-hamburger-container" ).addClass("change");
                  }
                  //console.log(">= -160" + diff);
                } 
                /*
                else if ( diff <= -420 ){
                  if( $stat.hasClass("card-showing")  && !$stat.hasClass("scroll-stop") ){
                      $( ".ccu-priority-card" ).animate({ "right": "-=225px" }, "slow", stopSlideOut);
                      e.stopImmediatePropagation();
                      $stat.removeClass("card-showing");
                  }
                  //console.log("<= -465" + diff);
                } 
                else {
                    //console.log('n');
                }
                
                function stopSlideOut(){
                    console.log("stopSlideOut Called");
                    $( ".ccu-priority-card" ).stop();
                }
                */
                
                function stopSlideIn(){
                    console.log("stopSlideIn Called");
                    $( ".ccu-priority-card" ).stop();
                }
            
            }).scroll();
            
            /****** END SCROLL *****/
            /****** BEGIN CARD EDGE CLICK *****/
        /*
        $( ".card-button-cover" ).on('click', function(e){
          console.log(e.target.className + "CLICKED!");
          if( $(e.target).hasClass("card-showing") ) {
            e.stopImmediatePropagation();
            console.log(e.target.className + "CLICKED!");
            $( ".ccu-priority-card" ).animate({ "right": "-=225px" }, "slow");
            $( ".card-button-cover" ).removeClass("card-showing");
            if( !$( ".card-button-cover" ).hasClass("scroll-stop") ){
                $( ".card-button-cover" ).addClass("scroll-stop");
            }
          }
          else if( $(e.target).hasClass("card-button-cover") ) {
            e.stopImmediatePropagation();
            console.log(e.target.className + "CLICKED!");
            $( ".ccu-priority-card" ).animate({ "right": "+=225px" }, "slow");
            $( ".card-button-cover" ).addClass("card-showing");
            if( !$( ".card-button-cover" ).hasClass("scroll-stop") ){
                $( ".card-button-cover" ).addClass("scroll-stop");
            }
          }
          else {
              e.preventDefault();
          }  
        });
        */
        /****** END CARD EDGE CLICK *****/
        /****** BEGIN HAMBURGER CLICK *****/
        $( document ).on('click', function(e){
            console.log(e.target.className + "CLICKED!");
            if ($(e.target).hasClass("card-hamburger-container") || $(e.target).hasClass("bar1") || $(e.target).hasClass("bar2") || $(e.target).hasClass("bar3"))
            {
              console.log("IF HIT");
              if( $(".card-button-cover").hasClass("card-showing") ) {
                e.stopImmediatePropagation();
                console.log("INSIDE IF HIT");
                $( ".ccu-priority-card" ).animate({ "right": "-=265px" }, "slow");
                $( ".card-button-cover" ).removeClass("card-showing");
                if( !$( ".card-button-cover" ).hasClass("scroll-stop") ){
                    $( ".card-button-cover" ).addClass("scroll-stop");
                }
              }
              else if( $(e.target).hasClass("card-hamburger-container") || $(e.target).hasClass("bar1") || $(e.target).hasClass("bar2") || $(e.target).hasClass("bar3") ) {
                e.stopImmediatePropagation();
                console.log("INSIDE ELSE IF HIT");
                $( ".ccu-priority-card" ).animate({ "right": "+=265px" }, "slow");
                $( ".card-button-cover" ).addClass("card-showing");
                if( !$( ".card-button-cover" ).hasClass("scroll-stop") ){
                    $( ".card-button-cover" ).addClass("scroll-stop");
                }
              }
              else {
                  e.preventDefault();
              }
            }
        });
    }
    /****** END HAMBURGER CLICK *****/
 /****** END HOMEPAGE CARD *****/
  
  $(window).resize(function(){
    
  });
  
}); //window load
