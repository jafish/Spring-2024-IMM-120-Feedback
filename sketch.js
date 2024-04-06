

let dataVariable;
let currentRain;
let probRain; 
let index = 0;
let skyColor;
let tearColor

//plan is to make a sun and make it cry when it rains and the sky get darker when there is a chance of perceptation going the more abstract route

//entering my data set
function preload() {
	dataVariable = loadJSON ("https://api.open-meteo.com/v1/forecast?latitude=40.2686&longitude=-74.7801&current=temperature_2m,is_day,precipitation,rain,showers&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,cloud_cover&daily=precipitation_hours,precipitation_probability_max&timezone=America%2FNew_York")
} 
  
function setup() {
  createCanvas(400, 400);
}

function draw() {
 
  // variable for if it is raining or not rn 
  currentRain = dataVariable.current.rain
//varaible for precepitaiton later 
  probRain = 
  dataVariable.hourly.precipitation_probability 
  // testing it w a random objects because it was giving me the objects and not their values 
  probRainTest = dataVariable.hourly.precipitation_probability[13]
  //console.log(probRainTest)
  
  colorMode(HSB)
  noStroke()
  background(220);
  
  //setting up my colors in hsb so i can change the shade
  skyColor = color(220,44,96)
  tearColor = color(209,93,96)

  //sky background 
  fill (skyColor)
 // console.log (probRainTest)
  rect(0,0,400)
  if (probRainTest > 10 ) {
    skyColor = color(220,44, 20)
  }else if (probRainTest< 10){
    (skyColor = color(220,44,95))}
    
  //i tried to make an if then statement for it to make the sky color lose brightness if there is a higher chance of preciptiation for that day but it doesnt seem to be working/changing

 
  //creating ayellow circle to be the sun
  fill(57,51,96)
  circle(width/2, height/2, 300)
  
  
  //tears
  fill (tearColor)
  //left
  rect(120, 200, 20,300)
  //right
  rect (250,200,20,300)
  
  if (currentRain > 0) {
   tearColor = color(209,93,96)
  } else if (currentRain < 0){
    tearColor = color(0);
  }
   
  // i tried to make an if then statement for the tears to only show if it was raining and not if it wasnt
  //i would also like to try making it change with the different amounts of the rain 
  
  
  //creating eyes for the sun 
  fill(57,20,96)
  circle(130,200, 75)
  circle(260,200,75)
  fill('brown')
  circle(130,210,40)
  circle(260,210,40)
  
  
  
}