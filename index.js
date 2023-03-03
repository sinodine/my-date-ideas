// ****************************************************************************************

var maxParticleCount = 150; //set max confetti count
var particleSpeed = 2; //set the particle animation speed
var startConfetti; //call to start confetti animation
var stopConfetti; //call to stop adding confetti
var toggleConfetti; //call to start or stop the confetti animation depending on whether it's already running
var removeConfetti; //call to stop the confetti animation and remove all confetti immediately

(function() {
	startConfetti = startConfettiInner;
	stopConfetti = stopConfettiInner;
	toggleConfetti = toggleConfettiInner;
	removeConfetti = removeConfettiInner;
	var colors = ["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"]
	var streamingConfetti = false;
	var animationTimer = null;
	var particles = [];
	var waveAngle = 0;
	
	function resetParticle(particle, width, height) {
		particle.color = colors[(Math.random() * colors.length) | 0];
		particle.x = Math.random() * width;
		particle.y = Math.random() * height - height;
		particle.diameter = Math.random() * 10 + 5;
		particle.tilt = Math.random() * 10 - 10;
		particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
		particle.tiltAngle = 0;
		return particle;
	}

	function startConfettiInner() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		window.requestAnimFrame = (function() {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					return window.setTimeout(callback, 16.6666667);
				};
		})();
		var canvas = document.getElementById("confetti-canvas");
		if (canvas === null) {
			canvas = document.createElement("canvas");
			canvas.setAttribute("id", "confetti-canvas");
			canvas.setAttribute("style", "position:fixed;display:block;z-index:999999;pointer-events:none");
			document.body.prepend(canvas);
			canvas.width = width;
			canvas.height = height;
			window.addEventListener("resize", function() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}, true);
		}
		var context = canvas.getContext("2d");
		while (particles.length < maxParticleCount)
			particles.push(resetParticle({}, width, height));
		streamingConfetti = true;
		if (animationTimer === null) {
			(function runAnimation() {
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				if (particles.length === 0)
					animationTimer = null;
				else {
					updateParticles();
					drawParticles(context);
					animationTimer = requestAnimFrame(runAnimation);
				}
			})();
		}
	}

	function stopConfettiInner() {
		streamingConfetti = false;
	}

	function removeConfettiInner() {
		stopConfetti();
		particles = [];
	}

	function toggleConfettiInner() {
		if (streamingConfetti)
			stopConfettiInner();
		else
			startConfettiInner();
	}

	function drawParticles(context) {
		var particle;
		var x;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			context.beginPath();
			context.lineWidth = particle.diameter;
			context.strokeStyle = particle.color;
			x = particle.x + particle.tilt;
			context.moveTo(x + particle.diameter / 2, particle.y);
			context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
			context.stroke();
		}
	}

	function updateParticles() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		var particle;
		waveAngle += 0.01;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			if (!streamingConfetti && particle.y < -15)
				particle.y = height + 100;
			else {
				particle.tiltAngle += particle.tiltAngleIncrement;
				particle.x += Math.sin(waveAngle);
				particle.y += (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
				particle.tilt = Math.sin(particle.tiltAngle) * 15;
			}
			if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
				if (streamingConfetti && particles.length <= maxParticleCount)
					resetParticle(particle, width, height);
				else {
					particles.splice(i, 1);
					i--;
				}
			}
		}
	}
})();


// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************

class Idea {
    constructor(concept, category, time, cost, prep, food, ext) {
        this.concept = concept;
        this.category = category;
        this.time = time; // in hours
        this.cost = cost; // 0 - low, 1 - medium, 2 - high, 3 - very high
        this.prep = prep; // true if preparation is required, false otherwise
        this.food = food; // true if food is involved, false otherwise
        this.ext = ext; // true if it involves going out, false otherwise
    }
}

// Outdoor = 0;
// Indoor = 1;
// DateNigth = 2;

const myIdea1 = new Idea("bowling", 0, 2, 2, false, false, true);

const ideas = [
  new Idea("visiter l'arc de triomphe", "Outdoor", 4, 0, false, false, true),
  new Idea("aller \u00E0 la patinoire", "Outdoor", 3, 2, false, false, true),
  new Idea("aller au tranpopark", "Outdoor", 3, 2, false, false, true),
  new Idea("aller \u00E0 la salle escalade", "Outdoor", 3, 2, false, false, true),
  new Idea("aller \u00E0 la salle muscu", "Outdoor", 1, 0, false, false, true),
  new Idea("aller \u00E0 la piscine", "Outdoor", 1, 1, false, false, true),
  new Idea("faire de l'accrobranche", "Outdoor", 3, 2, false, false, true),
  new Idea("faire du kayak", "Outdoor", 3, 2, false, false, true),
  new Idea("faire du camping", "Outdoor", 10, 3, true, true, true),
  new Idea("voyager pour un we", "Outdoor", 10, 4, true, true, true),
  new Idea("faire une balade \u00E0 la for\u00EAt", "Outdoor", 2, 0, false, false, true),
  new Idea("se balader dans un parc", "Outdoor", 2, 0, false, false, true),
  new Idea("faire une visite culturelle/historique", "Outdoor", 4, 0, false, false, true),
  new Idea("explorer Champs-sur-Marne", "Outdoor", 1, 0, false, false, true),
  new Idea("faire du paintball", "Outdoor", 3, 2, false, false, true),
  new Idea("se faire une coloration", "Indoor", 2, 0, false, false, false),
  new Idea("faire des p\u00E2tes maison", "Indoor", 3, 0, false, true, false),
  new Idea("se faire une soir\u00E9e gaming", "Indoor", 3, 0, false, false, false),
  new Idea("faire une recette pompette", "Indoor", 3, 1, true, true, false),
  new Idea("faire une soir\u00E9e cocktail", "Indoor", 2, 1, true, true, false),
  new Idea("faire de la poterie", "Indoor", 3, 2, true, false, false),
  new Idea("faire de la peinture", "Indoor", 2, 0, false, false, false),
  new Idea("se maquiller", "Indoor", 2, 0, false, false, false),
  new Idea("construire un kit lego", "Indoor", 2, 2, true, false, false),
  new Idea("regarder un film d'horreur", "Indoor", 3, 0, false, false, false),
  new Idea("regarder une com\u00E9die", "Indoor", 3, 0, false, false, false),
  new Idea("jouer de la guitare", "Indoor", 1, 0, false, false, false),
  new Idea("faire un karaok\u00E9", "Indoor", 2, 0, false, false, false),
  new Idea('faire un puzzle', 'Indoor', 3, 2, true, false, false),
  new Idea('apprendre un truc rapide', 'Indoor', 1, 0, false, false, false),
  new Idea("faire des tours de magie", 1, 1, 0, false, false, false),
  new Idea("manger du guacamole", 1, 1, 1, true, true, false),
  new Idea("commencer une s\u00E9rie ensemble", 1, 2, 0, false, false, false),
  new Idea("Manger \u00E0 l'asian77", 2, 2, 2, false, true, true),
  new Idea("aller dans un bar \u00E0 jeux", 2, 4, 2, false, false, true),
  new Idea("aller au th\u00E9\u00E2tre regarder une com\u00E9die", 2, 3, 2, false, false, true),
  new Idea("aller au th\u00E9\u00E2tre", 2, 3, 2, false, false, true),
  new Idea("aller dans un bar \u00E0 h\u00E2ches", 2, 3, 2, false, false, true),
  new Idea("aller au cin\u00E9ma", 2, 3, 2, false, false, true),
  new Idea("faire pic-nique sur le toit de bienven\u00FCe", 2, 2, 2, true, true, true),
  new Idea("se faire un tatouage", 2, 2, 0, false, false, false)
];




  function getRandomInt(n) {
    return Math.floor(Math.random() * n);
}

  // ****************************************************************************************
  // ****************************************************************************************
  // ****************************************************************************************
  // ****************************************************************************************



// Get the canvas and the button elements
const canvas = document.getElementById("myWheel");
const spinBtn = document.getElementById("spinBtn");
const stopBtn = document.getElementById("stopBtn");
const selectedElement = document.getElementById("category");
const selectedCategory = selectedElement.value;
const freq = 10;


// Fetch the filters
var myIdeas =[];
for(var i=0; i < ideas.length ; i++){
    const myIdea = ideas[i];
    if(selectedCategory === "all"){
      myIdeas = ideas;
    }
    else if(myIdea.category === selectedCategory
        && true
        ){
            myIdeas.push(myIdea); 
    }
}



// Set up the canvas context for drawing the wheel
const ctx = canvas.getContext("2d");
const centerX = canvas.width / 2 + 20;
const centerY = canvas.height / 2 ;
const radius = 300;
//const numSlices = 8;
const numSlices = slices.length;
const sliceAngle = (2 * Math.PI) / numSlices;


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
      spinBtn.disabled = true;
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
  
  spinBtn.disabled = true;
  stopBtn.disabled = true;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //hideWheel();
  startConfetti();
  //displayText('tadam', '#000000', true);
  setTimeout(() => {
    stopConfetti();
    }, freq * 500);
  
  setTimeout(() => {
    spinBtn.disabled=false;
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

drawWheel();
drawArrow('#000000');
stopBtn.disabled = true;
displayText("Spin the Wheel!",'#000000', true);

// Add event listener to spin the wheel on button click
spinBtn.addEventListener("click", () => {
  // Disable the spin button
  spinBtn.disabled = true;

  // Enable the stop button
  stopBtn.disabled = false;

  // Spin the wheel
  spinWheel();
});


stopBtn.addEventListener("click");

/*
// Fetch the filters
function filters(){
  var myIdeas =[];
  for(var i=0; i < ideas.length ; i++){
      const myIdea = ideas[i];
      if(selectedCategory === "all"){
        myIdeas = ideas;
      }
      else if(myIdea.category === selectedCategory
          && true
          ){
              myIdeas.push(myIdea); 
      }
  }
   numSlices = myIdeas.length;
}
*/
