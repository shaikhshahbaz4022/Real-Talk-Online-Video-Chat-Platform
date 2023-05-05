const socket = io('http://localhost:8000/,',{transports:["websocket"]});


const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');




const naam = prompt('Enter your name to join');
socket.emit('new-user-joined', naam);