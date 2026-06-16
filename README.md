# Plinko Arcade

Plinko Arcade is a browser-based physics game built with **JavaScript**, **p5.js**, and **Matter.js**. Players drop balls through a field of pegs and attempt to land them in high-value scoring zones. The combination of randomness and physics-based interactions makes every playthrough unique.

---

## Preview

### Gameplay

![Gameplay Preview](assets/Preview%201.png)

### Game Over Screen

![Game Over Screen](assets/Preview%202.png)

---

## Features

* Physics simulation powered by Matter.js
* Interactive peg collision system
* Real-time score tracking
* Multiple scoring zones with varying point values
* Limited ball count for strategic gameplay
* Game over screen with restart functionality
* Clean and responsive user interface

---

## Technologies Used

* JavaScript
* p5.js
* Matter.js
* HTML5
* CSS3

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/dslord/Plinko-Arcade.git
cd Plinko-Arcade
```

### Run the Project

Open `index.html` in your preferred web browser.

---

## Gameplay

1. Launch the game.
2. Click to drop a ball into the board.
3. Watch the ball interact with pegs and obstacles.
4. Earn points based on the slot where the ball lands.
5. Use all available balls to achieve the highest score possible.

---

## Project Structure

```text
├── Game/
│   ├── Divisions.js
│   ├── Ground.js
│   ├── Particle.js
│   ├── Plinko.js
│   └── sketch.js
│
├── src/
│   ├── matter.js
│   ├── p5.js
│   ├── p5.dom.min.js
│   ├── p5.play.js
│   └── p5.sound.min.js
│
├── assets/
│   ├── Preview 1.png
│   └── Preview 2.png
│
├── index.html
├── style.css
└── README.md
```

---

## Scoring System

| Slot Position | Points   |
| ------------- | -------- |
| Outer Slots   | 100      |
| Middle Slots  | 200–700  |
| Center Slots  | 800–1000 |

Higher-value slots are located closer to the center of the board, making them more difficult to reach consistently.

---

## Contributing

Contributions are welcome. Feel free to fork the repository, create a feature branch, and submit a pull request.

---

## License

This project is licensed under the MIT License.

---

Developed by **dslord**.
