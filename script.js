// Character mapping for Baybayin
const baybayinMap = {
    // Vowels
    'a': 'ᜀ', 'e': 'ᜁ', 'i': 'ᜁ', 'o': 'ᜂ', 'u': 'ᜂ',
    // Consonants (with inherent "a" sound)
    'ba': 'ᜊ', 'ka': 'ᜃ', 'da': 'ᜇ', 'ga': 'ᜄ', 'ha': 'ᜑ',
    'la': 'ᜎ', 'ma': 'ᜋ', 'na': 'ᜈ', 'nga': 'ᜅ', 'pa': 'ᜉ',
    'sa': 'ᜐ', 'ta': 'ᜆ', 'wa': 'ᜏ', 'ya': 'ᜌ', 'ra': 'ᜇ',
    // Consonants with "i/e" sound
    'be': 'ᜊᜒ', 'bi': 'ᜊᜒ', 'ke': 'ᜃᜒ', 'ki': 'ᜃᜒ', 'de': 'ᜇᜒ', 'di': 'ᜇᜒ',
    'ge': 'ᜄᜒ', 'gi': 'ᜄᜒ', 'he': 'ᜑᜒ', 'hi': 'ᜑᜒ', 'le': 'ᜎᜒ', 'li': 'ᜎᜒ',
    'me': 'ᜋᜒ', 'mi': 'ᜋᜒ', 'ne': 'ᜈᜒ', 'ni': 'ᜈᜒ', 'nge': 'ᜅᜒ', 'ngi': 'ᜅᜒ',
    'pe': 'ᜉᜒ', 'pi': 'ᜉᜒ', 'se': 'ᜐᜒ', 'si': 'ᜐᜒ', 'te': 'ᜆᜒ', 'ti': 'ᜆᜒ',
    'we': 'ᜏᜒ', 'wi': 'ᜏᜒ', 'ye': 'ᜌᜒ', 'yi': 'ᜌᜒ', 're': 'ᜇᜒ', 'ri': 'ᜇᜒ',
    // Consonants with "o/u" sound
    'bo': 'ᜊᜓ', 'bu': 'ᜊᜓ', 'ko': 'ᜃᜓ', 'ku': 'ᜃᜓ', 'do': 'ᜇᜓ', 'du': 'ᜇᜓ',
    'go': 'ᜄᜓ', 'gu': 'ᜄᜓ', 'ho': 'ᜑᜓ', 'hu': 'ᜑᜓ', 'lo': 'ᜎᜓ', 'lu': 'ᜎᜓ',
    'mo': 'ᜋᜓ', 'mu': 'ᜋᜓ', 'no': 'ᜈᜓ', 'nu': 'ᜈᜓ', 'ngo': 'ᜅᜓ', 'ngu': 'ᜅᜓ',
    'po': 'ᜉᜓ', 'pu': 'ᜉᜓ', 'so': 'ᜐᜓ', 'su': 'ᜐᜓ', 'to': 'ᜆᜓ', 'tu': 'ᜆᜓ',
    'wo': 'ᜏᜓ', 'wu': 'ᜏᜓ', 'yo': 'ᜌᜓ', 'yu': 'ᜌᜓ', 'ro': 'ᜇᜓ', 'ru': 'ᜇᜓ',
    // Standalone consonants (with virama/pamudpod)
    'b': 'ᜊ᜴', 'k': 'ᜃ᜴', 'd': 'ᜇ᜴', 'g': 'ᜄ᜴', 'h': 'ᜑ᜴',
    'l': 'ᜎ᜴', 'm': 'ᜋ᜴', 'n': 'ᜈ᜴', 'ng': 'ᜅ᜴', 'p': 'ᜉ᜴',
    's': 'ᜐ᜴', 't': 'ᜆ᜴', 'w': 'ᜏ᜴', 'y': 'ᜌ᜴', 'r': 'ᜇ᜴'
};

const strokeTutorials = { // Assuming SVG paths are defined correctly for animation
    'a': { name: 'A', baybayin: 'ᜀ', strokes: ['M50,150 C70,90 130,90 150,150', 'M100,100 L100,180'] },
    'i': { name: 'I/E', baybayin: 'ᜁ', strokes: ['M50,150 C70,90 130,90 150,150', 'M100,100 L100,180', 'M90,80 L110,80'] }, // Simplified dot for kudlit
    'u': { name: 'U/O', baybayin: 'ᜂ', strokes: ['M50,150 C70,90 130,90 150,150', 'M100,100 L100,180', 'M90,190 L110,190'] }, // Simplified dot for kudlit
    'ba': { name: 'BA', baybayin: 'ᜊ', strokes: ['M60,70 C100,30 140,70 140,70 M60,130 C100,170 140,130 140,130'] },
    'ka': { name: 'KA', baybayin: 'ᜃ', strokes: ['M100,50 L100,150', 'M60,100 L140,100'] },
    'da': { name: 'DA/RA', baybayin: 'ᜇ', strokes: ['M100,50 L100,150', 'M60,100 C80,70 120,70 140,100'] },
     // Add more characters here from your original strokeTutorials if they have SVG paths
    'ga': { name: 'GA', baybayin: 'ᜄ', strokes: ['M100,50 C60,80 60,120 100,150', 'M100,50 C140,80 140,120 100,150'] },
    'ha': { name: 'HA', baybayin: 'ᜑ', strokes: ['M60,50 L60,150', 'M140,50 L140,150', 'M60,100 L140,100'] },
    'la': { name: 'LA', baybayin: 'ᜎ', strokes: ['M100,50 L100,150', 'M100,150 C80,120 60,150 60,150'] },
    'ma': { name: 'MA', baybayin: 'ᜋ', strokes: ['M60,150 L60,50', 'M60,50 L100,100', 'M100,100 L140,50', 'M140,50 L140,150'] },
    'na': { name: 'NA', baybayin: 'ᜈ', strokes: ['M60,150 L60,50', 'M60,50 L140,150', 'M140,150 L140,50'] },
    'nga':{ name: 'NGA', baybayin: 'ᜅ', strokes: ['M100,50 C70,80 70,120 100,150', 'M100,150 L100,120', 'M100,120 C130,110 130,90 100,80'] },
    'pa': { name: 'PA', baybayin: 'ᜉ', strokes: ['M60,50 L60,150', 'M60,50 L140,50', 'M140,50 L140,100', 'M60,100 L140,100'] },
    'sa': { name: 'SA', baybayin: 'ᜐ', strokes: ['M140,50 C100,75 100,100 140,125', 'M140,125 C100,150 60,125 60,100'] },
    'ta': { name: 'TA', baybayin: 'ᜆ', strokes: ['M100,50 L100,150', 'M60,50 L140,50'] },
    'wa': { name: 'WA', baybayin: 'ᜏ', strokes: ['M60,50 L80,150', 'M80,150 L100,50', 'M100,50 L120,150', 'M120,150 L140,50'] },
    'ya': { name: 'YA', baybayin: 'ᜌ', strokes: ['M100,50 L100,100', 'M100,100 C70,150 60,150 60,150', 'M100,100 C130,150 140,150 140,150'] },
};

const quizData = [
    { question: "What is the Baybayin character for 'A'?", options: ['ᜀ', 'ᜁ', 'ᜃ', 'ᜇ'], answer: 'ᜀ' },
    { question: "What is the Baybayin character for 'KA'?", options: ['ᜃ', 'ᜊ', 'ᜆ', 'ᜑ'], answer: 'ᜃ' },
    { question: "Which Baybayin character represents 'MA'?", options: ['ᜋ', 'ᜈ', 'ᜎ', 'ᜐ'], answer: 'ᜋ' },
    { question: "What sound does 'ᜊᜒ' represent?", options: ["BE/BI", "BO/BU", "BA", "B"], answer: "BE/BI" },
    { question: "What does the ᜴ mark (pamudpod) do?", options: ["Removes vowel sound", "Changes vowel to E/I", "Changes vowel to O/U", "It's the character for NG"], answer: "Removes vowel sound"},
    { question: "What is 'ᜐᜓ'?", options: ["SO/SU", "SA", "SE/SI", "S"], answer: "SO/SU" },
    { question: "Which of these is 'NGA'?", options: ["ᜅ", "ᜈ", "ᜄ", "ᜋ"], answer: "ᜅ" },
];

// DOM elements
const converterBtn = document.getElementById('converter-btn');
const tutorialBtn = document.getElementById('tutorial-btn');
const quizBtn = document.getElementById('quiz-btn');
const historyBtn = document.getElementById('history-btn');

const converterSection = document.getElementById('converter');
const tutorialSection = document.getElementById('tutorial');
const quizSection = document.getElementById('quiz');
const historySection = document.getElementById('history');

const textInput = document.getElementById('text-input');
const baybayinOutput = document.getElementById('baybayin-output');
const conversionExplanation = document.getElementById('conversion-explanation');

const characterGrid = document.getElementById('character-grid');
const strokeAnimationSVG = document.getElementById('stroke-animation');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn'); // Added pause functionality
const resetBtn = document.getElementById('reset-btn');

const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const quizResult = document.getElementById('quiz-result');
const quizNextBtn = document.getElementById('quiz-next');

// --- State Variables ---
let currentTutorialCharacter = null;
let currentStrokeIndex = 0;
let animationTimer = null;
let animationPaused = false;
const STROKE_ANIMATION_DURATION = 1000; // ms per stroke part

let currentQuizQuestionIndex = 0;
let score = 0;
let quizInProgress = false;


// --- Navigation ---
converterBtn.addEventListener('click', () => setActiveSection('converter'));
tutorialBtn.addEventListener('click', () => {
    setActiveSection('tutorial');
    if (characterGrid.children.length === 0) { // Populate only once
        populateCharacterGrid();
    }
});
quizBtn.addEventListener('click', () => {
    setActiveSection('quiz');
    startQuiz();
});
historyBtn.addEventListener('click', () => setActiveSection('history'));

function setActiveSection(sectionId) {
    [converterSection, tutorialSection, quizSection, historySection].forEach(section => {
        section.classList.remove('active');
    });
    [converterBtn, tutorialBtn, quizBtn, historyBtn].forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    document.getElementById(`${sectionId}-btn`).classList.add('active');
}

// --- Converter Functionality ---
textInput.addEventListener('input', convertText);

function getSyllable(text, index) { // text is assumed to be lowercased
    if ('aeiou'.includes(text[index])) return text[index];
    if (text[index] === 'n' && index + 1 < text.length && text[index + 1] === 'g') {
        if (index + 2 < text.length && 'aeiou'.includes(text[index + 2])) return 'ng' + text[index + 2];
        return 'ng';
    }
    const consonants = "bkdghlmnpstwyr";
    if (consonants.includes(text[index]) && index + 1 < text.length && 'aeiou'.includes(text[index + 1])) {
        return text[index] + text[index + 1];
    }
    return text[index];
}

function convertToBaybayin(inputText) {
    let result = '';
    let i = 0;
    const text = inputText.toLowerCase();
    while (i < text.length) {
        const currentChar = text[i];
        if (currentChar === ' ' || ',.?!;:\'"-_()[]{}/\\'.includes(currentChar)) {
            result += currentChar;
            i++;
            continue;
        }
        const syllable = getSyllable(text, i);
        if (syllable && baybayinMap.hasOwnProperty(syllable)) {
            result += baybayinMap[syllable];
            i += syllable.length;
        } else {
            if (baybayinMap.hasOwnProperty(currentChar)) {
                result += baybayinMap[currentChar];
            } else {
                result += currentChar;
            }
            i++;
        }
    }
    return result;
}

function convertText() {
    const inputText = textInput.value;
    baybayinOutput.textContent = convertToBaybayin(inputText);
    conversionExplanation.textContent = inputText.trim() === "" ?
        "Enter a word or phrase to convert." :
        "The Baybayin script is shown above. 'R' is often written as 'D'. Standalone consonants use a pamudpod (virama).";
}

// --- Tutorial Functionality ---
function populateCharacterGrid() {
    characterGrid.innerHTML = ''; // Clear existing
    Object.keys(strokeTutorials).forEach(key => {
        const charData = strokeTutorials[key];
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <div class="character-display">${charData.baybayin || baybayinMap[key]}</div>
            <div class="character-name">${charData.name}</div>
        `;
        card.addEventListener('click', () => {
            currentTutorialCharacter = key;
            resetAnimation(); // Reset before displaying new one
            displayStrokeAnimation(key);
        });
        characterGrid.appendChild(card);
    });
}

function displayStrokeAnimation(characterKey) {
    if (!strokeTutorials[characterKey] || !strokeTutorials[characterKey].strokes) return;
    currentTutorialCharacter = characterKey;
    const paths = strokeTutorials[characterKey].strokes;
    strokeAnimationSVG.innerHTML = ''; // Clear previous
    currentStrokeIndex = 0;
    animationPaused = false;

    paths.forEach((pathData, index) => {
        const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathElement.setAttribute('d', pathData);
        pathElement.setAttribute('class', 'stroke');
        pathElement.style.strokeDasharray = pathElement.getTotalLength();
        pathElement.style.strokeDashoffset = pathElement.getTotalLength(); // Hide initially
        pathElement.id = `stroke-${index}`;
        strokeAnimationSVG.appendChild(pathElement);
    });
    if (paths.length > 0) animateNextStroke();
}

function animateNextStroke() {
    if (!currentTutorialCharacter || currentStrokeIndex >= strokeTutorials[currentTutorialCharacter].strokes.length || animationPaused) {
        if (animationTimer) clearTimeout(animationTimer);
        return;
    }

    const pathElement = strokeAnimationSVG.getElementById(`stroke-${currentStrokeIndex}`);
    if (pathElement) {
        pathElement.style.transition = ''; // Clear previous transition if any (on reset)
        pathElement.style.strokeDashoffset = pathElement.getTotalLength(); // Ensure it's hidden
        
        // Force reflow to apply start style before transition
        pathElement.getBoundingClientRect(); 
        
        pathElement.style.transition = `stroke-dashoffset ${STROKE_ANIMATION_DURATION / 1000}s ease-in-out`;
        pathElement.style.strokeDashoffset = '0'; // Animate to draw
    }

    currentStrokeIndex++;
    if (animationTimer) clearTimeout(animationTimer);
    animationTimer = setTimeout(animateNextStroke, STROKE_ANIMATION_DURATION);
}

playBtn.addEventListener('click', () => {
    if (animationPaused && currentTutorialCharacter) {
        animationPaused = false;
        animateNextStroke(); // Resume from currentStrokeIndex
    } else if (currentTutorialCharacter) {
        // If not paused but character selected, effectively a restart from current view or fresh play
        displayStrokeAnimation(currentTutorialCharacter); // Restart animation for the current character
    }
});

pauseBtn.addEventListener('click', () => {
    animationPaused = true;
    if (animationTimer) clearTimeout(animationTimer);
});

resetBtn.addEventListener('click', resetAnimation);

function resetAnimation() {
    if (animationTimer) clearTimeout(animationTimer);
    animationPaused = false;
    currentStrokeIndex = 0;
    if (currentTutorialCharacter && strokeTutorials[currentTutorialCharacter]) {
        const paths = strokeTutorials[currentTutorialCharacter].strokes;
        for (let i = 0; i < paths.length; i++) {
            const pathElement = strokeAnimationSVG.getElementById(`stroke-${i}`);
            if (pathElement) {
                pathElement.style.transition = 'none'; // Stop any ongoing transition
                pathElement.style.strokeDashoffset = pathElement.getTotalLength(); // Hide
            }
        }
    } else {
         strokeAnimationSVG.innerHTML = ''; // Or clear if no specific character is active
    }
}


// --- Quiz Functionality ---
function startQuiz() {
    currentQuizQuestionIndex = 0;
    score = 0;
    quizInProgress = true;
    quizNextBtn.textContent = "Next Question";
    loadNewQuestion();
}

function loadNewQuestion() {
    if (currentQuizQuestionIndex < quizData.length) {
        const questionData = quizData[currentQuizQuestionIndex];
        quizQuestion.textContent = questionData.question;
        quizOptions.innerHTML = ''; // Clear previous options
        quizResult.textContent = '';
        quizResult.className = 'quiz-result'; // Reset result styling

        questionData.options.forEach(option => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'quiz-option';
            optionBtn.textContent = option;
            optionBtn.addEventListener('click', () => handleOptionClick(optionBtn, option, questionData.answer));
            quizOptions.appendChild(optionBtn);
        });
        quizNextBtn.style.display = 'none'; // Hide next button until an answer is selected
    } else {
        quizQuestion.textContent = `Quiz Finished! Your score: ${score}/${quizData.length}`;
        quizOptions.innerHTML = '';
        quizResult.textContent = '';
        quizNextBtn.textContent = "Restart Quiz";
        quizInProgress = false; // So restart button works
    }
}

function handleOptionClick(optionBtn, selectedAnswer, correctAnswer) {
    // Disable all option buttons after one is clicked
    Array.from(quizOptions.children).forEach(btn => btn.disabled = true);

    if (selectedAnswer === correctAnswer) {
        score++;
        optionBtn.classList.add('correct');
        quizResult.textContent = "Correct!";
        quizResult.className = 'quiz-result correct';
    } else {
        optionBtn.classList.add('incorrect');
        quizResult.textContent = `Incorrect. The correct answer was ${correctAnswer}.`;
        quizResult.className = 'quiz-result incorrect';
        // Highlight the correct answer
        Array.from(quizOptions.children).forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.classList.add('correct');
            }
        });
    }
    currentQuizQuestionIndex++;
    quizNextBtn.style.display = 'block'; // Show next button
}

quizNextBtn.addEventListener('click', () => {
    if (quizInProgress) {
        loadNewQuestion();
    } else {
        startQuiz(); // Restart quiz
    }
});

// Initialize with the converter section
setActiveSection('converter');