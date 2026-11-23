function login(username: string, password: string): void {

    if (username === "admin" && password === "admin@123") {
        console.log("Login Successful");
    } else {
        console.log("Invalid Credentials");
    }
}

login("admin", "admin123");

login("user", "12345");
