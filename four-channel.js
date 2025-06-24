let hydra, hydraCanvas;
hydraCanvas = document.getElementById("fourChannelCanvas");
hydraCanvas.width = window.innerWidth;
hydraCanvas.height = window.innerHeight;

hydraCanvas.getContext("webgl", { preserveDrawingBuffer: true });
hydra = new Hydra({
  canvas: hydraCanvas,
  detectAudio: true,
  enableStreamCapture: false,
});

let elt;
const s = (p1) => {
  p1.frameRate = 10;
  textArray = ["🪽","🤔", "🌉", "💸", "🇵🇭", "🙂‍↔️", "🏀", "🩸", "🤕"];

  p1.setup = () => {
    let canvas = p1.createCanvas(hydraCanvas.width, hydraCanvas.height);
    p1.pixelDensity(1);
    elt = canvas.elt;
    s0.init({ src: elt });
    canvas.hide();
  };

  p1.draw = () => {
    p1.clear();
    p1.textSize(p1.random(300));
    p1.strokeWeight(6);
    p1.stroke(0, 0, 0);
    p1.fill(200, 150, 0);
    index = Math.floor((1 * time) % textArray.length);
    p1.text(
      textArray[index],
      p1.random(p1.displayWidth),
      p1.random(p1.displayHeight)
    );
  };
};

let myp5 = new p5(s);

src(o0).scrollY(-0.003).scrollX(0.002).blend(o0, 0.5).layer(src(s0)).out(o0);

// PNP
s1.initImage("assets/pnp-ai.jpg");
src(s1).modulateRotate(osc(4, -0.3, 0)).out(o1);


// water texture
// https://upload.wikimedia.org/wikipedia/commons/2/26/Sea_wave_abstract_texture_%28Unsplash%29.jpg
s2.initImage(
  "assets/cameras-phones/000009150019.jpg"
);
src(s2).out(o2);

// video
s3.initVideo("assets/vids/boiler-room-sample.mp4");
src(s3).modulate(osc(6, -0.3, 0)).out(o3);

render();
