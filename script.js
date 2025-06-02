// Character mapping for Baybayin (ensure this is defined above this code in your script.js)
/* const baybayinMap = { ... }; */

// DOM elements (ensure these are defined above this code)
/*
const textInput = document.getElementById('text-input');
const baybayinOutput = document.getElementById('baybayin-output');
const conversionExplanation = document.getElementById('conversion-explanation');
*/

// Converter functionality
textInput.addEventListener('input', convertText);

function getSyllable(text, index) { // text is assumed to be lowercased by the caller
    // Check for vowels first
    if ('aeiou'.includes(text[index])) {
        return text[index];
    }

    // Check for 'ng' special case
    if (text[index] === 'n' && index + 1 < text.length && text[index + 1] === 'g') {
        if (index + 2 < text.length && 'aeiou'.includes(text[index + 2])) {
            return 'ng' + text[index + 2]; // e.g., nga, nge, ngi, ngo, ngu
        }
        return 'ng'; // Standalone 'ng'
    }

    // Check for consonant + vowel (e.g., ba, ke, di, etc.)
    // This relies on baybayinMap having entries like 'ba', 'ke'.
    // It will form pairs like 'xa' if 'x' is current char and 'a' is next.
    // The baybayinMap lookup later will determine if it's a valid Baybayin syllable.
    const consonants = "bkdghlmnpstwyr"; // Common consonants, 'ng' handled above
    if (consonants.includes(text[index]) && index + 1 < text.length && 'aeiou'.includes(text[index + 1])) {
        return text[index] + text[index + 1];
    }

    // Standalone consonant or any other single character
    return text[index];
}

function convertToBaybayin(inputText) {
    let result = '';
    let i = 0;
    const text = inputText.toLowerCase(); // Normalize input to lowercase

    while (i < text.length) {
        const currentChar = text[i];

        // Skip spaces and common punctuation directly
        if (currentChar === ' ' || ',.?!;:\'"-_()[]{}/\\'.includes(currentChar)) {
            result += currentChar;
            i++;
            continue;
        }

        // Try to get a syllable starting at current position i
        // getSyllable will return the longest match it can find (e.g., "nga")
        // or a single character (e.g., "k", "a").
        const syllable = getSyllable(text, i);

        // Check if the identified syllable has a direct mapping in baybayinMap
        if (syllable && baybayinMap.hasOwnProperty(syllable)) {
            result += baybayinMap[syllable];
            i += syllable.length; // Advance by the length of the successfully mapped syllable
        } else {
            // If the syllable from getSyllable isn't in the map (e.g., getSyllable returned "xz" and "xz" is not a key)
            // OR if the syllable was a single character that's not in the map (e.g. "z")
            // we fall back to processing just the single current character (text[i] or currentChar).
            // The baybayinMap should contain single character mappings for vowels (a,e,i,o,u)
            // and standalone consonants (b, k, d, etc. for pamudpod versions).
            if (baybayinMap.hasOwnProperty(currentChar)) {
                result += baybayinMap[currentChar];
            } else {
                // If no mapping for the single character (e.g., it's a number, or a foreign letter like 'z'),
                // append it as is.
                result += currentChar;
            }
            i++; // Advance by one character in this fallback case
        }
    }
    return result;
}

function convertText() {
    const inputText = textInput.value;
    const baybayinResult = convertToBaybayin(inputText);
    baybayinOutput.textContent = baybayinResult; // Use textContent for safety and correct rendering of characters

    if (inputText.trim() === "") {
        conversionExplanation.textContent = "Enter a word or phrase to convert.";
    } else {
        // You can provide a more detailed explanation or clear it if not needed
        conversionExplanation.textContent = "The Baybayin script is shown above. Note that 'R' sounds are often written using the 'D' character, and standalone consonants use a virama mark (pamudpod) to cancel the inherent vowel.";
    }
}

// Ensure the rest of your script.js (for tutorial, quiz, history, navigation etc.) follows from here.
// For example:
// const characterGrid = document.getElementById('character-grid');
// ... and other functions like populateCharacterGrid, loadNewQuestion etc.