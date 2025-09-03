// document.querySelector("button").addEventListener("click",playsound);
// function playsound(){
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
// }

var count = document.querySelectorAll(".drum").length;

for(var i =0 ;i< count ;i++){
 document.querySelectorAll(".drum")[i].addEventListener("click",function (){
       
     var text = this.innerHTML;
     makesound(text);
     buttonAnimation(text);
    
    });

}

document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonAnimation(event.key);

})

function makesound(key){
switch (key) {
    case "w":
        var tone = new Audio("sounds/tom-1.mp3");
   tone.play();
        break;
        case "a":
            var tone = new Audio("sounds/tom-2.mp3");
       tone.play();
            break;
            case "s":
        var tone = new Audio("sounds/tom-3.mp3");
   tone.play();
        break;
        case "d":
        var tone = new Audio("sounds/tom-4.mp3");
   tone.play();
        break;
        case "j":
        var tone = new Audio("sounds/snare.mp3");
   tone.play();
        break;
        case "k":
        var tone = new Audio("sounds/crash.mp3");
   tone.play();
        break;
        case "l":
        var tone = new Audio("sounds/kick-bass.mp3");
   tone.play();
        break;


    default:
        
        break;
 }
}


function buttonAnimation(currentkey){
     var activeButton = document.querySelector("."+currentkey);
     activeButton.classList.add("pressed");
     setTimeout( function (){
          activeButton.classList.remove("pressed");
     } , 200);

}



