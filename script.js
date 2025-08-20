// APICI Color Generator - Enhanced JavaScript
// Combining emotion mapping with comprehensive color database

// Enhanced emotion-to-color mapping with variations
const emotionDatabase = {
    // Direct emotion mappings (your original concept)
    "calm": [
        { hex: "#ADD8E6", name: "Light Blue", description: "Represents serenity, stability, and peace. Creates a tranquil and soothing atmosphere.", category: "Primary" },
        { hex: "#87CEFA", name: "Light Sky Blue", description: "Promotes a sense of serenity and openness.", category: "Variation" },
	    { hex: "#87CEEB", name: "Sky Blue", description: "Refreshing, airy calmness.", category: "Variation" },
	    { hex: "#4682B4", name: "Steel Blue",description: "Grounded stillness and reflection.", category: "Variation" },
        { hex: "#B0E0E6", name: "Powder Blue", description: "Perfect for relaxation and gentle contemplation.", category: "Variation" },
		{ hex: "#00CED1", name: "Dark Turquoise", description: "Primary expression of comfort.", category: "Variation" },
		{ hex: "#DAA520", name: "Goldenrod", description: "Primary expression of comfort.", category: "Variation" },
		{ hex: "#FF7F50", name: "Coral", description: "A variation of comfort, expressed through coral.", category: "Variation" },
		{ hex: "#BA55D3", name: "Medium Orchid", description: "A variation of comfort, expressed through medium orchid.", category: "Variation" },
		{ hex: "#FF8C00", name: "Dark Orange", description: "Primary expression of serenity.", category: "Variation" },
		{ hex: "#ADFF2F", name: "Green Yellow", description: "A variation of serenity, expressed through green yellow.", category: "Variation" },
		{ hex: "#32CD32", name: "Lime Green", description: "A variation of serenity, expressed through lime green.", category: "Variation" },
		{ hex: "#B0C4DE", name: "Light Steel Blue", description: "Quiet reflection and inner peace.", category: "Variation" },
        { hex: "#E6E6FA", name: "Lavender", description: "Gentle, calming presence.", category: "Variation" }
		
    ],
    "happy": [
        { hex: "#FFD700", name: "Gold", description: "Symbolizes joy, energy, and optimism. Associated with sunlight and positivity.", category: "Primary" },
        { hex: "#FFFF00", name: "Bright Yellow", description: "The quintessential color of happiness and cheerfulness.", category: "Variation" },
        { hex: "#F0E68C", name: "Khaki", description: "A softer, more subtle expression of joy.", category: "Variation" },
    	{ hex: "#FFEA00", name: "Sunshine Yellow", description: "Radiant happiness and excitement.", category: "Variation" },
		{ hex: "#32CD32", name: "Lime Green", description: "Primary expression of joy.", category: "Variation" },
		{ hex: "#FF4500", name: "Orange Red", description: "A variation of joy, expressed through orange red.", category: "Variation" },
		{ hex: "#FF7F50", name: "Coral", description: "A variation of joy, expressed through coral.", category: "Variation" },
		{ hex: "#FFB6C1", name: "Light Pink", description: "A variation of joy, expressed through light pink.", category: "Variation" }       
    ],
    "passion": [
        { hex: "#FF4500", name: "Orange Red", description: "Fiery and intense, representing strong emotion and desire.", category: "Primary" },
        { hex: "#DC143C", name: "Crimson", description: "Vivid red symbolizing intense passion and energy.", category: "Variation" },
        { hex: "#B22222", name: "Firebrick", description: "Deep red representing raw power and intensity.", category: "Variation" }
    ],
    "love": [
        { hex: "#FF69B4", name: "Hot Pink", description: "Playful color associated with romance and affection.", category: "Primary" },
        { hex: "#FF1493", name: "Deep Pink", description: "Vibrant emotion and romantic energy.", category: "Variation" },
        { hex: "#FFC0CB", name: "Pink", description: "Gentle expression of love and tenderness.", category: "Variation" }
    ],
    "sadness": [
        { hex: "#36454F", name: "Charcoal Gray", description: "Conveys reflection and contemplative mood.", category: "Primary" },
        { hex: "#2F4F4F", name: "Dark Slate Gray", description: "Grounding presence for serious contemplation.", category: "Variation" },
        { hex: "#696969", name: "Dim Gray", description: "Subtle color hinting at melancholy.", category: "Variation" }
    ],
    "mystery": [
        { hex: "#4B0082", name: "Indigo", description: "Represents the unknown, intuition, and depth.", category: "Primary" },
        { hex: "#000000", name: "Black", description: "Classic color of mystery and intrigue.", category: "Variation" },
        { hex: "#483D8B", name: "Dark Slate Blue", description: "Shadowy and mysterious atmosphere.", category: "Variation" }
    ],
    "anger": [
        { hex: "#B22222", name: "Firebrick", description: "Symbolizes intensity, aggression, and power.", category: "Primary" },
        { hex: "#8B0000", name: "Dark Red", description: "Deep, powerful expression of anger.", category: "Variation" },
        { hex: "#A52A2A", name: "Brown", description: "Earthy intensity and grounded anger.", category: "Variation" }
    ],
    "fear": [
        { hex: "#808000", name: "Olive", description: "Represents tension and unease.", category: "Primary" },
        { hex: "#556B2F", name: "Dark Olive Green", description: "Darker expression of anxiety and worry.", category: "Variation" },
        { hex: "#6B8E23", name: "Olive Drab", description: "Military-inspired color evoking tension.", category: "Variation" }
    ],
    "courage": [
        { hex: "#A0522D", name: "Sienna", description: "Signifies strength, resilience, and earthiness.", category: "Primary" },
        { hex: "#CD853F", name: "Peru", description: "Warm, dependable color for overcoming challenges.", category: "Variation" },
        { hex: "#D2691E", name: "Chocolate", description: "Rich, solid color representing determination.", category: "Variation" }
    ],
    "creativity": [
        { hex: "#9932CC", name: "Dark Orchid", description: "Inspiring unique and imaginative thoughts.", category: "Primary" },
        { hex: "#FF00FF", name: "Magenta", description: "Bold ideas and innovation.", category: "Variation" }
    ],
    "wisdom": [
        { hex: "#4B0082", name: "Indigo", description: "Associated with intuition and deep knowledge.", category: "Primary" },
        { hex: "#800080", name: "Purple", description: "Traditional color of wisdom and royalty.", category: "Variation" }
    ],
    "elegance": [
        { hex: "#C0C0C0", name: "Silver", description: "Sophisticated and refined.", category: "Primary" },
        { hex: "#A9A9A9", name: "Dark Gray", description: "Timeless elegance.", category: "Variation" }
    ]
};

// Synonym mapping for better emotion recognition
const emotionSynonyms = {
    // Happy variations
    "joyful": "happy", "cheerful": "happy", "excited": "happy", "elated": "happy", "euphoric": "happy",
    "blissful": "joy", "delighted": "joy", "jubilant": "joy",
    
    // Calm variations
    "peaceful": "calm", "tranquil": "calm", "serene": "serenity", "relaxed": "calm", "zen": "calm",
    "meditation": "serenity", "mindful": "serenity",
    
    // Love variations
    "romance": "love", "affection": "love", "adoration": "love", "devotion": "love",
    
    // Passion variations
    "intense": "passion", "fiery": "passion", "burning": "passion", "desire": "passion",
    
    // Sadness variations
    "melancholy": "sadness", "sorrow": "sadness", "grief": "sadness", "blue": "sadness", "down": "sadness",
    
    // Anger variations
    "rage": "anger", "fury": "anger", "mad": "anger", "irritated": "anger", "frustrated": "anger",
    
    // Fear variations
    "scared": "fear", "afraid": "fear", "terror": "fear", "anxiety": "fear", "worried": "fear", "nervous": "fear",
    
    // Mystery variations
    "enigma": "mystery", "unknown": "mystery", "secret": "mystery", "hidden": "mystery",
    
    // Courage variations
    "brave": "courage", "bold": "courage", "fearless": "courage", "strength": "courage", "heroic": "courage",
    
    // Creative variations
    "artistic": "creativity", "imaginative": "creativity", "innovative": "creativity", "inspired": "creativity"
};

// Get DOM elements
const feelingInput = document.getElementById('feelingInput');
const generateBtn = document.getElementById('generateBtn');
const resultContainer = document.getElementById('resultContainer');
const form = document.querySelector('.input-group');

// Initialize the application
function initializeApp() {
    // Add event listeners
    form.addEventListener('submit', handleFormSubmit);
    generateBtn.addEventListener('click', handleGenerate);
    feelingInput.addEventListener('keydown', handleKeyPress);
    feelingInput.addEventListener('input', handleInputChange);
    
    // Add some visual feedback
    generateBtn.style.cursor = 'pointer';
    feelingInput.focus(); // Focus on input when page loads
}

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form from submitting normally
    generateColor();
}

// Handle generate button click
function handleGenerate(event) {
    event.preventDefault();
    generateColor();
}

// Handle Enter key press
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        generateColor();
    }
}

// Handle input changes for real-time feedback
function handleInputChange() {
    const input = feelingInput.value.trim();
    
    // Clear previous results if input is empty
    if (!input) {
        resultContainer.innerHTML = '';
        return;
    }
    
    // Visual feedback - change border color if emotion is recognized
    const normalizedEmotion = normalizeEmotion(input);
    if (emotionDatabase[normalizedEmotion]) {
        feelingInput.style.borderColor = '#4CAF50'; // Green for valid
    } else {
        feelingInput.style.borderColor = '#ddd'; // Default
    }
}

// Normalize emotion input (handle synonyms, variations)
function normalizeEmotion(input) {
    const cleaned = input.toLowerCase().trim();
    
    // Check if it's a direct match
    if (emotionDatabase[cleaned]) {
        return cleaned;
    }
    
    // Check synonyms
    if (emotionSynonyms[cleaned]) {
        return emotionSynonyms[cleaned];
    }
    
    // Check for partial matches
    for (let emotion in emotionDatabase) {
        if (emotion.includes(cleaned) || cleaned.includes(emotion)) {
            return emotion;
        }
    }
    
    return null;
}

// Main color generation function
function generateColor() {
    const feeling = feelingInput.value.trim();
    
    if (!feeling) {
        showError("Please enter an emotion or feeling.");
        return;
    }
    
    const normalizedEmotion = normalizeEmotion(feeling);
    
    if (normalizedEmotion && emotionDatabase[normalizedEmotion]) {
        displayColorPalette(normalizedEmotion, emotionDatabase[normalizedEmotion]);
        feelingInput.style.borderColor = '#4CAF50';
    } else {
        displaySuggestions(feeling);
        feelingInput.style.borderColor = '#ff6b6b';
    }
}

// Display color palette for recognized emotion
function displayColorPalette(emotion, colors) {
    const primaryColor = colors[0]; // First color is primary
    const variations = colors.slice(1); // Rest are variations
    
    const resultHTML = `
        <div class="color-result" role="group" aria-labelledby="color-heading">
            <h3 id="color-heading" class="emotion-title">${capitalizeFirst(emotion)}</h3>
            
            <div class="primary-color">
                <div class="color-swatch large" style="background-color: ${primaryColor.hex};" 
                     role="img" aria-label="Primary color swatch: ${primaryColor.name}"></div>
                <div class="color-details">
                    <h4 class="color-name">${primaryColor.name}</h4>
                    <p class="hex-code" title="Click to copy">${primaryColor.hex}</p>
                    <p class="color-description">${primaryColor.description}</p>
                </div>
            </div>
            
            ${variations.length > 0 ? `
                <div class="color-variations">
                    <h4>Variations</h4>
                    <div class="variation-grid">
                        ${variations.map(color => `
                            <div class="variation-item">
                                <div class="color-swatch small" style="background-color: ${color.hex};"
                                     role="img" aria-label="Color variation: ${color.name}"></div>
                                <div class="variation-info">
                                    <p class="color-name">${color.name}</p>
                                    <p class="hex-code" title="Click to copy">${color.hex}</p>
                                    <p class="color-description">${color.description}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="action-buttons">
                <button class="copy-palette-btn" onclick="copyPalette('${emotion}')">Copy Palette</button>
                <button class="new-emotion-btn" onclick="clearAndFocus()">Try Another</button>
            </div>
        </div>
    `;
    
    resultContainer.innerHTML = resultHTML;
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Add click listeners for hex codes
    addHexCodeCopyListeners();
}

// Display suggestions for unrecognized emotions
function displaySuggestions(input) {
    const suggestions = getSuggestions(input);
    
    const resultHTML = `
        <div class="no-match-result">
            <div class="not-found-message">
                <h3>Hmm, I don't recognize "${input}" yet</h3>
                <p>But I'm learning! Here are some emotions I know:</p>
            </div>
            
            <div class="suggestions">
                ${suggestions.map(emotion => `
                    <button class="suggestion-btn" onclick="tryEmotion('${emotion}')">
                        ${capitalizeFirst(emotion)}
                    </button>
                `).join('')}
            </div>
            
            <div class="help-text">
                <p>💡 Try emotions like: happy, calm, passionate, mysterious, or creative</p>
            </div>
        </div>
    `;
    
    resultContainer.innerHTML = resultHTML;
}

// Get emotion suggestions based on input
function getSuggestions(input) {
    const allEmotions = Object.keys(emotionDatabase);
    const suggestions = [];
    
    // Find emotions that might be similar
    for (let emotion of allEmotions) {
        if (emotion.includes(input.toLowerCase()) || 
            input.toLowerCase().includes(emotion) ||
            levenshteinDistance(input.toLowerCase(), emotion) <= 2) {
            suggestions.push(emotion);
        }
    }
    
    // If no similar emotions, return random popular ones
    if (suggestions.length === 0) {
        const popular = ['happy', 'calm', 'love', 'passion', 'mystery', 'joy'];
        return popular.slice(0, 4);
    }
    
    return suggestions.slice(0, 6);
}

// Simple string distance calculation
function levenshteinDistance(str1, str2) {
    const matrix = [];
    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }
    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    return matrix[str2.length][str1.length];
}

// Utility functions
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function showError(message) {
    resultContainer.innerHTML = `<div class="error-message">${message}</div>`;
}

function addHexCodeCopyListeners() {
    const hexCodes = resultContainer.querySelectorAll('.hex-code');
    hexCodes.forEach(hexElement => {
        hexElement.style.cursor = 'pointer';
        hexElement.addEventListener('click', () => copyToClipboard(hexElement.textContent));
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show temporary feedback
        const feedback = document.createElement('div');
        feedback.textContent = 'Copied!';
        feedback.style.position = 'fixed';
        feedback.style.background = '#4CAF50';
        feedback.style.color = 'white';
        feedback.style.padding = '8px 16px';
        feedback.style.borderRadius = '4px';
        feedback.style.top = '20px';
        feedback.style.right = '20px';
        feedback.style.zIndex = '1000';
        document.body.appendChild(feedback);
        
        setTimeout(() => document.body.removeChild(feedback), 2000);
    });
}

// Global functions for button interactions
function tryEmotion(emotion) {
    feelingInput.value = emotion;
    generateColor();
}

function clearAndFocus() {
    feelingInput.value = '';
    feelingInput.focus();
    resultContainer.innerHTML = '';
    feelingInput.style.borderColor = '#ddd';
}

function copyPalette(emotion) {
    const colors = emotionDatabase[emotion];
    const paletteText = `${capitalizeFirst(emotion)} Color Palette:\n` +
        colors.map(color => `${color.name}: ${color.hex}`).join('\n');
    copyToClipboard(paletteText);
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);
