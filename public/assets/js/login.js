const loginFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector("#username").value.trim();
    const password = document.querySelector("#pass").value.trim();

    if (email && password) {
        const response = await fetch("/api/user/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert(
                "Failed to login. " +
                    response.status +
                    ": " +
                    response.statusText
            );
        }
    } else {
        alert("Please fill out all fields.");
    }
};

//add event listeners
document
    .querySelector("#login")
    .addEventListener("click", loginFormHandler);