/**
 * Created by taylorcase on 4/14/14.
 */




//Uncomment this to clear local storage.
//localStorage.clear();


//Get previous count of up votes
var localStorageThumbsUp = localStorage.getItem('thumbsUp');

//Checks to see if anything is in local storage then sets number
    if (localStorageThumbsUp === 'NaN' ) {
    localStorageThumbsUp = 0;
}
    else {
    localStorageThumbsUp = parseInt(localStorageThumbsUp);
}
console.log("local storage = " + localStorageThumbsUp);

//Get previous count of down votes
var localStorageThumbsDown = localStorage.getItem('thumbsDown');

//Checks to see if anything is in local storage then sets number
    if (localStorageThumbsDown === 'NaN' ) {
    localStorageThumbsDown = 0;
}
    else {
    localStorageThumbsDown = parseInt(localStorageThumbsDown);
}

//Add previous count of votes together
var thumbs = localStorageThumbsUp + localStorageThumbsDown;

//Get old comments
//var oldComments = localStorage.getItem('comments');

$(document).ready(function() {

//Add old comments
//    $("#comments").prepend(oldComments);

//Declare variables inside document ready function
    var comment = "";
    var x = thumbs;
    var thumbsUp = localStorageThumbsUp;
    var thumbsDown = localStorageThumbsDown;

//Vote up function when user clicks up arrow
    $(".vote_up").click(function () {
        event.preventDefault();

        thumbsUp += 1;
        x += 1;
        $('#voteBalance').html("Rating: " + x);
        localStorage.setItem('thumbsUp', thumbsUp);

//Gets local storage to check for errors (testing purpose only)
        console.log("Thumbs Up: " + localStorage.getItem('thumbsUp'));
        console.log("Thumbs Down: " + localStorage.getItem('thumbsDown'));
    })

//Vote down function when user clicks down arrow
    $(".vote_down").click(function () {
//        event.preventDefault();

            thumbsDown -= 1;
            x -= 1;
            $('#voteBalance').html("Rating: " + x);
            localStorage.setItem('thumbsDown', thumbsDown);

//Gets local storage to check for errors (testing purpose only)
            console.log("Thumbs Down: " + localStorage.getItem('thumbsDown'));
            console.log("Thumbs Up: " + localStorage.getItem('thumbsUp'));

        });

//Add comment function
    $('#add').click(function (event) {
        event.preventDefault();
        var comment = $('#comment').val();

        var currentTime = new Date();
        var day = currentTime.getDate();
        var month = currentTime.getMonth() + 1;
        var year = currentTime.getFullYear();


        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var amorpm = "AM";

        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (hours > 12) {
            hours = hours - 12;
            amorpm = "PM";
        }

        var commentArray = [];

        //declare array

        //push comments into array

        //put them in local storage

        //use array to search for comments in

        console.log(hours + ":" + minutes + " " + amorpm + " " + day + "/" + month + "/" + year);


        //if the to-do is empty
        if ($("#comment").val() === '') {
            $('#alert').html("<strong>Warning!</strong> You left the to-do empty");
            $('#alert').fadeIn().delay(1000).fadeOut();

            return false;
        }
        // add the list item

        $('#comments').prepend("<p>" + hours + ":" + minutes + " " + amorpm + " " + day + "/" + month + "/" + year + ":" + "<br/>" + comment + "</p>");

        // delete whatever is in the input

        var comments = $("p").text();
        console.log(comments);
        localStorage.setItem('comments', "<p>" + comments + "</p>" + "<br/>");
        $('#form')[0].reset();
        return false;
    })
});


//Can use for AJAX later on



//var x = $("strong.votes_balance").text();

//$("input.vote_down").click(function() {
//    x -= 1;
//
//    $.ajax({
//        type: "POST",
//        url: "http://localhost/questions/vote_down/4",
//        success: function()
//        {
//            $("strong.votes_balance").html((parseInt(x) - parseInt(1)));
//            $("input[type=button]").hide();
//            $(".thumbsup_hide").show();
//            alert(x);
//        }
//    });
//});


//$("input.vote_up").click(function() {
//        x += 1;
//
//    $.ajax({
//        type: "POST",
//        url: "http://localhost/questions/vote_up/4",
//        success: function()
//        {
//            $("input[type=button]").hide();
//            $("strong.votes_balance").html((parseInt(x) + parseInt(1)));
//            $(".thumbsup_hide").show();
//            alert(x);
//        }
//    });
//$('document').ready(function($){
//    var commentform=$('form#commentform');
//    commentform.prepend('<div id="wdpajax-info" ></div>');
//    var infodiv=$('#wdpajax-info');
//    commentform.validate({
//        submitHandler: function(form){
//            var formdata=commentform.serialize();
//            infodiv.html('<p>Proszę czekać...</p>');
//            var formurl=commentform.attr('action');
//            $.ajax({
//                type: 'post',
//                url: formurl,
//                data: formdata,
//                error: function(XMLHttpRequest, textStatus, errorThrown){
//                    infodiv.html('<p class="wdpajax-error" >Sprawdź wszystkie pola!</p>');
//                },
//                success: function(data, textStatus, html){
//                    $("ul.commentlist").append(formdata);
//                    $("ul.commentlist li:last").fadeIn("slow");
//                    if(data=="success")
//                        infodiv.html('<p class="wdpajax-success" >Dzięki, komentarz został dodany!</p>');
//                    else
//                        commentdiv.html('<p class="wdpajax-error" >Błąd</p>');
//                    commentform.find('textarea[name=comment]').val('');
//                }
//            });
//        }
//    });
//});
////})
