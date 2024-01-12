function login() {
    document.getElementById("loginForm").style.display = "flex";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("btn").style.left = "0";
  }
  
  function register() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "flex";
    document.getElementById("btn").style.left = "110px";
  }
  