const init = () => {
  const userName = localStorage.getItem("userName");
  const userDisplayEl = document.querySelector(".displayName");
  userDisplayEl.innerHTML = userName;
};

init();
