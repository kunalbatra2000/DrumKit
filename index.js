

//Detecting Button Mouse Click Press

var drum = document.getElementsByClassName("drum");

for (var i = 0; i < drum.length; i++) {
    drum[i].addEventListener("click", function () {
       //  This keyword speicifies which drum is being clicked//
   
        this.style.color="white";
      var text=this.innerHTML;
      makesound(text);
      buttonAnimation(text);

        

    });
        

}
        




     

        // switch (text) {
        //     case "w":
        //         var tom1 = new Audio("sounds/tom-1.mp3");
        //         tom1.play();
        //         break;

        //     case "a":
        //         var tom2 = new Audio("sounds/tom-2.mp3");
        //         tom2.play();
        //         break;


        //     case "s":
        //         var tom3 = new Audio("sounds/tom-3.mp3");
        //         tom3.play();
        //         break;


        //     case "d":
        //         var tom4 = new Audio("sounds/tom-4.mp3");
        //         tom4.play();
        //         break;

        //     case "j":
        //         var crash = new Audio("sounds/crash.mp3");
        //         crash.play();
        //         break;

        //     case "k":
        //         var kick = new Audio("sounds/kick-bass.mp3");
        //         kick.play();
        //         break;

        //     case "l":
        //         var snare = new Audio("sounds/snare.mp3");
        //         snare.play();
        //         break;


        //     default: (console.log(text));



        // }


//Detecting KeyDownPress by adding event

document.addEventListener("keydown",function(event){   //here eventlistner is a higher order function as t takes a function as a input but function (event) is a CALLBACK function cuz it responds after a event is occured which is herw a KEYPRESS//
    //How does eventlistener and callback works-->
    //Whenever we call AddEventListner("keypress",function(event)), it waits for a keypress or for the event happening(click,keypress,etc), as soon as event happened it creates a object which has all information related to event happened like typeofevnt,duration,etc.
    //if type of event matches the programmer event(here keypress) then it calls the callback function and performs the task provided in it like in this case is SWITCH 
    

    makesound(event.key);
    buttonAnimation(event.key);

});



 
//Main Function

function makesound(keyBoardkey){

    switch (keyBoardkey) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;


        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;


        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        case "l":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;


        default: (console.log(text));



    }

}

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");



    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);
};






