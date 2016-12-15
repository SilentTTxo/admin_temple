String.prototype.format = function(args) {
	var result = this;
	if (arguments.length > 0) {    
		if (arguments.length == 1 && typeof (args) == "object") {
			for (var key in args) {
				if(args[key]!=undefined){
					var reg = new RegExp("({" + key + "})", "g");
					result = result.replace(reg, args[key]);
				}
			}
		}
		else {
			for (var i = 0; i < arguments.length; i++) {
				if (arguments[i] != undefined) {
                    //var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题，谢谢何以笙箫的指出
					var reg= new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}
var TT = {
	init : function(){
		//载入模板文件
		$(".page-sidebar-menu").load("/include/sidebar.html",function(){
			//初始化sidebar样式
			url = window.location.pathname
			$("a[href='"+url+"']").parent().addClass("active");
			$("a[href='"+url+"']").parent().parent().parent().addClass("active");

			//载入页头
			$("#pageinfo").load("/include/pageinfo.html",function(){
				//填充页头
				$(".page-title")[0].innerHTML = $("a[href='"+url+"']")[0].innerHTML;
				$(".breadcrumb").append('<li><a href="#">'+$("a[href='"+url+"']").parent().parent().parent().children().children()[1].innerHTML+'</a><i class="icon-angle-right"></i></li>');
				$(".breadcrumb").append('<li><a href="#">'+$("a[href='"+url+"']")[0].innerHTML+'</a></li>');
			});
		});
		$("head").load("/include/head.html");
		$(".pull-right").load("/include/pull-right.html");
		$(".footer").load("/include/footer.html");
	},
	table : function(thName,param,style,apiUrl){
		$(".dataContent").append("yeah");
	}
}