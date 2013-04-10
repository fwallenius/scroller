

APP.Draw = function(canvasId, width, height) {

    var canvas = document.getElementById(canvasId),
        context = canvas.getContext("2d"),
        entities = [];

    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);


    function tick() {
        for (var i = 0; i < entities.length; i++) {
            entities[i].tick();
        }
    }


    function redraw() {
        context.clearRect(0, 0, width, height);
        for (var i = 0; i < entities.length; i++) {
            entities[i].draw(context);    
        }

        requestAnimationFrame(redraw);
    }


    // Start ticker and continuous redrawing
    window.setInterval(tick, 1000/60);
    redraw();

    return {

        addEntity: function(entity) {
            entities.push(entity);
        },

        test: function() {
            console.log("Loading");
            var img = new Image();
            img.onload = function() {
                console.log("Loaded");
                context.drawImage(img, 0, 0, 500, 640);
            }
            img.src = "images/bg1.png";

            var img2 = new Image();
            img2.onload = function() {
                console.log("Loaded");
                context.drawImage(img2, 500, 0, 500, 640);
            }
            img2.src = "images/bg2.png";

            var img3 = new Image();
            img3.onload = function() {
                console.log("Loaded");
                context.drawImage(img2, 1000, 0, 500, 640);
            }
            img3.src = "images/bg3.png";
        }
    }

}