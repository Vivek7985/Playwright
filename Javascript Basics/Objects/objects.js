const tester = {

    personName : "Vivek",
    experienc: 5,
    role: "Automation Tester",
    skills: ["Manual Testing", "JavaScript", "Playwright"]
};

console.log("Name:", tester.personName);
console.log("Role:", tester.role);

console.log("skills");

tester.skills.forEach(skill => {
    console.log(skill);
});