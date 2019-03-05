class Student{
    constructor(first_name,last_name,blood_group){
        this.first_name = first_name;
        this.last_name = last_name;
        this.blood_group = blood_group;
    }
    full_name()
    {
        return `${this.first_name}  ${this.last_name}`;

    }
    getBloodGrop(){
        return `${this.blood_group}`;
    }
}

let student1 = new Student("vidit","Shah","o+");
let student2 = new Student("Burhan","Jobhi","A+");

console.log(student1.full_name())
console.log(student1.getBloodGrop())
console.log(student2.full_name())
console.log(student2.getBloodGrop())