// const cars = [
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

// let globalId = 4

// module.exports = {
//     getCars: (req, res) => {
//         res.status(200).send(cars) 
//     },
//     createCar: (req, res) => {
//         let {make, model, price} = req.body
//         let newCar = {
//             id: globalId,
//             make,
//             model,
//             price: Number(price)
//         }
//     }
// }