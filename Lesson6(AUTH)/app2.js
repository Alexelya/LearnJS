let server_url =
  "https://03b8-2a02-2a57-4052-0-4875-ae8f-aeec-8cda.eu.ngrok.io";
let _html2 = {};
let _request = {};

_html2.login =
  "<h1>Login form</h1><hr/>" +
  "<label for='username'>Fill your username</label><br/>" +
  "<input id='username' type='text'/><br/><br/>" +
  "<label for='password'>Your password</label><br/>" +
  "<input id='password' type='password'/><br/><br/>" +
  "<button id='submitLogin'>LOGIN</button><br/><br/>" +
  "<button id='Getme'>Get ME</button><br/><br/>" +
  "<button id='Transaction'>Transaction</button><br/><br/>" +
  "<span>OR</span><br/><br/>" +
  "<button id='registration' onclick='goToRegistration();'>Registration</button>";

_html2.registration =
  "<h1>Registration form</h1><hr/>" +
  "<label for='username'>Fill your username</label><br/>" +
  "<input id='username' type='text'/><br/>" +
  "<label for='password'>Your password</label><br/>" +
  "<input id='password' type='password'/><br/>" +
  "<label for='confirm-password'>Confirm password</label><br/>" +
  "<input id='confirm-password' type='password'/><br/>" +
  "<button id='submitRegistration'>REGISTRATION</button><br/><br/>" +
  "<span>OR</span><br/>" +
  "<button id='login' onclick='goToLogin();'>Login</button>";

_html2.dashboard = "<h1>Dashboard</h1><hr/>";

document.addEventListener("DOMContentLoaded", function () {
  console.log("App js and DOM is ready!");
  /**
   * Start logic
   */
  _appendDOM(_html2.login);

  document
    .getElementById("submitLogin")
    .addEventListener("click", function (_el) {
      _request.login(_el);
    });
  document
    .getElementById("Getme")
    .addEventListener("click", function () {
      _request.getMe();
    });
    document
    .getElementById("Transaction")
    .addEventListener("click", function () {
      _request.getTransactions(localStorage.getItem("user_id"));
    });
});

function _appendDOM(_obj) {
  document.getElementsByTagName("body")[0].innerHTML = _obj;
}

_request.login = function (_this) {
  let _postObj = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  fetch(server_url + "/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Bypass-Tunnel-Reminder": "1111",
      "User-Agent": "WWW",
      "ngrok-skip-browser-warning": "69420",
    },
    body: JSON.stringify(_postObj),
  })
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.token) {
        localStorage.setItem("token", data.token);
        _request.getMe();
      } else {
        alert("didn't get token");
      }
    });
};
_request.getMe = function () {
  fetch(server_url + "/me", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Bypass-Tunnel-Reminder": "1111",
      "User-Agent": "WWW",
      "ngrok-skip-browser-warning": "69420",
      "authorization": "Basic " + localStorage.getItem("token"),
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      console.log("ME: ", data);
      localStorage.setItem("user_id", data.id)
    });
};
_request.getTransactions = function (user_id) {
    fetch(server_url + '/transactions' + "?" + "user_id=" + user_id, {
        method : "GET",
        headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Bypass-Tunnel-Reminder": "1111",
            "User-Agent": "WWW",
            "ngrok-skip-browser-warning": "69420",
            "authorization": "Basic " + localStorage.getItem("token"),
          },
    }
    )
    .then(function (response) {
        return response.json();
      })
      .then((data) => {
        console.log("Transaction: ", data);
      });
  };

  