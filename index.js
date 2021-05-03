// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

// Appends a driver to the end of the drivers array
function destructivelyAppendDriver (name) {
    drivers.push(name);
}

// Prepends a driver to the beginning of the drivers array
function destructivelyPrependDriver (name) {
    drivers.unshift(name);
}

// Removes the last driver from the drivers array
function destructivelyRemoveLastDriver () {
    drivers.pop();
}

// Removes the First driver from the drivers array
function destructivelyRemoveFirstDriver () {
    drivers.shift();
}

// Appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
function appendDriver (name) {
    return [...drivers, name];
}

// Prepends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
function prependDriver (name) {
    return [name, ...drivers];
}

// Removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged
function removeLastDriver () {
    return drivers.slice(0, drivers.length - 1);
}

// Removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged
function removeFirstDriver () {
    return drivers.slice(1);
}