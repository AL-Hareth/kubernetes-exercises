function generateRandomString() {
    let string = "";

    for (let i = 0; i < 10; i++) {
        string += String.fromCharCode(32 + Math.floor(Math.random() * 100));
    }

    return string;
}

function excute() {
    let randomString = generateRandomString();

    setInterval(() => console.log(`${new Date(Date.now()).toTimeString()} ${randomString}`), 5000);
}

excute();
