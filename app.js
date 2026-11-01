 // import {users} from"./date.js";

// function addUser(name, lastName, age, job, email, password) {
//   let newUser = {
//     id: users.length===0 ? 1 :users.at(-1).id+1,
//     name,
//     lastname,
//     age,
//     job,
//     email,
//     password,
//   };

//   return users.push(newUser);
// }
//  addUser(
//     "john doe",
//     "macgregor",
//     34,
//     "boxer",
//     "johndoe@gmail.com",
//     "1234",
//   ),



// console.log(users);


//===========================================================================

// 100.Quyidagi namunani kuzatgan holda funksiya yasang.
// Namuna:
// Namuna("div*2") => "<div></div><div></div>"
// Namuna("p*1") => "<p></p>"
// Namuna("li*3") => "<li></li><li></li><li></li>"

// function Namuna(str){
//   const [tag, count] = str.split("+");
//   return <${tag}></${tag}>.repeat(Number(count));
// }

// console.log(Namuna("div*2"));
// console.log(Namuna("p*2"));
// console.log(Namuna("li*3"));

//=============================================================================

// 101.Funksiya butun son qabul qilsa, 1dan ushbu butun
// songacha bo’lgan sonlar yig’indisini qaytarsin.


// const sonlarYigindisi=function(n) {
//   let yigindi = 0;
//   for (let i = 1; i <= n; i++) {
//     yigindi += i;
//   }
//   return yigindi;
// }

// // Sinab ko'rish:
// console.log(sonlarYigindisi(5)); 
// console.log(sonlarYigindisi(10));

// 102.Funskiya son va object qabul qiladi. Objectni ichida min va
// max degan propertilar mavjud. Agar ushbu son min va maxni
// oralig’ida bo’lsa funksiya true qaytarsin, aks holda false

// const oraliq = (num, bounds)=>{
//   return num >= bounds.min && num <= bounds.max;

// }

// console.log(oraliq(4, { min: 0, max: 5 }));
// console.log(oraliq(4, { min: 4, max: 5 }));
// console.log(oraliq(4, { min: 6, max: 10 }));

//=========================================================================

// 103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga
// ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng
// bo’lsa funksiya true qaytarsin, aks holda false.

// function kvadrat(n) {
//   let square = n * n;
//   return square.toString().endsWith(n.toString());
// }

// console.log(kvadrat(5)); 
// console.log(kvadrat(6));  
// console.log(kvadrat(25)); 
// console.log(kvadrat(7)); 

//===============================================================================

// 104.Funksiya massiv qabul qiladi. Funksiya massivning elementlariga o’sha elementning indexini 
// qo’shgan holda yangi massiv qaytarsin.

// function addIndexes(arr) {
//   return arr.map((val, index) => val + index);
// }

// console.log(addIndexes([0, 0, 0, 0, 0]));
// console.log(addIndexes([1, 2, 3, 4, 5]));
// console.log(addIndexes([10, -2, 25, 4]));

//==================================================================================

// 105.Funksiya ichimliklar massivini qabul qiladi. Funksiya
// ichida shakari yo’q ichimlilarinigina qaytarishi kerak. Ichida
// shakari bor ichimliklar ro’yxati:
// cola , fanta, water.

// function noSugarDrinks(drinks) {
//   const sugarDrinks = ["cola", "fanta", "water"];
  
//   return drinks.filter(drink => !sugarDrinks.includes(drink.toLowerCase()));
// }

// console.log(noSugarDrinks(["cola", "tea", "fanta", "coffee", "water", "sprite"])); 

//=================================================================================

// 106.Funksiya son qabul qilsa, Funksiya ushbu sonda nechta
// raqam borligini qaytarsin.

// function digitCount(num) {
//   return Math.abs(num).toString().length;
// }

// console.log(digitCount(12345));
// console.log(digitCount(-987));
// console.log(digitCount(0));    

//==================================================================================
 // 107.Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari
// o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin
// bo’lgan sonni qaytarsin.
// // function maxPossibleNum(num) {
//   return Number(
//     Math.abs(num).toString().split('').sort((a, b) => b - a).join('')
//   );
// }
// console.log(maxPossibleNum(123));  
// console.log(maxPossibleNum(5082));  
// console.log(maxPossibleNum(91428));

//===================================================================================

// 108.Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu
// oraliqdan bironta random son qaytarsin.

// function randomSon(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(randomSon(1, 10));  
// console.log(randomSon(5, 15));  
// console.log(randomSon(-5, 5)); 

//=====================================================================================

// 109.Funksiya son qabul qiladi. Ushbu funksiya ushbu son narissistik son bo’lsa true qaytarsin,
// aks holda false. Narissistik son degani sonning har bir raqamini sonning  uzunligi miqdorida
// darajaga ko’tarib qo’shib chiqilganda o’ziga teng bo’lgan son.

// function Narissistik(num) {
//   const digits = Math.abs(num).toString().split('');
//   const power = digits.length;
  
//   const sum = digits.reduce((acc, digit) => {
//     return acc + Math.pow(Number(digit), power);
//   }, 0);
  
//   return sum === num;
// }

// console.log(Narissistik(153)); 
// console.log(Narissistik(1634));
// console.log(Narissistik(154)); 
// console.log(Narissistik(9)); 

//============================================================================================

// 110.Funksiya string qabul qiladi.Funksiya ushbu stringda
// nechta katta harf ishtirok etganin qaytarsin.

// const kattaHarflar = "ABCDIFGHIGKLMNOPQRSTUYVWXZ";
// function katta(str) {
//    let count = 0;
//   for(let i of str){
//     if(kattaHarflar.includes(i)){
//       count++;
//     }
    
//   }
//   return count;
// }

// console.log(katta("fvLzpxmgXSDrobbgMVrc"));