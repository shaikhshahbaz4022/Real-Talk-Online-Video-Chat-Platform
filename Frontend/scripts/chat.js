console.log("connected");







const socket = io("http://localhost:5000/",{transports:["websocket"]});


socket.emit("joinRoom", ({ username, room }));

socket.on("message", (message) => {

    outputMessage(message);

})