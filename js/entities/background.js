

APP.Background = function(imageUrl, xpos) {

    var img = new Image();
    img.src = imageUrl;


    return {

        tick: function() {
            xpos -= 0.5;

            if (xpos === -500) {
                xpos += 1500;
            }
        },

        draw: function(context) {
            context.drawImage(img, xpos, 0, 500, 640);
        }

    }

};