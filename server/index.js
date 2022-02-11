const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.


app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
  "Cool shirt!",
  "Your javascript skills are not stellar."]
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  
  res.status(200).send(randomCompliment);
})

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A faithful friend is a strong defnese.",
           "A fresh start will put you on your way.",
           "A dubious friend may be an enemy in camouflage.",
           "A fiend is a present you give yourself.",
           "A  good time to finsih up old tasks."];
           
           let randomIndex = Math.floor(Math.random() * fortunes.length);
           let randomFortune = fortunes[randomIndex];
           
           res.status(200).send(randomFortune);
})

// i literally just deleted the code that was exactly like below because it wouldn't work, so i copied the one above and just replaced the data and then it worked... why doesn't it work when i type it out exactly #blowingmyheadoff

app.get("/api/insult", (req, res) => {
      const insults = ["You smell like the left pawprint of a dolphin.",
              "You sound like a hippo trying to play the harmonica.",
              "You're as useful as a cup without a bottom.",
              "You look as helpful as a clock without hands.",
              "You're the type of person to get 14+ kills in halo but also has -2k damage.",
              "u suk.",
              "You're a cool person without the cool.",
              "Hanging out with u is like starting a movie from the middle."]
           
           let randomIndex = Math.floor(Math.random() * insults.length);
           let randomInsult = insults[randomIndex];
           
           res.status(200).send(randomInsult);
})

app.get("/api/game", (req, res) => {
    const games = ["Valheim",
      "Minecraft",
      "Valorant",
      "Halo",
      "Horizon Zero Dawn",
      "Sekiro: Shadows Die Twice (this game hurts me inside)"]

      let randomIndex = Math.floor(Math.random() * games.length);
      let randomGame = games[randomIndex];
  
      res.status(200).send(randomGame);
})

app.get("/api/munchie", (req, res) => {
  const munchies = [
    "skittles",
    "spicy water aka sprite",
    "BACTUS BOOLER",
    "hot pockets",
    "bagel bites (u better not use the microwave like a psycho)",
    "baco bell",
    "little cesars pizza",
    "betos"]

    let randomIndex = Math.floor(Math.random() * munchies.length)
    let randomMunchie = munchies[randomIndex]

    res.status(200).send(randomMunchie)
})

app.post("/api/name", (req, res) => {
  let name = req.body.name
  let game = req.body.game
  res.status(200).send(`what up ${name}? i see u like to play ${game}, it's a good one!`)

})


// i spent about 2 hours on this one thing and couldn't figure out how to get it to show on the screen.

// app.get("/api/cars", (req, res) => {
//   const cars = [
//     {
//         "id": 1,
//         "make": "Toyota",
//         "model": "Tacoma",
//         "price": 45000
//     },
//     {
//         "id": 2,
//         "make": "Toyota",
//         "model": "Camrey",
//         "price": 30000
//     },
//     {
//         "id": 3,
//         "make": "Toyota",
//         "model": "Tundra",
//         "price": 60000
//     }
// ]
//     res.status(200).send(cars)
// })

// app.post('/api/cars', (req, res) => {
//   const cars = [
//     {
//         "id": 1,
//         "make": "Toyota",
//         "model": "Tacoma",
//         "price": 45000
//     },
//     {
//         "id": 2,
//         "make": "Toyota",
//         "model": "Camrey",
//         "price": 30000
//     },
//     {
//         "id": 3,
//         "make": "Toyota",
//         "model": "Tundra",
//         "price": 60000
//     }
// ]

// })

          
app.listen(4000, () => console.log("Server running on 4000"));
