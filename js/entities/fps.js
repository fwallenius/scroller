APP.Fps = function() {

    var redraws = 0,
        currentSec = 0,
        fps = 0;

    return {

        tick: function() {
            
        },

        draw: function(context) {
            redraws += 1;
            var sec = new Date().getSeconds();
            if (sec !== currentSec) {
                currentSec = sec;
                fps = redraws;
                redraws = 0;
            }

            context.fillStyle = 'white';
            context.fillText('Fps: ' + fps, 10, 20);
        }

    }

};