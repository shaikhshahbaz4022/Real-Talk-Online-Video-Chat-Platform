//page redirect js code
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
//signup form code
const url = "https://realtalk-xptc.onrender.com";

let signupbtn = document.getElementById("btn");
signupbtn.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  console.log(name,email,pass)
  if(!name || !pass || !email){
    alert("Please Enter all details are Mandatory")
    } 
    else if(pass.length>4){
   alert("password should be of 4 digit")
    }

  // Loader Showing
  //showLoader();
  //document.getElementById("btn").style.visibility = "hidden";

  let signdata = {
    name: name,
    email: email,
    password: pass,
  };

  fetch(`${url}/user/sign`, {
    method: "POST",
    body: JSON.stringify(signdata),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => { 
      console.log(res)
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("pass").value = "";

      if (res.ok) {
        alert(
            'Registration Successfull'
          )
        // Transfer to login page here
        setTimeout(()=>{
          window.location.href = "./signup_login.html";
        },2500)
      } else {
        alert("Already registered User") 

        //hideLoader();
        //document.getElementById("btn").style.visibility = "visible";
      }
    })
    .catch((err) => {
      console.log(err);
      // Swal.fire({
      //   icon: "error",
      //   title: "Oops...",
      //   text: err.message,
      // });
      //hideLoader();
     // document.getElementById("btn").style.visibility = "visible";
    });
}); 
// function showLoader() {
//   document.getElementById("loader2").style.display = "flex";
// }

// // Hide the loader
// function hideLoader() {
//   document.getElementById("loader2").style.display = "none";
// }  
//login .js code

// login script is  start hare
let login = document.getElementById("login");

login.addEventListener("submit", (e) => {
  e.preventDefault();

  let lemail = document.getElementById("lemail").value;
  let lpass = document.getElementById("lpass").value;

  if (!lemail || !lpass) {
    alert("email and password cannot be empty")
    return;
  }

  // Loader Showing
  //showLoader();
 // document.getElementById("login").style.visibility = "hidden";

  let signdata = {
    email: lemail,
    password: lpass,
  };


  fetch(`${url}/user/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(signdata),
  })
    .then((res) => res.json())

    .then((res) => {

      document.getElementById("lemail").value = "";
      document.getElementById("lpass").value = "";
      if (res.ok) {
        alert("Login Successfully")
        localStorage.setItem("userDetails", JSON.stringify(res.user_details));
        localStorage.setItem("token", res.token);
        localStorage.setItem("signedIn",true)
        window.location.href = "./dashboard.html";

      } else {
        alert("email or password Incorrect Enter Again")
        hideLoader();
        document.getElementById("login").style.visibility = "visible";
      }

    })
    .catch((err) => {
      console.log(err);
      alert(err.message)
      //hideLoader();
      //document.getElementById("login").style.visibility = "visible";
    });
});




