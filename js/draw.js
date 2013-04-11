

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
        }
        
    }

}