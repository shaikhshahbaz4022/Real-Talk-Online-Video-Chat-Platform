const images = [
    "https://cdn.pixabay.com/photo/2020/04/09/11/16/e-learning-5020950_1280.jpg",
    "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    "https://plus.unsplash.com/premium_photo-1663047460384-78e37e140f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1586985564150-11ee04838034?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80"
];

const slideshowImage = document.getElementById("slideshow-image");
let currentIndex = 0;

function changeImage() {
    slideshowImage.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

// Set the initial image
changeImage();

setInterval(changeImage, 2000);

// const logout = document.querySelector(".dom-manipulation");
// // dom-manipulation-logout
// const full_name = document.getElementById("logout");
// // full-name-username
// const signin = document.getElementById("sign-in-2");



// console.log(token);
// console.log(data);

// const dashboardbtn = document.getElementById("dash");
// const videodbtn = document.getElementById("video");
// const chatbtn = document.getElementById("chat");

// if (data) {
//     full_name.textContent = `Hi ! ${data.name}`;
//     full_name.style.marginTop = "7px";
//     full_name.style.fontWeight = "bolder";
//     full_name.style.cursor = "pointer";
//     full_name.style.fontSize = "16px";
//     full_name.style.marginRight = "30px";
//     full_name.style.marginBottom = "3px";
//     // signin.style.border = "2px solid red";
//     signin.style.padding = "10px 10px";
//     signin.style.justifyContent = "center";
//     signin.style.marginBottom = "3px";
//     signin.style.boxShadow = "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px";

//     signin.style.borderRadius = "5px";
//     signin.style.backgroundColor = "#eee";
//     // full_name.style.border = "2px solid red";
//     full_name.style.width = "100px";
//     logout.textContent = "Logout";
//     logout.style.marginTop = "7px";
//     logout.style.cursor = "pointer";
//     // logout.style.fontSize = "60px";
//     // logout.style.padding = "10px";

// }

// // if (token) {
// dashboardbtn.addEventListener("click", () => {
//     if (token) {

//         window.location.href = "./dashboard.html"
//     } else {
//         Swal.fire({
//             icon: "error",
//             title: "Please Login First",
//             text: "Login To Access",
//         });
//     }
// })
// videodbtn.addEventListener("click", () => {
//     if (token) {
//         window.location.href = "./room.html?type=videochat"

//     } else {
//         Swal.fire({
//             icon: "error",
//             title: "Please Login First",
//             text: "Login To Access",
//         });
//     }
// })
// chatbtn.addEventListener("click", () => {
//     if (token) {
//         window.location.href = "./room.html?type=message"

//     } else {
//         Swal.fire({
//             icon: "error",
//             title: "Please Login First",
//             text: "Login To Access",
//         });
//     }
// })
// // }

let showname = document.getElementById("showname")

const data = JSON.parse(localStorage.getItem("userDetails")) || null;
// console.log(data);
if (data) {
    showname.textContent = `${data.name}`
}
const token = localStorage.getItem("token");

let loginbtmn = document.getElementById('login')

if (token) {
    loginbtmn.innerText = `Logout`
    loginbtmn.addEventListener("click", async () => {
        try {
            fetch(`https://nice-lime-elephant-hat.cyclic.app/user/logout`,
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        "Authorization": `${token}`
                    }
                }
            ).then(res => res.json())
                .then(data => {
                    localStorage.clear();
                    Swal.fire(
                        `${data.msg}`,
                        '',
                        'success'
                    )
                })
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (err) {
            console.log(err);
        }
    })
} else {
    loginbtmn.innerText = `Login`
    loginbtmn.addEventListener("click", () => {
        window.location.href = "./login.html"
    })
}


let meet_now = document.getElementById("meet-now")
let chat_Now = document.getElementById("chat-now")

meet_now.addEventListener("click", () => {
    if (token) {

        window.location.href = "./room.html?type=videochat"
    } else {
        Swal.fire({
            icon: "error",
            title: "Please Login First",
            text: "Login To Enjoy Our Services",
        });
    }
})


chat_Now.addEventListener("click", () => {
    if (token) {

        window.location.href = "./room.html?type=message"
    } else {
        Swal.fire({
            icon: "error",
            title: "Please Login First",
            text: "Login To Enjoy Our Services",
        });
    }
})

// let imagehome = document.getElementById("image-home")

// imagehome.addEventListener("click", () => {
//     window.location.href = "./index.html"
// })

let dash = document.getElementById("dash").addEventListener("click", callfunction)
function callfunction() {
    if (token) {
        window.location.href = "./dashboard.html"
    } else {

        Swal.fire({
            icon: "error",
            title: "Please Login First",
            text: "Login To Enjoy Our Services",
        });
    }
}

fetch(`https://real-talk-chat-server.onrender.com/start`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })

fetch(`https://video-chat-server-zbmb.onrender.com/start`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })

// let btmaddele = document.getElementById("btmadd")
// btmaddele.addEventListener('click', () => {
//     window.location.
// })