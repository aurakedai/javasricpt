let username = prompt("who's there")

if (username === "admin") {
    let password = prompt("password")
    if (password === "TheMaster") {
        alert("welcome!")
    } else if (password === '' || password === null) {
        alert("cencel")
    } else {
        alert("wrong password")
    }
} else if (username === '' || username === null) {
    alert("cencel")
} else {
    alert(' i dont know u')
}