///////////////////////////////
// task 9 //

// var num = prompt('please enter a number');
// var allNum = '';

// for(var i = 1 ; i <= num; i++){
//     if(i == 1){
//         allNum += ` ${i}`
//     }

//     else{
//         allNum += `, ${i}`
//     }
// }

// alert(allNum);

////////////////////////////////////
// task 10 //

// var num = prompt('please enter a number');
// var mult = num
// var allMult = '';

// for (i = 1; i <= 12; i++) {

//     mult = num * i;
//     allMult += ` ${mult}`
// }

// alert(allMult);

////////////////////////////////////////
// task 11 //

// var num = prompt('please enter a number');
// var evenNum = '';

// for (var i = 0; i <= num; i += 2) {
//     if (i == 0) {
//         evenNum = ''
//     }
//     else {
//         evenNum += ` ${i}`;
//     }
// }

// alert(evenNum);

////////////////////////////////////////
// task 12 //

// var num = prompt('please enter the number');
// var power = prompt('please enter the power');
// var result = 1;

// for (var i = 0; i < power; i++){
//     result = result * num;
// }

// alert(result);

////////////////////////////////////////
// task 12 //

// var sub1 = Number(prompt ('please enter the mark of 1st subject'));
// var sub2 = Number(prompt('please enter the mark of 2nd subject'));
// var sub3 = Number(prompt('please enter the mark of 3rd subject'));
// var sub4 = Number(prompt('please enter the mark of 4th subject'));
// var sub5 = Number(prompt('please enter the mark of 5th subject'));

// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }
// alert('sum: ' + sum(sub1, sub2, sub3, sub4, sub5))


// function avg() {
//     return sum(sub1, sub2, sub3, sub4, sub5) / 5;
// }
// alert('average: ' + avg())


// function percentage() {
//     return (sum(sub1, sub2, sub3, sub4, sub5) * 100) / 435;
// }
// alert('percentage: ' + percentage() + '%');

///////////////////////////////////////////
// task 13 //

// var month = prompt('please enter the month number');

// if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
//     alert('days in month = 31')
// }

// else if (month == 6 || month == 9) {
//     alert('days in month = 30')
// }

// else if (month == 2) {
//     var feb = prompt('leap year ?? ... enter yes/no');
// if (feb == 'Yes' || feb == 'yes' || feb == 'YES') {
//     alert('days in month = 29')
// }

// else {
//     alert('days in month = 28')
// }
// }

// else{
//     alert('please enter a valid month');
// }

//////////////////////////////////////////
// task 14 //

// var sub1 = Number(prompt('Physics'));
// var sub2 = Number(prompt('Bio'));
// var sub3 = Number(prompt('Math'));
// var sub4 = Number(prompt('Computer'));
// var sub5 = Number(prompt('Chemistry'));

// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }

// function percentage() {
//     return (sum(sub1, sub2, sub3, sub4, sub5) * 100) / 500;
// }

// alert('percentage = ' + percentage() + '%');
// var perc = percentage();



// if (perc >= 90)
//     alert('Grade A')


// else if (perc >= 80)
//     alert('Grade B')


// else if (perc >= 70)
//     alert('Grade C')


// else if (perc >= 60)
//     alert('Grade D')


// else if (perc >= 40)
//     alert('Grade E')

// else {
//     alert('Grade F')
// }

///////////////////////////////////////////////
// task 15 //

// var mon = Number(prompt('please enter the month number'));
// switch (mon) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         alert('days in month = 31');
//         break;

//     case 2:
//         var feb = prompt('leap year ?? ... yes/no ')
//         if (feb == 'Yes' || feb == 'yes' || feb == 'YES') {
//             alert('days in month = 29');
//         }

//         else {
//             alert('days in month = 28');
//         }
//         break;

//     case 4: case 6: case 9: case 11:
//         alert('days in month = 30');
//         break;

//     default:
//         alert('pleas enter a valid month');
// }

//////////////////////////////////////////////////
// task 16 //
// var char = prompt('please a character');

// switch (char) { 
//     case 'a': case 'A': case 'e': case 'E': case 'i': case 'I': case 'o': case 'O': case 'u': case 'U': case 'y': case 'Y':
//         alert('VOWEL')
//         break;

//     default:
//         alert('NOT VOWEL')
// }

/////////////////////////////////////////////////
// task 17

// var num1 = prompt('enter 1st number');
// var num2 = prompt('enter 2nd number');

// switch(true){
//     case num1 > num2:
//         alert('max is: ' + num1);
//         break

//     case num2 > num1:
//         alert('max is: ' + num2);
//         break;

//     default:
//         alert('they are equal');
// }

/////////////////////////////////////////////
// task 18

// var num = prompt('enter a number');

// switch(true){
//     case num % 2 == 0:
//         alert('even');
//         break;

//     default:
//         alert('odd')
// }

//////////////////////////////////////////
// task 19 //

// var num = prompt('enter a number');

// switch(true){
//     case num > 0:
//         alert('positive');
//         break;

//     case num < 0:
//         alert('negative');
//         break;

//     case num == 0:
//         alert('zero');
//         break;

//     default:
//         alert('please enter a number');

// }

/////////////////////////////////////////////
// task 20 //

// var op = prompt('please enter "+" or "-" or "/" or "*"');
// var num = 0;
// var result = 0;
// var Choose = '';
// var exit = '';
// var save = '';


// for (i = 1; ; i++) {
//     exit = false;

//     if (i >= 3) {
//         Choose = prompt('do u want to continue... yes/no')
//         if (Choose == 'no' || Choose == 'NO' || Choose == 'NO') {
//             exit = true;
//         }
//     }

//     if (exit == true) {
//         break;
//     }

//     if (i == 1) {
//         num = Number(prompt(`Enter the number`));
//     }

//     else {
//         var op = prompt('please enter "+" or "-" or "/" or "*" or "%"');
//         num = Number(prompt(`Enter the next number`));
//     }

//     if (i == 1) {
//         result += num;
//         save = `${num}`;
//     }


//     if (i >= 2) {
//         switch (op) {
//             case '+':
//                 save += ` + ${num}`
//                 result += num;
//                 alert(`previous : ${save}\n` + 'result = ' + result);
//                 break;

//             case '-':
//                 save += ` - ${num}`
//                 result -= num;
//                 alert(`previous : ${save}\n` + 'result = ' + result);
//                 break;

//             case '/':
//                 save += ` / ${num}`
//                 result /= num;
//                 alert(`previous : ${save}\n` + 'result = ' + result);
//                 break;

//             case '*':
//                 save += ` * ${num}`
//                 result *= num;
//                 alert(`previous : ${save}\n` + 'result = ' + result);
//                 break;

//             case '%':
//                 save += ` % ${num}`
//                 result %= num;
//                 alert(`previous : ${save}\n` + 'result = ' + result);
//                 break;
//         }
//     }
// }



