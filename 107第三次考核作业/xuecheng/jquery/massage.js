$(function () {
			$("#racePop").hide(300);
            //弹出层
            $("#btnShowDiv").click(function (event) {
                $("#racePop").show(300);
            });
            //隐藏层
            $("#close").click(function (event) {
                $("#racePop").hide(300);
            });
        });