// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.location = attributes.location;
        this.age =  attributes.age;
    }
    speak() {
        console.log `Hello my name is ${this.name}, I am from ${this.location}`;
  } 
}
  class Instructor extends Person {
    constructor(teacherAttributes) {
        super(teacherAttributes);
        this.specialty = teacherAttributes.specialty;
        this.favLanguage = teacherAttributes.favLanguage;
        this.catchPhrase = teacherAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning ${this.subject}`;
    }
    grade(student, subject) {
        `${student.name} received a passing score on ${subject}`;
    }
}
​const Bob = new Instructor({
    name: 'Bob',
    location: 'Bedrock',
    age: 32,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't underestimate my power`
  });

console.log(Instructor);

class Student extends Person {
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }

    listsSubjects(){
        this.favSubjects.forEach(favSubject => console.log(`${this.favSubject}`));
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Person {
    constructor(PmAttributes) {
        super(PmAttributes);
        this.gradClassName = PmAttributes.gradClassName;
        this.favInstructor = PmAttributes.favInstructor;
        this.name = PmAttributes.name;
    }
    standUp(channel) {
        return `${name} announces to ${channel}, @channel stand times!​​​​​`;
    }
    debugsCode(student, subject) {
        return `${student.name}'s code on ${subject}`;
    }
}