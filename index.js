var drumLenght = document.querySelectorAll(".drum").length;
console.log(drumLenght);
for (i = 0; i < drumLenght; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var key = this.innerHTML;
    playSound(key);
    addAnimation(key);
  });
}
//add Keypress eventlistner to buttons//
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  addAnimation(event.key);
});
//function to play sound
function playSound(key) {
  switch (key) {
    case "w":
      var tom_1 = new Audio("sounds/tom-1.mp3");
      tom_1.play();
      console.log(key + " is clicked");
      break;
    case "a":
      var tom_2 = new Audio("sounds/tom-2.mp3");
      tom_2.play();
      console.log(key + " is clicked");
      break;
    case "s":
      var tom_3 = new Audio("sounds/tom-3.mp3");
      tom_3.play();
      console.log(key + " is clicked");
      break;
    case "d":
      var tom_4 = new Audio("sounds/tom-4.mp3");
      tom_4.play();
      console.log(key + " is clicked");
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      console.log(key + " is clicked");
      break;
    case "k":
      var kick_boss = new Audio("sounds/kick-bass.mp3");
      kick_boss.play();
      console.log(key + " is clicked");
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      console.log(key + " is clicked");
      break;
    default:
      console.log(key + " invalid key");
  }
}

//function to add animation
function addAnimation(key) {
  var box = document.querySelector("." + key);
  box.classList.add("pressed");
  setTimeout(function () {
    box.classList.remove("pressed");
  }, 100);
}
