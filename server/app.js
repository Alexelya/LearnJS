let url = "https://1ae0-37-186-127-62.eu.ngrok.io";

function signUp() {
  let _username = document.querySelector("#Username").value;
  let _password = document.querySelector("#password").value;
  let _confirm_password = document.querySelector("#confirm_password").value;
  fetch(url +
    "signup",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: _username,
        password: _password,
        confirm_password: _confirm_password,
      }),
    }
  );
}
function signIn() {
  fetch(url +
    "/signin",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: "alex",
        password: "12345",
      }),
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      localStorage.setItem("token", response.token);
    });
}

function logOut() {
  fetch(url +
    "/destroy-session",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
    }
  );
}
function getMe() {
  let token = localStorage.getItem("token");
  fetch(url + "/me", {
      method: "GET",
      headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "User-Agent": "telran",
          "ngrok-skip-browser-warning": "69420",
          "x-access-token": token,
      }
  })
  .then (data => data.json())
  .then(data => { 
    console.log("User id = ", data.id);
    console.log("Username = ", data.username);
    console.log("User age = ", data.age);
    console.log("User avatar = ", data.avatar);
    // console.log("User data = ", data);
  });
}
