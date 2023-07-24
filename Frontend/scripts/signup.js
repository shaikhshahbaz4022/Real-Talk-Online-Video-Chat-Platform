
const url = "https://nice-lime-elephant-hat.cyclic.app";

let signbtn = document.getElementById("register-button");
signbtn.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  console.log(name,email,pass)
  if(!name || !pass || !email){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Fields can't be empty",
    });
  } 
  else if(pass.length!=4){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should be of 4 digit",
      });
  }

  // Loader Showing
  //showLoader();
  //document.getElementById("register-button").style.visibility = "hidden";
else{
  let signdata = {
    name: name,
    email: email,
    password: pass,
  };

  fetch(`${url}/user/register`, {
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
   
      if (res.msg === "Registration Succesfull") {
        Swal.fire(
            'Registration Successfull',
            '',
            'success'
          )
        // Transfer to login page here
        setTimeout(()=>{
          window.location.href ="./login.html";
        },2500)
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: res.msg,
        });

        //hideLoader();
        //document.getElementById("register-button").style.visibility = "visible";
      } 
    })
    .catch((err) => {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
      });
      //hideLoader();
      //document.getElementById("register-button").style.visibility = "visible";
    }); 
  }
});




fetch(`https://real-talk-chat-server.onrender.com/start`)
.then((res)=>res.json())
.then((data)=>{
  console.log(data);
})
.catch((err)=>{
  console.log(err);
})

fetch(`https://video-chat-server-zbmb.onrender.com/start`)
.then((res)=>res.json())
.then((data)=>{
  console.log(data);
})
.catch((err)=>{
  console.log(err);
})