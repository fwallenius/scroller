APP.Cloud = function() {

    var scale = 0.3 + Math.random() / 2,
        ypos = Math.random()*1000,
        xpos = Math.random()*3000,
        speed = 1.5 + Math.random()*3;

    var img = new Image();
    img.src = "images/cloud.png";


    return {

        tick: function() {
            xpos -= speed;

            if (xpos < -300) {
                xpos += 2000;
            }
        },

        draw: function(context) {

            context.drawImage(img, xpos, ypos, 200 * scale, 169 * scale);
        }

    }

};