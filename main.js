   n_x = 0;
   n_y = 0;
   function preload(){
    c_n = loadImage("https://i.postimg.cc/TwyW8S3B/c-nose.png")
    }

    function setup(){
        canvas = createCanvas(300, 300);
        canvas.center();
        video = createCapture(VIDEO);
        video.size(300, 300);
        video.hide();
        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on("pose", gotPoses);
    }
    function modelLoaded(){
        console.log("PoseNet Initialized")
    }
    function draw(){
        image(video, 0, 0, 300, 300);
        fill(255,0,0);
        stroke(255,0,0);
        image(c_n,n_x - 23, n_y -15, 50, 40);
    }

    function take(){
        save("Realtime-Filter.jpeg")
    }

    function gotPoses(results){
    
        if (results.length > 0){
            console.log(results);
            n_x = results[0].pose.nose.x;
            n_y = results[0].pose.nose.y;
            console.log("Nose X = "+ n_x);
            console.log("Nose Y = "+ n_y);       
        }
    }