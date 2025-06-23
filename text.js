// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// by nervousdata

(function() {
    const height = window.innerHeight * 0.07;

    // Create a new p5 instance
    const myP5 = new p5((sketch) => { // Change 'P5' to 'p5'
        sketch.draw = () => {
            sketch.background(250, 250, 250);
            sketch.fill(0, 0, 0);
            sketch.textSize(height);
            sketch.textLeading(height * 1.5);
            sketch.textFont("serif");
            sketch.text("The twisting of the largest cables, the rolling, hammering, and cutting large masses of iron, the draining of our mines, the rolling, hammering, and cutting large masses of iron, the draining of our mines, the twisting of the largest cables, the rolling, hammering, and cutting, the draining, the twisting, the twisting of the largest cables, the rolling, hammering, and cutting large masses of iron, the draining of our mines", 5, 100, sketch.windowWidth, sketch.windowHeight);
        }; // Words: Charles Babbage

        sketch.hide();

        s0.init({ src: sketch.canvas });

        const o = () => osc(22, 0.02, 0).posterize(8).thresh(0.5);
        const txt = () => src(s0);
        
        txt().scrollX(0.1, -0.011).mask(o())
          .add(txt().scrollX(0.1, 0.012).mask(o().invert(1)))
          .layer(src(o0).mask(o().diff(o().rotate(Math.PI * 0.25)).scale(0.75), 0.01))
          .out(o0);
    });
})();