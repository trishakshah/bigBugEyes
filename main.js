leftEyeX="";
leftEyeY="";
rightEyeX="";
rightEyeY="";

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(600,400);
    video.hide();
    model=ml5.poseNet(video,modelLoaded);
    model.on("pose",getPose);
}

function modelLoaded(){
    console.log("Model loaded.")
}

function preload(){
    bigBugEye=loadImage("https://i.postimg.cc/VkwNFynd/eye.png")
}

function draw(){
    image(video,0,0,600,400);
    image(bigBugEye,leftEyeX,leftEyeY,50,50);
    image(bigBugEye,rightEyeX,rightEyeY,50,50);
}

function downloadImage(){
    save("BigBugEyes.png")
}

function getPose(result){
    if (result.length>0){
        console.log(result);
        leftEyeX=result[0].pose.leftEye.x-20;
        leftEyeY=result[0].pose.leftEye.y-20;
        rightEyeX=result[0].pose.rightEye.x-20;
        rightEyeY=result[0].pose.rightEye.y-20;
        console.log("Left Eye - x:"+leftEyeX+", y:"+leftEyeY+"; Right Eye - x:"+rightEyeX+", y:"+rightEyeY);
    }
}