// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba buling ", // 0-20
//     "togri boshliq tanlang va kuproq xato qiling", // 20-30
//     "uzingizga ishlashingizni boshlang", //30-40
//     "siz kuchli bulgan narsalarni qiling", //40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling foydasi yuq endi",// 60
// ];

// ////CALBACK function
// function maslahatBering(a, callback) {
//     if ( typeof a !== "namber") callback("Insert a number", null);
//     else if (a <= 20) callback( null, list[0]);
//     else if (a <= 20 && a <= 30) callback( null, list[1]);
//     else if (a <= 30 && a <= 40) callback( null, list[2]);
//     else if (a <= 40 && a <= 50) callback( null, list[3]);
//     else if (a <= 50 && a <= 60) callback( null, list[4]);
//     else {
//         setInterval(function () {
//             callback( null, list[5])
//         }, 1000);
//     }
// }

// console.log("passed here 0");
// maslahatBering(70, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log(data);
//     }
// });
// console.log("passed here 1");

////Async function
// async function maslaxatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a < 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//              resolve(list[5]);
//             }, 5000);   
//         })

//     }
// }


////call via then/catch
// console.log("passed here 0");

// maslahatBering(65)
// .then((data) => {
//     console.log("javob:", data);
// })
// .catch((err) => {
//     console.log("ERROR:", err);
// });
// console.log("passed here 1");

//// asyn/await
// async function run() {
//     let javob = await maslahatBering(25);
//     console.log(javob);
//     javob = await maslahatBering(70);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();








//A-TASK .....
  

// function block(e, kech) {
//     let count = 0;
  
//     for (let i = 0; i < kech.length; i = i + 1) {
//       if (kech[i] === e) {
//         console.log("before", count);
//         count = count + 1;
//       }
//     }
//     console.log("after", count);
//     return count;
//   }
  
//   console.log(block("e", "element"));


//A-TASK .....