/**
 * Color Generator - Enhanced JavaScript
 * @author APIciTech
 * @version 2.0
 * @description A web application that maps emotions to colors,
 * allowing users to select emotions and receive color palettes
 * with descriptions and categories for enhanced user experience.
 * @fileoverview Combines emotion mapping with comprehensive color database
 * including primary colors and variations with detailed descriptions.
 */

// Combining emotion mapping with comprehensive color database// Combining emotion mapping with comprehensive color database

// Enhanced emotion-to-color mapping with variations
const emotionDatabase = {
    // Direct emotion mappings (your original concept)
    "happy": [
        { hex: "#FFD700", name: "Golden Sun", description: "Radiant joy and celebration, like sunlight on skin.", category: "Primary" },
		{ hex: "#FFFF00", name: "Bright Yellow", description: "Cheerful optimism and playfulness.", category: "Variation" },
		{ hex: "#F0E68C", name: "Khaki Glow", description: "Soft, subtle warmth of quiet happiness.", category: "Variation" },
		{ hex: "#F3E139", name: "Lemon Zest", description: "Burst of excitement and playful cheer.", category: "Variation" },
		{ hex: "#FFE360", name: "Golden Glow", description: "Balanced, radiant happiness.", category: "Variation" },
		{ hex: "#FFD700", name: "Gold", description: "Stimulates perceptual warmth and optimism.", category: "Variation" },
		{ hex: "#32CD32", name: "Lime Green", description: "Energizes with fresh, vibrant stimulation.", category: "Variation" },
		{ hex: "#FF7F50", name: "Coral", description: "Blends warmth and vibrancy for cheerful affection.", category: "Variation" },
		{ hex: "#FFB6C1", name: "Light Pink", description: "Evokes tender, soothing joy through soft hues.", category: "Variation" }
		
    ],
    "calm": [
        {  hex: "#00CED1", name: "Dark Turquoise", description: "Offers deeper comfort through soothing depths.", category: "Primary" },
		{  hex: "#ADD8E6", name: "Light Blue", description: "Represents serenity, stability, and peace. Creates a tranquil and soothing atmosphere.", category: "Variation" },
		{  hex: "#B0C4DE", name: "Light Steel Blue", description: "Quiet reflection and inner peace.", category: "Variation" },
		{  hex: "#E6E6FA", name: "Lavender", description: "Gentle, calming presence.", category: "Variation" },
		{  hex: "#87CEFA", name: "Light Sky Blue", description: "Promotes a sense of serenity and openness.", category: "Variation" },
		{  hex: "#87CEEB", name: "Sky Blue", description: "Refreshing, airy calmness.", category: "Variation" },
		{  hex: "#4682B4", name: "Steel Blue",description: "Grounded stillness and reflection.", category: "Variation" },
		{  hex: "#B0E0E6", name: "Powder Blue", description: "Perfect for relaxation and gentle contemplation.", category: "Variation" }
    ],
    "passion": [
       { hex: "#FF4500", name: "Orange Red", description: "Fiery desire, heightening intensity and emotion.", category: "Primary" },
		{ hex: "#DC143C", name: "Crimson", description: "Vivid passion, evoking raw energy.", category: "Variation" },
		{ hex: "#B22222", name: "Firebrick", description: "Intense power, stimulating passionate sensations.", category: "Variation" },
		{ hex: "#FF8C00", name: "Dark Orange", description: "Warm enthusiasm, blending energy with depth.", category: "Variation" },
		{ hex: "#FF6347", name: "Tomato", description: "Vibrant drive, energizing passion.", category: "Variation" },
		{ hex: "#7FFF00", name: "Chartreuse", description: "Electric zeal, adding fresh fire.", category: "Variation" }
    ],
    "love": [
        { hex: "#FF1450", name: "Crimson Rose", description: "Bold and romantic, the essence of passionate love.", category: "Primary" },
		{ hex: "#E88372", name: "Blush Peach", description: "Soft affection and warmth of tender connection.", category: "Variation" },
		{ hex: "#FF69B4", name: "Hot Pink", description: "Playful romance and lively attraction.", category: "Variation" },
		{ hex: "#FF1493", name: "Deep Pink", description: "Vivid, exciting intensity of desire.", category: "Variation" },
		{ hex: "#FFC0CB", name: "Baby Pink", description: "Gentle sweetness of pure affection.", category: "Variation" },
		{ hex: "#E6094F", name: "Raspberry Red", description: "Electric spark of infatuation and intensity.", category: "Variation" },
		{ hex: "#E94882", name: "Rose Quartz", description: "Romantic glow and intimacy.", category: "Variation" },
		{ hex: "#FC8286", name: "Coral Kiss", description: "Playful flirtation and warmth.", category: "Variation" }
    ],
    "sadness": [
        { hex: "#5A5760", name: "Dusky Gray", description: "Quiet sorrow and solitude.", category: "Primary" },
		{ hex: "#705B5F", name: "Ash Violet", description: "Dim, reflective sadness.", category: "Variation" },
		{ hex: "#7B7890", name: "Slate Mist", description: "Lingering wistfulness.", category: "Variation" },
		{ hex: "#807C74", name: "Dusty Olive", description: "Nostalgic sadness, weathered and soft.", category: "Variation" },
		{ hex: "#36454F", name: "Charcoal Gray", description: "Weight of reflection and grief.", category: "Variation" },
		{ hex: "#2F4F4F", name: "Dark Slate Gray", description: "Heavy quiet of loss.", category: "Variation" },
		{ hex: "#696969", name: "Dim Gray", description: "Lingering melancholy.", category: "Variation" },
		{ hex: "#5A5760", name: "Ash Mist", description: "Dull ache of sorrow.", category: "Variation" },
		{ hex: "#6066B7", name: "Slate Blue", description: "Subdued sadness with depth.", category: "Variation" }
    ],
    "mystery": [
        { hex: "#4B0082", name: "Indigo", description: "Deep unknown, intuition, and secrets.", category: "Primary" },
		{ hex: "#000000", name: "Black", description: "Classic void of intrigue and enigma.", category: "Variation" },
		{ hex: "#483D8B", name: "Dark Slate Blue", description: "Shadowy undertones of curiosity.", category: "Variation" },
		{ hex: "#211F5B", name: "Midnight Violet", description: "Twilight’s quiet, puzzling beauty.", category: "Variation" },
		{ hex: "#430A56", name: "Plum Shadow", description: "Eerie elegance and hidden power.", category: "Variation" }
    ],
    "anger": [
       	{ hex: "#B22222", name: "Firebrick", description: "Raw intensity and confrontation.", category: "Primary" },
		{ hex: "#8B0000", name: "Dark Red", description: "Heavy, unyielding force of fury.", category: "Variation" },
		{ hex: "#A52A2A", name: "Brown Heat", description: "Grounded and simmering anger.", category: "Variation" },
		{ hex: "#C82308", name: "Molten Crimson", description: "Explosive burst of heated rage.", category: "Variation" },
		{ hex: "#92251A", name: "Burnt Brick", description: "Lingering anger, slow and consuming.", category: "Variation" }
    ],
    "fear": [
        {  hex: "#2F4F4F", name: "Dark Slate Gray", description: "Uncertainty and unease.", category: "Variation" },
		{  hex: "#708090", name: "Slate Gray", description: "Lingering anxiety and tension.", category: "Variation" },
		{  hex: "#808000", name: "Olive", description: "Represents tension and unease.", category: "Primary" },
		{  hex: "#556B2F", name: "Dark Olive Green", description: "Darker expression of anxiety and worry.", category: "Variation" },
		{  hex: "#6B8E23", name: "Olive Drab", description: "Military-inspired color evoking tension.", category: "Variation" },
		{  hex: "#191970", name: "Midnight Blue", description: "Mysterious, unsettling atmosphere.", category: "Variation" },
		{  hex: "#5D5908", name: "Moss Shadow", description: "Lurking dread, earthy and unsettling.", category: "Variation" },
		{  hex: "#48451D", name: "Dark Mustard", description: "Stale fear and quiet paranoia.", category: "Variation" }
    ],
    "courage": [
        { hex: "#A0522D", name: "Sienna", description: "Signifies resilience and earthiness.", category: "Primary" },
 		{ hex: "#CD853F", name: "Peru", description: "Warm and dependable for challenges.", category: "Variation" },
 		{ hex: "#D2691E", name: "Chocolate", description: "Rich determination, grounding senses in courageous warmth.", category: "Variation" },
		{ hex: "#CD5C5C", name: "Indian Red", description: "Energizes courage through vibrant stimulation.", category: "Variation" },
		{ hex: "#8B0000", name: "Dark Red", description: "Deep boldness, evoking powerful confidence.", category: "Variation" },
 		{ hex: "#DAA520", name: "Goldenrod", description: "Optimistic strength, brightening valor.", category: "Variation" },
 		{ hex: "#556B2F", name: "Dark Olive Green", description: "Resilient groundedness, supporting fearless experiences.", category: "Variation" },
 		{ hex: "#9370DB", name: "Medium Purple", description: "Noble courage, blending intuition with bold depth.", category: "Variation" }
    ],
    "creativity": [
       {  hex: "#9932CC", name: "Dark Orchid", description: "Inspiring unique and imaginative thoughts.", category: "Primary" },
		{  hex: "#FF00FF", name: "Magenta", description: "Bold ideas and innovation.", category: "Variation" }
    ],
    "wisdom": [
        {  hex: "#4B0082", name: "Indigo", description: "Evokes intuition and deep knowledge.", category: "Primary" },
		{  hex: "#6A5ACD", name: "Slate Blue", description: "Provides thoughtful clarity.", category: "Variation" },
		{  hex: "#800080", name: "Purple", description: "Represents traditional wisdom.", category: "Variation" },
   ],
	"trust": [
		{ hex: "#ADD8E6", name: "Light Blue", description: "Builds trust through calming stability, soothing doubts.", category: "Primary" },
		{ hex: "#556B2F", name: "Dark Olive Green", description: "Grounded reliability, evoking dependability.", category: "Variation" },
		{ hex: "#2E8B57", name: "Sea Green", description: "Balanced trustworthiness, blending nature's calm with visual assurance.", category: "Variation" }
	],
	"comfort": [
		{ hex: "#D2691E", name: "Chocolate", description: "Warms senses with rich comfort, simulating cozy perceptual embrace.", category: "Primary" },
		{ hex: "#FFB6C1", name: "Light Pink", description: "Soft warmth, evoking gentle nostalgia.", category: "Variation" },
		{ hex: "#2E8B57", name: "Sea Green", description: "Nostalgic calm, grounding in familiar natural hues.", category: "Variation" },
		{ hex: "#FF1493", name: "Deep Pink", description: "Vibrant nostalgia, stimulating affectionate memories.", category: "Variation" },
		{ hex: "#20B2AA", name: "Light Sea Green", description: "Refreshing warmth, blending past comforts with fresh perceptions.", category: "Variation" }
    ],
	"tradition": [
		{ hex: "#DAA520", name: "Goldenrod", description: "Timeless tradition, warming continuity.", category: "Primary" },
		{ hex: "#ADD8E6", name: "Light Blue", description: "Ordered stability, calming perceptual structures.", category: "Variation" },
		{ hex: "#A52A2A", name: "Brown", description: "Grounded order, evoking reliable earthiness.", category: "Variation" }
	],
	"grounded": [
		{ hex: "#D2691E", name: "Chocolate", description: "Rich stability, grounding experiences.", category: "Primary" },
		{ hex: "#A0522D", name: "Sienna", description: "Earthy resilience, evoking balance.", category: "Variation" },
		{ hex: "#3CB371", name: "Medium Sea Green", description: "Natural groundedness, refreshing stable sensations.", category: "Variation" }
	],
	"focus": [
		{ hex: "#87CEEB", name: "Sky Blue", description: "Enhances clarity with open space.", category: "Primary" },
		{ hex: "#20B2AA", name: "Light Sea Green", description: "Refreshes focus, stimulating crisp alignment.", category: "Variation" },
		{ hex: "#ADFF2F", name: "Green Yellow", description: "Energizes clarity, brightening perceptions.", category: "Variation" },
		{ hex: "#8A2BE2", name: "Blue Violet", description: "Deepens focus through intuitive visual depth.", category: "Variation" }
	],
	"hope": [
		{ hex: "#C2EA1F", name: "Lime Radiance", description: "Fresh optimism, springlike energy.", category: "Primary" },
		{ hex: "#DAF14F", name: "Lemon Glow", description: "Bright potential and promise.", category: "Variation" },
		{ hex: "#9BEB46", name: "Green Vitality", description: "Alive with possibility and renewal.", category: "Variation" },
		{ hex: "#B3EF6B", name: "Spring Meadow", description: "Gentle, uplifting outlook.", category: "Variation" },
		{ hex: "#82D930", name: "Bright Clover", description: "Optimistic growth and life force.", category: "Variation" },
		{ hex: "#91C808", name: "Fresh Chartreuse", description: "Energetic push toward the future.", category: "Variation" }
	],
	"playful": [ 
		{ hex: "#6FA03B", name: "Lively Green", description: "Burst of interactive, youthful fun.", category: "Primary" },
		{ hex: "#9F73E7", name: "Lilac Spark", description: "Whimsical delight and energy.", category: "Variation" },
		{ hex: "#FC6840", name: "Tangerine Pop", description: "Cheeky, spirited humor.", category: "Variation" },
		{ hex: "#FF5319", name: "Bright Orange", description: "Exuberant excitement and movement.", category: "Variation" },
		{ hex: "#EFFE94", name: "Banana Yellow", description: "Lighthearted mischief and joy.", category: "Variation" }
	],
    "elegance": [
    	{ hex: "#800080", name: "Purple", description: "Royal luxury, deepening experiences.", category: "Primary" },
		{ hex: "#B0E0E6", name: "Powder Blue", description: "Refined calm, evoking elegant softness.", category: "Variation" },
		{ hex: "#FFD700", name: "Gold", description: "Opulent shine, stimulating visual-tactile luxury.", category: "Variation" },
		{ hex: "#000000", name: "Black", description: "Timeless elegance, grounding in mysterious depth.", category: "Variation" }
    ],
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
/**
 * Initializes the application when DOM content is fully loaded.
 * Sets up event listeners and prepares the emotion selector interface.
 * @function
 * @returns {void}
 */
204
	initializeApp() {
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
/**
 * Generates and displays a color palette based on user emotion input.
 * Validates the emotion input, retrieves corresponding colors from the emotion database,
 * and renders them with descriptions and copy functionality.
 * @function
 * @throws {Error} If emotion database is not accessible
 * @returns {void}
 */
function generateColor() {
    const feeling = feelingInput.value.trim();
		console.log('[Color Generator] User entered emotion:', feeling);
    
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

// Add global error handler for unhandled errors
window.addEventListener('error', (event) => {
	console.error('[Color Generator] An unexpected error occurred:', event.error);
	showError('An unexpected error occurred. Please refresh the page.');
});

// Log when the script has loaded successfully
console.log('[Color Generator] Script loaded successfully. Ready to accept user input.');

