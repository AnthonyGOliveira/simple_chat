const connectUsers = document.querySelector("#users_connect");

function generateUsersOnChat(data) {
  connectUsers.innerHTML = "";
  data.forEach((element) => {
    connectUsers.innerHTML += `<div class="chip"><img src="#">${element.id}</div>`;
  });
}

function getUsers() {
  fetch("http://localhost:8000/users")
    .then((response) => response.json())
    .then((data) => generateUsersOnChat(data));
}