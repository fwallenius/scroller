

APP.Mario = function() {

    var scale = 0.7,
        ypos = 150;

    var img = new Image();
    img.src = "images/mario.png";


    return {

        tick: function() {
            
        },

        draw: function(context) {

            context.drawImage(img, 100, ypos + (Math.sin(new Date().getTime() * 0.002) * 80), 196 * scale, 200 * scale);
        }

    }

};