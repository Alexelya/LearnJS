new Promise(function (resolve, reject) {
  fetch("https://gorest.co.in/public/v2/users/16", {
    method: "PUT",
    body: JSON.stringify({
      name: "Alex",
      email: "alex86@gmail.com",
      status: "active",
    }),
    headers: {
      "Content-type": "application/json",
      authorization:
        "Bearer 3ac2ee43a95f2b98edf23d7641524a682154800795780a1a865df06018540932",
    },
  }).then(function (res) {
    return res.json();
  });
  resolve(alert('SUCCESS!'));
});
