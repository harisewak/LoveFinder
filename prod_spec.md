# Love Finder - Product Specification

## Project Overview
Love Finder is a fun single-page web application that calculates "Love Scores" between two people based on their names using a unique algorithm.

## Features
- **Single Page Application**: Clean, modern web interface
- **Two Input Fields**: Boy's name and Girl's name
- **Calculate Button**: "Find" button to trigger love score calculation
- **Results Display**: Shows Love Scores for both Boy and Girl

## User Interface Requirements
1. **Input Section**:
   - Label: "Boy" with text input field
   - Label: "Girl" with text input field
   - Button: "Find" (disabled until both names are entered)

2. **Results Section**:
   - Display Boy's Love Score
   - Display Girl's Love Score
   - Show the calculation process (optional)

## Love Score Algorithm

### Step 1: Create Combined Strings
- **Boy's calculation**: "BoyName, Love, GirlName"
- **Girl's calculation**: "GirlName, Love, BoyName"

### Step 2: Count Letter Frequencies
Count how many times each letter appears in the combined string (case-insensitive).

### Step 3: Create Number Sequence
Convert the letter counts into a sequence of numbers.

### Step 4: Reduce Sequence
Repeatedly add the first and last numbers, moving inward:
- Take first number + last number
- Take second number + second-to-last number
- Continue until you have exactly 2 numbers left

### Step 5: Calculate Love Score
Concatenate the final 2 numbers to get the Love Score percentage.

## Example Calculation

### Input: Boy = "Kamlesh", Girl = "Pooja"

#### Boy's Love Score ("Kamlesh, Love, Pooja"):

**Step 1 - Count letters:**
- K: 1, A: 2, M: 1, L: 2, E: 2, S: 1, H: 1, O: 3, V: 1, P: 1, J: 1
- Sequence: 1,2,1,2,2,1,1,3,1,1,1

**Step 2 - Add first+last, moving inward:**
- 1+1=2, 2+1=3, 1+1=2, 2+3=5, 2+1=3, 1+1=2
- Sequence: 2,3,2,5,3,2

**Step 3 - Continue:**
- 2+2=4, 3+2=5, 2+3=5
- Sequence: 4,5,5

**Step 4 - Continue:**
- 4+5=9, 5=5
- Sequence: 9,5

**Result: Boy's Love Score = 95%**

#### Girl's Love Score ("Pooja, Love, Kamlesh"):

**Step 1 - Count letters:**
- P: 1, O: 3, J: 1, A: 2, L: 2, E: 2, S: 1, H: 1, K: 1, M: 1
- Sequence: 1,3,1,2,2,2,1,1,1,1

**Step 2 - Add first+last, moving inward:**
- 1+1=2, 3+1=4, 1+1=2, 2+2=4, 2+1=3
- Sequence: 2,4,2,4,3

**Step 3 - Continue:**
- 2+3=5, 4+4=8, 2=2
- Sequence: 5,8,2

**Step 4 - Continue:**
- 5+2=7, 8=8
- Sequence: 7,8

**Result: Girl's Love Score = 78%**

## Technical Requirements
- **Frontend**: HTML, CSS, JavaScript
- **Responsive Design**: Works on desktop and mobile
- **Input Validation**: Ensure both names are provided before enabling "Find" button
- **Case Insensitive**: Algorithm should work regardless of letter case
- **Error Handling**: Graceful handling of edge cases

## Success Criteria
- [ ] Clean, intuitive user interface
- [ ] Accurate love score calculations
- [ ] Responsive design
- [ ] Input validation
- [ ] Fast performance
- [ ] Fun user experience 