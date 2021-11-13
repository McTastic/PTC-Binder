const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("Calling login...");

  const usernameEl = document.querySelector("#username-login").value.trim();
  const passwordEl = document.querySelector("#password-login").value.trim();

  if (usernameEl && passwordEl) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ user_name: usernameEl, password: passwordEl }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.status);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users/", {
      method: "POST",
      body: JSON.stringify({ username, password, email }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
