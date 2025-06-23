

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




// foliage
s1.initImage("https://cdn.glitch.global/166b024b-df86-438f-b85c-5d7e7edea0a6/philippine%20national%20police%20waltzing%20at%20the%20EDSA%20rally%20with%20the%20photo%20of%20Ferdinand%20Marcos%20in%20the%20background%20in%20an%20ornate%20frame.png?v=1749924855601")
src(s1).modulateRotate(osc(4,-0.3,0)).out(o1)


// Abdul playing ball
s2.initImage("https://cdn.glitch.global/166b024b-df86-438f-b85c-5d7e7edea0a6/MCC5.jpg?v=1745705456586")
src(s2).modulateScale(osc(1,-0.3,1)).out(o2)


// water texture
s3.initImage("https://upload.wikimedia.org/wikipedia/commons/2/26/Sea_wave_abstract_texture_%28Unsplash%29.jpg")
src(s3).modulateScale(osc(4,-0.3,0)).out(o3)

    

render()