// 1-masala

// function vaporcode(str) {
//   let str1 = str.toUpperCase();

//     let str2 = ""

// for(let i = 0 ; i < str1.length ; i++){
//     if(str1[i] !== " "){

//         str2 += str1[i] + "  "
//     }

// }

//   return str2

// }
// let str = "Helloworld";

// console.log(vaporcode(str));

///////////////////////////////////////////////////////////


//2-masala


// function Sum(number) {
//   let arr = String(number).split("");

//   let sum = 0;

//   for (let i in arr) {
//     sum += +i;
//   }
//   return sum;
// }

// let a = 16;

// console.log(Sum(a));

// Futbol jamoamiz chempionatni yakunladi.

// Jamoamizning o'yin natijalari qatorlar to'plamida qayd etilgan. Har bir o'yin formatidagi satr bilan

// ifodalanadi "x:y", bu erda xjamoamizning ochkolari va yraqiblarimizning ochkolari.

// Masalan: ["3:1", "2:2", "0:1", ...]

// Har bir o'yin uchun ochkolar quyidagicha taqsimlanadi:

// agar x > y bo'lsa: 3 ball (g'alaba)
// agar x < y: 0 ball (yo'qotish)
// agar x = y bo'lsa: 1 ball (bo'g'in)
// xBiz ushbu to'plamni oladigan va yuqorida keltirilgan qoidalar bo'yicha jamoamiz chempionatda olgan ( ) ochkolar sonini qaytaradigan funksiya yozishimiz kerak .

// Eslatmalar:

// jamoamiz chempionatda doim 10ta o'yin o'tkazadi
// 0 <= x <= 4
// 0 <= y <= 4

// 3-masala
// function sumArr(arr) {
//   const sum = 0;
//   const sum1 = 0;
//   let orta = 0;
//   let orta1 = 0;
//   let count = 0;
//   let count1 = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 10) {
//       count++;
//       sum += arr[i];
//     } else {
//       count1++;
//       sum1 += arr[i];
//     }
//   }
//   console.log((orta = sum / count));
//   console.log((orta1 = sum1 / count1));
// }

// let arr = [
//   [1, 2, 3, 4, 5, 6, 7],
//   [15, 25, 35, 45, 55],
// ];

// sumArr(arr);


//4-masala

// function oddOne(arr){

//     let arr2 = arr.map(arr => Math.abs(arr))


//     let count = 0;

//     for(let i = 0 ; i < arr2.length ; i++){

        
//         if(arr2[i] % 2 == 1 ){
            
//             count++
//             return i
//         }
        
//     }
//     if(count == 0){
//         return -1
//     }
// }

