const BASE_SERVER_URL = "http://localhost:3300"
//******************    ******************//
new AWN().asyncBlock(
    fetch(`${BASE_SERVER_URL}/start`),
    'Room Joined Successfully',
)

const socket = io(`${BASE_SERVER_URL}`)
const videoDiv = document.getElementById("videoDiv")
const room = document.getElementById("roomID");


const myPeer = new Peer();

let userStream;

const urlParams = new URLSearchParams(window.location.search);
const roomID = urlParams.get('roomID');

room.innerText = `Your Room ID is ${roomID}, Enter To Proceed Further`;

const video = document.createElement('video');
video.muted = true;

//To keep track of user connected 
const userConnected = {}


// Asking for video and audio feature
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,

}).then(stream => {

    // Appending the user video to video element
    addStream(video, stream);
    userStream = stream;

    //When Someone call us
    myPeer.on('call', (call) => {

        //--For receiving Calls--

        //answered call and send our current stream
        call.answer(stream)

        //responding and adding the coming videoStream
        const video = document.createElement('video');
        call.on('stream', (userStream) => {
            addStream(video, userStream)
        })
    })

    // user joined the room
    socket.on('user-join', (userID) => {
        connectNewUser(userID, stream)
    })

}).catch(err => {
    console.log(err);
})
//To close the conneciton of disconnected user
socket.on('user-disconnected', (userID) => {
    if (userConnected[userID]) {
        userConnected[userID].close()
    }
})

// When a new client connects
myPeer.on('open', (id) => {
    socket.emit('join-room', roomID, id)
})


const connectNewUser = (userID, stream) => {

    //--Make call when new user connects to our room--

    const call = myPeer.call(userID, stream);
    const video = document.createElement('video');

    call.on('stream', (userStream) => {
        addStream(video, userStream)
    })

    call.on('close', () => {
        video.remove()
    })

    //Add to object whenever new user joins
    userConnected[userID] = call
}


// Appending the video to video element
const addStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play()
    })

    videoDiv.append(video)

}