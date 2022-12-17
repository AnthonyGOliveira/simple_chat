const connectUsers = document.querySelector("#users_connect");

function generateUsersOnChat(data) {
  connectUsers.innerHTML = "";
  data.forEach((element) => {
    connectUsers.innerHTML += `<span>${element.id}</span>`;
  });
}

function execute() {
  fetch("http://localhost:8000/users")
    .then((response) => response.json())
    .then((data) => generateUsersOnChat(data));
}

execute();