document.querySelectorAll("button").forEach(function(button) {
    button.addEventListener("click", function(){
        var buttonInnerHTML= this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
});
    document.addEventListener("keydown", function(event){
        makeSound(event.key);
        buttonAnimation(event.key);

    });
    function makeSound(key){
        switch(key){
            case "w":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            return;
            case "a":
            var audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
            return;
            case "s":
                var audio= new Audio("sounds/snare.mp3");
                audio.play();
                return;
            case "d":
                var audio= new Audio("sounds/tom-1.mp3");
                audio.play();
                return;
            case "j":
                var audio= new Audio("sounds/tom-2.mp3");
                audio.play();
                return;
            case "k":
                var audio= new Audio("sounds/tom-3.mp3");
                audio.play();
                return;
            case "l":
                var audio= new Audio("sounds/tom-4.mp3");
                audio.play();
                return;
                default:
        }
    }
    function buttonAnimation(currentkey){
        var activeButton = document.querySelector("." +currentkey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },100);

    }
