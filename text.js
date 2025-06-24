function createTranslucentScrollingText(containerId, text, options = {}) {
    console.log("createTranslucentScrollingText called with:");
  
    const container = document.getElementById(containerId);
  
    if (!container) {
      console.error(`Container with ID "${containerId}" not found.`);
      return;
    }
    console.log("Container found:");
  
    // Set default options
    const fontSize = options.fontSize || 24;
    const fontFamily = options.fontFamily || 'sans-serif';
    const color = options.color || 'white';
    const opacity = options.opacity === undefined ? 0.7 : options.opacity;
    const speed = options.speed || 20;
  
    console.log("Options used:");
  
    // Create the text element
    const textElement = document.createElement('div');
    textElement.textContent = text;
    textElement.classList.add('scrolling-text');
    textElement.classList.add(`text-size-${fontSize}`); // Font size class
    textElement.classList.add(`text-color-${color.replace(/\s+/g, '-')}`);
    textElement.style.opacity = opacity; // Set inline opacity for now
    textElement.style.fontFamily = fontFamily // Set inline font style
    container.appendChild(textElement);
  
    console.log("Text element created:");
  
    // Initial position
    let textWidth = textElement.offsetWidth;
    textElement.style.top = container.offsetHeight + 'px';
  
    console.log("Text element initialized at top:");
  
    // Scrolling function
    function scrollText() {
      console.log("scrollText called");
      let currentTop = parseFloat(textElement.style.top);
      let newTop = currentTop - (speed / 60);
  
      if (newTop + textElement.offsetHeight < 0) {
        newTop = container.offsetHeight;
      }
  
      textElement.style.top = newTop + 'px';
      console.log("Text element new top position:");
      requestAnimationFrame(scrollText);
    }
  
    // Start scrolling
    scrollText();
    console.log("scrollText started");
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    createTranslucentScrollingText('textContainer', 'the older I get, the more I remember 2017\\2025', {
      fontSize: 32,
      color: 'white',
      opacity: 0.9,
      speed: 60,
       fontFamily: 'Orbitron',  //<------ Set Font Family
       
    });
  
    createTranslucentScrollingText('textContainer', 'the older I get, the more I remember 2017\\2025', {
      fontSize: 18,
      color: 'yellow',
      opacity: 0.9,
      speed: 45,
       fontFamily: 'Orbitron', //<------ Set Font Family
  
    });
  });