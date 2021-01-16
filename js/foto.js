$("#photo-selector").on('change', function (e) {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
    //$(".foto").removeClass('pa-carousel-widget');
	$(".foto").attr('style','width: 100%; height: 480px; display: none;');
	
	$("#"+valueSelected).attr('style','width: 100%; height: 480px; display: block;');
	$('#foto').hide().show(0);
	//$("#"+valueSelected).find("iframe").attr('style','visibility:visible');
	//$("#"+valueSelected).addClass('pa-carousel-widget');
	
	
	
});

$( document ).ready(function() {
	//$(".foto").attr('style','width: 100%; height: 480px; display: none !important;');
	
	$.ajax({
	  method: "GET",
	  url: "https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js",
	  dataType: "script",
	  complete: function(){
		  $(".foto").attr('style','width: 100%; height: 480px; display: none;');
	  }
	});
});