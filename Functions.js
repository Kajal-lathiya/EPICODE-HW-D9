/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
/* WRITE YOUR ANSWER HERE */
console.log(`\n ============================= EXERCISE 1 ==========================`);
function area(l1, l2) {
    return l1 + l2;
}
const result = area(3, 5);
console.log('result:', result);
console.log(`======================================================================`);

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR ANSWER HERE */
console.log(`\n ============================= EXERCISE 2 ==========================`);
function crazySum(a, b) {
    let res = 0;
    if (a === b) {
        return res = (a + b) * 3;
    } else {
        return res = a + b;
    }
}
const temp1 = crazySum(5, 5);
const temp2 = crazySum(5, 7);
console.log('result of both parameter are same:', temp1);
console.log('result of both parameter are diffrent:', temp2);

console.log(`======================================================================`);

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */
console.log(`\n ============================= EXERCISE 3 ==========================`);
function crazyDiff(n) {
    if (n <= 19) {
        return (19 - n);
    }
    else {
        return (n - 19) * 3;
    }
}

console.log(crazyDiff(14));
console.log(crazyDiff(21));
console.log(crazyDiff(28));

console.log(`======================================================================`);

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */
console.log(`\n ============================= EXERCISE 4 ==========================`);
function boundary(n) {
    if (n > 20 && n < 100 || n === 400) {
        return true;
    } else {
        return false;
    }
}
const res1 = boundary(19);
const res2 = boundary(70);
const res3 = boundary(400);
console.log('res1:', res1);
console.log('res2:', res2);
console.log('res3:', res3);

console.log(`======================================================================`);

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */
console.log(`\n ============================= EXERCISE 5 ==========================`);
function strivify(val) {
    if (val === 'Strive') {
        return val;
    } else {
        return 'Strive' + ' ' + val;
    }
}
const str = strivify('Epicoder');
const str1 = strivify('Strive');
console.log('Result add Strive in front of string:', str);
console.log('Result 2:', str1);

console.log(`======================================================================`);

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */
console.log(`\n ============================= EXERCISE 6 ==========================`);
function check3and7(num) {
    if (num % 3 == 0) {
        return console.log(`${num} is multiple of 3`);
    } else if (num % 7 == 0) {
        return console.log(`${num} is multiple of 7`);
    } else {
        console.log(`${num} is not a multiple of 3 and 7`);
    }
}
check3and7(3);
check3and7(28);
check3and7(44);
console.log(`======================================================================`);

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */
console.log(`\n ============================= EXERCISE 7 ==========================`);
function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return console.log(joinArray); // "evirtS"
}
reverseString("Strive");
console.log(`======================================================================`);

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */
console.log(`\n ============================= EXERCISE 8 ==========================`);
function upperFirst(str) {
    let splitArray = str.split(" ");
    let sentence = "";
    for (let i = 0; i < splitArray.length; i++) {
        let capitalizesWord = "";
        const word = splitArray[i];
        capitalizesWord = word.charAt(0).toUpperCase() + word.slice(1) + ' ';
        sentence += capitalizesWord;
    }
    return sentence;
}
let data = upperFirst('hello epicoder! good evening')
console.log('full string:- ', data);
console.log(`======================================================================`);

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */
console.log(`\n ============================= EXERCISE 9 ==========================`);
function cutString(str) {
    let data = str.slice(1, -1);
    return console.log(data);
}
cutString("ABCDE")
console.log(`======================================================================`);

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */
console.log(`\n ============================= EXERCISE 10 ==========================`);
function giveMeRandom(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        let randomNum = Math.floor(Math.random() * n);
        if (randomNum > 0 && randomNum < 10) {
            array.push(randomNum);
        }
    }
    return console.log(array);
}
giveMeRandom(20)
console.log(`======================================================================`);

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
