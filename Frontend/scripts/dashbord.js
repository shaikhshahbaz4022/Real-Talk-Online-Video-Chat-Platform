const videoBtn = document.getElementById("videoBtn");
const chatBtn = document.getElementById("chatBtn");
const centerVideoBtn = document.getElementById("center-video-btn");
const centerChatBtn = document.getElementById("center-chat-btn");





videoBtn.addEventListener("click",()=>{
    window.location.href="./room.html?type=videochat"
})


chatBtn.addEventListener("click",()=>{
    window.location.href="./room.html?type=message"
})

centerVideoBtn.addEventListener("click",()=>{
    window.location.href="./room.html?type=videochat"
})


centerChatBtn.addEventListener("click",()=>{
    window.location.href="./room.html?type=message"
})


//data append from local storage---------------->
let token = localStorage.getItem("token");
const userinfo = JSON.parse(localStorage.getItem("userDetails"))||null;
console.log(userinfo);
console.log(token)



//tags----------->
const name1 = document.getElementById("append-name");
const name2 = document.getElementById("welcome-name");
const email = document.getElementById("append-email");

if(userinfo){
    name1.innerText = userinfo.name;
    name2.innerText = userinfo.name;
    email.innerText = userinfo.email;
}