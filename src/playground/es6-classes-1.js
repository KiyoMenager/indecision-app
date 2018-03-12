
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi I am ${this.name}!`
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` their major is ${this.major}.`;
    }

    return description;
  }

  hasMajor() {
    return !!this.major;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.hasHomeLocation()) {
      greeting += ` I'm visiting from ${this.homeLocation}.`
    }

    return greeting;
  }

  hasHomeLocation() {
    return !!this.homeLocation;
  }
}

const me = new Student('Tristan Menager', 27, 'Computer science')
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(me.hasMajor());

const other = new Student()
console.log(other);
console.log(other.getGreeting());
console.log(other.getDescription());
console.log(other.hasMajor());

const traveler = new Traveler('Tristan Menager', 27, 'Paris')
console.log(traveler);
console.log(traveler.getGreeting());
console.log(traveler.getDescription());
console.log(traveler.hasHomeLocation());
