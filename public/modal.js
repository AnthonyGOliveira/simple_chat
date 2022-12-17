const modal = document.querySelector("#modal");
const buttonSave = document.querySelector("#btn-save");
const inputUserName = document.querySelector("#input-usr-name");

modal.style.display = "block";

buttonSave.addEventListener("click", () => {
  modal.style.display = "none";
  userConnect.name = inputUserName.value;
  setCardUser(userConnect)
});

inputUserName.addEventListener("input", (event) => {
  if (inputUserName.value.length > 10) {
    buttonSave.removeAttribute("disabled");
  } else {
    buttonSave.setAttribute("disabled", "disabled");
  }
});
