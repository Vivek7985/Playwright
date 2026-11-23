const employee = {
    name : "Vivek",

    company: {
        name: "ETP International",
        location: "Pune"
    },

    skills: [
        "Manual Testing",
        "Java",
        "Selenium",
        "Playwright"
    ]
};

console.log("Employee Name:", employee.name);
console.log("Company:", employee.company.name);
console.log("Location:", employee.company.location);
console.log("Skills:", employee.skills);
console.log("First Skill:", employee.skills[0]);
