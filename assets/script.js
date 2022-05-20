//  current day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".desc").val();
        var time = $(this).parent().attr("id");

        // Save in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //current number of hours
        var timeNow = moment().hour();

        // loop  time blocks
        $(".time").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);


            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }


    $("#hour1 .desc").val(localStorage.getItem("hour1"));
    $("#hour2 .desc").val(localStorage.getItem("hour2"));
    $("#hour3 .desc").val(localStorage.getItem("hour3"));
    $("#hour4 .desc").val(localStorage.getItem("hour4"));
    $("#hour5 .desc").val(localStorage.getItem("hour5"));
    $("#hour6 .desc").val(localStorage.getItem("hour6"));
    $("#hour7 .desc").val(localStorage.getItem("hour7"));
    $("#hour8 .desc").val(localStorage.getItem("hour8"));
    $("#hour9 .desc").val(localStorage.getItem("hour9"));
    $("#hour10 .desc").val(localStorage.getItem("hour10"));
    $("#hour11 .desc").val(localStorage.getItem("hour1"));
    $("#hour12 .desc").val(localStorage.getItem("hour12"));
    $("#hour1 .desc").val(localStorage.getItem("hour1"));
    $("#hour2 .desc").val(localStorage.getItem("hour2"));
    $("#hour3 .desc").val(localStorage.getItem("hour3"));
    $("#hour4 .desc").val(localStorage.getItem("hour4"));
    $("#hour5 .desc").val(localStorage.getItem("hour5"));
    $("#hour6 .desc").val(localStorage.getItem("hour6"));
    $("#hour7 .desc").val(localStorage.getItem("hour7"));
    $("#hour8 .desc").val(localStorage.getItem("hour8"));
    $("#hour9 .desc").val(localStorage.getItem("hour9"));
    $("#hour10 .desc").val(localStorage.getItem("hour10"));
    $("#hour11 .desc").val(localStorage.getItem("hour11"));
    $("#hour12 .desc").val(localStorage.getItem("hour12"));

    timeTracker();
})

"use strict";
(function(){
    var cursor = document.querySelector('.cursor');
    var cursorcircle = document.querySelector('.cursor-circle');
    var links =document.querySelectorAll ('a');

    var editCursor = function editCursos(event){
        cursor.style.left = event.clientX + 'px';
        cursor.style.top = event.clientY + 'px';
        cursorcircle.style.left = event.clientX + 'px';
        cursorcircle.style.top = event.clientY + 'px';
    }

    window.addEventListener('mousemove',editCursor);
})();

/*javascript*/