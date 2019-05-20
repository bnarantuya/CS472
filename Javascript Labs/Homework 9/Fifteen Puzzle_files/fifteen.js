
init = (function () {
    // var puzzleArea = document.getElementById('puzzlearea');
    var puzzleArea = $('#puzzlearea');
    var divs = $('div', puzzleArea);

    // initialize each piece
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];


        // calculate x and y for this piece
        var x = ((i % 4) * 100);
        var y = (Math.floor(i / 4) * 100);

        // set basic style and background
        div.className = "puzzlepiece";
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.backgroundImage = 'url("./Fifteen Puzzle_files/background.jpg")';
        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

        // store x and y for later
        div.x = x;
        div.y = y;
    }

    var events = {
        clickHandle: function () {
            $('.puzzlepiece').click(function () {
                // if ($(this).hasClass('movablepiece')) {
                var ex = parseInt($('#empty').css('left'));
                var ey = parseInt($('#empty').css('top'));
                var cx = parseInt($(this).css('left'));
                var cy = parseInt($(this).css('top'));
                var direction = '';

                if (ex - 100 == cx && ey == cy) direction = 'left';
                else if (ex == cx && ey - 100 == cy) direction = 'top';
                else if (ex + 100 == cx && ey == cy) direction = 'right';
                else if (ex == cx && ey + 100 == cy) direction = 'bottom';

                events.moveablePiece();

                swap($(this), direction);
                // }
                // let left = parseInt($(this).css('left'));
                // $(this).css('left', left+100);

            });
        },

        moveablePiece: function () {

            $('#puzzlearea div').removeClass('movablepiece');

        },

        shuffleHandler : function() {
            $('#shufflebutton').click(function() {
                shuffle();
            });
        }
    }

    function swap(target, direction) {
        if (direction != '' || direction != null) {
            var tx = parseInt($(target).css('left'));
            var ty = parseInt($(target).css('top'));
            var ex = parseInt($('#empty').css('left'));
            var ey = parseInt($('#empty').css('top'));

            if (direction == 'left') {
                $(target).css('left', tx + 100);
                $('#empty').css('left', ex - 100);
            }
            else if (direction == 'top') {
                $(target).css('top', ty + 100);
                $('#empty').css('top', ey - 100);
            }
            else if (direction == 'right') {
                $(target).css('left', tx - 100);
                $('#empty').css('left', ex + 100);
            }
            else if (direction == 'bottom') {
                $(target).css('top', ty - 100);
                $('#empty').css('top', ey + 100);
            }
        }
    }

    function shuffle() {
        for (let i = 0; i < 500; i++) {
            $(`#puzzlearea div:nth-child(${parseInt(Math.random() * 16)})`).click();
        }
    }
    events.clickHandle();
    events.moveablePiece();
    events.shuffleHandler();

    // events.swap();
})();


