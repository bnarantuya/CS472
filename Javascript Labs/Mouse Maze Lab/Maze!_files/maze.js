console.log("loaded");

var isStarted = false;
var isWon = false;
$(document).ready(function () {
    events.gameStart();
});


var events = {
    touchBoundary: function () {
        $('.boundary').mouseover(function () {
            if(isStarted) {
                $('.boundary').addClass('youlose');
                alert('Sorry, you lost :[');
                isStarted = false;
            }
        });

    },
    
    startAgain: function () {
        $("body").keydown(function (event) {
            if (event.which == 83 && isStarted == false) {
                $('.boundary').removeClass('youlose');
                isStarted = true;
                isWon = false;
            }
        });
    },

    gameStart: function() {
        $('#start').click(function() {
            events.touchBoundary();
            events.startAgain();
            events.winCondition();
            $('.boundary').removeClass('youlose');
            isStarted = true;
        });
    },

    winCondition: function() {
        $('#end').mouseover(function() {
            if(!isWon) {
                alert('You win :]');
                isStarted = false;
                isWon = true;
            }

        });
    }
}