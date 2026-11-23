let statuses: string[] = [
    "PASS",
    "FAIL",
    "PASS",
    "PASS",
    "FAIL"
]

let passCount: number = 0;
let failCount: number = 0;

statuses.forEach((status: string) => {

    console.log("Test Status:", status);

    if (status === "PASS") {
        passCount++;
    } else if (status === "FAIL") {
        failCount++;
    }
});

console.log("Total PASS:", passCount);
console.log("Total FAIL:", failCount);