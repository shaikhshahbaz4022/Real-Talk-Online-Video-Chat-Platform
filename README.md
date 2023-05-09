# Real Talk Online Chat Platform
![real talk](https://github-production-user-asset-6210df.s3.amazonaws.com/119395145/237085721-15be1142-35b3-4608-a547-9a8b1528b2a3.png)

# RealTalk - Real Time Screen Sharing  Chat Application

**RealTalk is a communications platform that allows users to connect with video, audio, screen share, and chat.**
**The power of collaboration is that it can turn a group of individuals into a team empowered to achieve great things
RealTalk is a type of application that enables users to share their computer screens with others in real-time over the internet. 
It includes features that allows user to chat and video call with each other.**

## Deployment Link - <!--Netlify link-->

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
- Google OAuth 
- Github OAuth

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
![Screenshot (719)](https://github.com/shaikhshahbaz4022/chummy-run-6992/assets/119395145/538016b3-9a1f-44fb-a536-9f50932128f8)


## Footer Page

![Footer](https://user-images.githubusercontent.com/115460646/236770024-990b7fb2-39ea-45ce-b1fb-4237b92cd0f7.png)

## Signing Page

![Screenshot (722)](https://github.com/shaikhshahbaz4022/chummy-run-6992/assets/119395145/92d48953-cc89-427e-9210-4bdca255b3e4)


## Login Page

![Screenshot (145)](https://github-production-user-asset-6210df.s3.amazonaws.com/119395145/237143981-2d97066b-1b9a-4200-b8da-c49adbbe6138.png)

## Dashboard Page

![Screenshot (206)](https://github-production-user-asset-6210df.s3.amazonaws.com/119395145/237143138-948c2008-1de3-4547-8a1e-180ec1761a89.png)


## Room Platform 

![Screenshot (208)](https://user-images.githubusercontent.com/115460646/236784083-8eab643c-efc9-4b12-836c-8fd058832aae.png)


## Video Chat Platform

![Screenshot (713)](https://github.com/shaikhshahbaz4022/chummy-run-6992/assets/119395145/c376c5a2-257c-4853-a1c0-11fbbb3b2a9e)

## Chat Platform

![Screenshot (710)](https://github.com/shaikhshahbaz4022/chummy-run-6992/assets/119395145/fbd85239-b154-44fe-b2ae-2fc74a6ac652)






