const passengers = [
    {
      id: 1,
      passengerName: "Freddie Mercury",
      isVegetarianOrVegan: false,
      connectedFlights: 2,
    },
    {
      id: 2,
      passengerName: "Amy Winehouse",
      isVegetarianOrVegan: true,
      connectedFlights: 4,
    },
      {
      id: 3,
      passengerName: "Kurt Cobain",
      isVegetarianOrVegan: true,
      connectedFlights: 3,
    },
       {
      id: 3,
      passengerName: "Michael Jackson",
      isVegetarianOrVegan: true,
      connectedFlights: 1,
    },
  ];

//   let arr = passengers.map((item) => {
//     if (item.isVegetarianOrVegan) return item.passengerName;
//   }).filter(Boolean);

//   console.log(arr);
// let arr2 = passengers.filter(item => item.isVegetarianOrVegan);

// console.log(arr2);

// arr2.sort((a , b) => b.connectedFlights - a.connectedFlights);

// console.log(arr2);


// let arr3 = [];

// passengers.forEach((passenger) => {
//     arr3.push(passenger.passengerName);
// })

// console.log(arr3);

// const arr4 = passengers.filter(item => item.isVegetarianOrVegan )
// .sort((a, b) => b.connectedFlights - a.connectedFlights)
// .map(item => item.passengerName)
// ;

// console.log(arr4);

let arr5 = [];

// for(let x = 0; x < passengers.length;x++) {
//     if(passengers[x].isVegetarianOrVegan) {
//         arr5.push(passengers[x].passengerName)
//     }   
// };

passengers.forEach((item) => {
    if(item.isVegetarianOrVegan){
        arr5.push(item.passengerName)
    }
});

console.log(arr5);

// function solve (...arr) {
//     //  let a = arr.map((array) =>{
//     //     return array()
//     //  })
    
//      let a = arr[0]
//     for(let x = 1 ; x<arr.length;x++){
//         a =  arr[x](a)
       
//     }
//      return a ;
// }

// solve(a,b,c,d)


// const express = require('express');

// const app = express();

// const morgan = require('morgan');

// const dotenv = require('dotenv');

// const mongoose = require('mongoose');

// const expressValidator = require('express-validator');

// dotenv.config();

// const port = process.env.PORT || 3009;


// //database
// mongoose
//   .connect(process.env.MONGO_URI, {})
//   .then(() => console.log("DB connected"))
//   .catch((err) => console.log("DB Error => ", err));

// // middleware 

// app.use(morgan("dev"));
// app.use(express.json());
// app.use(express.urlencoded({extended:true}))
// app.use(expressValidator())


// //import routes 

// const postRoutes = require('./routes/post');

// app.use('/',  postRoutes);

// app.listen(port,console.log('App is live on :', port));