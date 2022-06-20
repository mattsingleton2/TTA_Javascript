//Establishing a whole array of colors.
let colorfulArray = ["Red", "Yellow", "Green", "Blue", "Pink", "Purple", "Indigo", "Violet", "Turquoise", "Crimson", "White", "Black", "Grey"]

//I want you to think I'm clever, I guess, so this part generates a random number between 1 and 13 and uses it as the colorfulArray index....
function colorRandomizer() {
    let colorIndex = Math.floor((Math.random() * 13));
    return colorfulArray[colorIndex];
}

//which gets consumed here. So we use a for loop to iterate through 6 options in our <ul> element on the html file.
//each of those <li> are given the class colorOption which we've linked in the listElement variable.
//and we use colorRandomizer() to pick a color from the array for each of the listElements.
//Obviously, there's still the capability for the same color to be picked more than once. I haven't figured out ensuring
//that all 6 are unique yet. Always room to improve.
function listRandomColors() {
    var listElement = document.getElementsByClassName("colorOption");
    for (i = 0; i <= 6; i++) {
        listElement[i].innerHTML = colorRandomizer();
    }
}

//Expanded the example Switch statements, but I wouldn't write the code this way normally. I'd just grab the color name and insert it to a string
//but I understand the value behind switches.
function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Colors = Colors.toLowerCase();
    console.log(Colors);
    var Color_String = " is a great color!";
    switch(Colors) {
        case "red":
            Color_Output = "Red" + Color_String;
            break;
        case "yellow":
            Color_Output = "Yellow" + Color_String;
            break;
        case "green":
            Color_Output = "Green" + Color_String;
            break;
        case "blue":
            Color_Output = "Blue" + Color_String;
            break;
        case "pink":
            Color_Output = "Pink" + Color_String;
            break;
        case "purple":
            Color_Output = "Purple" + Color_String;
            break;
        case "indigo":
            Color_Output = "Indigo" + Color_String;
            break;  
        case "violet":
            Color_Output = "Violet" + Color_String;
            break;  
        case "turquoise":
            Color_Output = "Turquoise" + Color_String;
            break;  
        case "crimson":
            Color_Output = "Crimson" + Color_String;
            break;  
        case "white":
            Color_Output = "White" + Color_String;
            break;  
        case "black":
            Color_Output = "Black" + Color_String;
            break;  
        case "grey":
            Color_Output = "Grey" + Color_String;
            break;   
        default:
            Color_Output = "Please enter a color exactly as written on the above list. (Not case sensitive)";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

//Let's practice with the <canvas> element a little bit.
//We built a canvas.. the following is not my code, I used an example from https://codepen.io/towc/pen/mJzOWJ
var w = c.width = window.innerWidth,
    h = c.height = window.innerHeight,
    ctx = c.getContext( '2d' ),
    
    opts = {
      
      len: 20,
      count: 50,
      baseTime: 10,
      addedTime: 10,
      dieChance: .05,
      spawnChance: 1,
      sparkChance: .1,
      sparkDist: 10,
      sparkSize: 2,
      
      color: 'hsl(hue,100%,light%)',
      baseLight: 50,
      addedLight: 10, // [50-10,50+10]
      shadowToTimePropMult: 6,
      baseLightInputMultiplier: .01,
      addedLightInputMultiplier: .02,
      
      cx: w / 2,
      cy: h / 2,
      repaintAlpha: .04,
      hueChange: .1
    },
    
    tick = 0,
    lines = [],
    dieX = w / 2 / opts.len,
    dieY = h / 2 / opts.len,
    
    baseRad = Math.PI * 2 / 6;
    
ctx.fillStyle = 'black';
ctx.fillRect( 0, 0, w, h );

function loop() {
  
  window.requestAnimationFrame( loop );
  
  ++tick;
  
  ctx.globalCompositeOperation = 'source-over';
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(0,0,0,alp)'.replace( 'alp', opts.repaintAlpha );
  ctx.fillRect( 0, 0, w, h );
  ctx.globalCompositeOperation = 'lighter';
  
  if( lines.length < opts.count && Math.random() < opts.spawnChance )
    lines.push( new Line );
  
  lines.map( function( line ){ line.step(); } );
}
function Line(){
  
  this.reset();
}
Line.prototype.reset = function(){
  
  this.x = 0;
  this.y = 0;
  this.addedX = 0;
  this.addedY = 0;
  
  this.rad = 0;
  
  this.lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();
  
  this.color = opts.color.replace( 'hue', tick * opts.hueChange );
  this.cumulativeTime = 0;
  
  this.beginPhase();
}
Line.prototype.beginPhase = function(){
  
  this.x += this.addedX;
  this.y += this.addedY;
  
  this.time = 0;
  this.targetTime = ( opts.baseTime + opts.addedTime * Math.random() ) |0;
  
  this.rad += baseRad * ( Math.random() < .5 ? 1 : -1 );
  this.addedX = Math.cos( this.rad );
  this.addedY = Math.sin( this.rad );
  
  if( Math.random() < opts.dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY )
    this.reset();
}
Line.prototype.step = function(){
  
  ++this.time;
  ++this.cumulativeTime;
  
  if( this.time >= this.targetTime )
    this.beginPhase();
  
  var prop = this.time / this.targetTime,
      wave = Math.sin( prop * Math.PI / 2  ),
      x = this.addedX * wave,
      y = this.addedY * wave;
  
  ctx.shadowBlur = prop * opts.shadowToTimePropMult;
  ctx.fillStyle = ctx.shadowColor = this.color.replace( 'light', opts.baseLight + opts.addedLight * Math.sin( this.cumulativeTime * this.lightInputMultiplier ) );
  ctx.fillRect( opts.cx + ( this.x + x ) * opts.len, opts.cy + ( this.y + y ) * opts.len, 2, 2 );
  
  if( Math.random() < opts.sparkChance )
    ctx.fillRect( opts.cx + ( this.x + x ) * opts.len + Math.random() * opts.sparkDist * ( Math.random() < .5 ? 1 : -1 ) - opts.sparkSize / 2, opts.cy + ( this.y + y ) * opts.len + Math.random() * opts.sparkDist * ( Math.random() < .5 ? 1 : -1 ) - opts.sparkSize / 2, opts.sparkSize, opts.sparkSize )
}
loop();

window.addEventListener( 'resize', function(){
  
  w = c.width = window.innerWidth;
  h = c.height = window.innerHeight;
  ctx.fillStyle = 'black';
  ctx.fillRect( 0, 0, w, h );
  
  opts.cx = w / 2;
  opts.cy = h / 2;
  
  dieX = w / 2 / opts.len;
  dieY = h / 2 / opts.len;
});

//canvas 2 linear gradient
var c2 = document.getElementById("c2");
var ctx2 = c2.getContext("2d");
var grd = ctx2.createLinearGradient(0,0,170,0);
grd.addColorStop(0, "white");
grd.addColorStop(1, "aquamarine");
ctx2.fillStyle = grd;
ctx2.fillRect(0, 0, 400, 150);