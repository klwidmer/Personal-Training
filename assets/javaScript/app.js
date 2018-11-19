$(document).on("click", 'img', function () {
    var state = $(this).attr("data-state");
    var animatedURL = $(this).attr("data-animate");
    var stillURL = $(this).attr("data-still");
    if (state === "still") {
            $(this).attr("src", animatedURL);
            $(this).attr("data-state", "animated");
    } else {
            $(this).attr("src", stillURL);
            $(this).attr("data-state", "still");
            }
    })
    