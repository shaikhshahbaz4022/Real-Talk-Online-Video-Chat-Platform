# chummy-run-6992 
![icon](![real talk](https://user-images.githubusercontent.com/115460646/236768222-bd440a54-94e4-4e50-83a3-e14f5fda1fe0.png)
)

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

 ### To use {Screen share} feature -->
-  First Create room 
-  User can share the screen
-  User can join the room using room ID
-  Enter room ID to join 

#### Stop share -->
- Click on stop share option 

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
   >    - e-Mail: @gmail.com
   >    - GitHub: https://github.com/Aman1722


4. Haroon Hussain
   >    - e-Mail: @gmail.com
   >    - GitHub: https://github.com/mdharoonhussain 


 GitHub: https://github.com/shaikhshahbaz4022/chummy-run-6992

<br>

## Complete Work-flow of RealTalk

![work-flow](https://user-images.githubusercontent.com/115463536/229331910-ba9200c8-7d65-4c98-b4a1-3f921088107b.jpg)

## Home Page
![home page](https://user-images.githubusercontent.com/112820391/229371183-24ec49f9-2dc6-41e5-bb21-0f340f8dec72.PNG)
## Footer Page
![ooter page](https://user-images.githubusercontent.com/112820391/229371197-2fe56e7e-ff79-46ce-bccd-ad6c84c10ab7.PNG)
## Signing Page
![sigin page](https://user-images.githubusercontent.com/112820391/229371204-bb79974c-4d59-42a5-824c-49f884a4d860.PNG)
## Login Page
![login page](https://user-images.githubusercontent.com/112820391/229371208-37d675ae-2f72-4b28-9951-3de7c3044118.PNG)
## Dashboard Page
![dashboard page](https://user-images.githubusercontent.com/112820391/229371233-bea4c2b8-75d7-4b2b-b6e1-e95bc52a4093.PNG)
## Video Chat Platform
![video chat platform](https://user-images.githubusercontent.com/112820391/229371247-f2d3b3a3-7dff-40cb-9c2e-6770234979d1.PNG)

