let logOutBtn = document.getElementById("logOutBtn");
let welcomeUser = document.getElementById("userName");
let userName = localStorage.getItem("userName");

welcomeUser.innerHTML = ` <div>
<h2 class="h1 fw-bold">
Welcome  ${userName}
</h2>
<p class="text-success">

I hope you are well ${userName} <i class="fa-solid fa-heart text-danger"></i>
</p>

</dive>`;

logOutBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
