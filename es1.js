// let counter;
// console.log(counter);
// console.log(typeof counter);
// // let greeting = 'Hi';
// // let message  = "Bye";
// let message = 'I\'m also a valid string'; // use \ to escape the single quote (')

// let error = 'An error occurred';
// let hasError = Object(error);
// console.log(hasError);


// let error = 'An error occurred';
// if (error) {
//     console.log(error);
// }

// let error = '';
// if (error) {
//     console.log(error);
// }

// let name = 'John';
// let message = `Hi ,\t I'm ${name}.`;
// console.log(message);

// let str = "Good Morning!";
// console.log(str.length);

// let className = 'btn';
//  className += ' btn-primary';
//  className += ' none';
// console.log(className);

// let result = '2'<'3';
// console.log(result);
// let person ={
//     firstName: 'John',
//     lastName: 'Deo'
// };

// console.log(person.firstName + person.lastName);
// console.log(person.lastName);

// let address = {
//     'building no': 3960,
//     street: 'North 1st street',
//     state: 'CA',
//     country: 'USA'
// };

// console.log(address['building no','street']);

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: '25'
// };
// person.ssn = '123-456-789';
// person.firstName = 'Jane';
// delete person.age;
// // delete firstName.firstName
// console.log(person);

// let age = 25;
// let newAge = age;
// newAge = newAge+1;
// console.log(age,newAge);
// let person = {
//     name: 'john',
//     age:25,
// };

// let member = person;
// member.age = 26;
// console.log(person);
// console.log(member);

// let mountains = ['Everest', 'Fuji','Parbat'];
// mountains[3] = 'k2';
// mountains.push('Red sea');
// console.log(mountains);
// console.log(mountains[0]);
// console.log(mountains.length);
// const lastElement = mountains.pop();
// console.log(lastElement);

// let energy = {
//     toString() {
//       return 50;
//     },
//   };

//   let currentEnergy = energy - 10;
//   console.log(currentEnergy);

//   currentEnergy = energy + 100;
//   console.log(currentEnergy);

//   currentEnergy = energy / 2;
//   console.log(currentEnergy);

//   currentEnergy = energy * 1.5;
//   console.log(currentEnergy);

// let a = '10';
// let y = +a+5;
// console.log(y);

// let weight = 90;
// let newWeight = weight++ + 5;

// console.log(newWeight); // 95
// console.log(weight); // 91

// let person = {
//     name: 'John',
//     toString: function () {
//       return '25';
//     },
//     valueOf: function () {
//       return '30';
//     },
//   };

//   console.log(person);

// let apple = {
//     valueOf: function () {
//       return 10;
//     },
//   };

//   let orange = {
//     toString: function () {
//       return '20';
//     },
//   };
//   console.log(apple > 10); // false
//   console.log(orange == 20); // true

// console.log(10!=10

// let b = true;
// let result = b && (10 /0 );
// console.log(result);

// let title = 'JavaScript Awesome';
// title ||= 'untitled';

// console.log(title);


// let user = {
//     username: ['Satoshi']
// };
// user.nickname ??= 'anonymous';

// console.log(user);

// let result = Math.pow(2,4);
// console.log(result);

// let result = 2**3;
// console.log(result);

// let x = 2;
// x **= 4;
// console.log(x);

// let age = 16;
// if (age >= 18) {
//     console.log('You can sign up');
// }

// let age = 16;
// let state = 'CA';

// if (state == 'CA') {
//     if (age >= 16) {
//         console.log('You can drive.');
//     }
// }

// let age = 19;

// if (age >= 18) {
//   console.log('You can sign up.');
// } else {
//   console.log('You must be at least 18 to sign up.');
// }

// let month = 6;
// let manthName;

// if (month ==1 ) {
//   manthName = 'Jan';
// } else if (month == 2) {
//   monthName = 'Feb';
// }else if (month == 3) {
//   monthName = 'Mar';
// } else if (month == 4) {
//   monthName = 'Apr';
// } else if (month == 5) {
//   monthName = 'May';
// } else if (month == 6) {
//   monthName = 'Jun';
// } else if (month == 7) {
//   monthName = 'Jul';
// } else if (month == 8) {
//   monthName = 'Aug';
// } else if (month == 9) {
//   monthName = 'Sep';
// } else if (month == 10) {
//   monthName = 'Oct';
// } else if (month == 11) {
//   monthName = 'Nov';
// } else if (month == 12) {
//   monthName = 'Dec';
// } else {
//   monthName = 'Invalid month';
// }
// console.log(monthName);

let weight = 80;
let height = 1.72;
let bmi = weight/(height*height);
let weightStatus;
if(bmi<18.5){
  weightStatus = 'Underweitgh';
} else if (bmi > 18.5 && bmi <=29.9){
  weightStatus = 'Overweight';
} else if (bmi >= 25 && bmi <= 20.9){
  weightStatus = 'Obesity';
} else{
  weightStatus='Unloded'
}
console.log(weightStatus);