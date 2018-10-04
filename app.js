// Exercise 1
const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12]; // array

function exerciseOne() {
    let rand = lapRounds[Math.floor(Math.random() * lapRounds.length)]; // make variable to call, define Array, floor the randomised value, which has a max, bordered by .length
    console.log(rand);
}
exerciseOne();

// Exercise 2

const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
];

function exerciseTwo() {
    for (let i = 0; i < allMyRecords.length; i++) {
        const elementOne = allMyRecords[i]; // get all elements out of the array
        for (let j = 0; j < elementOne.length; j++) {
            const elementTwo = elementOne[j]; // sort said elements
            console.log(elementTwo);
            const elementThree = "elementOne[" + i + "][" + j + "] = " + elementOne[j]; // added for better understanding
            console.log(elementThree);
        }
    }
}
exerciseTwo();



// Exercise 3
const secondLapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];


function exerciseThree(element) {
    return element < 4;
}
exerciseThree();

let filteredLapRounds = secondLapRounds.filter(exerciseThree);
console.log(filteredLapRounds);