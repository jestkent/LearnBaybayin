// Character mapping for Baybayin
const baybayinMap = {
    // Vowels
    'a': 'ᜀ',
    'e': 'ᜁ',
    'i': 'ᜁ',
    'o': 'ᜂ',
    'u': 'ᜂ',
    
    // Consonants (with inherent "a" sound)
    'ba': 'ᜊ',
    'ka': 'ᜃ',
    'da': 'ᜇ',
    'ga': 'ᜄ',
    'ha': 'ᜑ',
    'la': 'ᜎ',
    'ma': 'ᜋ',
    'na': 'ᜈ',
    'nga': 'ᜅ',
    'pa': 'ᜉ',
    'sa': 'ᜐ',
    'ta': 'ᜆ',
    'wa': 'ᜏ',
    'ya': 'ᜌ',
    'ra': 'ᜇ', // r often substituted with d in Baybayin
    
    // Consonants with "i/e" sound (using kudlit above)
    'be': 'ᜊᜒ',
    'bi': 'ᜊᜒ',
    'ke': 'ᜃᜒ',
    'ki': 'ᜃᜒ',
    'de': 'ᜇᜒ',
    'di': 'ᜇᜒ',
    'ge': 'ᜄᜒ',
    'gi': 'ᜄᜒ',
    'he': 'ᜑᜒ',
    'hi': 'ᜑᜒ',
    'le': 'ᜎᜒ',
    'li': 'ᜎᜒ',
    'me': 'ᜋᜒ',
    'mi': 'ᜋᜒ',
    'ne': 'ᜈᜒ',
    'ni': 'ᜈᜒ',
    'nge': 'ᜅᜒ',
    'ngi': 'ᜅᜒ',
    'pe': 'ᜉᜒ',
    'pi': 'ᜉᜒ',
    'se': 'ᜐᜒ',
    'si': 'ᜐᜒ',
    'te': 'ᜆᜒ',
    'ti': 'ᜆᜒ',
    'we': 'ᜏᜒ',
    'wi': 'ᜏᜒ',
    'ye': 'ᜌᜒ',
    'yi': 'ᜌᜒ',
    're': 'ᜇᜒ',
    'ri': 'ᜇᜒ',
    
    // Consonants with "o/u" sound (using kudlit below)
    'bo': 'ᜊᜓ',
    'bu': 'ᜊᜓ',
    'ko': 'ᜃᜓ',
    'ku': 'ᜃᜓ',
    'do': 'ᜇᜓ',
    'du': 'ᜇᜓ',
    'go': 'ᜄᜓ',
    'gu': 'ᜄᜓ',
    'ho': 'ᜑᜓ',
    'hu': 'ᜑᜓ',
    'lo': 'ᜎᜓ',
    'lu': 'ᜎᜓ',
    'mo': 'ᜋᜓ',
    'mu': 'ᜋᜓ',
    'no': 'ᜈᜓ',
    'nu': 'ᜈᜓ',
    'ngo': 'ᜅᜓ',
    'ngu': 'ᜅᜓ',
    'po': 'ᜉᜓ',
    'pu': 'ᜉᜓ',
    'so': 'ᜐᜓ',
    'su': 'ᜐᜓ',
    'to': 'ᜆᜓ',
    'tu': 'ᜆᜓ',
    'wo': 'ᜏᜓ',
    'wu': 'ᜏᜓ',
    'yo': 'ᜌᜓ',
    'yu': 'ᜌᜓ',
    'ro': 'ᜇᜓ',
    'ru': 'ᜇᜓ',
    
    // Special case for standalone consonants (with virama/pamudpod)
    'b': 'ᜊ᜴',
    'k': 'ᜃ᜴',
    'd': 'ᜇ᜴',
    'g': 'ᜄ᜴',
    'h': 'ᜑ᜴',
    'l': 'ᜎ᜴',
    'm': 'ᜋ᜴',
    'n': 'ᜈ᜴',
    'ng': 'ᜅ᜴',
    'p': 'ᜉ᜴',
    's': 'ᜐ᜴',
    't': 'ᜆ᜴',
    'w': 'ᜏ᜴',
    'y': 'ᜌ᜴',
    'r': 'ᜇ᜴'
};

// Simplified character structure for tutorials
const strokeTutorials = {
    'a': {
        name: 'A',
        strokes: [
            'M 50,140 C 70,80 130,80 150,140',
            'M 100,90 L 100,180'
        ]
    },
    'i': {
        name: 'I/E',
        strokes: [
            'M 50,140 C 70,80 130,80 150,140',
            'M 100,90 L 100,180',
            'M 80,70 L 120,50'
        ]
    },
    'u': {
        name: 'U/O',
        strokes: [
            'M 50,140 C 70,80 130,80 150,140',
            'M 100,90 L 100,180',
            'M 80,160 L 120,180'
        ]
    },
    'ba': {
        name: 'BA',
        strokes: [
            'M 60,60 L 140,60',
            'M 60,60 L 60,180',
            'M 60,180 L 140,180'
        ]
    },
    'ka': {
        name: 'KA',
        strokes: [
            'M 60,60 L 140,60',
            'M 100,60 L 100,180',
            'M 140,120 L 60,120'
        ]
    },
    'da': {
        name: 'DA',
        strokes: [
            'M 60,60 L 140,60',
            'M 100,60 L 100,180',
            'M 140,120 L 100,120'
        ]
    },
    'ga': {
        name: 'GA',
        strokes: [
            'M 60,120 L 140,120',
            'M 100,60 L 100,180',
            'M 60,60 C 100,90 100,90 140,60'
        ]
    },
    'ha': {
        name: 'HA',
        strokes: [
            'M 80,60 C 60,100 60,140 80,180',
            'M 120,60 C 140,100 140,140 120,180',
            'M 70,120 L 130,120'
        ]
    },
    'la': {
        name: 'LA',
        strokes: [
            'M 60,60 C 100,90 140,60 140,60',
            'M 100,60 L 100,180'
        ]
    },
    'ma': {
        name: 'MA',
        strokes: [
            'M 60,60 L 140,60',
            'M 60,60 L 60,180',
            'M 140,60 L 140,180',
            'M 60,120 L 140,120'
        ]
    },
    'na': {
        name: 'NA',
        strokes: [
            'M 60,60 L 140,60',
            'M 60,60 L 60,180',
            'M 140,60 L 140,180'
        ]
    },
    'nga': {
        name: 'NGA',
        strokes: [
            'M 60,120 Q 100,60 140,120',
            'M 100,120 L 100,180',
            'M 70,150 L 130,150'
        ]
    },
    'pa': {
        name: 'PA',
        strokes: [
            'M 60,60 L 140,60',
            'M 60,60 L 60,180',
            'M 60,120 L 100,120'
        ]
    },
    'sa': {
        name: 'SA',
        strokes: [
            'M 100,60 L 100,180',
            'M 60,90 C 100,60 100,60 140,90',
            'M 60,150 C 100,120 100,120 140,150'
        ]
    },
    'ta': {
        name: 'TA',
        strokes: [
            'M 60,60 L 140,60',
            'M 100,60 L 100,180'
        ]
    },
    'wa': {
        name: 'WA',
        strokes: [
            'M 60,90 C 100,60 140,90 140,90',
            'M 60,150 C 100,120 140,150 140,150'
        ]
    },
    'ya': {
        name: 'YA',
        strokes: [
            'M 70,60 C 100,80 130,60 130,60',
            'M 100,60 L 100,120',
            'M 70,120 C 100,140 130,120 130,120'
        ]
    }
};

// Quiz data
const quizData = [
    {
        question: "What is the Baybayin character for 'A'?",
        options: ['ᜀ', 'ᜁ', 'ᜃ', 'ᜇ'],
        answer: 'ᜀ'
    },
    {
        question: "What is the Baybayin character for 'KA'?",
        options: ['ᜃ', 'ᜊ', 'ᜆ', 'ᜑ'],
        answer: 'ᜃ'
    },
    {
        question: "What is the Baybayin character for 'BA'?",
        options: ['ᜊ', 'ᜀ', 'ᜃ', 'ᜇ'],
        answer: 'ᜊ'
    },
    {
        question: "Which Baybayin character represents 'MA'?",
        options: ['ᜋ', 'ᜈ', 'ᜎ', 'ᜐ'],
        answer: 'ᜋ'
    },
    {
        question: "What is the Baybayin character for 'TA'?",
        options: ['ᜆ', 'ᜃ', 'ᜊ', 'ᜇ'],
        answer: 'ᜆ'
    },
    {
        question: "Which sound does 'ᜎ' represent in Baybayin?",
        options: ['LA', 'RA', 'NA', 'WA'],
        answer: 'LA'
    },
    {
        question: "Which sound does 'ᜐ' represent in Baybayin?",
        options: ['SA', 'HA', 'YA', 'PA'],
        answer: 'SA'
    },
    {
        question: "What does the kudlit mark above a character do?",
        options: ['Changes the vowel to E/I', 'Changes the vowel to O/U', 'Removes the vowel sound', 'Doubles the consonant'],
        answer: 'Changes the vowel to E/I'
    },
    {
        question: "What does the kudlit mark below a character do?",
        options: ['Changes the vowel to O/U', 'Changes the vowel to E/I', 'Removes the vowel sound', 'Doubles the consonant'],
        answer: 'Changes the vowel to O/U'
    },
    {
        question: "Which of these is the Baybayin for 'PA'?",
        options: ['ᜉ', 'ᜊ', 'ᜃ', 'ᜅ'],
        answer: 'ᜉ'
    }
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
const strokeAnimation = document.getElementById('stroke-animation');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const quizResult = document.getElementById('quiz-result');
const quizNextBtn = document.getElementById('quiz-next');

// Navigation
converterBtn.addEventListener('click', () => {
    setActiveSection('converter');
});

tutorialBtn.addEventListener('click', () => {
    setActiveSection('tutorial');
    if (characterGrid.children.length === 0) {
        populateCharacterGrid();
    }
});

quizBtn.addEventListener('click', () => {
    setActiveSection('quiz');
    if (!quizOptions.children.length) {
        loadNewQuestion();
    }
});

historyBtn.addEventListener('click', () => {
    setActiveSection('history');
});

function setActiveSection(section) {
    // Hide all sections
    converterSection.classList.remove('active');
    tutorialSection.classList.remove('active');
    quizSection.classList.remove('active');
    historySection.classList.remove('active');
    
    // Remove active class from all buttons
    converterBtn.classList.remove('active');
    tutorialBtn.classList.remove('active');
    quizBtn.classList.remove('active');
    historyBtn.classList.remove('active');
    
    // Show selected section and activate button
    document.getElementById(section).classList.add('active');
    document.getElementById(`${section}-btn`).classList.add('active');
}

// Converter functionality
textInput.addEventListener('input', convertText);

function getSyllable(text, index) {
    // Check for vowels first
    if ('aeiou'.includes(text[index])) {
        return text[index];
    }
    
    // Check for 'ng' special case
    if (text[index] === 'n' && index + 1 < text.length && text[index + 1] === 'g') {
        if (index + 2 < text.length && 'aeiou'.includes(text[index + 2])) {
            return 'ng' + text[index + 2];
        }
        return 'ng';
    }
    
    // Check for consonant + vowel
    if (index + 1 < text.length && 'aeiou'.includes(text[index + 1])) {
        return text[index] + text[index + 1];
    }
    
    // Standalone consonant
    return text[index];
}

function convertToBaybayin(text) {
    let result = '';
    let i = 0;
    
    while (i < text.length) {
        // Skip spaces and punctuation
        if (text[i] === ' ' || ',.?!;:\'"-_()[]{}\/'.includes(text[i])) {
            result += text[i];
            i++;
            continue;
        }
        
        // Get syllable at current position
        const syllable = getSyllable(text, i);
        
        if (syllable && bayb