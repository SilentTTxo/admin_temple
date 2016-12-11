var TT = {
	init : function(){
		$(".page-sidebar-menu").load("/include/sidebar.html");
		$("head").load("/include/head.html");
		$(".pull-right").load("/include/pull-right.html");
		$(".footer").load("/include/footer.html");
		$("#pageinfo").load("/include/pageinfo.html");
	}
}