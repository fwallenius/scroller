

(function(window) {


    var draw = APP.Draw("drawingArea", 960, 540);
    

    var bg1 = APP.Background("images/bg1.png", 0),
        bg2 = APP.Background("images/bg2.png", 500),
        bg3 = APP.Background("images/bg3.png", 1000);

    draw.addEntity(bg1);
    draw.addEntity(bg2);
    draw.addEntity(bg3);

    for (var i = 0; i < 15; i++) {
        draw.addEntity(APP.Cloud());  
    }

    var mario = APP.Mario();
    draw.addEntity(mario);

    var fps = APP.Fps();
    draw.addEntity(fps);   
    
     


}(window));