

let hydra, hydraCanvas;
hydraCanvas = document.getElementById("myCanvas");
hydraCanvas.width = window.innerWidth
hydraCanvas.height = window.innerHeight


hydraCanvas.getContext("webgl", { preserveDrawingBuffer: true });
hydra = new Hydra({
  canvas: hydraCanvas,
  detectAudio: false,
  enableStreamCapture: false,
});


let elt;
const s = ( p1 ) => {

p1.frameRate=(10);
textArray = ["🪽","🌉","🙂‍↔️","🏀","🏆"]  

  p1.setup = () => {
    let canvas = p1.createCanvas(hydraCanvas.width, hydraCanvas.height);
    p1.pixelDensity(1);
    elt = canvas.elt;
    s0.init({src:elt})
    canvas.hide();
  };

  p1.draw = () => {
p1.clear();
p1.textSize(p1.random(300))
p1.strokeWeight(2);
p1.stroke(0,0,0);
p1.fill(200,150,0);
  index = Math.floor(0.9*time%textArray.length)
  p1.text(textArray[index],p1.random(p1.displayWidth),p1.random(p1.displayHeight))
  };


};

let myp5 = new p5(s);


src(o0).scrollY(-0.003).scrollX(0.002).blend(o0,0.5).layer(src(s0)).out(o0)




render()