(function () {
    var URL = "http://localhost:8080/OnlineDictionary_war_exploded/search";
    var welcome = "Welcome Wap Online Dictionary";
    var error = "Error Code: "
    var notFound = "Not found";

    function lookup() {
        console.log("lookup: " + $("#word").val());
        sendRequest();
    }

    function sendRequest() {
        $.ajax({
            "url": URL,
            "type": "POST",
            "dataType": "json",
            "data": {"word": $("#search_value").val()},
            "success": success,
            "error": error
        });
    }

    function success(data) {
        var result = "";
        console.log(data.length);
        if (data != null && data.length != 0) {
            data.forEach(function (element) {
                result += "<div class=\"row\">\n" +
                    "<div class='row_head'>" +
                    "<span class=\"word\">" + element.word + "</span>" +
                    "<span class=\"wordtype\"> " + element.wordtype + "</span>" +
                    "</div>\n" +
                    "<div class=\"definition\">" + element.definition + " </div>\n" +
                    "</div>";
            });
            $("#result").html(result);
        } else {
            $("#result").html(showMessage(notFound));
        }
        $("#result_num").html("Words: " + data.length);
    }

    function error(xhr, status, exception) {
        console.log("Error:");
        console.log(xhr);
        console.log(status);
        console.log(exception);
        $("#result").html(showMessage(error + status));
    }

    function loader() {
        $(document).ajaxStart(function () {
            $("#loader_container").fadeIn();
        }).ajaxStop(function () {
            $("#loader_container").fadeOut();
        });
        $("#loader_container").fadeOut();
    }

    function showMessage(msg) {
        return "<p class='message'>" + msg + "</p>";
    }

    function onLoad() {
        $("#lookup").on("click", lookup);
        $("#result").html(showMessage(welcome));
        loader();
    }

    window.onload = onLoad();
})();