new Promise(function (resolve, reject) {
  resolve(10);
})
  .then(function (result) {
    alert(result);
    return new Promise(function (resolve, reject) {
      resolve(9);
    });
  })
  .then(function (result) {
    alert(result);
    return new Promise(function (resolve, reject) {
      resolve(8);
    });
  })
  .then(function (result) {
    alert(result);
    return new Promise(function (resolve, reject) {
      resolve(7);
    });
  })
  .then(function (result) {
    alert(result);
    return new Promise(function (resolve, reject) {
      resolve(6);
    });
  })
  .then(function (result) {
    alert(result);
    return new Promise(function (resolve, reject) {
      resolve(5);
    });
  })
  .then(function (result) {
    alert(result);
    return new Promise(function (resolve, reject) {
      resolve(4);
    });
  })
  .then(function (result) {
    alert(result);
    return new Promise(function (resolve, reject) {
      resolve(3);
    });
  })
  .then(function (result) {
    alert(result);
    return new Promise(function (resolve, reject) {
      resolve(2);
    });
  })
  .then(function (result) {
    alert(result);
    return new Promise(function (resolve, reject) {
      resolve(1);
    });
  })
  .then(function (result) {
    alert(result);
    return new Promise(function (resolve, reject) {
      resolve(0);
    });
  });
