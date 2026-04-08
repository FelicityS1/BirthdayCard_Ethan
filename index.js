$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var music = document.getElementById("bgMusic");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
        music.volume = 0;
        music.play();

         var fade = setInterval(function() {
            if (music.volume < 0.1) {
                music.volume += 0.01; 
            } else {
                clearInterval(fade);
            }
        }, 100); 
    }


    function close() {
        envelope.addClass("close")
            .removeClass("open");
        music.pause();      
        music.currentTime = 0;

         var fade = setInterval(function() {
            if (music.volume > 0.01) {
                music.volume -= 0.01;
            } else {
                clearInterval(fade);
                music.pause();
                music.currentTime = 0;
            }
        }, 100);
    }
    

})