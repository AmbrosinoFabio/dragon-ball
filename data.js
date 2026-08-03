/*=========================================================
    DRAGON BALL
    data.js — dati condivisi tra dragonball.html e saga.html
=========================================================*/

/*==========================
DATI PERSONAGGI (Scouter)
==========================*/

const charactersData={

"Goku":{
    icon:"🥋",
    forms:[
        {name:"Base", power:9001},
        {name:"Super Saiyan", power:150000000},
        {name:"Super Saiyan 2", power:300000000},
        {name:"Super Saiyan 3", power:6000000000},
        {name:"Super Saiyan Blue", power:10000000000},
        {name:"Super Saiyan 4", power:50000000000},
        {name:"Ultra Istinto", power:"illimitato"}
    ]
},
"Vegeta":{
    icon:"👑",
    forms:[
        {name:"Base", power:18000},
        {name:"Super Saiyan", power:120000000},
        {name:"Super Saiyan 2", power:250000000},
        {name:"Super Saiyan Blue", power:9500000000},
        {name:"Super Saiyan 4", power:45000000000},
        {name:"Ultra Ego", power:"illimitato"}
    ]
},
"Piccolo":{
    icon:"🟢",
    forms:[
        {name:"Base", power:3500},
        {name:"Fusione con Nail", power:3500000},
        {name:"Potenziale Sbloccato", power:100000000}
    ]
},
"Gohan":{
    icon:"📚",
    forms:[
        {name:"Bambino", power:1307},
        {name:"Super Saiyan 2", power:300000000},
        {name:"Potenziale Nascosto", power:500000000},
        {name:"Gohan Bestia", power:80000000000}
    ]
},
"Freezer":{
    icon:"❄️",
    forms:[
        {name:"Prima Forma", power:530000},
        {name:"Forma Finale", power:12000000},
        {name:"100%", power:120000000},
        {name:"Golden Freezer", power:100000000000}
    ]
},
"Cell":{
    icon:"🧬",
    forms:[
        {name:"Imperfetto", power:1000000},
        {name:"Semi-Perfetto", power:90000000},
        {name:"Perfetto", power:900000000},
        {name:"Super Perfetto", power:2000000000}
    ]
},
"Majin Buu":{
    icon:"🍬",
    forms:[
        {name:"Buu Grasso", power:1000000000},
        {name:"Kid Buu", power:1500000000}
    ]
},
"Trunks":{
    icon:"⚔️",
    forms:[
        {name:"Base", power:1500000},
        {name:"Super Saiyan", power:15000000},
        {name:"Super Saiyan Rage", power:400000000000}
    ]
},
"Goten":{
    icon:"👦",
    forms:[
        {name:"Bambino", power:1500},
        {name:"Super Saiyan", power:10000000}
    ]
},
"Bra":{
    icon:"👧",
    forms:[
        {name:"Base", power:50}
    ]
},
"Gogeta":{
    icon:"🔥",
    forms:[
        {name:"Super Saiyan", power:300000000000},
        {name:"Super Saiyan Blue", power:500000000000},
        {name:"Super Saiyan 4", power:900000000000}
    ]
},
"Vegito":{
    icon:"💫",
    forms:[
        {name:"Super Saiyan", power:250000000000},
        {name:"Super Saiyan Blue", power:450000000000}
    ]
},
"Gotenks":{
    icon:"🌀",
    forms:[
        {name:"Super Saiyan", power:50000000},
        {name:"Super Saiyan 3", power:8000000000}
    ]
}

};


/*==========================
DATI PERSONAGGI (biografie galleria)
==========================*/

const characterBios={
    "Goku":{
        role:"Protagonista · Saiyan",
        debut:"Saga di Pilaf (Dragon Ball)",
        bio:"Guerriero Saiyan cresciuto sulla Terra, protagonista assoluto della serie. Dalla ricerca delle Sfere del Drago fino alle sfide contro gli dèi, il suo unico vero obiettivo è superare sé stesso combattimento dopo combattimento."
    },
    "Vegeta":{
        role:"Rivale · Principe dei Saiyan",
        debut:"Saga Saiyan (Dragon Ball Z)",
        bio:"Principe dei Saiyan, orgoglioso e inizialmente spietato, diventa nel tempo uno dei pilastri della difesa della Terra pur senza mai smettere di rincorrere Goku. Una delle evoluzioni di personaggio più amate della serie."
    },
    "Piccolo":{
        role:"Alleato · Namecciano",
        debut:"Il Demone Piccolo (Dragon Ball)",
        bio:"Ultimo discendente del Demone Piccolo, sceglie di allearsi con i suoi ex nemici per proteggere la Terra e diventa mentore e figura paterna per Gohan."
    },
    "Gohan":{
        role:"Il potenziale nascosto",
        debut:"Saga Saiyan (Dragon Ball Z)",
        bio:"Figlio di Goku, dotato di un potenziale capace di superare quello del padre. Diviso tra la vita da studente e il ruolo di guerriero, sblocca la sua vera forza solo nei momenti di massima necessità."
    },
    "Freezer":{
        role:"Antagonista · Imperatore galattico",
        debut:"Namek in Fiamme (Dragon Ball Z)",
        bio:"Imperatore galattico dal potere immenso e dalla crudeltà glaciale: distrusse il pianeta natale dei Saiyan per timore della leggenda del Super Saiyan. Il suo scontro con Goku su Namek resta tra i più iconici della serie."
    },
    "Cell":{
        role:"Antagonista · Essere bioingegnerizzato",
        debut:"Gli Androidi e la Perfezione di Cell (Dragon Ball Z)",
        bio:"Creato dal Dr. Gero assorbendo le cellule dei più grandi guerrieri della serie, capace di assorbire altri androidi per raggiungere la propria forma perfetta e organizzare il proprio torneo."
    },
    "Majin Buu":{
        role:"Antagonista · Entità magica",
        debut:"La Furia di Majin Bu (Dragon Ball Z)",
        bio:"Entità di pura energia sigillata millenni fa, capace di rigenerarsi da qualunque danno e di mutare forma. Dietro l'aspetto quasi infantile si nasconde uno dei nemici più letali mai affrontati dai guerrieri Z."
    },
    "Trunks":{
        role:"Guerriero del futuro",
        debut:"Gli Androidi e la Perfezione di Cell (Dragon Ball Z)",
        bio:"Guerriero proveniente da un futuro devastato dagli androidi, torna nel passato per avvertire i guerrieri Z e cambiare il corso della storia."
    },
    "Goten":{
        role:"Nuova generazione",
        debut:"Il Guerriero Saiyaman (Dragon Ball Z)",
        bio:"Fratello minore di Gohan, mai conosciuto da un Goku spesso lontano da casa. Impara la Fusione insieme a Trunks, dando vita al potentissimo Gotenks."
    },
    "Bra":{
        role:"Nuova generazione",
        debut:"Dragon Ball GT",
        bio:"Figlia di Vegeta e Bulma, cresce lontana dai riflettori delle grandi battaglie ma porta comunque nel sangue l'eredità Saiyan della sua famiglia."
    },
    "Gogeta":{
        role:"Fusione · Danza della Fusione",
        debut:"Film / Dragon Ball Super",
        bio:"Fusione tramite Danza della Fusione tra Goku e Vegeta, considerata una delle forme più potenti mai apparse nella serie: devastante ma instabile, dura solo pochi minuti."
    },
    "Vegito":{
        role:"Fusione · Orecchini Potara",
        debut:"La Furia di Majin Bu (Dragon Ball Z)",
        bio:"Fusione tramite gli Orecchini Potara tra Goku e Vegeta, dotato di un potere quasi incontrollabile e di un ego tipicamente vegetiano."
    },
    "Gotenks":{
        role:"Fusione · Danza della Fusione",
        debut:"La Furia di Majin Bu (Dragon Ball Z)",
        bio:"Fusione tramite Danza della Fusione tra Goten e Trunks: un guerriero adolescente tanto potente quanto capriccioso e facilmente distratto."
    }
};


/*==========================
CURIOSITA' (TRIVIA VERIFICATA)
==========================*/

const triviaData=[
    {
        icon:"🐦",
        titolo:"Perché si chiama \"Bird Studio\"",
        testo:"Lo studio di produzione di Akira Toriyama si chiama Bird Studio: un gioco di parole sul suo cognome, dato che \"tori\" in giapponese significa uccello e \"yama\" montagna. Toriyama era da sempre un grande appassionato di uccelli."
    },
    {
        icon:"✏️",
        titolo:"Doveva essere solo un manga comico",
        testo:"Toriyama non voleva disegnare un battle manga: la sua idea originale era realizzare semplici storie umoristiche. Fu il suo editor a convincerlo a introdurre combattimenti e un arco narrativo più strutturato, dando forma a ciò che conosciamo oggi."
    },
    {
        icon:"🐒",
        titolo:"Ispirato al Viaggio in Occidente",
        testo:"Il nome stesso di Son Goku, così come la Nuvola a Nimbus (Kinto Un), traggono ispirazione dal classico romanzo cinese \"Viaggio in Occidente\" e dal suo protagonista, il Re Scimmia Sun Wukong."
    },
    {
        icon:"💚",
        titolo:"Il personaggio preferito dall'autore",
        testo:"In diverse interviste, lo stesso Akira Toriyama ha dichiarato che il suo personaggio preferito da disegnare era Piccolo, apprezzato per il design pulito ed essenziale."
    },
    {
        icon:"📡",
        titolo:"\"È oltre 9000!!\" non esiste... quasi",
        testo:"La celebre battuta che ispira lo Scouter di questo sito nasce da un adattamento: nella versione giapponese originale Vegeta legge un valore di \"8000\", non \"9000\". Il numero cambiò nel doppiaggio inglese e diventò, per un curioso errore, uno dei meme più famosi di internet."
    },
    {
        icon:"📺",
        titolo:"L'autore che non guardava l'anime",
        testo:"Nonostante abbia supervisionato l'opera per decenni, Toriyama ha più volte ammesso di non seguire regolarmente l'anime, concentrandosi principalmente sulla scrittura e il disegno del manga originale."
    },
    {
        icon:"📖",
        titolo:"Undici anni su Weekly Shōnen Jump",
        testo:"Dragon Ball debuttò come manga sulla rivista Weekly Shōnen Jump nel 1984 e vi rimase fino al 1995, per un totale di 519 capitoli raccolti poi in 42 volumi tankōbon. Per undici anni Toriyama dovette consegnare capitoli settimanali senza sosta, un ritmo di lavoro massacrante comune a quasi tutti i mangaka di successo pubblicati su Jump."
    },
    {
        icon:"🤖",
        titolo:"Arale di Dr. Slump fa un cameo in Dragon Ball",
        testo:"Prima di Dragon Ball, Toriyama aveva già un manga di successo, Dr. Slump, con protagonista la ragazza robot Arale Norimaki. Il legame tra le due opere non è solo stilistico: Arale compare in un breve cameo comico proprio durante la saga dell'Esercito del Nastro Rosso, un piccolo omaggio dell'autore al suo lavoro precedente."
    },
    {
        icon:"🥕",
        titolo:"I Saiyan si chiamano tutti come ortaggi",
        testo:"I nomi dei guerrieri Saiyan nascondono un gioco di parole vegetale: Vegeta viene da \"vegetable\", Kakarot (il vero nome di Goku) da \"carrot\" (carota), Raditz da \"radish\" (ravanello), Nappa dal cavolo napa e Broly da \"broccoli\". È lo stesso tipo di logica scherzosa che Toriyama userà anche per altre razze aliene della serie."
    },
    {
        icon:"❄️",
        titolo:"La famiglia di Freezer è fatta di elettrodomestici del freddo",
        testo:"Anche i cattivi più temuti della serie nascondono un gioco di parole: Freezer (\"freezer\", il congelatore), suo fratello Cooler (\"cooler\", il raffreddatore) e il padre Re Cold (\"cold\", freddo) formano una dinastia che prende il nome dalla catena del freddo. Un modo tipico di Toriyama per rendere memorabili anche i nemici più spietati con un tocco di umorismo nascosto."
    },
    {
        icon:"🐌",
        titolo:"Namek significa \"lumaca\"",
        testo:"Il pianeta Namek e il popolo Namecciano prendono il nome da \"namekuji\", la parola giapponese per lumaca, coerente con il loro aspetto vagamente simile a delle chiocciole. Piccolo, il primo Namecciano incontrato da Goku, porta invece il nome di uno strumento musicale, il flauto piccolo, proprio come diversi altri personaggi della serie richiamano termini musicali."
    },
    {
        icon:"🔢",
        titolo:"Gli Androidi sono numerati, e uno è il loro stesso creatore",
        testo:"Gli Androidi creati dal Dr. Gero per vendicare il Nastro Rosso sono identificati con un numero invece che con un nome: 16, 17, 18, 19... Colpo di scena della saga, lo stesso Dr. Gero si trasforma in un androide, diventando l'Androide 20, per garantirsi l'immortalità necessaria a portare a termine la sua vendetta contro Goku."
    },
    {
        icon:"🎬",
        titolo:"L'anime debuttò su Fuji TV nel 1986",
        testo:"La serie animata prodotta da Toei Animation andò in onda per la prima volta in Giappone il 26 febbraio 1986 su Fuji TV, a poco più di un anno dall'esordio del manga. Da lì sarebbe iniziata una produzione quasi ininterrotta che, tra Dragon Ball, Z, GT, Super e Daima, copre quasi quarant'anni di episodi."
    },
    {
        icon:"💛",
        titolo:"Perché il Super Saiyan è biondo? Un aneddoto sulla produzione",
        testo:"Secondo un aneddoto spesso raccontato dallo staff di produzione, i capelli biondi e dritti del Super Saiyan nacquero anche per motivi pratici: erano più semplici e veloci da disegnare e colorare rispetto ai capelli neri con tutte le loro sfumature, un vantaggio non da poco per un anime settimanale con tempi di produzione sempre strettissimi."
    },
    {
        icon:"👑",
        titolo:"Vegeta doveva essere un cattivo usa e getta",
        testo:"Quando fu introdotto nella saga Saiyan, Vegeta non era pensato per diventare un personaggio permanente: come molti villain dei manga shonen, avrebbe dovuto essere sconfitto e sparire dalla storia. Il suo successo tra i lettori fu però talmente grande che Toriyama decise di tenerlo in scena, trasformandolo in uno dei protagonisti più amati e complessi dell'intera serie."
    },
    {
        icon:"🌺",
        titolo:"Il Kamehameha prende il nome da un vero re hawaiano",
        testo:"La tecnica energetica più iconica di Goku condivide il nome con Kamehameha I, il sovrano che nell'Ottocento unificò per la prima volta le isole Hawaii sotto un unico regno. Toriyama scelse il nome soprattutto per il suono d'impatto della parola, ma il riferimento storico non è casuale ed è spesso citato tra le curiosità sulla serie."
    },
    {
        icon:"🎭",
        titolo:"Dragon Ball GT non fu scritto da Toriyama",
        testo:"A differenza delle altre serie, Dragon Ball GT (1996-1997) non nacque da una storia di Toriyama: l'autore fornì solo alcuni concept iniziali e i design dei personaggi, mentre sceneggiatura e trama furono sviluppate interamente dallo staff di Toei Animation. È uno dei motivi per cui GT viene spesso considerata una serie a parte rispetto alla continuity più \"autoriale\" del resto del franchise."
    },
    {
        icon:"🔄",
        titolo:"Con Super, Toriyama tornò a scrivere in prima persona",
        testo:"Dopo essersi tenuto a distanza durante Dragon Ball GT, Toriyama riprese un ruolo attivo con Dragon Ball Super (2015), scrivendo personalmente la storia originale dei film Battle of Gods e Resurrection 'F' da cui la serie prende le mosse, e supervisionando molto più da vicino la sceneggiatura degli episodi successivi."
    },
    {
        icon:"🧬",
        titolo:"Cell è un mosaico di tutti i nemici visti finora",
        testo:"Cell fu concepito come un \"bio-androide\" costruito dal Dr. Gero con il DNA dei più forti guerrieri incontrati da Goku fino a quel momento, Saiyan compresi, oltre a cellule Namecciane e tecnologia degli Androidi. È per questo che nelle sue forme (Imperfetto, Semiperfetto, Perfetto) mostra tecniche e persino tratti fisici che ricordano Piccolo, Vegeta, Freezer e gli stessi Androidi 17 e 18 che assorbe nella storia."
    },
    {
        icon:"🕯️",
        titolo:"Akira Toriyama è scomparso nel marzo 2024",
        testo:"Il 1° marzo 2024 Akira Toriyama è venuto a mancare all'età di 68 anni; la notizia è stata resa pubblica una settimana dopo, l'8 marzo, suscitando un'ondata di tributi in tutto il mondo da parte di fan e colleghi autori. Fino agli ultimi mesi di vita aveva continuato a lavorare personalmente su Dragon Ball Daima, il suo ultimo progetto legato alla serie."
    },
    {
        icon:"🖋️",
        titolo:"Daima è stato un progetto fortemente voluto da Toriyama",
        testo:"A differenza di GT, Dragon Ball Daima (2024-2025) nacque da un'idea originale dello stesso Toriyama, che ne scrisse la sceneggiatura e seguì da vicino la produzione fino alla scomparsa. È considerata la sua ultima opera compiuta legata al franchise, un ritorno al tono più avventuroso e scanzonato del Dragon Ball delle origini."
    },
    {
        icon:"🌍",
        titolo:"Uno dei manga più venduti di sempre",
        testo:"Con oltre 260 milioni di copie vendute nel mondo tra i 42 volumi originali, Dragon Ball è una delle serie manga più vendute della storia, pubblicata e adattata in decine di paesi su ogni continente. La sua influenza si vede ancora oggi in gran parte dei manga e degli anime d'azione successivi, da Naruto a My Hero Academia."
    },
    {
        icon:"🥋",
        titolo:"L'ispirazione dei film di arti marziali e di Jackie Chan",
        testo:"Oltre al Viaggio in Occidente, un'altra grande fonte d'ispirazione per Toriyama furono i film di kung fu e di arti marziali che amava guardare, in particolare quelli di Jackie Chan: il mix di combattimenti spettacolari e comicità fisica che caratterizza pellicole come Drunken Master si ritrova chiaramente nel tono dei primi archi narrativi di Dragon Ball."
    },
    {
        icon:"🔤",
        titolo:"Perché \"Z\"? Doveva essere la fine della storia",
        testo:"\"Z\", ultima lettera dell'alfabeto latino, fu scelta per il titolo Dragon Ball Z proprio per suggerire che si trattasse del capitolo conclusivo della saga, pensato in origine come l'ultimo grande atto della storia di Goku. L'enorme successo commerciale della serie convinse però editore e produzione a continuare ben oltre quei piani iniziali."
    },
    {
        icon:"⭐",
        titolo:"Le sfere del drago e le loro stelle",
        testo:"Le sette Sfere del Drago sono contraddistinte da un numero di stelle rosse che va da una a sette, un dettaglio visivo semplice ma efficace pensato per farle riconoscere a colpo d'occhio sia ai personaggi che ai lettori. L'idea di oggetti magici da collezionare in un set numerato, capaci di esaudire un desiderio una volta riuniti, richiama ancora una volta la mitologia del Viaggio in Occidente."
    },
    {
        icon:"✂️",
        titolo:"I primi doppiaggi occidentali censurarono molto",
        testo:"Le prime edizioni televisive occidentali di Dragon Ball Z, come il doppiaggio Ocean trasmesso in Nord America negli anni '90, tagliarono scene di violenza, modificarono dialoghi e persino le musiche originali per adattarsi agli standard televisivi per ragazzi dell'epoca. Solo con le edizioni home video successive, non censurate, il pubblico occidentale poté vedere la serie più vicina alla versione giapponese originale."
    }
];


/*==========================
DATI SAGHE (biblioteca dei libricini + pagine dedicate)
==========================*/

const eraInfo={
    db:{label:"Dragon Ball", years:"1986–1989", color:"#d97b2e"},
    dbz:{label:"Dragon Ball Z", years:"1989–1996", color:"#c23b2e"},
    super:{label:"Dragon Ball Super", years:"2015–2018", color:"#4a3a8f"},
    gt:{label:"Dragon Ball GT", years:"1996–1997", color:"#1f7a7a"},
    daima:{label:"Dragon Ball Daima", years:"2024–2025", color:"#9c2f7a"}
};

const sagaData=[
{
    id:"db1", era:"db", title:"L'Inizio dell'Avventura", subtitle:"Saga di Pilaf & Torneo Tenkaichi",
    icon:"road", range:"1–28", total:28, filler:2, fillerNote:null,
    characters:["Goku","Bulma","Muten Roshi","Krillin"],
    sections:[
        {heading:"Un bambino nella foresta",
        paragraphs:[
            "Tutto comincia nella foresta ai piedi del Monte Paozu, dove un bambino dalla coda di scimmia di nome Son Goku vive da solo, forte come un adulto e ingenuo come un cucciolo. Non ha mai visto un'automobile, non sa cosa sia una città, e crede che la Sfera del Drago a quattro stelle lasciatagli dal nonno Gohan sia semplicemente un cimelio di famiglia.",
            "L'incontro con la giovane inventrice Bulma, in cerca delle leggendarie Sfere del Drago capaci di esaudire un desiderio, lo trascina in un viaggio che cambierà per sempre la sua vita. I due partono a bordo della Capsule House, un'automobile-casa portatile, dando il via a un'avventura on the road che alterna momenti comici a primi, veri pericoli."
        ]},
        {heading:"La banda di Pilaf e i primi compagni",
        paragraphs:[
            "Lungo la strada si aggiungono compagni destinati a restare per sempre nella leggenda: l'anziano Muten Roshi, futuro maestro di Goku e proprietario della sfera a tre stelle; il monaco combattente Krillin, che diventerà rivale e migliore amico; il porcellino trasformista Oolong e il gatto Pu'ar, entrambi capaci di cambiare forma a piacimento.",
            "Insieme affrontano il meschino imperatore Pilaf, un piccolo tiranno che vuole usare le sfere per conquistare il mondo insieme ai suoi scagnozzi Shu e Mai. Le sue macchinazioni, spesso ridicolizzate dalla stessa serie, restano comunque abbastanza pericolose da mettere a rischio la vita del gruppo più di una volta."
        ]},
        {heading:"Tre anni di allenamento",
        paragraphs:[
            "Il tono cambia quando Goku si allena per tre anni sotto Muten Roshi insieme a Krillin, in un dojo dove disciplina e sacrificio contano più del talento naturale. Le prove sono estenuanti: consegne a piedi con pesi enormi, lavori nei campi, corse contro il tempo, tutte pensate per costruire resistenza fisica e mentale prima ancora della tecnica di combattimento.",
            "È qui che Goku impara il Kamehameha, la tecnica energetica che lo accompagnerà per tutta la carriera, e scopre che la vera forza nasce dalla ripetizione paziente, non da un dono innato."
        ]},
        {heading:"Il 21° Torneo Tenkaichi",
        paragraphs:[
            "L'arco si chiude con il 21° Torneo Tenkaichi, il più importante torneo di arti marziali del mondo, dove Goku affronta per la prima volta veri rivali provenienti da scuole diverse, incluso un misterioso combattente mascherato di nome Jackie Chun, che nasconde un'identità a sorpresa.",
            "Questa saga getta le fondamenta di tutto ciò che verrà: l'amicizia, la ricerca delle Sfere del Drago, i tornei come banco di prova e la crescita costante di un eroe che, episodio dopo episodio, smette di essere un bambino selvaggio per diventare il guerriero più forte dell'universo."
        ]}
    ]
},
{
    id:"db2", era:"db", title:"L'Esercito del Nastro Rosso", subtitle:"Red Ribbon Army, Generale Blue, Comandante Red & Baba",
    icon:"flag", range:"29–77", total:49, filler:5, fillerNote:null,
    characters:["Goku","Comandante Red","Generale Blue","Tao Pai Pai"],
    sections:[
        {heading:"La sfera del nonno Gohan",
        paragraphs:[
            "Nella ricerca della sfera a quattro stelle, ricordo del nonno Gohan andato perduto, Goku si scontra con il Red Ribbon Army, un esercito criminale globale guidato dallo spietato Comandante Red, deciso a raccogliere tutte le Sfere del Drago per ottenere ricchezza e potere illimitati.",
            "Da solo, il piccolo Goku smantella basi militari, carri armati e intere squadre di soldati con la forza e l'ingegno, dimostrando che l'addestramento di Muten Roshi ha dato i suoi frutti ben oltre le aspettative."
        ]},
        {heading:"Generale Blue e il Comandante Red",
        paragraphs:[
            "Tra gli avversari spicca il Generale Blue, capace di ipnosi e crudeltà glaciale, capace di paralizzare Goku con lo sguardo durante uno degli scontri più tesi della saga. Al vertice dell'organizzazione, il minuscolo ma feroce Comandante Red governa con il terrore, pronto a eliminare i propri uomini per un fallimento.",
            "Le rivalità interne all'esercito, tra generali ambiziosi e sottoposti terrorizzati, offrono uno spaccato quasi satirico del potere corrotto, con Goku che si ritrova spesso a beneficiare del caos organizzativo dei suoi nemici."
        ]},
        {heading:"Tao Pai Pai e la Torre di Karin",
        paragraphs:[
            "Il vero punto di svolta arriva con Tao Pai Pai, il sicario definitivo assoldato per eliminare Goku: un combattimento che si conclude con una sconfitta umiliante per il protagonista, costretto a un secondo, durissimo addestramento sulla Torre di Karin per poterlo finalmente affrontare alla pari.",
            "Qui Goku beve l'Acqua Sacra e stringe amicizia con il maestro gatto Karin, custode della torre, ottenendo la forza necessaria per un rivincita che ribalta completamente l'esito del primo scontro."
        ]},
        {heading:"L'ultima sfera e il torneo di Baba",
        paragraphs:[
            "Dopo la caduta dell'esercito, la ricerca dell'ultima sfera porta Goku dalla veggente Baba, sorella di Muten Roshi, che organizza un piccolo torneo tra i suoi guerrieri più forti come prova per riavere la sfera: un episodio che introduce nuovi rivali e prepara il terreno per il torneo successivo.",
            "È una saga di crescita e di prime, vere perdite: personaggi amati muoiono, tornano in vita grazie alle Sfere del Drago, e Goku impara che la forza non basta senza intelligenza e determinazione, temi che accompagneranno tutta la sua carriera di combattente."
        ]}
    ]
},
{
    id:"db3", era:"db", title:"Il Demone Piccolo", subtitle:"Tenshinhan, Re Piccolo & Piccolo Junior",
    icon:"crown", range:"78–153", total:76, filler:4, fillerNote:null,
    characters:["Goku","Tenshinhan","Re Piccolo","Piccolo"],
    sections:[
        {heading:"Il 22° Torneo e la Scuola della Gru",
        paragraphs:[
            "Al 22° Torneo Tenkaichi Goku affronta la scuola della Gru, rappresentata dal freddo e talentuoso Tenshinhan e dal suo compagno telepatico Chaozu: uno scontro tecnico e spietato che eleva per la prima volta il livello del torneo a vette mai viste, introducendo tecniche come il Kikoho e il potere del terzo occhio.",
            "Il torneo si conclude con una vittoria a sorpresa che lascia il segno su tutti i partecipanti, e semina i primi dubbi sulla reale differenza tra allenamento onesto e tecniche proibite come il lavaggio del cervello subito da Tenshinhan dal suo maestro."
        ]},
        {heading:"Il risveglio di Re Piccolo",
        paragraphs:[
            "Poco dopo, un'antica minaccia risorge: Re Piccolo, demone malvagio sigillato secoli prima in un vaso da Mutaito, torna libero e semina il caos, uccidendo maestri storici e conquistando il pianeta con il terrore, in una delle sequenze più cupe dell'intera opera originale.",
            "Goku, ormai giovane adulto, deve affrontarlo in uno scontro che segna il primo vero punto di non ritorno della serie, con perdite dolorose tra i suoi alleati e una tensione che il manga originale non aveva ancora mai raggiunto."
        ]},
        {heading:"Piccolo Junior e l'addestramento di Kaiō",
        paragraphs:[
            "Sconfitto in punto di morte, Re Piccolo genera un figlio-erede, Piccolo Junior, prima di spirare. Il giovane demone punta al 23° Torneo Tenkaichi per vendicare il padre, mentre Goku, morto in battaglia, raggiunge il Regno dei Cieli e si allena sotto la guida di Kaiō, il Signore dei Mondi, imparando la tecnica del Kaiō-ken.",
            "Questo espediente narrativo introduce per la prima volta il concetto di aldilà allenabile, un elemento che tornerà più volte nella mitologia della serie negli anni successivi."
        ]},
        {heading:"Il 23° Torneo Tenkaichi",
        paragraphs:[
            "Il duello finale tra Goku e Piccolo Junior, tra distruzione dell'arena e colpi capaci di spaccare le montagne, chiude in modo epico la storia originale di Dragon Ball, con un colpo di scena che ribalta le sorti del combattimento negli ultimi istanti.",
            "L'arco apre simbolicamente le porte alla saga successiva, dove Piccolo — sconfitto ma non ucciso — sceglierà infine di allearsi con il suo storico nemico, ponendo le basi per una delle amicizie più significative di tutta Dragon Ball Z."
        ]}
    ]
},
{
    id:"dbz1", era:"dbz", title:"L'Arrivo dei Saiyan", subtitle:"Saga Saiyan",
    icon:"burst", range:"1–39", total:39, filler:5, fillerNote:null,
    characters:["Goku","Raditz","Vegeta","Nappa","Piccolo","Gohan"],
    sections:[
        {heading:"Raditz e la verità su Goku",
        paragraphs:[
            "Anni dopo la sconfitta di Piccolo Junior, un guerriero dalla coda simile a quella di Goku atterra sulla Terra: è Raditz, suo fratello maggiore, che rivela una verità sconvolgente. Goku non è umano, ma un Saiyan, guerriero di un popolo di conquistatori spaziali, inviato da neonato per distruggere il pianeta prima di perdere la memoria in un incidente da bambino.",
            "Raditz rapisce il piccolo Gohan, figlio di Goku, come leva per costringere il fratello a unirsi a lui nella conquista di altri mondi, rivelando anche l'esistenza di altri due Saiyan sopravvissuti, ben più pericolosi di lui."
        ]},
        {heading:"Il sacrificio di Piccolo e Goku",
        paragraphs:[
            "Per fermare Raditz e salvare il figlio, Goku è costretto a un'alleanza impensabile con Piccolo, suo storico nemico. Solo unendo le forze riescono a immobilizzare il Saiyan, ma il colpo finale costa la vita a entrambi: Piccolo sacrifica sé stesso per sferrare l'attacco decisivo, e Goku muore stritolato insieme a Raditz.",
            "Il sacrificio è uno dei momenti più iconici della serie e introduce il concetto degli Occhi di Kaiō e di un aldilà popolato da anime pronte ad allenarsi, mentre sulla Terra Bulma e gli altri iniziano a organizzarsi per l'attacco imminente."
        ]},
        {heading:"L'attesa e l'addestramento",
        paragraphs:[
            "Con Goku nel Regno dei Cieli per un anno di addestramento straordinario sotto Kaiō, i guerrieri Z rimasti sulla Terra — Piccolo, Krillin, Tenshinhan, Chaozu e Yamcha — si preparano al peggio, allenando persino un giovane Gohan capace di sprigionare un potere nascosto quando è in pericolo.",
            "Piccolo, nel frattempo, addestra Gohan con metodi durissimi, gettando le basi di un legame che diventerà uno dei più toccanti dell'intera serie."
        ]},
        {heading:"Vegeta e Nappa sulla Terra",
        paragraphs:[
            "La vera minaccia arriva un anno dopo: Vegeta, principe dei Saiyan, e il gigantesco Nappa sbarcano sulla Terra in cerca delle Sfere del Drago per diventare immortali. I guerrieri Z oppongono resistenza, ma pagano un prezzo altissimo: Yamcha, Chaozu, Tenshinhan e lo stesso Piccolo cadono uno dopo l'altro contro il devastante potere di Nappa.",
            "È solo grazie a un Goku potenziato al ritorno dal Regno dei Cieli che la bilancia comincia finalmente a spostarsi a favore della Terra."
        ]},
        {heading:"La trasformazione in Grande Scimmia",
        paragraphs:[
            "Lo scontro finale contro Vegeta, culminato nella sua trasformazione in Grande Scimmia sotto una luna artificiale creata da lui stesso, porta i protagonisti sull'orlo della sconfitta totale: solo un ultimo, disperato colpo di squadra tra Gohan, Krillin e un Goku ormai allo stremo riesce a fermarlo.",
            "Vegeta fugge sconfitto e umiliato, ma la Terra ha ormai scoperto di non essere sola nell'universo, e i guerrieri Z si preparano a un viaggio che li porterà ben oltre i confini del proprio pianeta."
        ]}
    ]
},
{
    id:"dbz2", era:"dbz", title:"Namek in Fiamme", subtitle:"Namek, Capitano Ginyu & Freezer",
    icon:"planet", range:"40–107", total:68, filler:10, fillerNote:null,
    characters:["Goku","Gohan","Vegeta","Freezer","Capitano Ginyu"],
    sections:[
        {heading:"Il viaggio verso Namek",
        paragraphs:[
            "Per resuscitare i caduti con le Sfere del Drago terrestri, ormai inutilizzabili dopo un solo desiderio, Bulma, Gohan e Krillin partono per il pianeta Namek, dove esistono altre sfere native. Il viaggio interstellare, a bordo di un'astronave recuperata dai resti dell'invasione Saiyan, segna il primo vero salto di scala della serie, che da questo momento abbandona la sola Terra.",
            "Qui scoprono che l'imperatore galattico Freezer, lo stesso che anni prima annientò il popolo Saiyan, sta già raccogliendo le sfere native per diventare immortale, affiancato da un esercito di soldati e scienziati al suo servizio."
        ]},
        {heading:"La corsa alle sfere e Vegeta",
        paragraphs:[
            "Sul pianeta verde si muove anche Vegeta, sopravvissuto allo scontro sulla Terra e in cerca di riscatto e potere personale, pronto a tradire chiunque pur di ottenere l'immortalità prima di Freezer. La sua presenza complica ulteriormente gli equilibri, creando una guerra a tre tra Terrestri, Freezer e il principe Saiyan.",
            "Nel frattempo i namecciani, popolo pacifico dotato di straordinarie capacità rigenerative e telepatiche, cercano disperatamente di proteggere le proprie sfere dagli invasori, rivelando dettagli inediti sulla propria cultura e sulla loro connessione con Kami, il guardiano della Terra."
        ]},
        {heading:"La Ginyu Force",
        paragraphs:[
            "Le forze speciali di Freezer, la famigerata Ginyu Force, danno vita a scontri tanto assurdi quanto letali: cinque guerrieri dalle pose plateali e dai poteri unici, tra cui il celebre scambio di corpi tra il Capitano Ginyu e Goku, che costringe gli eroi a strategie disperate per tornare nei propri corpi originali.",
            "L'episodio, tra i più amati per il suo tono a metà tra comico e teso, dimostra come anche i nemici più potenti possano essere sconfitti con l'ingegno più che con la sola forza bruta."
        ]},
        {heading:"Il vero volto di Freezer",
        paragraphs:[
            "Quando Goku arriva finalmente su Namek dopo essersi ripreso dalle ferite, si scopre la vera natura di Freezer: un tiranno capace di trasformarsi in forme sempre più devastanti, ciascuna nascosta dietro un aspetto apparentemente più debole della precedente, fino a un'ultima forma quasi indistruttibile.",
            "La rivelazione che Freezer distrusse personalmente il pianeta natale dei Saiyan per timore della leggenda del Super Saiyan aggiunge un livello di tragedia personale a tutta la vicenda, motivando la rabbia sia di Goku che di Vegeta."
        ]},
        {heading:"La morte di Krillin e la nascita del Super Saiyan",
        paragraphs:[
            "La morte di Krillin per mano di Freezer, che lo fa esplodere davanti agli occhi di Goku dopo aver finto una tregua, scatena nel protagonista una rabbia incontenibile che lo porta a superare un limite ritenuto leggendario da millenni.",
            "Nasce così il primo Super Saiyan in ventimila anni: capelli dorati, aura elettrica e un potere capace finalmente di reggere il confronto con l'imperatore galattico, in una delle trasformazioni più celebrate nella storia dell'animazione giapponese."
        ]},
        {heading:"La fuga da un pianeta che esplode",
        paragraphs:[
            "La battaglia finale contro Freezer, tra un pianeta che collassa e sta per esplodere e una fuga rocambolesca nello spazio a bordo di un'astronave namecciana, chiude uno degli archi narrativi più celebrati di tutta la serie, ridefinendo per sempre cosa significhi essere un guerriero Saiyan.",
            "Sulla Terra, intanto, le sfere del drago vengono usate per riportare in vita i caduti e persino trasferire l'intero popolo namecciano superstite su un nuovo pianeta, chiudendo la vicenda con un finale agrodolce ma pieno di speranza."
        ]}
    ]
},
{
    id:"dbz3", era:"dbz", title:"L'Ombra di Garlic Jr.", subtitle:"Saga di Garlic Jr. (interamente filler)",
    icon:"vortex", range:"108–118", total:11, filler:11, fillerNote:"100% filler",
    characters:["Gohan","Piccolo","Krillin","Garlic Jr."],
    sections:[
        {heading:"Un nemico dimenticato",
        paragraphs:[
            "Mentre Goku è ancora disperso nello spazio dopo la fuga da Namek, la Terra deve affrontare da sola una minaccia mai raccontata nel manga originale: Garlic Jr., un demone immortale già sconfitto anni prima dal padre di Goku in una battaglia mai mostrata direttamente, torna in cerca di vendetta.",
            "Ad aiutarlo è la misteriosa Nebbia Nera, una sostanza capace di risvegliare gli istinti più oscuri e violenti di chiunque la respiri, trasformando persone comuni in marionette aggressive al suo servizio."
        ]},
        {heading:"Gohan e Piccolo, soli contro tutto",
        paragraphs:[
            "Con Goku assente, tocca a Piccolo e a un giovane Gohan, alla sua prima vera prova da protagonista senza il padre al fianco, difendere il pianeta. È un arco pensato interamente per l'anime, per colmare i tempi di attesa rispetto al manga, ma che approfondisce il legame tra maestro e allievo in un modo che il fumetto non aveva ancora avuto modo di fare.",
            "La responsabilità che grava sulle spalle di Gohan, costretto a crescere in fretta senza il supporto del padre, anticipa temi che torneranno centrali negli anni successivi della serie."
        ]},
        {heading:"La Terra dei Morti Viventi",
        paragraphs:[
            "Garlic Jr. apre un varco verso la Terra dei Morti Viventi, una dimensione oscura e senza tempo da cui, se sigillato dentro, non potrà più uscire: la sfida finale consiste proprio nel costringerlo a varcare quella soglia prima che sia troppo tardi per il pianeta intero.",
            "Pur non facendo parte della continuità del manga, questa saga è diventata un classico del fandom, tanto da essere citata e ripresa anni dopo in Dragon Ball Super, a testimonianza di quanto anche le storie \"extra\" abbiano lasciato il segno nell'immaginario della serie."
        ]}
    ]
},
{
    id:"dbz4", era:"dbz", title:"Gli Androidi e la Perfezione di Cell", subtitle:"Trunks, Androidi, Cell Imperfetto/Perfetto & Torneo di Cell",
    icon:"machine", range:"119–194", total:76, filler:15, fillerNote:null,
    characters:["Goku","Vegeta","Trunks","Cell","Gohan","Androide 18"],
    sections:[
        {heading:"Un guerriero dal futuro",
        paragraphs:[
            "Un misterioso guerriero Saiyan arriva dal futuro per avvertire i guerrieri Z: tra tre anni due androidi creati dal Dr. Gero, scienziato del disciolto Red Ribbon Army, seminerranno morte e distruzione su scala planetaria. Quel guerriero è Trunks, figlio di Vegeta e Bulma proveniente da una linea temporale devastata, dove quasi tutti i protagonisti sono già morti.",
            "La sua rivelazione, incluso l'annuncio della morte di Goku per una malattia cardiaca imminente, dà il via a un durissimo periodo di addestramento e a una corsa contro il tempo per cambiare un futuro già scritto."
        ]},
        {heading:"Il risveglio degli Androidi 17 e 18",
        paragraphs:[
            "Quando gli Androidi 17 e 18 si risvegliano, si rivelano più imprevedibili del previsto: capricciosi, quasi giocosi nella loro crudeltà, sfuggono al controllo dello stesso Dr. Gero, uccidendolo per primo. La loro noia annoiata e la mancanza di un vero obiettivo li rende ancora più imprevedibili dei classici villain della serie.",
            "Ma la vera minaccia è un terzo esperimento, tenuto segreto persino agli altri androidi: Cell, un essere bioingegnerizzato nato dalle cellule di Goku, Vegeta, Freezer, Piccolo e altri guerrieri leggendari, capace di assorbire gli androidi per completare la propria evoluzione."
        ]},
        {heading:"La Camera dello Spirito e del Tempo",
        paragraphs:[
            "La corsa contro il tempo per fermare Cell prima che raggiunga la sua forma perfetta occupa il cuore della saga, tra la Camera dello Spirito e del Tempo — una dimensione dove un anno equivale a un solo giorno esterno, ma dove la gravità e l'isolamento estremo mettono a dura prova anche i più forti.",
            "È qui che Vegeta, ormai deciso a non farsi più superare da Goku, sblocca per primo il Super Saiyan di secondo livello, un potere ancora più devastante della prima trasformazione dorata."
        ]},
        {heading:"I Giochi di Cell",
        paragraphs:[
            "Fallito il tentativo di impedirne l'evoluzione, Cell assorbe entrambi gli androidi e raggiunge la sua Forma Perfetta, per poi organizzare il proprio torneo, i Giochi di Cell, sfidando il pianeta intero a fermarlo davanti alle telecamere di tutto il mondo.",
            "Goku, sorprendendo tutti, si ritira dopo il primo round per lasciare spazio a un giovane Gohan, convinto che il ragazzo nasconda un potenziale superiore al proprio, nonostante le proteste generali per una scelta apparentemente incomprensibile."
        ]},
        {heading:"La rabbia di Gohan",
        paragraphs:[
            "È qui che un adolescente Gohan, spinto oltre ogni limite dalla morte dell'amico Androide 16 e dalla rabbia repressa per anni, sblocca un potere che nemmeno Goku possiede, in uno dei climax più celebrati dell'intera saga.",
            "Il sacrificio finale di Goku, che si teletrasporta insieme a Cell lontano dalla Terra per salvare il pianeta da un'esplosione finale, sembra la fine — ma la storia riserva ancora un ultimo, sorprendente capitolo prima della vittoria definitiva."
        ]}
    ]
},
{
    id:"dbz5", era:"dbz", title:"Il Torneo dell'Aldilà", subtitle:"Other World Saga (interamente filler, con Re Kaio)",
    icon:"halo", range:"195–207", total:13, filler:13, fillerNote:"100% filler",
    characters:["Goku","Re Kaio","Pikkon"],
    sections:[
        {heading:"La scelta di restare morto",
        paragraphs:[
            "Morto per salvare la Terra dall'autodistruzione di Cell, Goku sceglie di restare nell'aldilà invece di tornare in vita con le Sfere del Drago, convinto che la propria presenza continui ad attirare minacce sul pianeta. È una decisione che sorprende amici e famiglia, e che definisce ulteriormente il carattere quasi incosciente del protagonista.",
            "In attesa che si presenti un'occasione per tornare, Goku decide di sfruttare il tempo a disposizione allenandosi e partecipando alla vita dell'Altro Mondo, scoprendo che anche la morte, in Dragon Ball, riserva le sue avventure."
        ]},
        {heading:"Il Torneo di Re Kaio",
        paragraphs:[
            "Partecipa così al Torneo dell'Altro Mondo organizzato da Re Kaio, un evento leggero e a tratti comico che raccoglie i più grandi combattenti scomparsi della storia dell'universo, tra regole bizzarre e un pubblico fatto di anime e divinità minori.",
            "Interamente originale per l'anime e priva di ogni corrispondenza nel manga, questa saga funge da parentesi più rilassata dopo la tensione dei Giochi di Cell, esplorando il lato bizzarro e fiabesco dell'aldilà di Dragon Ball."
        ]},
        {heading:"Pikkon, il rivale dell'Altro Mondo",
        paragraphs:[
            "Tra gli avversari spicca Pikkon, guerriero dell'Altro Mondo Occidentale dal carattere altezzoso ma dal potere straordinario, che regala a Goku uno degli scontri più intensi mai visti in un contesto \"amichevole\", spingendolo a usare tecniche mai mostrate prima, come il Kaiō-ken combinato al Super Saiyan.",
            "Il torneo si interrompe bruscamente quando Goku scopre che sulla Terra sta per tornare una minaccia enorme: Babidi, un mago capace di risvegliare Majin Bu. Da qui in poi Goku otterrà finalmente il permesso di tornare sul pianeta per un solo giorno, dando il via al capitolo successivo."
        ]}
    ]
},
{
    id:"dbz6", era:"dbz", title:"Il Guerriero Saiyaman", subtitle:"Great Saiyaman Saga & 25° Torneo Tenkaichi",
    icon:"sun", range:"208–232", total:25, filler:10, fillerNote:null,
    characters:["Gohan","Videl","Goten","Trunks"],
    sections:[
        {heading:"Sette anni dopo",
        paragraphs:[
            "Sette anni dopo la sconfitta di Cell, la Terra vive un periodo di pace insolito. Gohan, ormai adolescente, inizia la scuola superiore conducendo una doppia vita da studente modello e da supereroe mascherato, il goffo ma sincero Great Saiyaman, per proteggere la città senza rivelare la propria identità.",
            "Il tono della saga, molto più leggero rispetto al resto della serie, mostra un lato quasi da commedia scolastica, con Gohan alle prese con interrogazioni, compagni di classe e i primi imbarazzi adolescenziali."
        ]},
        {heading:"Videl e i nuovi amici",
        paragraphs:[
            "L'incontro con Videl, figlia del campione mondiale Hercule e determinata quanto testarda, porta scompiglio nella vita di Gohan, che finisce per allenarla al volo e alle arti marziali dopo che lei scopre parte della sua identità segreta.",
            "Gohan stringe amicizia anche con nuovi compagni come Goten, il fratello minore mai conosciuto da Goku, e un Trunks bambino altrettanto vivace, entrambi già capaci di trasformarsi in Super Saiyan quasi per gioco."
        ]},
        {heading:"Il 25° Torneo Tenkaichi",
        paragraphs:[
            "L'arco culmina nel 25° Torneo Tenkaichi, un evento più leggero e scanzonato rispetto ai precedenti, dove la nuova generazione di guerrieri — Goten, Trunks e Videl — mostra al mondo di che pasta è fatta, tra combinazioni comiche e la rivelazione, semiseria, dei veri poteri della famiglia Son.",
            "Dietro il tono spensierato si nasconde però una minaccia crescente: nell'ombra del torneo, un mago di nome Babidi osserva i combattenti più forti per scegliere il proprio prescelto, ponendo le basi silenziose per la tempesta che sta per abbattersi sulla Terra."
        ]}
    ]
},
{
    id:"dbz7", era:"dbz", title:"La Furia di Majin Bu", subtitle:"Babidi, Majin Bu, Fusione & Kid Bu",
    icon:"mask", range:"233–291", total:59, filler:8, fillerNote:null,
    characters:["Goku","Vegeta","Gohan","Majin Bu","Goten","Trunks"],
    sections:[
        {heading:"Il risveglio di Majin Bu",
        paragraphs:[
            "Il mago Babidi risveglia Majin Bu, creatura di pura energia sigillata millenni prima dal saggio Bibidi, capace di rigenerarsi da qualunque ferita e di trasformare i propri nemici in caramelle o biscotti con un solo tocco, per poi divorarli con noncuranza infantile.",
            "L'annuncio del suo risveglio semina il panico tra i guerrieri Z, consapevoli che nessuna trasformazione vista fino a quel momento garantisce automaticamente la vittoria contro un essere praticamente impossibile da uccidere in modo definitivo."
        ]},
        {heading:"La corruzione di Vegeta",
        paragraphs:[
            "Vegeta, roso dall'orgoglio e frustrato dall'essere sempre un passo indietro rispetto a Goku, si lascia corrompere dalla magia di Babidi pur di ottenere un potere sufficiente a superare finalmente il rivale, arrivando a sacrificare parte della propria umanità per un duello che considera più importante della salvezza del pianeta.",
            "Il suo scontro con Goku, combattuto quasi in un contesto privato lontano dagli altri, è tra i più intensi e psicologicamente carichi dell'intera serie, e culmina in un sacrificio che ridefinisce per sempre il personaggio."
        ]},
        {heading:"La Fusione",
        paragraphs:[
            "La battaglia contro Bu costringe l'intera famiglia Son a superarsi: Goten e Trunks apprendono la Fusione, la tecnica definitiva che unisce due guerrieri in uno solo per un tempo limitato tramite una danza coreografica precisa al millimetro, dando vita al potentissimo ma capriccioso Gotenks.",
            "Nel frattempo Gohan, allenato dall'antico Anziano Kaiō sul pianeta sacro dei namecciani, sblocca infine il suo Potenziale Nascosto, raggiungendo un livello di potere che sorprende persino lui stesso."
        ]},
        {heading:"Bu Kid, la distruzione allo stato puro",
        paragraphs:[
            "Ma Bu è un nemico in continua evoluzione: ogni sconfitta lo fa mutare in versioni sempre più semplici e sempre più letali, fino a spogliarsi di ogni residuo di bontà e rivelare la propria forma originale, Bu Kid, pura distruzione senza filtri né inganni, capace di distruggere pianeti interi per puro divertimento.",
            "La sua furia costringe i sopravvissuti a rifugiarsi sul pianeta di Kaiō, mentre la Terra viene ridotta in macerie in una delle sequenze più devastanti mai mostrate nella serie."
        ]},
        {heading:"La Genkidama finale",
        paragraphs:[
            "Nello scontro finale, Goku ricorre alla Genkidama, energia donata da ogni essere vivente dell'universo, in un climax che coinvolge letteralmente ogni angolo della galassia e richiede l'aiuto di Hercule, il campione mondiale, per convincere l'umanità intera a partecipare.",
            "La vittoria chiude non solo la saga di Bu, ma l'intera storia di Dragon Ball Z, mostrando un salto temporale di dieci anni con una nuova generazione pronta a raccogliere il testimone, e aprendo la strada, anni dopo, a un nuovo torneo e a un nuovo dio."
        ]}
    ]
},
{
    id:"super1", era:"super", title:"La Battaglia degli Dei", subtitle:"Battle of Gods Saga",
    icon:"deity", range:"1–14", total:14, filler:null, fillerNote:"pochi episodi, per lo più materiale anime originale",
    characters:["Goku","Beerus","Whis","Vegeta"],
    sections:[
        {heading:"Il sogno di Beerus",
        paragraphs:[
            "Dieci anni dopo la sconfitta di Bu, un nuovo tipo di minaccia si presenta: non un conquistatore, ma un Dio della Distruzione. Beerus, entità cosmica dai poteri incommensurabili e dal carattere capriccioso, si risveglia da un lungo sonno in cerca del leggendario Super Saiyan degli Dei, di cui ha sognato, per sfidarlo in battaglia.",
            "Il suo ruolo cosmico, mantenere l'equilibrio dell'universo distruggendo ciò che minaccia di squilibrarlo, lo rende un personaggio moralmente ambiguo: non malvagio in senso tradizionale, ma imprevedibile e potenzialmente letale per chiunque lo infastidisca."
        ]},
        {heading:"Whis e il tour degli dei",
        paragraphs:[
            "Al suo fianco l'angelo Whis, custode ed educatore dal potere ancora superiore a quello del suo stesso allievo, accompagna Beerus in un tour tra i pianeti in cerca di questo avversario, seminando terrore ovunque passi con la sua estrema suscettibilità: basta irritarlo per rischiare la distruzione di un intero pianeta.",
            "Il loro rapporto, fatto di battute pungenti e rispetto reciproco, introduce per la prima volta il tono più comico e leggero che caratterizzerà gran parte di Dragon Ball Super."
        ]},
        {heading:"Il compleanno di Bulma",
        paragraphs:[
            "Quando Beerus raggiunge la Terra durante il compleanno di Bulma, Goku — richiamato dall'aldilà per l'occasione grazie alle Sfere del Drago — accetta la sfida senza esitazione, ignaro del reale divario di potere che lo separa dal Dio della Distruzione.",
            "La festa, con la partecipazione di praticamente ogni personaggio storico della serie, offre anche un momento raro di leggerezza corale prima dello scontro decisivo."
        ]},
        {heading:"Il Super Saiyan Dio",
        paragraphs:[
            "Nonostante l'aiuto rituale di cinque guerrieri Saiyan puri di cuore per creare temporaneamente il Super Saiyan Dio, forma capace di attingere all'energia degli dèi, lo scontro dimostra quanto il divario di potere sia ancora enorme, e solo un gesto imprevisto di Beerus stesso evita una tragedia.",
            "È l'inizio di una nuova era per la serie: dopo Bu, per la prima volta Dragon Ball introduce una gerarchia cosmica fatta di dèi, universi e regole mai esplorate prima, e pone le basi per l'ambizione che caratterizzerà tutta Dragon Ball Super."
        ]}
    ]
},
{
    id:"super2", era:"super", title:"La Resurrezione di 'F'", subtitle:"Resurrection 'F' Saga",
    icon:"machine", range:"15–27", total:13, filler:null, fillerNote:"pochissimi episodi filler",
    characters:["Goku","Vegeta","Freezer","Sorbet"],
    sections:[
        {heading:"I resti di Freezer",
        paragraphs:[
            "I resti sparsi di Freezer, distrutto anni prima su Namek, vengono raccolti dai suoi fedeli soldati, convinti che con le Sfere del Drago sia possibile riportarlo in vita. Il desiderio viene esaudito, e un Freezer rinato per la vendetta decide, per la prima volta nella sua vita, di allenarsi sul serio dopo secoli di arroganza basata sul solo talento innato.",
            "Il fatto stesso che un tiranno abituato a vincere senza sforzo scelga di sudare per diventare più forte racconta quanto profonda sia l'umiliazione subita su Namek."
        ]},
        {heading:"L'attacco a sorpresa",
        paragraphs:[
            "Determinato a colpire dove fa più male, Freezer raduna un intero esercito e attacca la Terra in un momento di apparente tranquillità, colpendo di sorpresa i guerrieri Z prima ancora che possano reagire, in una delle sequenze più crudeli e spiazzanti della serie, con diversi alleati storici feriti o uccisi in pochi minuti.",
            "La freddezza con cui Freezer orchestra la vendetta, senza fretta e godendo di ogni momento, ne conferma la natura di villain puro, in contrasto con le sfumature più ambigue dei nemici incontrati negli anni successivi."
        ]},
        {heading:"Golden Freezer",
        paragraphs:[
            "Quando Goku e Vegeta arrivano, Freezer rivela una nuova trasformazione dorata, frutto del suo allenamento, capace di generare potenza sufficiente a competere quasi alla pari con due Super Saiyan Blue, ribaltando ogni aspettativa sul divario di forza tra lui e i suoi vecchi nemici.",
            "Solo l'intervento provvidenziale di Whis, che rallenta il tempo per permettere ai due Saiyan di recuperare dalle ferite subite, ribalta le sorti dello scontro proprio negli ultimi istanti."
        ]},
        {heading:"Un nuovo inizio tra gli universi",
        paragraphs:[
            "La battaglia si chiude con la distruzione definitiva del pianeta e la sconfitta di Freezer, ma segna anche l'inizio di una nuova fase per la serie: Goku, incuriosito dal Dio della Distruzione Champa, fratello gemello di Beerus, propone un incontro amichevole tra i loro rispettivi universi.",
            "Questa proposta, apparentemente innocua, darà il via a una serie di tornei che cambieranno per sempre la scala e l'ambizione dell'intera saga di Dragon Ball Super."
        ]}
    ]
},
{
    id:"super3", era:"super", title:"La Sfida dell'Universo 6", subtitle:"Universe 6 Saga",
    icon:"twin", range:"28–46", total:19, filler:null, fillerNote:"pochissimi episodi filler",
    characters:["Goku","Vegeta","Cabba","Hit"],
    sections:[
        {heading:"Champa e Vados",
        paragraphs:[
            "Champa, Dio della Distruzione dell'Universo 6 e fratello gemello di Beerus, propone un torneo amichevole tra dieci guerrieri per universo, con in palio le Super Sfere del Drago capaci di esaudire qualsiasi desiderio, comprese richieste impossibili nel proprio universo di origine.",
            "È il primo vero contatto approfondito tra l'Universo 7 di Goku e un universo parallelo con la propria storia, i propri eroi e persino una propria versione, capovolta, dei pianeti già noti."
        ]},
        {heading:"Cabba, il Saiyan sopravvissuto",
        paragraphs:[
            "Tra i guerrieri dell'Universo 6 spicca Cabba, un giovane Saiyan sopravvissuto in una linea temporale dove il pianeta natale non fu mai distrutto: il suo incontro con Vegeta, che diventa per lui un mentore inaspettato, offre uno sguardo toccante su cosa sarebbe potuto essere il popolo Saiyan senza Freezer.",
            "L'emozione di Vegeta nel ritrovare, seppur in un universo diverso, un frammento della propria cultura perduta aggiunge una profondità rara in un arco altrimenti dominato dai combattimenti."
        ]},
        {heading:"Hit, il sicario del tempo",
        paragraphs:[
            "Il torneo introduce anche Hit, un sicario leggendario capace di manipolare il tempo con una tecnica quasi impossibile da contrastare, che regala a Goku uno degli scontri più tattici e frustranti della sua carriera, costringendolo a inventare contromisure sul momento senza alcun allenamento specifico.",
            "Il duello, giocato più sull'intelligenza che sulla forza bruta, rappresenta uno dei momenti più originali della saga."
        ]},
        {heading:"Un finale a sorpresa",
        paragraphs:[
            "Alla fine il torneo si conclude con un finale a sorpresa che lascia l'Universo 6 senza vincitore ufficiale ma con nuove alleanze nate sul campo, e pianta il seme di una domanda inquietante: se gli universi possono competere per gioco, cosa succederebbe se lo facessero per sopravvivere?",
            "Quella domanda, lasciata volutamente in sospeso, diventerà il fulcro dell'intera seconda metà di Dragon Ball Super."
        ]}
    ]
},
{
    id:"super4", era:"super", title:"Trunks del Futuro", subtitle:"Future Trunks Saga (Goku Black & Zamasu)",
    icon:"storm", range:"47–76", total:30, filler:null, fillerNote:"pochissimi episodi filler",
    characters:["Trunks","Goku Black","Zamasu","Vegeta"],
    sections:[
        {heading:"Un futuro devastato",
        paragraphs:[
            "Un Trunks ormai adulto torna dal futuro devastato in cui vive, in cerca disperata di aiuto: una nuova minaccia, identica a Goku ma dall'anima nera come la notte, sta sterminando l'umanità pianeta dopo pianeta senza pietà né spiegazioni apparenti.",
            "Il suo nome è Goku Black, e il suo odio per i mortali sembra incomprensibile: nessuna delle motivazioni tipiche dei villain precedenti — potere, vendetta, conquista — sembra applicarsi a lui, rendendolo ancora più inquietante."
        ]},
        {heading:"Chi è davvero Goku Black",
        paragraphs:[
            "La verità che emerge è agghiacciante: Black è in realtà Zamasu, un apprendista Kaiō convinto che gli dèi debbano eliminare l'umanità corrotta per salvare l'universo, che ha rubato il corpo di Goku tramite gli Anelli del Tempo dopo essersi impossessato della tecnica dello Scambio dei Corpi.",
            "La sua ideologia, per quanto estrema, nasce da un'osservazione sincera (seppur distorta) della crudeltà mortale, rendendolo uno degli antagonisti più filosoficamente complessi della serie."
        ]},
        {heading:"Linee temporali e la fusione dei due Zamasu",
        paragraphs:[
            "La sua alleanza con una versione alternativa di se stesso, proveniente da un'altra linea temporale, crea un nemico capace di rigenerarsi all'infinito grazie all'immortalità concessa dagli dèi Kaiō. Tra viaggi nel tempo e linee temporali multiple, la saga esplora i temi più oscuri e filosofici mai affrontati dalla serie.",
            "La fusione dei due Zamasu in un'entità quasi immortale che si autodefinisce \"Zamasu Fuso\", capace di espandersi fino a fondersi con l'universo stesso, porta la minaccia a una scala mai vista prima, ponendo domande scomode su cosa significhi davvero la giustizia."
        ]},
        {heading:"L'intervento di Zeno",
        paragraphs:[
            "Solo un intervento estremo, l'annullamento dell'intera linea temporale da parte di Zeno Sama, il Re di Tutto, riesce a porre fine alla minaccia, mostrando per la prima volta un potere superiore persino a quello degli dèi della distruzione.",
            "L'apparizione di Zeno ridefinisce per sempre gli equilibri di potere dell'intera cosmologia della serie, introducendo un'entità la cui sola parola può cancellare interi universi con un capriccio, e ponendo le basi per l'arco successivo."
        ]}
    ]
},
{
    id:"super5", era:"super", title:"Il Torneo del Potere", subtitle:"Universe Survival Saga (Sopravvivenza dell'Universo)",
    icon:"grid", range:"77–131", total:55, filler:null, fillerNote:"pochissimi episodi filler",
    characters:["Goku","Vegeta","Freezer","Jiren","Gohan","Androide 17"],
    sections:[
        {heading:"La decisione di Zeno",
        paragraphs:[
            "Zeno Sama, il Re di Tutto, decide di ripulire il multiverso: gli otto universi ancora esistenti si sfideranno in un torneo a squadre di dieci guerrieri ciascuno, il Torneo del Potere. Gli universi delle squadre perdenti verranno cancellati dall'esistenza, trasformando quello che poteva essere un semplice gioco nella posta in gioco più alta mai vista nella serie.",
            "La notizia scatena il panico tra i vari Dei della Distruzione, costretti a reclutare in fretta i guerrieri più forti dei rispettivi universi per evitare l'annientamento totale."
        ]},
        {heading:"La squadra dell'Universo 7",
        paragraphs:[
            "Goku recluta una squadra eterogenea di alleati vecchi e nuovi — tra cui, a sorpresa, Freezer stesso, resuscitato temporaneamente per l'occasione in cambio della sua collaborazione, un'alleanza impensabile che dice molto su quanto la posta in gioco sia diventata seria.",
            "Anche Gohan, Piccolo, Androide 17, Androide 18, Krillin, Tenshinhan e Tien si uniscono alla squadra, ciascuno con la propria motivazione personale per lottare fino alla fine."
        ]},
        {heading:"Gli avversari degli altri universi",
        paragraphs:[
            "Gli altri universi rivelano guerrieri straordinari: dai monaci del Decimo Universo ai combattenti misteriosi del Nono, passando per assassini, robot e creature aliene di ogni tipo, ognuno con stili di combattimento radicalmente diversi da quelli visti fino a quel momento.",
            "La battaglia campale, che dura più giorni narrativi consecutivi, mette alla prova ogni personaggio della serie in combattimenti a eliminazione diretta, dove basta uscire dall'arena per essere eliminati definitivamente insieme al proprio universo."
        ]},
        {heading:"Jiren, il guerriero più forte",
        paragraphs:[
            "Tra tutti spicca il temibile Jiren, dell'Universo 11, considerato il guerriero mortale più forte di sempre: un combattente silenzioso, disciplinato e apparentemente privo di debolezze, capace di respingere Goku e Vegeta contemporaneamente senza il minimo sforzo apparente.",
            "Androide 17, sottovalutato da molti, dimostra un'astuzia sorprendente restando in gara più a lungo di quanto chiunque si aspettasse, mentre Gohan sblocca ulteriormente il proprio potenziale in uno degli ultimi grandi momenti da protagonista del personaggio."
        ]},
        {heading:"L'Ultra Istinto",
        paragraphs:[
            "Goku, spinto all'estremo proprio da Jiren, raggiunge per la prima volta l'Ultra Istinto, la forma definitiva capace di muovere il corpo senza il minimo pensiero cosciente, reagendo istintivamente a ogni attacco con una precisione sovrumana.",
            "Il torneo si chiude con un finale a sorpresa che salva tutti gli universi partecipanti grazie a un desiderio espresso con le Super Sfere del Drago, ma lascia un segno indelebile: per la prima volta la vittoria non è solo questione di pugni, ma di sacrificio, strategia e alleanze tra ex nemici."
        ]}
    ]
},
{
    id:"gt1", era:"gt", title:"Le Sfere Nere del Destino", subtitle:"Black Star Dragon Ball Saga",
    icon:"star", range:"1–22", total:22, filler:null, fillerNote:"produzione anime originale, senza fonte manga",
    characters:["Goku","Trunks","Pan","Pilaf"],
    sections:[
        {heading:"Il desiderio sbagliato",
        paragraphs:[
            "Un desiderio espresso per errore da Pilaf, ancora ossessionato dal voler ridurre Goku alla sua forma più debole dopo decenni di umiliazioni, lo trasforma di nuovo in un bambino con un incantesimo capace di rimuovere gli effetti dell'invecchiamento, restituendogli il corpo che aveva all'inizio della serie originale.",
            "Ma la vera sorpresa arriva quando si scopre che le Sfere del Drago Nere usate per esaudire quel desiderio si sono disperse in tutto l'universo, portando con sé una conseguenza catastrofica per l'intero pianeta."
        ]},
        {heading:"Un equipaggio insolito",
        paragraphs:[
            "Se non vengono ritrovate entro un anno, la Terra sarà condannata a esplodere. Goku, ormai bambino, parte insieme al nipote Pan, dotata di un carattere combattivo nonostante la giovane età, e a un più maturo Trunks a bordo di un'astronave spaziale, dando il via a un vero e proprio viaggio interstellare da pianeta a pianeta.",
            "La dinamica tra i tre, un nonno bambino, una nipote testarda e un amico di famiglia ormai adulto, offre un registro comico e affettuoso mai visto prima in questa combinazione."
        ]},
        {heading:"Pianeti e mostri lungo la rotta",
        paragraphs:[
            "Del tutto priva di fonte nel manga di Toriyama, che curò solo i design dei personaggi per questa serie, questa saga adotta un tono più leggero ed episodico, alternando pianeti bizzarri, mostri locali e combattimenti spesso più brevi rispetto agli standard di Z, ma con una vena di avventura spaziale quasi fantascientifica.",
            "Ogni tappa del viaggio introduce culture aliene diverse, spesso con una morale di fondo o un colpo di scena locale, in uno stile più vicino a un'antologia episodica che a un arco narrativo continuo."
        ]},
        {heading:"Il Pianeta Oscuro",
        paragraphs:[
            "Il viaggio si conclude sul misterioso Pianeta Oscuro, dove viene rivelato che dietro la dispersione delle sfere si cela un piano ben più ambizioso, capace di collegare questa avventura apparentemente leggera a una minaccia molto più grande e personale per Goku e la sua stirpe.",
            "Questo colpo di scena finale ribalta il tono spensierato dei primi episodi e apre la strada diretta alla saga successiva, molto più oscura e drammatica."
        ]}
    ]
},
{
    id:"gt2", era:"gt", title:"Baby, Super 17 e i Draghi Ombra", subtitle:"Baby Saga, Super 17 Saga & Shadow Dragon Saga",
    icon:"vortex", range:"23–64", total:42, filler:null, fillerNote:"produzione anime originale, senza fonte manga",
    characters:["Goku","Vegeta","Pan","Baby","Super 17"],
    sections:[
        {heading:"Il parassita Tuffle",
        paragraphs:[
            "Un parassita alieno di nome Baby, ultimo sopravvissuto del popolo Tuffle sterminato secoli prima dai Saiyan per il controllo del pianeta Plant, possiede i corpi degli abitanti della Terra uno dopo l'altro, incluso quello di Vegeta, in un piano di vendetta che minaccia di cancellare per sempre la stirpe Saiyan dall'universo.",
            "La possessione di Vegeta, che lo trasforma temporaneamente in un nemico dei propri stessi alleati, offre uno dei conflitti interni più dolorosi della serie, con la famiglia costretta ad affrontare qualcuno che ama sotto le sembianze di un mostro."
        ]},
        {heading:"Super 17",
        paragraphs:[
            "Sconfitto Baby, il Dr. Gero e il suo assistente Myuu, entrambi risorti dall'Inferno grazie a un varco dimensionale, creano Super 17, la fusione definitiva tra l'Androide 17 originale e la sua controparte infernale: un nemico praticamente immortale, capace di rigenerarsi risucchiando energia direttamente dagli inferi.",
            "Solo la collaborazione tra il vero Androide 17 e i guerrieri Z, uniti contro la propria copia corrotta, riesce a interrompere questo ciclo di rigenerazione apparentemente infinito."
        ]},
        {heading:"I Draghi Ombra",
        paragraphs:[
            "L'arco conclusivo, il più oscuro dell'intero GT, si apre quando le Sfere del Drago, ormai troppo usate e corrotte da decenni di desideri, generano sette Draghi Ombra dalla loro stessa energia negativa: entità devastanti, ciascuna incarnazione di una singola stella della sfera originale, capaci di ridurre intere città in macerie con un solo respiro.",
            "Ogni Drago Ombra rappresenta un aspetto diverso della corruzione, dal caos più distruttivo alla manipolazione più sottile, costringendo i protagonisti ad affrontarli uno per uno in tutto il mondo."
        ]},
        {heading:"Il Super Saiyan 4 definitivo",
        paragraphs:[
            "Solo unendo le forze di tre generazioni della famiglia Son — Goku, Pan e persino un redento Vegeta — e grazie a una trasformazione mai vista prima, i guerrieri riescono a fermare l'ultimo e più potente dei Draghi Ombra, l'incarnazione stessa del Drago Eterno corrotto.",
            "Il finale, malinconico e a sorpresa, chiude l'intera epoca di Dragon Ball GT con un salto temporale che mostra un futuro pacifico, suggellando il viaggio di Goku con un ultimo, toccante saluto ai suoi cari."
        ]}
    ]
},
{
    id:"daima", era:"daima", title:"Il Regno Demoniaco", subtitle:"Dragon Ball Daima",
    icon:"gate", range:"1–20", total:20, filler:null, fillerNote:"storia originale scritta da Akira Toriyama prima della sua scomparsa",
    characters:["Goku","Vegeta","Majin Bu","Glorio"],
    sections:[
        {heading:"Un errore vecchio di secoli",
        paragraphs:[
            "Il Re dei Demoni Gomah, sovrano del Regno Demoniaco, scopre che secoli prima un intervento della Terra ha rimpicciolito per errore il proprio mondo, riducendolo a una frazione delle dimensioni originali, e per vendicarsi lancia un incantesimo capace di trasformare in bambini Goku e i suoi alleati più potenti.",
            "L'incantesimo non riduce solo l'età anagrafica ma anche drasticamente la forza dei guerrieri coinvolti, sconvolgendo gli equilibri di potere raggiunti fino a quel momento e costringendo tutti a ripartire quasi da zero."
        ]},
        {heading:"Rimpiccioliti ma non arresi",
        paragraphs:[
            "Rimpiccioliti ma non arresi, Goku, Vegeta, Bulma, Piccolo, Majin Bu e Oob intraprendono un viaggio verso il Regno Demoniaco stesso per scoprire la verità e trovare un modo per tornare normali, un'avventura corale che riporta insieme personaggi storici raramente visti collaborare tutti nello stesso arco.",
            "Ad accompagnarli è Glorio, un misterioso demone alato che sembra nascondere segreti legati proprio alle origini del pianeta Terra e al motivo per cui il Regno Demoniaco fu separato da essa tanto tempo fa."
        ]},
        {heading:"Fazioni in guerra",
        paragraphs:[
            "Il Regno Demoniaco si rivela un mondo diviso in fazioni rivali, popolato da creature bizzarre e inquietanti, dove Goku e compagni devono destreggiarsi tra alleanze fragili, tornei locali di potere e una guerra civile latente tra demoni, riscoprendo il gusto dell'avventura pura che caratterizzava la primissima serie del 1986.",
            "Il ritorno a un formato più simile a un viaggio episodico, dopo anni di scontri cosmici su scala universale, segna volutamente un cambio di registro rispetto a Dragon Ball Super."
        ]},
        {heading:"L'ultima storia di Toriyama",
        paragraphs:[
            "Concepita e scritta personalmente da Akira Toriyama poco prima della sua scomparsa nel marzo 2024, questa saga è considerata l'ultima storia originale uscita direttamente dalla sua penna: un capitolo che chiude simbolicamente il cerchio, riportando la serie alle atmosfere avventurose e fiabesche delle sue origini.",
            "Per i fan, Daima rappresenta un vero e proprio testamento creativo dell'autore, un ultimo viaggio scritto con la stessa cura e lo stesso spirito con cui tutto era iniziato quasi quarant'anni prima."
        ]}
    ]
}
];
