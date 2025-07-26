// DOM Elements
const boyNameInput = document.getElementById('boyName');
const girlNameInput = document.getElementById('girlName');
const findButton = document.getElementById('findButton');
const resultsSection = document.getElementById('results');
const boyScoreElement = document.getElementById('boyScore');
const girlScoreElement = document.getElementById('girlScore');
const boyScoreFill = document.getElementById('boyScoreFill');
const girlScoreFill = document.getElementById('girlScoreFill');
const loveMessageElement = document.getElementById('loveMessage');

// Event Listeners
boyNameInput.addEventListener('input', validateInputs);
girlNameInput.addEventListener('input', validateInputs);
findButton.addEventListener('click', calculateLoveScores);

// Input validation
function validateInputs() {
    const boyName = boyNameInput.value.trim();
    const girlName = girlNameInput.value.trim();
    
    findButton.disabled = !(boyName && girlName);
}

// Love Score Calculation Algorithm
function calculateLoveScore(name1, name2) {
    // Create combined string: "name1, Love, name2"
    const combinedString = `${name1}, Love, ${name2}`.toLowerCase();
    console.log(`\n=== ${name1}'s Love Score Calculation ===`);
    console.log(`Combined string: "${combinedString}"`);
    
    // Count letter frequencies
    const letterCounts = {};
    for (let char of combinedString) {
        if (char.match(/[a-z]/)) {
            letterCounts[char] = (letterCounts[char] || 0) + 1;
        }
    }
    
    console.log("Letter counts:", letterCounts);
    
    // Create number sequence from letter counts (in order of appearance)
    let sequence = Object.values(letterCounts);
    console.log("Initial sequence:", sequence);
    
    // Reduce sequence until we have exactly 2 numbers, and handle numbers > 9
    let step = 1;
    while (sequence.length > 2 || sequence.some(num => num > 9)) {
        // If any number > 9, break it into digits
        if (sequence.some(num => num > 9)) {
            const newSequence = [];
            for (let num of sequence) {
                if (num > 9) {
                    // Break number into digits
                    const digits = num.toString().split('').map(d => parseInt(d));
                    newSequence.push(...digits);
                    console.log(`  Breaking ${num} into digits: [${digits.join(', ')}]`);
                } else {
                    newSequence.push(num);
                }
            }
            sequence = newSequence;
            console.log(`After breaking digits: [${sequence.join(', ')}]`);
        }
        
        // If we have more than 2 numbers, continue reducing
        if (sequence.length > 2) {
            const newSequence = [];
            const length = sequence.length;
            
            console.log(`\nStep ${step}:`);
            console.log(`Current sequence: [${sequence.join(', ')}]`);
            
            // Add first and last, second and second-to-last, etc.
            for (let i = 0; i < Math.floor(length / 2); i++) {
                const sum = sequence[i] + sequence[length - 1 - i];
                newSequence.push(sum);
                console.log(`  ${sequence[i]} + ${sequence[length - 1 - i]} = ${sum}`);
            }
            
            // If there's a middle number (odd length), add it unchanged
            if (length % 2 === 1) {
                const middleIndex = Math.floor(length / 2);
                const middleValue = sequence[middleIndex];
                newSequence.push(middleValue);
                console.log(`  Middle element: ${middleValue} (unchanged)`);
            }
            
            sequence = newSequence;
            console.log(`New sequence: [${sequence.join(', ')}]`);
            step++;
        }
    }
    
    // Concatenate the final 2 numbers and cap at 100
    const score = parseInt(sequence.join(''));
    const finalScore = Math.min(score, 100);
    console.log(`\nFinal result: ${sequence.join('')} = ${finalScore}%`);
    return finalScore;
}

// Main calculation function
function calculateLoveScores() {
    const boyName = boyNameInput.value.trim();
    const girlName = girlNameInput.value.trim();
    
    if (!boyName || !girlName) {
        alert('Please enter both names!');
        return;
    }
    
    // Calculate love scores
    const boyScore = calculateLoveScore(boyName, girlName);
    const girlScore = calculateLoveScore(girlName, boyName);
    
    // Display results
    displayResults(boyScore, girlScore);
}

// Display results with animations
function displayResults(boyScore, girlScore) {
    // Show results section
    resultsSection.style.display = 'block';
    
    // Animate score values
    animateScore(boyScoreElement, boyScore);
    animateScore(girlScoreElement, girlScore);
    
    // Animate progress bars
    setTimeout(() => {
        animateProgressBar(boyScoreFill, boyScore);
        animateProgressBar(girlScoreFill, girlScore);
    }, 500);
    
    // Update love message
    updateLoveMessage(boyScore, girlScore);
}

// Animate score value
function animateScore(element, targetScore) {
    let currentScore = 0;
    const increment = targetScore / 50; // 50 steps for smooth animation
    
    const timer = setInterval(() => {
        currentScore += increment;
        if (currentScore >= targetScore) {
            currentScore = targetScore;
            clearInterval(timer);
        }
        element.textContent = Math.floor(currentScore) + '%';
    }, 20);
}

// Animate progress bar
function animateProgressBar(element, score) {
    const percentage = Math.min(score, 100); // Cap at 100%
    element.style.width = percentage + '%';
}

// Update love message based on scores
function updateLoveMessage(boyScore, girlScore) {
    const averageScore = (boyScore + girlScore) / 2;
    let message = '';
    
    if (averageScore >= 80) {
        message = '💕 True Love! You are meant for each other! 💕';
    } else if (averageScore >= 60) {
        message = '💖 Great compatibility! Love is blossoming! 💖';
    } else if (averageScore >= 40) {
        message = '💝 Good potential! Keep the love growing! 💝';
    } else if (averageScore >= 20) {
        message = '💗 There\'s a spark! Give it a chance! 💗';
    } else {
        message = '💙 Friendship first! Love takes time! 💙';
    }
    
    loveMessageElement.textContent = message;
}

// Add some fun effects
function addFunEffects() {
    // Add confetti effect for high scores
    const boyScore = parseInt(boyScoreElement.textContent);
    const girlScore = parseInt(girlScoreElement.textContent);
    
    if (boyScore >= 80 || girlScore >= 80) {
        createConfetti();
    }
}

// Simple confetti effect
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';
            confetti.style.animation = 'fall 3s linear forwards';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                document.body.removeChild(confetti);
            }, 3000);
        }, i * 100);
    }
}

// Add CSS for confetti animation
const confettiCSS = `
@keyframes fall {
    to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}
`;

const style = document.createElement('style');
style.textContent = confettiCSS;
document.head.appendChild(style);

// Enhanced love message update with confetti
const originalUpdateLoveMessage = updateLoveMessage;
updateLoveMessage = function(boyScore, girlScore) {
    originalUpdateLoveMessage(boyScore, girlScore);
    
    // Add confetti for high scores
    setTimeout(() => {
        if (boyScore >= 80 || girlScore >= 80) {
            createConfetti();
        }
    }, 1000);
};

// Add keyboard support
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !findButton.disabled) {
        calculateLoveScores();
    }
});

// Add input focus effects
boyNameInput.addEventListener('focus', () => {
    boyNameInput.style.transform = 'scale(1.02)';
});

boyNameInput.addEventListener('blur', () => {
    boyNameInput.style.transform = 'scale(1)';
});

girlNameInput.addEventListener('focus', () => {
    girlNameInput.style.transform = 'scale(1.02)';
});

girlNameInput.addEventListener('blur', () => {
    girlNameInput.style.transform = 'scale(1)';
}); 