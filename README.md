# Real Talk Online Chat Platform

<div style="display: flex; justify-content: center; align-items: center;">
  <img style="border-radius: 10px" src="https://github-production-user-asset-6210df.s3.amazonaws.com/119395145/237085721-15be1142-35b3-4608-a547-9a8b1528b2a3.png" alt="error">
</div>



# RealTalk - Real Time Video Chat Application

**RealTalk is a communications platform that allows users to connect with video, audio and chat.**

**The power of collaboration is that it can turn a group of individuals into a team empowered to achieve great things
RealTalk is a type of application that enables users to share their computer screens with others in real-time over the internet. 
It includes features that allows user to chat and video call with each other.**

## Deployment Link -https://realtalk-online-videochat.netlify.app/

## Tech Stack

**Client:** HTML | CSS | Javascript | Bootsrap | External CSS library

**Server:** Node.js | Express.js | MongoDB | WebRTC | PeerJS library | Socket.io | Bcrypt | PassPort | cors | Redis | JWT

**github:** To maintain repository and collabration and version control.

**VS Code:** To write HTML,CSS and JavaScript code.

**Microsoft Edge,Google Chrome & Mozilla Firefox:** To check the functionality and run the code.

## Frontend Part

- Home page
- Login/Signup
- Dashboard
- Create Room
- Join Room
- Real time Message 

## Backend Part
- Authentication using JWT
- implementation using Socket.io
- fully functional Video and  Audio icons

## Database  
 - MongoDB
 - Redis

## Features 
 -  Chatting 
 -  Video Calling

 ## Application Guide to use features

### To use {Video calling} feature -->
-  First Create room 
-  User can join the call by using the room ID
-  To end the call click on hang on button

### To use {Chat} feature -->
-  First Create room
-  User can join the room using room ID after login
-  Time is displayed of message
-  Notifies User info


## Examples
 #### Creating connection and accessing user media .
```javascript 
const express = require('express');
const { client } = require('../db');
const RoomRouter = express.Router()
    RoomRouter.post("/join", async (req, res) => {
    try {
        const { roomID, type } = req.body
        let isRoomExist = await client.exists(`${roomID}`)
        console.log(isRoomExist);

        if (isRoomExist) {
            const DataBaseType = await client.get(`${roomID}`)
            console.log(DataBaseType);
            if (DataBaseType == type) {
                res.status(201).send({ "ok": true, "msg": "Room Joined Succesfully" })

            } else {
                res.send({ "ok": false, "msg": `${type} Room Doesn't Exist` });
            }
        } else {
            res.send({ "ok": false, "msg": `Room Doesn't Exist` });

        }
    } catch (error) {
        console.log(error);
        res.status(401).send({ "ok": false, "msg": error.message })

    }
})


```

## Group Members Info

1. Shaikh Shahbaz(Team Lead)
   >    - e-Mail: shaikhshahbaz4022@gmail.com
   >    - GitHub: https://github.com/shaikhshahbaz4022

2. Aman Kashyap
   >    - e-Mail: aman1722kashyap@gmail.com
   >    - GitHub: https://github.com/Aman1722


3. MD Haroon Hussain
   >    - e-Mail: haroonhussain97@gmail.com
   >    - GitHub: https://github.com/mdharoonhussain 


 GitHub: https://github.com/shaikhshahbaz4022/chummy-run-6992

<br>

## Home Page
![Screenshot 2023-07-21 214818](https://github.com/shaikhshahbaz4022/Real-Talk-Online-Video-Chat-Platform/assets/119395145/5d0fffe6-a0bc-485a-8c30-3704933348e2)
![Screenshot 2023-07-21 214837](https://github.com/shaikhshahbaz4022/Real-Talk-Online-Video-Chat-Platform/assets/119395145/484b207d-12b4-40c5-9c71-f0250cc45316)
![Screenshot 2023-07-21 214854](https://github.com/shaikhshahbaz4022/Real-Talk-Online-Video-Chat-Platform/assets/119395145/8cc2d2b2-301e-48c9-9121-850c6ca5e1d0)
![Screenshot 2023-07-21 214918](https://github.com/shaikhshahbaz4022/Real-Talk-Online-Video-Chat-Platform/assets/119395145/93c49e89-29c2-4f7c-8204-580a5c2f555a)
## Footer Page
![image](https://github.com/shaikhshahbaz4022/Real-Talk-Online-Video-Chat-Platform/assets/112754413/0d893c0c-e01e-4bb3-89f3-fe13327f838e)



## Signing Page

![Screenshot (722)](https://github.com/shaikhshahbaz4022/chummy-run-6992/assets/119395145/92d48953-cc89-427e-9210-4bdca255b3e4)


## Login Page

![Screenshot (145)](https://github-production-user-asset-6210df.s3.amazonaws.com/119395145/237143981-2d97066b-1b9a-4200-b8da-c49adbbe6138.png)

## Dashboard Page
![Screenshot 2023-07-21 215731](https://github.com/shaikhshahbaz4022/Real-Talk-Online-Video-Chat-Platform/assets/119395145/999930bb-0e63-4c7e-a270-a3a5e4b47fed)

## Room Platform 

![Screenshot (208)](https://user-images.githubusercontent.com/115460646/236784083-8eab643c-efc9-4b12-836c-8fd058832aae.png)


## Video Chat Platform

![Screenshot (713)](https://github.com/shaikhshahbaz4022/chummy-run-6992/assets/119395145/c376c5a2-257c-4853-a1c0-11fbbb3b2a9e)

## Chat Platform

![Screenshot (710)](https://github.com/shaikhshahbaz4022/chummy-run-6992/assets/119395145/fbd85239-b154-44fe-b2ae-2fc74a6ac652)






