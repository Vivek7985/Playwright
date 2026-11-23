let browsers: string[] = [
    "Chrome",
    "Firefox",
    "Safari",
    "Edge"
];

console.log("All Browsers:", browsers);
console.log("First Browser:", browsers[0]);
console.log("Last Browser:", browsers[browsers.length-1]);
console.log("Array Length:", browsers.length);

browsers.push("Opera");

console.log("Updated Browsers:", browsers);