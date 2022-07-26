// creating a Prototype

const prot = {
    slogen:function(){
        return('This company is the best');
    },
    changeName:function(newName){
        this.name = newName
    }
}
//
// const harry = Object.create(prot);
// harry.name = 'harry'
// harry.role = 'Coder'
const harry = Object.create(prot,{
    name:{value: "harry"},
    role: {value: "Coder"},
})
harry.changeName("harry2")
console.log(harry)
console.log(harry.role);

// Employee constructer
function Employee(name, salary,experinwns) {
    this.name = name;
    this.salary = salary;
    this.experinwns = experinwns;
}

Employee.prototype.slogen = function () {
    return('This company is the best');

}
let harryObj = new Employee('Harry',340033,45);
console.log(harryObj);
console.log(harryObj.slogen());

//Programer 

function Programer(name,salary,exprience,Languge) {
    Employee.call(this,name,salary,exprience);
    this.Languge = Languge;
    this.Run = function(){
        console.log(`My name is ${name} `)
    } 
}

Programer.prototype = Object.create(Employee.prototype);

//Manually set the constructor
Programer.prototype.consteuctor = Programer;

//the prototype
let rohan=  new Programer("Rohan",2,0,"JavaScript");
console.log(rohan);
