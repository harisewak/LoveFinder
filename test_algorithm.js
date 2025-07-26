// Test the love score algorithm
function calculateLoveScore(name1, name2) {
    // Create combined string: "name1, Love, name2"
    const combinedString = `${name1}, Love, ${name2}`.toLowerCase();
    console.log("Combined string:", combinedString);
    
    // Count letter frequencies
    const letterCounts = {};
    for (let char of combinedString) {
        if (char.match(/[a-z]/)) {
            letterCounts[char] = (letterCounts[char] || 0) + 1;
        }
    }
    
    console.log("Letter counts:", letterCounts);
    
    // Create number sequence from letter counts
    let sequence = Object.values(letterCounts);
    console.log("Initial sequence:", sequence);
    
    // Reduce sequence until we have exactly 2 numbers
    let step = 1;
    while (sequence.length > 2) {
        const newSequence = [];
        const length = sequence.length;
        
        for (let i = 0; i < Math.floor(length / 2); i++) {
            newSequence.push(sequence[i] + sequence[length - 1 - i]);
        }
        
        // If there's a middle number (odd length), add it
        if (length % 2 === 1) {
            newSequence.push(sequence[Math.floor(length / 2)]);
        }
        
        sequence = newSequence;
        console.log(`Step ${step}:`, sequence);
        step++;
    }
    
    // Concatenate the final 2 numbers and cap at 100
    const score = parseInt(sequence.join(''));
    const finalScore = Math.min(score, 100);
    console.log("Final score:", finalScore);
    return finalScore;
}

// Test with Kamlesh and Pooja
console.log("=== Testing Boy's Score (Kamlesh, Love, Pooja) ===");
const boyScore = calculateLoveScore("Kamlesh", "Pooja");

console.log("\n=== Testing Girl's Score (Pooja, Love, Kamlesh) ===");
const girlScore = calculateLoveScore("Pooja", "Kamlesh");

console.log("\n=== Results ===");
console.log("Boy's Love Score:", boyScore + "%");
console.log("Girl's Love Score:", girlScore + "%");

// Let me manually verify the steps for Boy's score
console.log("\n=== Manual Verification ===");
console.log("String: kamlesh, love, pooja");
console.log("Letters: k,a,m,l,e,s,h,o,v,p,j");
console.log("Counts: 1,2,1,2,2,1,1,3,1,1,1");
console.log("Step 1: 1+1=2, 2+1=3, 1+1=2, 2+3=5, 2+1=3, 1+1=2 → [2,3,2,5,3,2]");
console.log("Step 2: 2+2=4, 3+2=5, 2+3=5 → [4,5,5]");
console.log("Step 3: 4+5=9, 5=5 → [9,5]");
console.log("Result: 95%"); 