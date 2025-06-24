function createTranslucentScrollingText(containerId, text, options = {}) {
  console.log("createTranslucentScrollingText called with:");

  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container with ID "${containerId}" not found.`);
    return;
  }
  console.log("Container found:");

  const {
    fontSize = 28,
    color = "yellow",
    opacity = 1,
    speed = 80,
    fontFamily = "Orbitron",
    letterSpacing = "2px", // New option for letter spacing
    fontWeight = "bold", // New option for bold
    fontStyle = "italic", // New option for italic
  } = options;

  console.log("Options used:");

  // Create the text element
  const textElement = document.createElement("div");
  textElement.textContent = text;
  textElement.classList.add("scrolling-text");
  
  textElement.style.fontSize = `${fontSize}px`;
  textElement.style.color = color; // Set inline color based on options
  textElement.style.opacity = opacity; // Set inline opacity for now
  textElement.style.fontFamily = fontFamily; // Set inline font style
  container.appendChild(textElement);

  console.log("Text element created:");

  // Initial position
  let textWidth = textElement.offsetWidth;
  textElement.style.top = container.offsetHeight + "px";

  console.log("Text element initialized at top:");

  // Scrolling function
  function scrollText() {
    console.log("scrollText called");
    let currentTop = parseFloat(textElement.style.top);
    let newTop = currentTop - speed / 60;

    if (newTop + textElement.offsetHeight < 0) {
      newTop = container.offsetHeight;
    }

    textElement.style.top = newTop + "px";
    console.log("Text element new top position:");
    requestAnimationFrame(scrollText);
  }

  // Start scrolling
  scrollText();
  console.log("scrollText started");
}

document.addEventListener("DOMContentLoaded", function () {
  createTranslucentScrollingText(
    "textContainer",
    "losing detail--its frames washing away",
    {
      fontSize: 43,
      color: "white",
      opacity: 0.9,
      speed: 15,
      fontFamily: "Orbitron", //<------ Set Font Family
    }
  );

  createTranslucentScrollingText(
    "textContainer",
    "Faded memories feel like a film reel slowly losing detail",
    {
      fontSize: 32,
      color: "white",
      opacity: 0.9,
      speed: 60,
      fontFamily: "Orbitron", //<------ Set Font Family
    }
  );


    createTranslucentScrollingText(
      "textContainer",
      "like a piece of food that gets stuck in your teeth",
      {
        fontSize: 32,
        color: "#ff8b73",
        opacity: 0.9,
        speed: 52,
        fontFamily: "Orbitron", //<------ Set Font Family
      }
    );
  
    createTranslucentScrollingText(
      "textContainer",
      "you try to mark thespot with your tongue",
      {
        fontSize: 38,
        color: "#ff8b73",
        opacity: 0.9,
        speed: 27,
        fontFamily: "Orbitron", //<------ Set Font Family
      }
    );

    createTranslucentScrollingText(
        "textContainer",
        "can’t locate what is evoking this feeling; a brief visit",
        {
          fontSize: 32,
          color: "#b4ff73",
          opacity: 0.9,
          speed: 45,
          fontFamily: "Orbitron", //<------ Set Font Family
        }
      );
    
      createTranslucentScrollingText(
        "textContainer",
        "like melted snow--sad it's gone but will come back someday",
        {
          fontSize: 30,
          color: "#34ebd8",
          opacity: 0.9,
          speed: 20,
          fontFamily: "Orbitron", //<------ Set Font Family
        }
      );

  createTranslucentScrollingText(
    "textContainer",
    "the older i get, the more",
    {
        fontSize: 68,
        color: "yellow",
        opacity: 1,
        speed: 90,
        fontFamily:  "Orbitron",
        // fontWeight: "bold", // Make the text bold
   
    }
  );

  createTranslucentScrollingText(
    "textContainer",
    "i remember 2017\\2025",
    {
        fontSize: 58,
        color: "yellow",
        opacity: 1,
        speed: 75,
        fontFamily:  "Orbitron",
        // fontWeight: "bold", // Make the text bold
   
    }
  );
  
});
