function firstNonRepeatedChar(str) {
    // Create an object to store character frequencies
    const charCount = {};

    // Iterate through the string and count character occurrences
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Iterate through the string again to find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeated character
        }
    }

    // If no non-repeated character is found, return null
    return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

