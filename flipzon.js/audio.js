
 let play= document.getElementById("next-sound");
function playsound(){
        let audio=new Audio("success-1-6297.mp3") 
        audio.play();
}
play.addEventListener("click", playsound)

// function playsound(){
//         var sound = document.getElementById("next-sound");
//         sound.play();
//         setTimeout(function() { location.href="ap7.html";},sound.duration*1000);
// }



