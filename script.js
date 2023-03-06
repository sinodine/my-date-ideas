
// Get the canvas and the button elements
const canvas = document.getElementById("myWheel");
const spinBtn = document.getElementById("spinBtn");
const stopBtn = document.getElementById("stopBtn");
var costRange = document.getElementById("costRange");


//const category = document.getElementById("category");
//var selectedCategory = category.value;
const freq = 10;


var numSlices = 8;
var myIdeas =ideas;
var sliceAngle = (2 * Math.PI) / numSlices;


// Fetch the filters
function filters(){
  myIdeas =[];
  for(var i=0; i < ideas.length ; i++){
      const myIdea = ideas[i];
      if((c1.checked || !(c1.checked|| c2.checked||c3.checked||c4.checked))
        &&(myIdea.cost <= costRange.value)
        &&(!noprep.checked || !myIdea.prep)
        &&(!noext.checked|| !myIdea.ext)
        &&(!nofood.checked|| !myIdea.food)
        && true
        ){
          myIdeas.push(myIdea);
      }

      else if(((c2.checked && myIdea.category === "Outdoor")
              || (c3.checked && myIdea.category === "Indoor")
              || (c4.checked && myIdea.category === "DateNight")
              )
            &&(myIdea.cost <= costRange.value)
            &&(!noprep.checked || !myIdea.prep)
            &&(!noext.checked|| !myIdea.ext)
            &&(!nofood.checked|| !myIdea.food)
            && true
          ){
            myIdeas.push(myIdea); 
      }
  }
  numSlices = myIdeas.length;
  sliceAngle = (2 * Math.PI) / numSlices;

  drawWheel();
  drawArrow('#000000');
  stopBtn.disabled = true;
  displayText("Spin the Wheel!",'#000000', true);
  //displayText(numSlices,'#000000', true);
}

// Set up the canvas context for drawing the wheel
const ctx = canvas.getContext("2d");
const centerX = canvas.width / 2 + 20;
const centerY = canvas.height / 2 ;
const radius = 300;
//const numSlices = 8;
//const numSlices = myIdeas.length;
//const sliceAngle = (2 * Math.PI) / numSlices;


// Set up the canvas for the text
ctx.font = 'bold 24px sans-serif'; // font style
ctx.textAlign = 'center'; // set text alignment to center
ctx.textBaseline = 'middle'; // set text baseline to middle


// Initialize wheel rotation speed and angle
let rotationSpeed = 0; //0.2
let rotationAngle = 0;

// Function to draw the Arrow
function drawArrow(col) {
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.moveTo(0, centerY+20);
  ctx.lineTo(40, centerY);
  ctx.lineTo(0, centerY-20);
  ctx.fill();
  
}


// Function to draw the wheel
function drawWheel() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < numSlices; i++) {
    ctx.beginPath();
    ctx.fillStyle = `hsl(${(i * 380) / numSlices}, 80%, 70%)`;
    ctx.moveTo(centerX, centerY);
    ctx.arc(
      centerX,
      centerY,
      radius,
      i * sliceAngle + rotationAngle,
      (i + 1) * sliceAngle + rotationAngle
    );
    ctx.lineTo(centerX, centerY);
    ctx.fill();
  }
}
 

function displayText(result, col){
  ctx.fillStyle = col; // set text color to black
  ctx.font = 'bold 40px sans-serif';
  ctx.fillText(result, canvas.width / 2, canvas.height / 2);
}


// Function to spin the wheel
function spinWheel() {
  rotationSpeed = 0.1 + Math.random() * 0.01;

  // Set up a loop to animate the wheel rotation
  const animationLoop = setInterval(() => {
    // Update the wheel rotation angle
    rotationAngle += rotationSpeed;

    // Redraw the wheel with the updated rotation angle
    drawWheel();
    drawArrow('#000000');
    
    // If the stop button has been clicked, stop the animation loop and re-enable the buttons
    if (stopBtn.disabled) {
      clearInterval(animationLoop);
      reset.disabled = true;
      spinBtn.disabled = true;
      Submitbtn.disabled = true;
      stopBtn.disabled = true;
      Suite();
    }
    
    
  }, freq);
}


// Function to stop the wheel
function stopWheel() {
  // Enable the spin button
  spinBtn.disabled = true;

  // Disable the stop button
  stopBtn.disabled = true;
}




function Suite(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //hideWheel();
  startConfetti();
  //displayText('tadam', '#000000', true);
  setTimeout(() => {
    stopConfetti();
    }, freq * 500);
  
  setTimeout(() => {
    spinBtn.disabled=false;
    Submitbtn.disabled = false;
    reset.disabled = false;
    drawWheel();
    drawArrow('#000000');
    displayText("Spin the Wheel!",'#000000', true);
    }, freq * 630);
  

    //Choisir l'idée
    var k = getRandomInt(myIdeas.length);
    var finalIdea= myIdeas[k];
    setTimeout(() => {
      //alert("Une id\u00E9e de chose \u00E0 faire: " + finalIdea.concept);
      alert("Une id\u00E9e de date: " + finalIdea.concept);
    }, freq * 20);
  
}




// ***** MAIN *****
filters();
/*
drawWheel();
drawArrow('#000000');
stopBtn.disabled = true;
displayText("Spin the Wheel!",'#000000', true);
*/



// Add event listener to spin the wheel on button click
spinBtn.addEventListener("click", () => {
  // Disable the spin button
  spinBtn.disabled = true;
  Submitbtn.disabled = true;
  reset.disabled = true;

  // Enable the stop button
  stopBtn.disabled = false;

  // Spin the wheel
  spinWheel();
});


stopBtn.addEventListener("click");

Submitbtn.addEventListener("click", () => {filters();});

/*
category.addEventListener("change", () => {
  alert(myIdeas.length);
  filters();
  drawWheel();
  drawArrow('#000000');
  stopBtn.disabled = true;
  displayText("Spin the Wheel!",'#000000', true);
  
});
*/

const foodBox = document.getElementById("nofood");

foodBox.addEventListener('change', () => {
  if(this.checked){
    alert("rhooooo");
  }
});


function resetAll(){
  c1.checked = false;
  c2.checked = false;
  c3.checked = false;
  c4.checked = false;
  nofood.checked = false;
  noprep.checked = false;
  noext.checked = false;
  costRange.value = 4;
};
