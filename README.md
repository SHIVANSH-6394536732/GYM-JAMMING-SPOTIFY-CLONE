# 🎵 GYM-JAMMING 💪

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

A minimalist web-based music player designed for gym enthusiasts who want uninterrupted motivation during their workouts.

![GYM-JAMMING Banner](https://via.placeholder.com/800x200/FF6B6B/FFFFFF?text=GYM-JAMMING)

## 🌟 Features

- 🎧 **Continuous Loop Playback** - Your favorite gym track plays on repeat automatically
- ⏯️ **Full Playback Controls** - Play, pause, next, and previous buttons
- 📊 **Interactive Progress Bar** - Visual seekbar to track and control playback
- 🎨 **Animated Feedback** - GIF indicator shows when music is playing
- 🎵 **Track List Display** - Shows 7 gym tracks in a clean, organized interface
- 📱 **Responsive Design** - Works seamlessly across different screen sizes
- 🚀 **Zero Dependencies** - Built with vanilla JavaScript, no frameworks needed

## 📸 Screenshots

<img width="1895" height="906" alt="Image" src="https://github.com/user-attachments/assets/6d84c086-943a-479d-83e8-1cbb127be6ba" />   

## 🛠️ Technologies Used

- **HTML5** - Structure and layout
- **CSS3** - Styling and animations
- **JavaScript (ES6)** - Audio control and interactivity
- **Font Awesome** - Icon library

## 📂 Project Structure

```
GYM-JAMMING/
├── index.html              # Main HTML file
├── style.css               # Stylesheet
├── script.js               # JavaScript functionality
├── songs/
│   └── 1.mp3              # Audio file (add your own)
├── cover1.jpg.png         # Album cover image
├── playing.gif.gif        # Playing animation
├── logo.png               # Application logo
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML/CSS/JavaScript (for customization)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/gym-jamming.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd gym-jamming
   ```

3. **Add your music files**
   - Place your audio file in the `songs/` folder as `1.mp3`
   - Add your cover image as `cover1.jpg.png`
   - Add your animated GIF as `playing.gif.gif`
   - Add your logo as `logo.png`

4. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server like Live Server in VS Code
   ```

## 🎮 Usage

1. Open `index.html` in your web browser
2. Click the **play button** in the bottom control panel
3. Use the **progress bar** to skip to different parts of the song
4. Click **next/previous** buttons to restart the track
5. Click any track in the list to play/restart the song
6. Stay motivated and crush your workout! 💪

## 🎨 Customization

### Adding Your Own Music

Replace the audio file in the `songs/` folder:
```javascript
// In script.js
let songs = [
    {songName: "YOUR SONG NAME", filePath: "songs/1.mp3", coverPath: "cover1.jpg.png"}
];
```

### Changing Track Names

Edit the HTML in `index.html`:
```html
<span class="songName">YOUR CUSTOM TRACK NAME</span>
```

### Styling

Modify `style.css` to change colors, fonts, and layout to match your preferences.

## 📋 Features Breakdown

### Audio Controls
- **Play/Pause**: Main control button toggles playback
- **Next/Previous**: Restart the current track
- **Seek Bar**: Click or drag to jump to any position in the song
- **Auto-loop**: Song automatically restarts when it ends

### Visual Feedback
- Animated GIF appears when music is playing
- Play/pause icons update dynamically
- Progress bar updates in real-time

## 🔧 Browser Compatibility

| Browser | Supported |
|---------|-----------|
| Chrome  | ✅ Yes    |
| Firefox | ✅ Yes    |
| Safari  | ✅ Yes    |
| Edge    | ✅ Yes    |
| Opera   | ✅ Yes    |

## 🐛 Known Issues

- Currently supports only one song file (future update will add multi-song support)
- No volume control (coming soon)

## 🚀 Future Enhancements

- [ ] Multiple song playlist support
- [ ] Volume control slider
- [ ] Shuffle and repeat modes
- [ ] Dark/Light theme toggle
- [ ] Keyboard shortcuts
- [ ] Visualizer integration
- [ ] Local storage for preferences
- [ ] Mobile app version

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

Please make sure to update tests as appropriate and follow the existing code style.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: SHIVANSH-639453672
- LinkedIn: https://www.linkedin.com/in/shivansh-tripathi-b65282325/

## 🙏 Acknowledgments

- Font Awesome for the icon library
- Inspiration from gym workout playlists
- All fitness enthusiasts who need motivation music

## 📧 Contact

Have questions or suggestions? Feel free to reach out!

- Email: shivansh.sts001@gmail.com

---

**Made with ❤️ for gym enthusiasts everywhere**

**Stay focused. Stay motivated. Keep jamming! 🏋️‍♂️🔥**

---

⭐ If you found this project helpful, please consider giving it a star on GitHub!
