const deleteButton = document.querySelector(".delete-button");
const buttonText = document.querySelector(".button-text");
const buttonIcon = document.querySelector(".button-icon");
const trashDoor = document.querySelector(".trash-door");
const trashThing = document.querySelector(".trash-thing");
const trashCan = document.querySelector(".trash-can");
deleteButton.addEventListener("click", function () {
  deleteButton.style.transform = "scale(1)";
  buttonText.style.opacity = "0";
  deleteButton.style.width = "50px";
  deleteButton.style.height = "50px";
  setTimeout(function () {
    buttonIcon.style.transform = "translate(-50%, -50%)";
  }, 200);
  setTimeout(function () {
    trashDoor.style.transform = "rotate(120deg)";
  }, 700);
  setTimeout(function () {
    trashThing.style.transform = "translate(-50%,-50%)";
  }, 1200);
  setTimeout(function () {
    trashCan.style.backgroundColor = "white";
  }, 1500);
  setTimeout(function () {
    trashDoor.style.transform = "rotate(0deg)";
  }, 1900);
  setTimeout(function () {
    buttonIcon.style.transform = "translate(60px, -50%)";
    trashThing.style.display = "none";
  }, 2300);
  setTimeout(function () {
    deleteButton.style.width = "110px";
    deleteButton.style.height = "35px";
  }, 2600);
  setTimeout(function () {
    buttonText.style.opacity = "1";
    buttonText.innerText = "Deleted!";
  }, 2700);
});
