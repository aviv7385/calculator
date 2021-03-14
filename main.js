/// <reference path="jquery-3.5.1.js" />

function reset() {
    $("#display").val("");
}

$(function () {
    let plus;
    $("td > .calc-btn").click(function () {
        const value = $(this).val();
        $("#display").val($("#display").val() + value);
    });


    $("#equal").click(function () {
        $("#display").val(eval($("#display").val()));
    });
});


