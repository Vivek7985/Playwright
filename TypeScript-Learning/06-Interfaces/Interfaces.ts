interface Employee {
    name: string;
    age: number;
    salary: number,
    isActive: boolean;
}

const employee: Employee = {
    name: "Vivek",
    age: 25,
    salary: 40000,
    isActive: true
};

console.log("Name:", employee.name);
console.log("Age:", employee.age);
console.log("Salary:", employee.salary);
console.log("Active:", employee.isActive);