
document.querySelector(".menu-button").addEventListener("click", function (e) {
    
    e.preventDefault();
    
	if ($('.cu-main-nav.ms-nav').hasClass('ms-nav-closed'))
    {
        $(this).addClass('active');
        $(this).parent().parent().siblings('.cu-nav-overlay').addClass('active');
        document.body.style.overflow = 'hidden';
        $('.cu-main-nav.ms-nav').removeClass('ms-nav-closed');
        //$('.cu-sub-card').addClass('active');
        $(".cu-main-nav.ms-nav").animate({
            right: '0'
        }, 100)
    } 
    else 
    {
        $(this).removeClass('active');
        $(this).siblings('cu-nav-overlay').removeClass('active');
        $(this).parent().parent().siblings('.cu-nav-overlay').removeClass('active');
        document.body.style.overflow = 'visible';
        $('.cu-main-nav.ms-nav').addClass('ms-nav-closed');
        //$('.cu-sub-card').removeClass('active');
        $(".cu-main-nav.ms-nav").animate({
            right: '-350'
        }, 100)
    }
	
});

/*
$( "#dataTable tbody tr" ).on( "click", function() {
  console.log( $( this ).text() );
});
*/
$(".cu-sn-trigger").on('click', function(e) {
//(".cu-main-nav-item.flex-container.align-justify.align-stretch.has-sub .cu-sn-trigger")."click", function (e) {
	e.preventDefault();
    $(".cu-sub-card ").removeClass('active');
	//alert(e.target);
    $(this).parent().addClass('active');
	$(this).siblings('.cu-sub-card.cu-sub-card-closed').addClass('active');
	$(this).siblings('.cu-sub-card.cu-sub-card-closed.active').removeClass('cu-sub-card-closed');
    $(this).siblings('.cu-sub-card.active').animate({
        left: '0px'
    }, 100);
});

$(".back-button.main-nav-trigger").on('click', function(e) {
//$(".cu-shuffle-menu .cu-nav-card .cu-sub-card .sub-back-btn-wrap .back-button.main-nav-trigger").addEventListener("click", function (e) {
    //alert("BACK CLICK");
    $(this).parent().parent().addClass('cu-sub-card-closed');
    e.preventDefault();
	$(this).parent().parent().animate({
        left: '540px'
    }, 100, function () {
		//$(this).parent().addClass('test');
        
        console.log( "$(this): " + $(this).prop('nodeName') );
        console.log( "$(this).parent(): " + $(this).parent().prop('nodeName') );
        console.log( "$(this).parent().parent(): " + $(this).parent().parent().prop('nodeName') );
    })
});