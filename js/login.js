const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  // submit event detected
  event.preventDefault();
  const login = document.getElementById("login").value;
  const url = "https://reqres.in/api/login";
  fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      email: login,
      password: document.getElementById("password").value,
    }),
  })
    .then(function (res) {
      window.open("/home.html", "_self");
    })
    .catch(function (res) {
      console.log(res);
    });
});
