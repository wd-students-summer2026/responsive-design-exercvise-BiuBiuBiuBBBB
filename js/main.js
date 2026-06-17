$(function () {

    $("#changeText").click(function () {
        $("#description").text(
            "Photography allows me to capture airplanes, landscapes, and northern lights."
        );
    });

    $("#photo").mouseover(function () {
        $(this).attr(
            "src",
            "images/DSC_6702-Enhanced-NR.jpg"
        );
    });

    $("#photo").mouseout(function () {
        $(this).attr(
            "src",
            "images/DSC_3901.JPG"
        );
    });

    $("#moveButton").click(function () {
        $("#box").animate({
            left: "200px",
            top: "50px"
        });
    });

});