
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
                        'Logout Succesfull',
                        'success'
                    )
                })
            setTimeout(() => {
                window.location.reload();
                window.location.href = "index.html"
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
let logoutele = document.getElementById("logout")
let eleshow = document.getElementById("show-here")



    logoutele.addEventListener("click", async () => {
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
                        'Logout Succesfull',
                        'success'
                    )
                })
            setTimeout(() => {
                window.location.reload();
                window.location.href = "index.html"
            }, 2000);
        } catch (err) {
            console.log(err);
        }
    })
