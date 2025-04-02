class Person {
    constructor(name,age,job){
        this.name = name;
        this.age=age;
        this.job=job;
    }
}

const person = new Person("John Doe",25,"Developer");
console.log(person);