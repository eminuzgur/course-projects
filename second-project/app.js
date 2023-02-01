$(document).ready(() => {
    $("#btn").click(function () {
        console.log("Hello");
        $(".table").slideToggle().toggleClass("active");
    });
    $("#exit").click(function () {
        $(".menu").css("display", "none");
    });
});
