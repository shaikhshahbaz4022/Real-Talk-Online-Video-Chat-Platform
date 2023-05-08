# chummy-run-6992 
(![real talk](https://user-images.githubusercontent.com/115460646/236768222-bd440a54-94e4-4e50-83a3-e14f5fda1fe0.png)

# RealTalk - Real Time Screen Sharing  Chat Application

**RealTalk is a communications platform that allows users to connect with video, audio, screen share, and chat.**
**The power of collaboration is that it can turn a group of individuals into a team empowered to achieve great things
RealTalk is a type of application that enables users to share their computer screens with others in real-time over the internet. 
It includes features that allows user to chat, video call, screen share with each other.**

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
- fully functional Video, Audio and Screen Share icons

## Database  
 - MongoDB
 - Redis

## Features 
 -  Screen Sharing 
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

module.exports = { RoomRouter }
```

## Group Members Info

1. Shaikh Shahbaz(Team Lead)
   >    - e-Mail: shaikhshahbaz4022@gmail.com
   >    - GitHub: https://github.com/shaikhshahbaz4022


2. Bhavya Khatri
   >    - e-Mail: dnd88778@gmail.com
   >    - GitHub: https://github.com/Bhavya022 


3. Aman Kashyap
   >    - e-Mail: aman1722kashyap@gmail.com
   >    - GitHub: https://github.com/Aman1722


4. Haroon Hussain
   >    - e-Mail: haroonhussain97@gmail.com
   >    - GitHub: https://github.com/mdharoonhussain 


 GitHub: https://github.com/shaikhshahbaz4022/chummy-run-6992

<br>

## Home Page
![Screenshot (207)](https://user-images.githubusercontent.com/115460646/236783540-9cb13e9b-2ca0-4f0a-8c97-2a3d08eaa121.png)


## Footer Page
![Footer](https://user-images.githubusercontent.com/115460646/236770024-990b7fb2-39ea-45ce-b1fb-4237b92cd0f7.png)

## Signing Page
![Screenshot (144)](https://user-images.githubusercontent.com/115460646/236770230-0bee2292-a907-42ed-b2dd-5b115ddfe243.png)

## Login Page
![Screenshot (145)](https://user-images.githubusercontent.com/115460646/236770453-e7bbc290-9095-4bc9-89e9-2ad862477d6d.png)

## Dashboard Page
![Screenshot (206)](https://user-images.githubusercontent.com/115460646/236783304-c3b9ae9f-65f6-4d8e-bff4-b7a5eba406fc.png)


## Video Chat Platform 
![Screenshot (208)](https://user-images.githubusercontent.com/115460646/236784083-8eab643c-efc9-4b12-836c-8fd058832aae.png)



