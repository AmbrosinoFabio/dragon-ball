# 🐉 Dragon Ball

Fan-made Dragon Ball website, built with plain HTML, CSS and JavaScript (no frameworks, nothing to install).

**Live demo:** https://ambrosinofabio.github.io/dragon-ball/dragonball.html

## Features

- **Saga Library** — the sagas of the series (Dragon Ball, Z, Super, GT, Daima) told in flippable booklets, each with its own detail page (`saga.html`)
- **Characters** — a "databook/scouter" style character gallery, with illustrated badges and stats for each one
- **Trivia** — a flippable book with verified facts about the series and its production
- **Scouter** — an interactive tool to select characters, view their forms and compare their power levels

## Project structure

```
dragonball.html   # Main page (home, sagas, characters, trivia, scouter)
saga.html         # Detail page for a single saga
data.js           # Data shared across pages (characters, sagas, trivia)
script.js         # Main page logic
saga.js           # Saga detail page logic
style.css         # Stylesheet
```

## Running locally

The project needs no build step or package installation: all you need is a browser.

**Option 1 — open directly**
Open `dragonball.html` with a double click, or drag it into your browser.

**Option 2 — local server (recommended)**
```bash
git clone https://github.com/AmbrosinoFabio/dragon-ball.git
cd dragon-ball
python3 -m http.server 8000
```
Then open `http://localhost:8000/dragonball.html`.

## Dependencies

Nothing to install (no npm, no build step). The only external resource loaded is:

- [Google Fonts](https://fonts.google.com/) — *Saira Stencil One*, *Orbitron* and *Rubik* families (via CDN, requires an Internet connection)

## Technologies

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## License

Released under the [MIT](LICENSE) license.
