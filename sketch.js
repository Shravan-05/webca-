let video;
let classifier,rr,label;
function setup()
{
	createCanvas(200,200);
	background(0);
	video=createCapture(VIDEO);
	video.hide();
	background(0);
	classifier=ml5.imageClassifier('MobileNet',video,modelReady);
}
function draw()
{
	background(0);
	image(video,0,0);
fill(255);
textSize(32);
text(label,10,height-20);
}
function modelReady()
{
	console.log('modelReady');
	classifier.predict(goResults);
}
function goResults(err,rr)
{
label=rr[0].label;
}