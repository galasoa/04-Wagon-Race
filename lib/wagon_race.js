const movePlayer = (player) => {
  let activeBox = document.querySelector(`#player${player}-race .active`);
  activeBox.nextElementSibling.classList.add("active");
  activeBox.classList.remove("active");
  activeBox = activeBox.nextElementSibling;
  if (activeBox.classList.contains("finish")) {
    alert(`Player ${player} wins! 🎉`);
    window.location.reload();
  }
};

document.addEventListener("keyup", (event) => {
  if (event.isComposing || event.keyCode === 81) {
    movePlayer(1);
  }
  if (event.isComposing || event.keyCode === 80) {
    movePlayer(2);
  }
});
