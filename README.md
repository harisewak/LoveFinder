# 💕 Love Finder

A fun and interactive web application that calculates love compatibility scores between two people based on their names using a unique algorithm.

## 🌟 Features

- **Beautiful UI**: Modern, responsive design with love-themed colors and animations
- **Real-time Calculation**: Instant love score calculation with detailed step-by-step logging
- **Interactive Experience**: Smooth animations, progress bars, and confetti effects for high scores
- **Mobile Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Detailed Logging**: View the complete calculation process in the browser console

## 🎯 How It Works

The Love Finder uses a unique algorithm to calculate love compatibility:

1. **Combine Names**: Creates strings like "BoyName, Love, GirlName" and "GirlName, Love, BoyName"
2. **Count Letters**: Counts the frequency of each letter in the combined string
3. **Reduce Sequence**: Repeatedly adds first and last numbers, moving inward
4. **Handle Large Numbers**: Breaks numbers > 9 into individual digits and continues reducing
5. **Final Score**: Concatenates the final 2 numbers to get the love score percentage

## 🚀 Live Demo

Visit the live application: [Love Finder on GitHub Pages](https://harisewak.github.io/LoveFinder/)

## 🛠️ Technology Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript**: Interactive functionality and love score algorithm
- **Google Fonts**: Beautiful typography with Poppins font family

## 📱 Usage

1. Enter the boy's name in the first input field
2. Enter the girl's name in the second input field
3. Click the "Find Love Score" button
4. View the calculated love scores for both people
5. Check the browser console (F12) to see detailed calculation steps

## 🎨 Features

- **Input Validation**: Button only enables when both names are provided
- **Animated Results**: Smooth score counting and progress bar animations
- **Dynamic Messages**: Different love messages based on score ranges
- **Confetti Effect**: Special celebration for high scores (80%+)
- **Keyboard Support**: Press Enter to calculate scores
- **Focus Effects**: Visual feedback on input fields

## 📊 Score Ranges

- **80%+**: True Love! You are meant for each other! 💕
- **60-79%**: Great compatibility! Love is blossoming! 💖
- **40-59%**: Good potential! Keep the love growing! 💝
- **20-39%**: There's a spark! Give it a chance! 💗
- **0-19%**: Friendship first! Love takes time! 💙

## 🔧 Development

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/harisewak/LoveFinder.git
   cd LoveFinder
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   python3 -m http.server 8000
   ```

3. Open `http://localhost:8000` in your browser

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Improving the algorithm
- Enhancing the UI/UX

## 💝 Made with Love

This project was created with ❤️ for love seekers everywhere. Enjoy finding your love compatibility!

---

**Note**: This is a fun application for entertainment purposes only. Love scores are calculated using a fictional algorithm and should not be taken as scientific relationship advice. 