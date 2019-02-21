
// Write a JavaScript program that will calculate the
//  price of 30 Phones, where the price
//  of one phone is $119.95 and the tax rate is 5%.

let price = 119.95;
let rate = 5 / 100 ;
let calcPrice = function(phones){

    return (phones * price) + (phones * price * rate)
}
console.log(calcPrice(30));


//  Zadaca 1. Domasna if, else, switch, functions, prompt
// Decription: Formula for Chinese Zodiac caluclation: 
// (year - 4) % 12. Possible values:
// 0 - Rat
// 1 - Ox
// 2 - Tiger
// 3 - Rabbit
// 4 - Dragon
// 5 - Snake
// 6 - Horse
// 7 - Goat
// 8 - Monkey
// 9 - Rooster
// 10 - Dog
// 11 - Pig
// Action: Write javascript code that will calculate which Chinese Zodiac a given year is in
// Bonus: Try to use function





// let year = prompt(`Please enter year of birth`)

// const chineseZodiac = () => {
//         switch((year-4) % 12) {
//             case 0:
//             (year-4) % 12 === 0;
//             console.log(`Rat`)
//             break;
//             case 1:
//             (year-4) % 12 === 1;
//             console.log(`Ox`)
//             break;
//             case 2:
//             (year-4) % 12 === 2;
//             console.log('Tiger')
//             case 3:
//             (year-4) % 12 === 3;
//             console.log(`Rabbit`)
//             break;
//             case 4:
//             (year-4) % 12 === 4;
//             console.log(`Dragon`)
//             break;
//             case 5:
//             (year-4) % 12 === 5;
//             console.log('Snake');
//             break;
//             case 6:
//             (year-4) % 12 === 6;
//             console.log('Horse')
//             break;
//             case 7:
//             (year-4) % 12 === 7;
//             console.log('Goat')
//             break;
//             case 8:
//             (year-4) % 12 === 8;
//             console.log('Monkey')
//             break;
//             case 9:
//             (year-4) % 12 === 9;
//             console.log('Rooster')
//             break;
//             case 10:
//             (year-4) % 12 === 10;
//             console.log('Dog');
//             break;
            
//             default:
//             console.log(`Pig`)
//             break;
//     }
//         }
//      chineseZodiac()

// zadaca 2.Decription: prompt('Text to show to the user') displays a dialog box with the text provided in the parentheses that prompts
// the visitor for input. Will return null on 'Cancel' or the value provided on 'Ok'
//Action: Ask the user how much money he has, and depending on the value, suggest to him what he should do



    

// const practise = () => {
//     let money = prompt(`how much money do u have ?`)
//     if(money === null || money === ''){
//         console.log(`Please enter money!`)
//          practise()
//     }else if(money > 0 && money <= 10) {
//         console.log(`You can buy hamburger!`)
//     }else if(money >10 && money < 20){
//         console.log(`You can buy 3 hamburgers!`)
//     }else if(money >20 && money <= 30){
//         console.log(`You can buy bicicle!`)
//     }else{
//         console.log(`you can buy anything u want`)
//     }
// }

// practise();

// Zadaca 3 //Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

// let findLargestNumber = function(a, b, c) {
//     if(a > b && a > c) {
//         return `the Largest number is ${a}`;
//     }else if(b > a && b > c) {
//         return `the Largest number is ${b}`;
//     }else if(c > a && c > b) {
//         return `the Largest number is ${c}`
//     }else {
//         return `they are Equal !`
//     }
// }

// console.log(findLargestNumber(3, 2, 1));
// console.log(findLargestNumber(1, 3, 2));
// console.log(findLargestNumber(1, 2, 3));
// console.log(findLargestNumber(1, 1, 1));




// Zadaca1. Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, 
// // and will add the "\n" new line after every even number otherwise it will add " " empty space.


//  let adder = ''
// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//      adder += (i + "\n")
//     }else{
//       adder += (i + " ")
//     }
   
// }


// console.log(adder)




//Zadaca 2. Write a JavaScript program that will read in an integer and write out its digits



// const readNumber = (num) => {
    
//  let toStr = num.toString().split('')

//  for(let i = 0; i < toStr.length; i++){
//      console.log(toStr[i])
//  }
   
// }

// readNumber(1234)


// //Zadaca 3. let today = new Date()
// let currentYear = today.getFullYear()
// const calculateAge = (yearOfBirth, currentYear) =>  `You are ${currentYear - yearOfBirth} years old!`


  

// console.log(calculateAge(1985, currentYear))
// console.log(calculateAge(1990, currentYear))
// console.log(calculateAge(2000, currentYear))



// Zadaca 1. Write a function that will take no parameters and write the following structure to the console:
// 1  2  3  4
// 5  6  7  8
// 9 10 11 12
// 13 14 15 16
// 17 18 19 20
// sum = ''
// for(let i = 1; i <= 20; i++){
   
//  if(i % 4 === 0){
//   sum = sum + (i + '\n')
//  }else {
//    sum = sum + (i + ' ')
//  }
 
// }
// console.log(sum)




// Zadaca 2. Write a function that will take no parameters and write the following structure to the console:
// Monday: Working
// Tuesday: Working
// Wednesday: Working
// Thursday: Working
// Friday: Working
// Saturday: Weekend
// Sunday: Weekend

// let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// let newStr = ''
// let work = 'Working';
// let rest = 'Weekend'
// for(let i = 0; i < days.length; i++){
//    if(days[i] === 'Saturday' || days[i] === 'Sunday'){
//        newStr += `${days[i]}: ${rest} \n`
//  }else{
//        newStr += `${days[i]}: ${work} \n`
//  }

// }

// console.log(newStr)



// Zadaca 1. Celsius to Fahrenheit formula: X°C x 1.8 + 32
// Action: Write a function that will be able to convert Celsius to Fahrenheit and display the result
// Bonus: Write another function that will be able to convert Fahrenheit to Celsius and display the result. Formula: (5/9) * (Fahrenheit-32);


// const convertCelsiusToFarenheit = (c) =>  c * 5 / 9 + 32;
  
// console.log(convertCelsiusToFarenheit(37))
// console.log(convertCelsiusToFarenheit(100))


// const FarenheithToCelsius = (f) =>  (f - 32) * (5 / 9)
    
// console.log(FarenheithToCelsius(140));
// console.log(FarenheithToCelsius(98));



// Zadaca 2. Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the age based on those years.
// outputs the result to the screen like so: "You are NN years old"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

// let newDate = new Date()
// const today =newDate.getFullYear()

// const calculateAge = (yearOfBirth, currentYear) => `You are ${currentYear - yearOfBirth} years old.`




// console.log(calculateAge(1985, today))
// console.log(calculateAge(1990, today))
// console.log(calculateAge(2000, today))




// let maxAge = 100;
// let daysInOneYear = 365;
// const calculateSuply = (age, amountPerDay) => {

//     let restOfLife = maxAge - age
//     let sum = Math.round(restOfLife * daysInOneYear * amountPerDay)
//     return `You will need $${sum} to last you untill the ripe old age of ${maxAge}`
// }

// console.log(calculateSuply(33, 100))
// console.log(calculateSuply(20, 150))
// console.log(calculateSuply(50, 250))




// Zadaca 1.Write a JavaScript function that accepts two arguments, a string and a letter and the function will
//  count the number of occurrences of the specified letter within the string.
// Sample arguments : 'w3resource.com', 'o' 
// Expected output : 2


// const checkString = (str, letter) => {
// let newStr = str.split('')
// let newArr = []
// newStr.forEach((word) => {
// if(word === letter){
//     newArr.push(word)
// }
// })
//     return newArr.length
// }

// console.log(checkString('w3resource.com', 'o'))


// Zadaca 2. Write a JavaScript function to truncates a string if it is longer than the specified number of characters. 
// Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters. Test Data :
// console.log(text_truncate('We are doing JS string exercises.')) 
// console.log(text_truncate('We are doing JS string exercises.',19))
// console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
// "We are doing JS string exercises." 
// "We are doing JS ..." 
// "We are doing !!"


// let truncStr = (str, num , mark = '...') => {
    
//     if(str.length > num)
//       return `"${str.substring(0, num - mark.length) + mark}"`
    
//         return str
    
// }

// console.log(truncStr('We are doing JS string exercises.',19))
// console.log(truncStr('We are doing JS string exercises.'))
// console.log(truncStr('We are doing JS string exercises.',15, '!!'))






// Zadaca 3. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null,100,]
// Expected result : [15, -22, 47,100]


// const funcRemove = (arr) => {
//     let newArr = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }

// console.log(funcRemove([NaN, 0, 15, false, -22, '',undefined, 47, null,100,]));




// Zadaca 4. Write a function that takes two numbers: the numbers of cows and chickens on a farm,
//  and print this numbers with the words Cows and Chickens after them and zeros padded
//   before both numbers so that they are always three digits long.
// Expected output for 7 and 11: 
// 007 Cows
// 011 Chickens



// let transformNumber = (num) => {
//     if(num < 10){
//         return `00${num}`
//     }else if(num < 100){
//         return `0${num}`
//     }else{
//         return `${num}`
//     }
// }

// let cowsChickens = (num1, num2) => {
//     let cows = transformNumber(num1)
//     let chickens = transformNumber(num2)

//  return `${cows} Cows\n${chickens} Chickens`
// }
// console.log(cowsChickens(10,20))
// console.log(cowsChickens(1,8))
// console.log(cowsChickens(100,20))
// console.log(cowsChickens(20,1))



// 1. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
//  Sample array : [1,2,3,4,5] Expected Output : 2,4

// const checkNums = (arr) => {

// let largest = -Infinity, secondLargest
// let smallest = Infinity, secondSmallest
// for(let i = 0; i < arr.length; i++){
//   if(arr[i] > largest){
//     largest = arr[i]
//   }
//   if(arr[i] < smallest){
//     smallest = arr[i]
//   }
// }
// secondLargest = smallest;
// secondSmallest = largest;
// for(let i = 0; i < arr.length; i++){
//   if(arr[i] < largest && arr[i] > secondLargest){
//     secondLargest = arr[i]
//   }
//   if(arr[i] > smallest && arr[i] < secondSmallest){
//     secondSmallest = arr[i]
//   }
// }
// return `${secondSmallest},${secondLargest}`;
// }
// console.log(checkNums([1,2,3,4,5]));
// console.log(checkNums([10,2,4,1,9,9,6]));
// console.log(checkNums([20,2,4,1,0,1,20]));
// console.log(checkNums([1,1,1,1,3,13,6]));


// 3. Write a JavaScript function that takes one parameter and checks if the parameter is palindrome.

// Palindrome is a word, phrase, or sequence that reads the same backwards as forwards.

// e.g. “madam” or “nurses run”. (For this strings the output should be true)

// Also try this for numbers.

// e.g. 1991 or 36363. (For this numbers the output should be true)


// const checkSpaces = (str) => {
//     let newStr = [], strArr
//   if(typeof(str) === 'number'){
//       strArr = str.toString().split('')
//   }else{strArr = str.toLowerCase().split('');
//       strArr.forEach((word) => {
//     if(word !== ' '){
//       newStr.push(word)
//     }
//   })}
//     return newStr.join('')
// }

// const checkIfPalindrom = (str, fn) => {
//  let filteredStr = fn(str)
//  let palindrome = ''
//  for(let i = filteredStr.length - 1; i >= 0; i--){
//     palindrome += filteredStr[i]
//  }
// return palindrome === filteredStr
// }
// console.log(checkIfPalindrom('Madam', checkSpaces))
// console.log(checkIfPalindrom('nuRses run', checkSpaces))
// console.log(checkIfPalindrom(36363, checkSpaces))
// console.log(checkIfPalindrom(1991, checkSpaces))
// console.log(checkIfPalindrom('Vukashin', checkSpaces))



// HOMEWORK PART 1
// Change the page with JavaScript

// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed


// let p = document.querySelectorAll('p')
// p.forEach((paragraph) => {
//    console.log(paragraph.textContent = 'This is changed paragraph!')
// })
// let mainHeader = document.querySelectorAll('h1')
// mainHeader.forEach((head) => {
//     head.textContent = 'This is new header!'
// })

// let headerTwo = document.querySelectorAll('h3')
// headerTwo.forEach((h) => {
//     h.textContent = 'This is new header two !'
// })


// HOMEWORK PART 2
// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical 
// equasion as well ( 2 + 4 + 5 = 11)


let equasion = [2, 4, 5];
let body =  document.getElementsByTagName('body')[0];
let ul = document.createElement('ul')
body.appendChild(ul)
equasion.forEach((element) => {
    let li = document.createElement('li');
    li.textContent = element
    ul.appendChild(li)
})
let sumString = '';

let sum = 0
equasion.forEach((num, index) => {
    if(index === equasion.length - 1){
        sumString += ` ${num} =`
    }else{
        sumString +=` ${num} +`
    }
        sum += num 
})
 let result = `${sumString}  ${sum}`;
 let sumResult = document.createElement('p');
 sumResult.textContent = result;
 body.appendChild(sumResult);


// MANIPULATE THE DOM
// Select the first div
// Select all paragraphs
// Select the last div
// Select the header 3 in the last div
// Select the header 1 in the last div
// Get the text from the first paragraph in the second div
// Add the word "text" to the text element in the second div
// Change the text of the header 1 in the last div
// Change the text of the header 3 in the last div
// Note:You can't change the HTML


//  Select the first div

 //let allDivs = document.getElementsByTagName('div');
// let firstDiv = allDivs[0];

// // Select all paragraphs

// let allPara = document.querySelectorAll('p');

// // Select the last div

// let lastDiv = allDivs[allDivs.length - 1];


// // Select the header 3 in the last div
// // Select the header 1 in the last div

// let h3 = lastDiv.lastElementChild;

// let h1 = lastDiv.firstElementChild; 

// // Get the text from the first paragraph in the second div

// let firstPara = allDivs[1].firstElementChild.textContent;

// // Add the word "text" to the text element in the second div

//  let addWord = allDivs[1].lastElementChild.innerText += ' text.';

// // Change the text of the header 1 in the last div
// // Change the text of the header 3 in the last div

// let changeH1 = lastDiv.firstElementChild.textContent = 'Changed!'

// let changeH3 = lastDiv.lastElementChild.textContent = 'Change 2!';




// HOMEWORK 1
// IMPROVE REGISTER USER EXERCISE
// Under the inputs in the HTML create a table element with 4 columns for First Name, Last Name, Password and E-mail 
// Change the register user exercise code. Instead of printing the values in console, try to create a new table row and fill it with that values
// You should have a new table row for every new user you make


// let button = document.getElementById('button');

// button.addEventListener('click', (e) => {
//     let tableArr = [];
//     let inputs = document.getElementsByTagName('input');
//     // let firstName = inputs[0].value;
//     // let lastName = inputs[1].value;
//     // let email = inputs[2].value;
//     // let password = inputs[3].value;
//     Array.from(inputs).forEach((i) => {
//        if(i.value){
//         tableArr.push(i.value)
//        }
//     })
//     console.log(inputs)
     
//      console.log(tableArr)
//     console.log(userTable(tableArr));
// });


// // let string = (name, lastN, mail, pass) => {
// //     return `${name} ${lastN} ${mail} ${pass}`
// // };
// let table = document.getElementById('table');

// let tBody = document.createElement('tbody');
// table.appendChild(tBody);

// let userTable = (arr) => {
//     let tRow = document.createElement('tr');
//     tBody.appendChild(tRow);
//     arr.forEach((element) => {
//         let tableElement = document.createElement('td');
//         tableElement.textContent = element;
//         tRow.appendChild(tableElement)
//     })
    
// };




// HOMEWORK 2
// CREATE A DYNAMIC TABLE
// Write a Javascript function that will dynamiclly create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is (ex. Row-3 Column-1)
// Don't forget to use google! :) *Bonus: Apply different colors to the table

// let form = document.getElementById('dinamic-table');
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
    
//     let row = e.target.elements.rows.value;
//     let col = e.target.elements.column.value;
    
//     dinamicTable(row, col);
    
   
// })

// let tableWrapper = document.getElementById('table-wrapper');
// let table = document.createElement('table');

// tableWrapper.appendChild(table);


// let dinamicTable = (input1, input2) => {
    
//    table.innerHTML = ''
    
// for(let i = 1; i <= input1; i++){
//     let tr = document.createElement('tr');
//     table.appendChild(tr)
    
//     for(let n = 0; n < input2; n++){
//         let td = document.createElement('td');
//         td.textContent = ` Row - ${i} Column - ${n}`
//        if(n % 2 === 0){
//            td.style.backgroundColor = '#fe7485';
//        }else{
//            td.style.backgroundColor = '#f90221';
//        }
        
//         tr.appendChild(td);
        
//     }
    
   
// }
    
// }



// Write a Javascript program to get the width and height of the window 
// When you resize the window, the program should print the actual width and height

let result = window.addEventListener('resize', (e) => {
    e.preventDefault()
    
    let p = document.createElement('p')
    p.textContent = e.target.innerHeight
    let div = document.getElementById('div').appendChild(p);
    div.innerHTML = ''
});


// Write a Javascript program to get the width and height of the window 
// When you resize the window, the program should print the actual width and height

// let result = window.addEventListener('resize', (e) => {
//     e.preventDefault()
    
//     let p = document.createElement('p')
//     p.textContent = e.target.innerHeight
//     let div = document.getElementById('div')
//     div.appendChild(p)
// });



