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
   >    - e-Mail: aman1722kashyap@gmail.com
   >    - GitHub: https://github.com/Aman1722


4. Haroon Hussain
   >    - e-Mail: haroonhussain97@gmail.com
   >    - GitHub: https://github.com/mdharoonhussain 


 GitHub: https://github.com/shaikhshahbaz4022/chummy-run-6992

<br>

## Complete Work-flow of RealTalk

![work-flow](https://user-images.githubusercontent.com/115463536/229331910-ba9200c8-7d65-4c98-b4a1-3f921088107b.jpg)

## Home Page
![HomePage](https://user-images.githubusercontent.com/115460646/236769738-7db39f2e-3689-4be8-9982-424f3270f9f4.png)

## Footer Page
![Footer](https://user-images.githubusercontent.com/115460646/236770024-990b7fb2-39ea-45ce-b1fb-4237b92cd0f7.png)

## Signing Page
![Screenshot (144)](https://user-images.githubusercontent.com/115460646/236770230-0bee2292-a907-42ed-b2dd-5b115ddfe243.png)

## Login Page
![Screenshot (145)](https://user-images.githubusercontent.com/115460646/236770453-e7bbc290-9095-4bc9-89e9-2ad862477d6d.png)

## Dashboard Page
![Screenshot (146)](https://user-images.githubusercontent.com/115460646/236770601-c56f9f9e-a48f-4277-81af-e7df3e9ad055.png)

## Video Chat Platform


