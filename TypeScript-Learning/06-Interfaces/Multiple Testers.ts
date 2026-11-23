interface Tester {
    name: string;
    experience: number;
    skills: string[];
    company: string;
}

const tester1: Tester = {
    name: "Vivek",
    experience: 3,
    skills: ["Manual Testing", "Java", "Selenium"],
    company: "ETP International"
};

const tester2: Tester = {
    name: "Aadarsh",
    experience: 2,
    skills: ["Manual Testing", "API Testing"],
    company: "ABC Technologies"
};

console.log("Tester 1:", tester1);
console.log("Tester 2:", tester2);