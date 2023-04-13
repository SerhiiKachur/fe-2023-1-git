// const user = {
//   firsname : 'Serhii',
//   secondname : 'Kachur',
//   isMale : true,
//   age : 33,
//   speak : 'hello',
// }

const User = function (firsname, lastname, isMale, age) {
  this.firsname = firsname;
  this.lastname = lastname;
  this.isMale = isMale;
  this.age = age;
  this.speak = function () {
    console.log("Hello, my name is " + firsname + " " + lastname);
  };
};

const newUser = new User("Serhii", "Kachur", true, 33);
const newUser2 = new User("Marina", "Filatova", false, 32);

