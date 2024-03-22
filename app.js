//1-masala
// let originalArray = [1, 2, 3, 4];

// let squaredArray = originalArray.map(number => number * number);

// console.log("Haqiqiy Array:", originalArray);
// console.log("Kvadrat Array:", squaredArray);

//2-masala
// let originalArray = [2, 4, -12, -45, 6, -8, 16];

// let filterArray = originalArray.filter(number => number < 0);
  
// console.log(filterArray);  

//3-masala
// let originalArray = [1, 2, [3, 4], 5, [6, 7]];

// let filterArray = originalArray.filter((item) =>{
//     return Array.isArray(item);
// })

// console.log(filterArray);

//4-masala
// function numToZero(numbers) {
//     return numbers.reduce((accumulator, current) => {
//       return current === 0 ? accumulator : accumulator + current;
//     }, 0);
//   }
  
//   let data = [1, 2, 3, 0];
//   let data2 = [1, 2, 3, 0, 4, 5, 6];
//   let sum = numToZero(data);
//   let sum2 = numToZero(data2);
//   console.log(sum); // Console: 6
//   console.log(sum2); //Console: 21

//5-masala
// function numEndtoZero(numbers) {
//     return numbers.slice().reverse().reduce((acc, num) => (num === 0 ? acc : acc + num), 0);
//   }
  
//   let data = [1, 2, 3, 0, 4, 5, 6];
//   let sum = numEndtoZero(data);
//   console.log(sum);

//6-masala
// function numMassive(arr) {
//     console.log("Massivni tekshirish:", arr);
  
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] === arr[i + 1]) {
//         return "Ha";
//       }
//     }
//     return "Yo'q";
//   }
  
//   let numbers = [1, 2, 3, 2, 4, 5];
//   let result = numMassive(numbers);
//   console.log(result); 
  
//   let sumNumbers = [1, 2, 3, 4, 5];
//   let nextResult = numMassive(sumNumbers);
//   console.log(nextResult); 
  
//7-masala



  
  

