//TASK E
function stringEnd(a)  {
  let grup = a.split("").reverse().join("");
  return grup;
}
console.log(stringEnd("PuorgtiM"));





// TASK D

// function checkContent(a, b) {
//   let array1 = a.split("").sort().join("");
//   let array2 = b.split("").sort().join("");
//   if (array1 === array2) {
//     return true;
//   }
//   return false;
// }

// console.log(checkContent("mitgroup", "mitgroup"));
// console.log(checkContent("flxygroup", "mitgroup"));




//C-TASK

// const moment = require("moment");
// const time = moment().format("HH:mm");

// console.log("Bizda non, lagmon, cola bor");

// class Shop {
//   non;
//   cola;
//   lagmon;
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   qoldiq() {
//     return `Hozir ${time} da sizda ${this.non} ta non va ${this.lagmon} ta lagmon va ${this.cola} ta cola bor;`
//   }

//   sotish(nomi, soni) {
//     if (nomi === "non") {
//       if (this.non === 0) {
//         return "Non qolmadi";
//       } else if (this.non >= soni) {
//         this.non -= soni;
//         return `Hozir ${time} da  ${soni} non oldingiz!;`
//       } else {
//         return "Bunday miqdorda non mavjud emas";
//       }
//     } else if (nomi === "lagmon") {
//       if (this.lagmon === 0) {
//         return "Lagmon qolmadi";
//       } else if (this.lagmon >= soni) {
//         this.lagmon -= soni;
//         return `Hozir ${time} da  ${soni} lagmon oldingiz!;`
//       } else {
//         return "Bunday miqdorda lagmon mavjud emas";
//       }
//     } else if (nomi === "cola") {
//       if (this.cola === 0) {
//         return "Cola qolmadi";
//       } else if (this.cola >= soni) {
//         this.cola -= soni;
//         return `Hozir ${time} da  ${soni} cola oldingiz!;`
//       } else {
//         return "Bunday miqdorda cola mavjud emas";
//       }
//     } else {
//       return "Mahsulot mavjud emas";
//     }
//   }

//   qabul(nomi, soni) {
//     if (nomi === "non") {
//       this.non += soni;
//       return `Hozir ${time} da  ${soni} non qabul qildingiz!;`
//     } else if (nomi === "lagmon") {
//       this.lagmon += soni;
//       return `Hozir ${time} da  ${soni} lagmon qabul qildingiz!;`
//     } else if (nomi === "cola") {
//       this.cola += soni;
//       return `Hozir ${time} da  ${soni} cola qabul qildingiz!;`
//     } else {
//       return "Mahsulot mavjud emas";
//     }
//   }
// }

// const story = new Shop(23, 55, 7);
// console.log(story.qoldiq());
// console.log(story.qabul("lagmon", 10));
// console.log(story.qoldiq());



























// //B-TASK .....
// function countDigits(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (!isNaN(str[i])) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   console.log(countDigits("ad2a54y79wet0sfgb9"));
  
  
  







// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba buling ", // 0-20
//     "togri boshliq tanlang va kuproq xato qiling", // 20-30
//     "uzingizga ishlashingizni boshlang", //30-40
//     "siz kuchli bulgan narsalarni qiling", //40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling foydasi yuq endi",// 60
// ];

// // ////CALBACK function
// function maslahatBering(a, callback) {
//     if ( typeof a !== "namber") callback("Insert a number", null);
//     else if (a <= 20) callback( null, list[0]);
//     else if (a <= 20 && a <= 30) callback( null, list[1]);
//     else if (a <= 30 && a <= 40) callback( null, list[2]);
//     else if (a <= 40 && a <= 50) callback( null, list[3]);
//     else if (a <= 50 && a <= 60) callback( null, list[4]);
//     else {
//         setTimeout(function () {
//             callback( null, list[5]);
//         }, 5000);
//     }
// }

// console.log("passed here 0");
// maslahatBering(50, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log("javob:",data);
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