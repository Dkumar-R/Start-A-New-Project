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

// let weight = 80;
// let height = 1.72;
// let bmi = weight/(height*height);
// let weightStatus;
// if(bmi<18.5){
//   weightStatus = 'Underweitgh';
// } else if (bmi > 18.5 && bmi <=29.9){
//   weightStatus = 'Overweight';
// } else if (bmi >= 25 && bmi <= 20.9){
//   weightStatus = 'Obesity';
// } else{
//   weightStatus='Unloded'
// }
// console.log(weightStatus);

// let age = 15;
// let message;

// age >= 16 ? (message = 'You can drive.') : (message = 'You cannot drive.');

// console.log(message);

// let age = 15;
// let message;

// message = age >= 16 ? 'You can drive.' : 'You cannot drive.';

// console.log(message);

// let authenticated =false;
// let nextURL = authenticated
// ? (alert('You will redirect to admin area'),'/admin')
// :(alert('Access Denied'),'/403');
// console.log(nextURL);

// let locked = 1;
// let canChange = locked != 1 ? true : false;

// let speed = 180;
// let message = speed >= 120 ? 'Too Fast' : speed >= 80 ? 'Fast' : 'OK';

// console.log(message);

// let colors = ['red', 'green', 'blue'];
// let rgb = [...colors];
// console.log(rgb);

// class Circle {
//   constructor(radius) {
//       this.radius = radius;
//   }
//   set diameter(value) {
//       this.radius = value / 2;
//       console.log('SET ', value);
//   }
//   get diameter() {
//       return this.radius * 2;
//   }
// }

// let circle = new Circle(300);

// let cloneCircle1 = Object.assign(circle, {
//   diameter: 500
// });

// let cloneCircle2 = {
//   ...circle
// };

// let day = 3;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = 'Sunday';
//     break;
//   case 2:
//     dayName = 'Monday';
//     break

//   default:
//     dayName = 'Invalid Day'
// }

// console.log(dayName);

// let year = 1;
// let month = 1;
// let dayCount;

// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 11:
//     dayCount = 31;

//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     dayCount = 30;
 

//   case 2:
//     if ((year %4 == 0 && ! (year %100 == 0)) || year % 400 == 0) {
//       dayCount = 29;
//     }else{
//       dayCount = 28;
//     }

//     break;
//   default:
//     dayCount = 'Invaild Type';
// }
// switch (year) {
//   case 0:
//     dayCount = 'Invaild Type'
//     break;

//   default:
//     break;
// }
// console.log(dayCount);

// let counter = 1;
// while (counter < 20) {
//   counter +=2;
//   console.log(counter);
// }

// let sum = 0;
// for (let i = 0; i <= 9; i++, sum += i);
// console.log(sum);

// for (let i = 1; i < 9; i++) {
//     console.log(i);
//   }
  
// let x = 10;
// let y = (x++, x + 1);

// console.log(x, y);

// That's like

// let x = 10;
// x++;
// let y = x+ 1;
// console.log(x.y);

// ^ this code is not work 

