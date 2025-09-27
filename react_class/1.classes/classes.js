/* OGUNKOYA DAVID AYOMIKUN 
 MATRIC NO: 24/0778,
 GROUP C SOFTWARE ENG. 
 COURSE: COS 209
CLASSES
A class component is basically a way to create a reusable blueprint
 to create objects in javascript.It tells javascript what properties 
 and methods those objects should have.It basically solves the problem of
  repitition of code do. It makes use of constructors, properties and methods.
  FOR EXAMPLE: */
  class User {
    constructor(name,age){
        this.name = name;/* this is the property,
         basically like an argument passed into the constructor*/
        this.age = age;
    }
    speak(){//Method
        console.log(`Hi, my name is ${this.name}, I am ${this.age}`)
    }
  }
  // now to create an object through the class
  const user1 = new User("David",17);
  const user2 = new User("Dara",20);
    // putting it to the test
    console.log(user1.name);
    console.log(user2.age);
    user1.speak();
    /*class User{}-defines the blueprint to create a person object
    constructor(name,age)- runs when you create a new user setting
    its properties,name and age.
    speak()- its a method shared by all users
    new User("David",17)- creates an object from the class */
    