const cardNameUser = document.querySelector("#chat-card-name-user");
const cardDescriptionUser = document.querySelector("#chat-card-description-user");

function setCardUser(user){
    if(user.name != ''){
        console.log(user.name);
        cardNameUser.innerText = user.name;
    }
}