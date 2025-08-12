const colorDataset = {
    "calm": {
        hex: "#ADD8E6",
        name: "Light Blue",
        description: "Represents serenity, stability, and peace. It's often used to create a tranquil and soothing atmosphere, promoting a sense of calm.",
        why: "Ideal for experiences related to relaxation, meditation, or quiet reflection. Its soft tone can lower heart rate and create a sense of security."
    },
    "happy": {
        hex: "#FFD700",
        name: "Gold",
        description: "Symbolizes joy, energy, and optimism. A bright, warm color that is often associated with sunlight and positivity.",
        why: "Use this color to evoke feelings of happiness, excitement, and cheerfulness. It's great for celebratory or uplifting experiences."
    },
    "passion": {
        hex: "#FF4500",
        name: "Orange Red",
        description: "A fiery and intense color representing strong emotion, desire, and energy. It's a vibrant and attention-grabbing hue.",
        why: "This is the perfect color for experiences centered around romance, intense action, or high-energy events. It stimulates and grabs attention."
    },
    "love": {
        hex: "#FF69B4",
        name: "Hot Pink",
        description: "A lively and playful color associated with romance, affection, and tenderness. It's a softer, more approachable version of red.",
        why: "Use it to create an atmosphere of warmth, care, and emotional connection. It's often seen in contexts of love and relationships."
    },
    "sadness": {
        hex: "#36454F",
        name: "Charcoal Gray",
        description: "Conveys feelings of sadness, reflection, and seriousness. It's a somber and neutral color, often used to create a contemplative mood.",
        why: "Effective for experiences that require a more serious or introspective tone. It can help set a mood of quiet contemplation."
    },
    "mystery": {
        hex: "#4B0082",
        name: "Indigo",
        description: "Represents the unknown, intuition, and depth. A deep, rich color that combines the stability of blue with the energy of purple.",
        why: "Perfect for creating an atmosphere of intrigue, fantasy, or the unknown. Its deep hue can draw the user into a captivating narrative."
    },
    "anger": {
        hex: "#B22222",
        name: "Firebrick",
        description: "A deep red color that symbolizes intensity, aggression, and power. It's an emotionally charged color that can evoke strong reactions.",
        why: "Use this to represent conflict, danger, or raw power in an experience. Its strong presence can create a sense of urgency."
    },
    "fear": {
        hex: "#808000",
        name: "Olive",
        description: "A muted, earthy color that can represent tension, sickness, and unease. It’s often used in military contexts and can evoke a sense of worry.",
        why: "This color can be used to build suspense and a feeling of dread or anxiety. Its subdued tone can feel oppressive in certain contexts."
    },
    "courage": {
        hex: "#A0522D",
        name: "Sienna",
        description: "A warm, reddish-brown color that signifies strength, resilience, and earthiness. It's grounded and reassuring.",
        why: "Ideal for experiences about overcoming challenges, perseverance, and strong character. Its natural tone can feel dependable and solid."
    }
};

const feelingInput = document.getElementById('feelingInput');
const generateBtn = document.getElementById('generateBtn');
const resultContainer = document.getElementById('resultContainer');

generateBtn.addEventListener('click', () => {
    const feeling = feelingInput.value.toLowerCase().trim();
    displayColor(feeling);
});

feelingInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const feeling = feelingInput.value.toLowerCase().trim();
        displayColor(feeling);
    }
});

function displayColor(feeling) {
    resultContainer.innerHTML = ''; // Clear previous results
    const colorInfo = colorDataset[feeling];

    if (colorInfo) {
        const resultHTML = `
            <div class="color-info">
                <div class="color-swatch" style="background-color: ${colorInfo.hex};"></div>
                <div class="details">
                    <h3>${colorInfo.name}</h3>
                    <p class="hex-code">${colorInfo.hex}</p>
                    <p><strong>Description:</strong> ${colorInfo.description}</p>
                    <p><strong>Why use it:</strong> ${colorInfo.why}</p>
                </div>
            </div>
        `;
        resultContainer.innerHTML = resultHTML;
    } else {
        resultContainer.innerHTML = `<p class="not-found">Sorry, no color found for that feeling. Please try another one! 😊</p>`;
    }
}