function login(username, pass){
    return new Promise((resolve, reject) => {
        console.log("Login called...");
        if(username === "dipesh" && pass === "pass"){
            resolve("Welcome Mr. Dipesh...");
        } else {
            reject("Who are you? Get lost...")
        }
    })
}

function show(response){
    return new Promise((resolve, reject) => {
        console.log("show called...");
        resolve("Dipesh works in ScaleTech..."+response);
    })
}

async function demo(){
    const loginResponse = await login("dipesh","pass");
    console.log(loginResponse);
    const showResponse = await show(loginResponse);
    console.log(showResponse);
}

demo()
