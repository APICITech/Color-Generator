// This array contains all the color data for your project.
const data = [
    { category: 'Energy', name: 'Vibrant Coral', hex: '#FF6347', description: 'Vibrant coral orange for a burst of energy.' },
    { category: 'Energy', name: 'Bright Orange', hex: '#FFA500', description: 'Bright orange that evokes warmth and excitement.' },
    { category: 'Energy', name: 'Golden Yellow', hex: '#FFD700', description: 'Golden yellow, symbolizing optimism and happiness.' },
    { category: 'Energy', name: 'Intense Orange-Red', hex: '#FF4500', description: 'Intense orange-red, representing passion and vitality.' },
    { category: 'Energy', name: 'Deep Orange', hex: '#FF8C00', description: 'A bold, deep orange for high-energy moments.' },

    { category: 'Calm', name: 'Soft Sea Green', hex: '#20B2AA', description: 'Soft sea green for a tranquil, peaceful feel.' },
    { category: 'Calm', name: 'Light Sky Blue', hex: '#87CEFA', description: 'Light sky blue that promotes a sense of serenity.' },
    { category: 'Calm', name: 'Powder Blue', hex: '#ADD8E6', description: 'A gentle powder blue, perfect for relaxation.' },
    { category: 'Calm', name: 'Pale Turquoise', hex: '#B0E0E6', description: 'Pale turquoise, like a calm, shallow sea.' },
    { category: 'Calm', name: 'Soothing Cyan', hex: '#AFEEEE', description: 'A soothing pale cyan, ideal for a quiet space.' },

    { category: 'Focus', name: 'Steel Blue', hex: '#4682B4', description: 'A solid steel blue for concentration and stability.' },
    { category: 'Focus', name: 'Deep Teal', hex: '#008080', description: 'Deep teal, providing clarity and mental focus.' },
    { category: 'Focus', name: 'Midnight Blue', hex: '#191970', description: 'Midnight blue, for a serious, focused environment.' },
    { category: 'Focus', name: 'Dark Blue', hex: '#00008B', description: 'Dark blue that suggests deep thought and discipline.' },
    { category: 'Focus', name: 'Dark Slate Gray', hex: '#2F4F4F', description: 'A dark slate gray, offering a solid, grounding presence.' },

    { category: 'Passion', name: 'Vivid Crimson', hex: '#DC143C', description: 'Vivid crimson red, symbolizing intense passion.' },
    { category: 'Passion', name: 'Hot Pink', hex: '#FF1493', description: 'A hot pink, full of romance and vibrant emotion.' },
    { category: 'Passion', name: 'Deep Burgundy', hex: '#8B0000', description: 'A deep burgundy, representing powerful, sensual feelings.' },
    { category: 'Passion', name: 'Earthy Red-Brown', hex: '#A52A2A', description: 'Rich reddish-brown, for a sense of deep, earthy passion.' },
    { category: 'Passion', name: 'Fiery Brick Red', hex: '#B22222', description: 'A fiery brick red, full of warmth and ardor.' },

    { category: 'Joy', name: 'Bright Yellow', hex: '#FFFF00', description: 'Bright yellow, the quintessential color of happiness.' },
    { category: 'Joy', name: 'Muted Khaki', hex: '#F0E68C', description: 'A muted khaki yellow for soft, subtle joy.' },
    { category: 'Joy', name: 'Light Lavender', hex: '#E6E6FA', description: 'Light lavender, a playful color that brings delight.' },
    { category: 'Joy', name: 'Dark Khaki', hex: '#BDB76B', description: 'A dark khaki color, for a rustic, grounded joy.' },
    { category: 'Joy', name: 'Pale Goldenrod', hex: '#FAFAD2', description: 'A pale goldenrod that brings a gentle, joyful glow.' },

    { category: 'Serenity', name: 'Soft Light Blue', hex: '#B0C4DE', description: 'A soft, light blue, for quiet reflection and peace.' },
    { category: 'Serenity', name: 'Lavender Blush', hex: '#E6E6FA', description: 'Lavender blush, a very gentle and calming shade.' },
    { category: 'Serenity', name: 'Pale Turquoise', hex: '#AFEEEE', description: 'Pale turquoise, evoking the serenity of a quiet lagoon.' },
    { category: 'Serenity', name: 'Thistle', hex: '#D8BFD8', description: 'Thistle, a soft, purplish color for serene moments.' },
    { category: 'Serenity', name: 'Plum', hex: '#DDA0DD', description: 'Plum, a deep yet calm purple for tranquil feelings.' },

    { category: 'Creativity', name: 'Dark Orchid', hex: '#9932CC', description: 'Dark orchid, inspiring unique and imaginative thoughts.' },
    { category: 'Creativity', name: 'Vivid Magenta', hex: '#FF00FF', description: 'Vivid magenta, encouraging innovation and bold ideas.' },
    { category: 'Creativity', name: 'Orchid', hex: '#DA70D6', description: 'Orchid, a soft purple that sparks creative energy.' },
    { category: 'Creativity', name: 'Blue Violet', hex: '#8A2BE2', description: 'Blue violet, a color that blends calm with creativity.' },
    { category: 'Creativity', name: 'Slate Blue', hex: '#6A5ACD', description: 'Slate blue, for a balanced and focused creative process.' },

    { category: 'Mystery', name: 'Pure Black', hex: '#000000', description: 'Pure black, the classic color of mystery and intrigue.' },
    { category: 'Mystery', name: 'Indigo', hex: '#4B0082', description: 'Indigo, a deep, enigmatic color for contemplation.' },
    { category: 'Mystery', name: 'Dark Slate Blue', hex: '#483D8B', description: 'Dark slate blue, offering a shadowy and mysterious vibe.' },
    { category: 'Mystery', name: 'Charcoal', hex: '#1C1C1C', description: 'A very dark charcoal, subtle and full of secrets.' },
    { category: 'Mystery', name: 'Dim Gray', hex: '#696969', description: 'Dim gray, a color that hints at hidden depths.' },

    { category: 'Wisdom', name: 'Deep Indigo', hex: '#4B0082', description: 'Deep indigo, associated with intuition and knowledge.' },
    { category: 'Wisdom', name: 'Purple', hex: '#800080', description: 'Purple, traditionally linked to wisdom and royalty.' },
    { category: 'Wisdom', name: 'Medium Purple', hex: '#663399', description: 'A rich medium purple for a sense of deep thought.' },
    { category: 'Wisdom', name: 'Dark Slate Blue', hex: '#483D8B', description: 'Dark slate blue, symbolizing thoughtful reflection.' },
    { category: 'Wisdom', name: 'Slate Gray', hex: '#708090', description: 'Slate gray, a calm and wise color.' },

    { category: 'Elegance', name: 'Silver', hex: '#C0C0C0', description: 'Silver, a classic choice for elegance and sophistication.' },
    { category: 'Elegance', name: 'Dark Gray', hex: '#A9A9A9', description: 'Dark gray, timeless and refined.' },
    { category: 'Elegance', name: 'Beige', hex: '#F5F5DC', description: 'Beige, a neutral, sophisticated background color.' },
    { category: 'Elegance', name: 'Tan', hex: '#D2B48C', description: 'Tan, a soft color that suggests understated elegance.' },
    { category: 'Elegance', name: 'Rosy Brown', hex: '#BC8F8F', description: 'Rosy brown, a warm and delicate color.' }
];

// Get the search bar and color container elements
const searchInput = document.getElementById('search-input');
const colorContainer = document.getElementById('color-container');

// Function to filter and display colors
function filterAndDisplayColors(searchTerm) {
    // Clear any previously displayed colors
    colorContainer.innerHTML = '';

    // Filter the data based on the search term
    const filteredColors = data.filter(item => {
        return item.category.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // Loop through the filtered results and display each color
    if (filteredColors.length > 0) {
        filteredColors.forEach(color => {
          
            const colorBox = document.createElement('div');
            colorBox.classList.add('color-box');
            
const colorHeader = document.createElement('div');
            colorHeader.classList.add('color-header');          
          
            const colorSwatch = document.createElement('div');
            colorSwatch.classList.add('color-swatch');
            colorSwatch.style.backgroundColor = color.hex;
          
          const colorHex = document.createElement('p');
            colorHex.classList.add('color-hex');
            colorHex.textContent = color.hex;
          
          const colorName = document.createElement('p');
            colorName.classList.add('color-name');
            colorName.textContent = color.name;
          
            const colorDescription = document.createElement('p');
            colorDescription.classList.add('color-description');
            colorDescription.textContent = color.description;
  
 colorBox.appendChild(colorName);
 colorBox.appendChild(colorHex);         
 colorBox.appendChild(colorSwatch);
 colorBox.appendChild(colorDescription);
          
            colorContainer.appendChild(colorBox);
        });
    } else {
        colorContainer.innerHTML = `<p>No colors found for "${searchTerm}".</p>`;
    }
}

// Add an event listener to the search bar for live filtering
searchInput.addEventListener('input', function() {
    filterAndDisplayColors(this.value);
});

// Call the function once the page loads to display all colors by default
window.addEventListener('load', () => {
    filterAndDisplayColors('');
});