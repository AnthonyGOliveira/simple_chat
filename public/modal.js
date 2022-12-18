const modal = document.querySelector("#modal");
const buttonSave = document.querySelector("#btn-save");
const inputUserName = document.querySelector("#input-usr-name");

modal.style.display = "block";

buttonSave.addEventListener("click", () => {
  modal.style.display = "none";
  userConnect.name = inputUserName.value;
  setCardUser(userConnect)
  fetch(`http://localhost:8000/user/update/${userConnect.id}/name`, {
    method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({ name: userConnect.name }) // body data type must match "Content-Type" header
  })
  .then(() => {
  })
  getUsers();
});

inputUserName.addEventListener("input", (event) => {
  if (inputUserName.value.length > 4) {
    buttonSave.removeAttribute("disabled");
  } else {
    buttonSave.setAttribute("disabled", "disabled");
  }
});
