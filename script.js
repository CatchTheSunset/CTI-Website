document.getElementById("loginBtn").addEventListener("click", function () {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {

        localStorage.setItem("role", "admin");
        window.location.href = "dashboard.html";

    } else if (username === "user" && password === "user123") {

        localStorage.setItem("role", "normal");
        window.location.href = "dashboard.html";

    } else {

        document.getElementById("message").innerText =
            "Invalid username or password";
    }
});