function setup() {
    canvas=createCanvas(280,280);
    canvas.center();
    background("blue");
    canvas.mouseReleased(classifycanvas);
    syth=window.speechSynthesis
}
function clearCanvas(){
    background("blue");
}
function preload(){
    classifier=ml5.imageClassifier("DoodleNet")
}
function classifycanvas(){
    classifier.classify(canvas,gotresult)
}
function draw(){
    strokeWeight(13)
    stroke(0)
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
}
function gotresult(error,results){
    if(error){
        console.error(error)
    }
    console.log(results)
    document.getElementById("label").innerHTML="label:"+results[0].label;
    document.getElementById("confidence").innerHTML="confidence:"+Math.round(results[0].confidence*100)+"%";
    speakdata=results[0].label;
    utterthis=new SpeechSynthesisUtterance(speakdata);1
    syth.speak(utterthis)
};
