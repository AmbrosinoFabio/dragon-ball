# 🐉 Dragon Ball

Sito fan-made dedicato a Dragon Ball, realizzato in HTML, CSS e JavaScript puro (nessun framework, nessuna dipendenza da installare).

**Demo live:** https://ambrosinofabio.github.io/dragon-ball/dragonball.html

## Funzionalità

- **Biblioteca delle Saghe** — le saghe della serie (Dragon Ball, Z, Super, GT, Daima) raccontate in libricini sfogliabili, ciascuna con una pagina di dettaglio dedicata (`saga.html`)
- **Personaggi** — galleria dei personaggi in stile "databook/scouter", con badge illustrati e statistiche per ciascuno
- **Curiosità** — libro sfogliabile con curiosità verificate sulla serie e sulla sua produzione
- **Scouter** — tool interattivo per selezionare i personaggi, vederne le forme e confrontarne i power level

## Struttura del progetto

```
dragonball.html   # Pagina principale (home, saghe, personaggi, curiosità, scouter)
saga.html         # Pagina di dettaglio di una singola saga
data.js           # Dati condivisi tra le pagine (personaggi, saghe, curiosità)
script.js         # Logica della pagina principale
saga.js           # Logica della pagina di dettaglio saga
style.css         # Fogli di stile
```

## Come avviarlo in locale

Il progetto non richiede build né installazione di pacchetti: basta un browser.

**Opzione 1 — apertura diretta**
Apri `dragonball.html` con un doppio click, o trascinalo nel browser.

**Opzione 2 — server locale (consigliata)**
```bash
git clone https://github.com/AmbrosinoFabio/dragon-ball.git
cd dragon-ball
python3 -m http.server 8000
```
Poi apri `http://localhost:8000/dragonball.html`.

## Dipendenze

Nessuna dipendenza da installare (no npm, no build step). L'unica risorsa esterna caricata è:

- [Google Fonts](https://fonts.google.com/) — famiglie *Saira Stencil One*, *Orbitron*, *Rubik* (via CDN, richiede connessione a Internet)

## Tecnologie

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## Licenza

Distribuito sotto licenza [MIT](LICENSE).
