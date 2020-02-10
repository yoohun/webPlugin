(function ($) {
    // 初始化checkbox
    $.fn.initCheckbox = function () {
        $.fn.getCheckboxOn = function () {
            $(this).each(function () {
                $(this).parent().find(".boxOff").addClass("boxOffHide");
                $(this).parent().find(".boxPoint").addClass("boxPointNff");
                $(this).parent().find(".boxDiv").addClass("boxDivOn")
                $(this).parent().find(".boxOn").removeClass("boxOnHide");
                // $(this).attr("name", "checboxOn");
                $(this).parent().find("input").attr("name", "checboxOn");
            })
            return true;
        }
        $.fn.getCheckboxOff = function () {
            $(this).each(function () {
                $(this).parent().find(".boxOff").removeClass("boxOffHide");
                $(this).parent().find(".boxPoint").removeClass("boxPointNff");
                $(this).parent().find(".boxDiv").removeClass("boxDivOn");
                $(this).parent().find(".boxOn").addClass("boxOnHide");
                $(this).parent().find("input").attr("name", "checboxOff");
            })
            return true;
        }

        // 修改checkbox的开关状态
        // 给开关设置name值，如果开关是一个开的状态的话，那么name值就是on，反之则是off
        return $(this).each(function() {
            if($(this).hasClass("pluginCheckbox")){
                $(this).wrap("<div class='textCheckbox'></div>");
                $(this).parent().append("<div class='boxDiv'>" +
                    "<div class='boxPoint'></div>" +
                    "<div class='boxOn'>是</div>" +
                    "<div class='boxOff'>否</div>" +
                    "</div>");
                if($(this).attr("name") == "checboxOn"){
                    $(this).parent().find(".boxOff").addClass("boxOffHide");
                    $(this).parent().find(".boxPoint").addClass("boxPointNff");
                    $(this).parent().find(".boxDiv").addClass("boxDivOn");
                } else {
                    $(this).parent().find(".boxOn").addClass("boxOnHide");
                }
            }
        });
    }


    //获取checkbox的状态值
    $.fn.getCheckboxStatus = function () {
        return $(this).attr("name") == "checboxOn" ? true : false
    }

    $(document).ready(function() {
        // on click checkbox的点击事件
        $(document).delegate('.boxDiv', 'click tap', function(e) {
            if($(this).hasClass("boxDivOn")){
                $(this).getCheckboxOff();
            } else {
                $(this).getCheckboxOn();
            }

        });

    });

})(jQuery);
