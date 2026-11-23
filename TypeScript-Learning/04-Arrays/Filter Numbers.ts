let numbers: number[] = [10, 20, 30, 40, 50];

let sum: number = 0;

numbers.forEach((num: number) => {
    sum = sum + num;
});

console.log("Total Sum:", sum);

let filteredNUmbers = numbers.filter((num: number) => {
    return num > 30;
});

console.log("Numbers Greater Than 30:", filteredNUmbers);