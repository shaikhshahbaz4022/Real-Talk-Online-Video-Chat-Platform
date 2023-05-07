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