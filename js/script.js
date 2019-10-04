let video = document.getElementById('bgVideo')
video.playbackRate = 4.0;
var intervalRewind;
var intervalPlay;




// function reverse(){
//     intervalRewind = setInterval(function(){
//         video.playbackRate = 1.0;
//          video.currentTime += -.1;
//                  },30);
//                 }
                
//  function play(){
     
//     intervalPlay = setInterval(function(){
//         video.playbackRate = 4.0;
//         video.currentTime += +.1;
//     },30);
//  }


let updateRate = 30; //FPS
let playForward = true;
let updateVideo;

function play() {
    updateVideo = setInterval(function(){
        if(playForward) {
            video.currentTime += 1/updateRate*1.3
            if (video.currentTime >= video.duration) {
                video.currentTime = video.duration
                playForward = false;
            }
        }

        else {
            video.currentTime -= 1/updateRate*1.3
            if (video.currentTime <= 0) {
                video.currentTime = 0
                playForward = true;
            }
        }
    }, 1000/updateRate)
}

play()