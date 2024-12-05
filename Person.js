class person {
    constructor(firstname, lastname, age){
    this.firstname = ""
    this.lastname = ""
    this.age = 0
    } 

}
class student {
    constructor(firstname, lastname, age){
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
    } 

}

const student1 = new student()
student1.firstname = 'John'
student1.lastname = 'Pine'
student1.age = '22'
console.log(student1)


const student2 = new student()
student2.firstname = 'Matt'
student2.lastname = 'Rock'
student2.age = '19'
console.log(student2)


const student3 = new student()
student3.firstname = 'George'
student3.lastname = 'House'
student3.age = '25'
console.log(student3)



const person1 = new person()
person1.firstname = 'Hannah'
person1.lastname = 'Blue'
person1.age = '25'
console.log(person1)


const person2 = new person()
person2.firstname = 'Matthew'
person2.lastname = 'Williams'
person2.age = '22'
console.log(person2)


const person3 = new person()
person3.firstname = 'John'
person3.lastname = 'Tree'
person3.age = '21'
console.log(person3)