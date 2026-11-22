const animal = {

    animalName : "DogLira",
    characterstics : "Bark",
    type : "Pet",
    skills : ["Barking", "Playing", "Staring"]
};

console.log("DogName:", animal.animalName);
console.log("Type:", animal.type);
console.log("Skills:", animal.skills);

animal.skills.forEach(skills => {
    console.log(skills);
});