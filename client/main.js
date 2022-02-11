

const compliment = document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
}

const fortune = document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
            const data = response.data
            alert(data)
        })
}

const insult = document.getElementById("insultButton").onclick = function () {
    axios.get("http://localhost:4000/api/insult/")
        .then(function (response) {
            const data = response.data
            alert(data)
        })
}

const game = document.getElementById("gameButton").onclick = function () {
    axios.get("http://localhost:4000/api/game/")
        .then(function (response) {
            const data = response.data
            alert(data) 
        })
}

const munchie = document.getElementById("munchieButton").onclick = function () {
    axios.get("http://localhost:4000/api/munchie/")
        .then(function (response) {
            const data = response.data
            alert(data) 
        })
}

let user = {
    // name: document.getElementById("nameInput"),
    name: 'ty',
    game: 'valheim'
}

const name = document.getElementById("nameButton").onclick = function () {
    axios.post("http://localhost:4000/api/name/", user)
        .then(function (response) {
            const data = response.data
            alert(data) 
        })
}

// const cars = document.getElementById("getCars").onclick = function () {
//     axios.get("http://localhost:4000/api/cars/")
//         .then(function (response) {
//             const data = response.data
//             alert(data)
//         })
// }