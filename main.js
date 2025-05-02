// let name = 'Mosh';
// let firstName = 'Mosh';
// let lastName = 'Hamdani';

// const age =30;


// console.log(name);
// console.log(firstName);
// console.log(lastName);
// console.log(age);


// Arrays


// let selectColors=['red','green'];
//  console.log(selectColors);


//  console.log(selectColors[0]);
// selectColors[2]='black';
//  console.log(selectColors.length)
// console.log(selectColors)



// functions

// function greet(){
//     console.log("Hello World");
// }

// greet();



// function greet(name){
//     console.log("Hello World " + name);
// }

// greet('mosh');

// function greet(name,lastName){
//     console.log("Hello World " + name + lastName);
// }

// greet('mosh','takla');



// function square(number){
//     return number*number;
// }
// console.log(square(2));+




// ));


// OPERATORS
// Arthmetic Operators

// let x = 10;
// let y = 3;

// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x**y);

// console.log(x++)
// console.log(x)

// console.log(++x);

// console.log(--y);


// Comparison Operators

// x=10;

// console.log(x>0);
// console.log(x>=0);
// console.log(x<0);
// console.log(x===0);


// console.log(1===1);
// console.log('1'===1);

// console.log(1==1);
// console.log('1'==1);

// Ternary Operators

// let points = 110;
// let type = points > 100 ? 'gold':'silver';
// console.log(type);


// swapping value


// let a = 'red';
// let b = 'blue';


// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);


// ELSE IF


// let hour = 10;

// if (hour >=6 && hour < 12){
//     console.log('Good Morning');
// }
// else if (hour >=12 && hour < 18){
//     console.log('Good Afternoon');
// }
// else
//     console.log('Good Evening');



// Switch Case

// let role = 'guest';

// switch(role){
//     case 'guest':
//         console.log('Guest User');
//         break;
//     case 'guest':
//         console.log('Guest User');
//         break;
//     default:
//         console.log('Unknown User');
// }



// let role='';
// if(role==='guest') console.log('Guest User');
// else if(role==='moderator')console.log('Moderator User');
// else console.log('Not user');

// FOR LOOP

// for(let i= 1 ; i<=5; i++){
//     if(i%2 !== 0)
//         console.log(i);
// }

// While LOOP


// let i = 0;

// while(i<=5){
//     if(i % 2 !==0) console.log(i);
//     i++;
// }


// DO...WHILE

// let i = 0;

// do{
//     if(i%2 !==0 )console.log(i);
//     i++;
// }while(i<=5);




// for....in


// const person={
//     name:'Mosh',
//     age:30
// };
// for(let key in person)
//     console.log(key,person[key]);

// const colors = ['red','black','green']
// for(let index in colors)
//     console.log(index,colors[index]);


// for...of

// const colors = ['red','black','green'];
// for(let color of colors)
//     console.log(color);



// function isLandScape(width,height){
//     return(width > height);
// }
// console.log(isLandScape(800,1600));




// FIZZBUZZ


// for(i=1;i<=15;i++){
//     if(i%3 === 0 && i%5 === 0)
//         console.log('FIZZBUZZ');
//     else if(i%3 === 0)
//         console.log('Fizz');
//     else if(i%5 === 0)
//         console.log('Buzz');
//     else 
//         console.log(i);
// }


// Demerit Points


// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed <= speedLimit) {
//         console.log('OK');
//     } else {
//         const points = Math.floor((speed - speedLimit) / kmPerPoint);
//         if (points >= 12) {
//             console.log('License suspended');
//         } else {
//             console.log('Points:', points);
//         }
//     }
// }



// EVEN AND ODD number


// function showNumbers(limit){

//     for(let i=1; i<=limit;i++){
//         if(i%2===0){
//             console.log(i,"Even");
//         }
//         else
//             console.log(i,"ODD");
//     }
// }




// ARRAYS ADDING

// const numbers = [3,4];

// END

// numbers.push(5,6);
// console.log(numbers);

//BEGIN

// numbers.unshift(1,2);
// console.log(numbers);


//MIDDLE

// numbers.splice(2,0,'a','c');
// console.log (numbers);



// FINDING ELEMENTS(PRIMATIVE)


// const numbers=[1,2,4,3,6];

// console.log(numbers,numbers.indexOf(2));
// console.log(numbers,numbers.lastIndexOf(3));
// console.log(numbers.includes(7));


// FINDING ELEMENTS(OBJECTS)
// const courses=[
// { id:1,name:'algebra'},
// { id:2,name:'logic'},
// ];

// const course = courses.find(function(course){
//     return course.name === 'alegbra';
// });
// console.log(course);



// emptying an ARRAY

// let numbers = [1,2,3,4];
// let another = numbers;


// // solution1

// // numbers.length=0;
// // console.log(numbers);

// // solution 2
// numbers=[];
// console.log(numbers);




// Combining

const first =[1,2,3];
const second = ['a','b','c'];

const combine = first.concat(second);
console.log(combine);
