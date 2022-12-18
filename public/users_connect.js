const connectUsers = document.querySelector("#users_connect");

function generateUsersOnChat(data) {
  connectUsers.innerHTML = "";
  data.forEach((element,keys) => {
    connectUsers.innerHTML += `<div class="chip">${element[1].image ? '<img src="#">' : '<p>'+element[1].name[0].toUpperCase()+'</p>'}${element[1].name}</div>`;
  });
}

function getUsers() {
  fetch("http://localhost:8000/users")
    .then((response) => response.json())
    .then((data) => {
      generateUsersOnChat(data)
    });
}