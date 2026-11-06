/*=========================================================
    DRAGON BALL
    data.js — data shared by dragonball.html and saga.html
=========================================================*/

/*==========================
CHARACTER DATA (Scouter)
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
        {name:"Ultra Instinct", power:"unlimited"}
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
        {name:"Ultra Ego", power:"unlimited"}
    ]
},
"Piccolo":{
    icon:"🟢",
    forms:[
        {name:"Base", power:3500},
        {name:"Fused with Nail", power:3500000},
        {name:"Unlocked Potential", power:100000000}
    ]
},
"Gohan":{
    icon:"📚",
    forms:[
        {name:"Child", power:1307},
        {name:"Super Saiyan 2", power:300000000},
        {name:"Hidden Potential", power:500000000},
        {name:"Gohan Beast", power:80000000000}
    ]
},
"Frieza":{
    icon:"❄️",
    forms:[
        {name:"First Form", power:530000},
        {name:"Final Form", power:12000000},
        {name:"100%", power:120000000},
        {name:"Golden Frieza", power:100000000000}
    ]
},
"Cell":{
    icon:"🧬",
    forms:[
        {name:"Imperfect", power:1000000},
        {name:"Semi-Perfect", power:90000000},
        {name:"Perfect", power:900000000},
        {name:"Super Perfect", power:2000000000}
    ]
},
"Majin Buu":{
    icon:"🍬",
    forms:[
        {name:"Fat Buu", power:1000000000},
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
        {name:"Child", power:1500},
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
CHARACTER DATA (gallery bios)
==========================*/

const characterBios={
    "Goku":{
        role:"Protagonist · Saiyan",
        debut:"Pilaf Saga (Dragon Ball)",
        bio:"A Saiyan warrior raised on Earth and the undisputed protagonist of the series. From the search for the Dragon Balls to his battles against the gods, his one true goal is to surpass himself, fight after fight."
    },
    "Vegeta":{
        role:"Rival · Prince of the Saiyans",
        debut:"Saiyan Saga (Dragon Ball Z)",
        bio:"The proud and initially ruthless Prince of the Saiyans gradually becomes one of Earth's greatest defenders, without ever giving up his chase of Goku. His is one of the most beloved character arcs in the series."
    },
    "Piccolo":{
        role:"Ally · Namekian",
        debut:"The Demon Piccolo (Dragon Ball)",
        bio:"The last descendant of the Demon Piccolo, he chooses to join forces with his former enemies to protect Earth and becomes a mentor and father figure to Gohan."
    },
    "Gohan":{
        role:"The hidden potential",
        debut:"Saiyan Saga (Dragon Ball Z)",
        bio:"Goku's son, gifted with a potential that can surpass his father's. Torn between student life and his role as a warrior, he unlocks his true strength only in moments of greatest need."
    },
    "Frieza":{
        role:"Antagonist · Galactic Emperor",
        debut:"Namek in Flames (Dragon Ball Z)",
        bio:"A galactic emperor of immense power and icy cruelty, he destroyed the Saiyans' home planet out of fear of the Super Saiyan legend. His battle with Goku on Namek remains one of the most iconic in the series."
    },
    "Cell":{
        role:"Antagonist · Bioengineered being",
        debut:"The Androids and Cell's Perfection (Dragon Ball Z)",
        bio:"Created by Dr. Gero from the cells of the series' greatest warriors, he can absorb other androids to reach his perfect form and stage his own tournament."
    },
    "Majin Buu":{
        role:"Antagonist · Magical entity",
        debut:"The Fury of Majin Buu (Dragon Ball Z)",
        bio:"An entity of pure energy sealed away millennia ago, able to regenerate from any damage and change shape. Behind his almost childlike appearance hides one of the deadliest enemies the Z Fighters have ever faced."
    },
    "Trunks":{
        role:"Warrior from the future",
        debut:"The Androids and Cell's Perfection (Dragon Ball Z)",
        bio:"A warrior from a future devastated by the androids, he travels back in time to warn the Z Fighters and change the course of history."
    },
    "Goten":{
        role:"New generation",
        debut:"The Great Saiyaman (Dragon Ball Z)",
        bio:"Gohan's younger brother, who never knew Goku, a father often away from home. He learns Fusion with Trunks, giving rise to the incredibly powerful Gotenks."
    },
    "Bra":{
        role:"New generation",
        debut:"Dragon Ball GT",
        bio:"The daughter of Vegeta and Bulma, she grows up far from the spotlight of the great battles but still carries her family's Saiyan heritage in her blood."
    },
    "Gogeta":{
        role:"Fusion · Fusion Dance",
        debut:"Movie / Dragon Ball Super",
        bio:"The Fusion Dance fusion of Goku and Vegeta, considered one of the most powerful forms ever seen in the series: devastating but unstable, it lasts only a few minutes."
    },
    "Vegito":{
        role:"Fusion · Potara Earrings",
        debut:"The Fury of Majin Buu (Dragon Ball Z)",
        bio:"The fusion of Goku and Vegeta through the Potara Earrings, with almost uncontrollable power and an ego that is pure Vegeta."
    },
    "Gotenks":{
        role:"Fusion · Fusion Dance",
        debut:"The Fury of Majin Buu (Dragon Ball Z)",
        bio:"The Fusion Dance fusion of Goten and Trunks: a teenage warrior as powerful as he is capricious and easily distracted."
    }
};


/*==========================
TRIVIA (VERIFIED)
==========================*/

const triviaData=[
    {
        icon:"🐦",
        titolo:"Why it's called \"Bird Studio\"",
        testo:"Akira Toriyama's production studio is called Bird Studio: a play on his surname, since \"tori\" means bird in Japanese and \"yama\" means mountain. Toriyama was a great bird lover all his life."
    },
    {
        icon:"✏️",
        titolo:"It was meant to be just a comedy manga",
        testo:"Toriyama didn't want to draw a battle manga: his original idea was to create simple humorous stories. It was his editor who convinced him to introduce fights and a more structured story arc, shaping the series we know today."
    },
    {
        icon:"🐒",
        titolo:"Inspired by Journey to the West",
        testo:"The name Son Goku itself, like the Flying Nimbus (Kinto Un), draws inspiration from the classic Chinese novel \"Journey to the West\" and its protagonist, the Monkey King Sun Wukong."
    },
    {
        icon:"💚",
        titolo:"The author's favorite character",
        testo:"In several interviews, Akira Toriyama himself said that his favorite character to draw was Piccolo, whom he liked for his clean, essential design."
    },
    {
        icon:"📡",
        titolo:"\"It's over 9000!!\" doesn't exist... almost",
        testo:"The famous line that inspired this site's Scouter comes from an adaptation: in the original Japanese version Vegeta reads a value of \"8000\", not \"9000\". The number changed in the English dub and, through a curious mistake, became one of the most famous memes on the internet."
    },
    {
        icon:"📺",
        titolo:"The author who didn't watch the anime",
        testo:"Although he oversaw the work for decades, Toriyama admitted several times that he didn't regularly follow the anime, focusing mainly on writing and drawing the original manga."
    },
    {
        icon:"📖",
        titolo:"Eleven years in Weekly Shōnen Jump",
        testo:"Dragon Ball debuted as a manga in Weekly Shōnen Jump magazine in 1984 and ran until 1995, for a total of 519 chapters later collected in 42 tankōbon volumes. For eleven years Toriyama had to deliver weekly chapters without a break, a grueling pace common to almost all successful mangaka published in Jump."
    },
    {
        icon:"🤖",
        titolo:"Arale from Dr. Slump has a cameo in Dragon Ball",
        testo:"Before Dragon Ball, Toriyama already had a hit manga, Dr. Slump, starring the robot girl Arale Norimaki. The link between the two works isn't only one of style: Arale makes a brief comic cameo during the Red Ribbon Army saga, a small tribute from the author to his earlier work."
    },
    {
        icon:"🥕",
        titolo:"The Saiyans are all named after vegetables",
        testo:"The names of the Saiyan warriors hide a vegetable pun: Vegeta comes from \"vegetable\", Kakarot (Goku's real name) from \"carrot\", Raditz from \"radish\", Nappa from napa cabbage and Broly from \"broccoli\". Toriyama would use the same playful logic for other alien races in the series."
    },
    {
        icon:"❄️",
        titolo:"Frieza's family is named after cold appliances",
        testo:"Even the series' most feared villains hide a pun: Frieza (from \"freezer\"), his brother Cooler and his father King Cold form a dynasty named after the cold chain. It's a typical Toriyama way of making even the most ruthless enemies memorable with a touch of hidden humor."
    },
    {
        icon:"🐌",
        titolo:"Namek means \"slug\"",
        testo:"The planet Namek and the Namekian people take their name from \"namekuji\", the Japanese word for slug, in keeping with their vaguely snail-like appearance. Piccolo, the first Namekian Goku meets, is instead named after a musical instrument, the piccolo flute, just as several other characters in the series evoke musical terms."
    },
    {
        icon:"🔢",
        titolo:"The Androids are numbered, and one is their own creator",
        testo:"The Androids created by Dr. Gero to avenge the Red Ribbon Army are identified by a number instead of a name: 16, 17, 18, 19... In a twist of the saga, Dr. Gero himself turns into an android, becoming Android 20, to gain the immortality he needs to complete his revenge against Goku."
    },
    {
        icon:"🎬",
        titolo:"The anime debuted on Fuji TV in 1986",
        testo:"The animated series produced by Toei Animation first aired in Japan on February 26, 1986 on Fuji TV, just over a year after the manga's debut. It was the start of an almost uninterrupted production that, across Dragon Ball, Z, GT, Super and Daima, spans almost forty years of episodes."
    },
    {
        icon:"💛",
        titolo:"Why is the Super Saiyan blond? A production anecdote",
        testo:"According to an anecdote often told by the production staff, the Super Saiyan's straight blond hair also came about for practical reasons: it was simpler and faster to draw and color than black hair with all its shading, no small advantage for a weekly anime on an always tight production schedule."
    },
    {
        icon:"👑",
        titolo:"Vegeta was meant to be a throwaway villain",
        testo:"When he was introduced in the Saiyan saga, Vegeta wasn't meant to become a permanent character: like many shōnen manga villains, he was supposed to be defeated and disappear from the story. His success with readers was so great, however, that Toriyama decided to keep him around, turning him into one of the most beloved and complex protagonists of the entire series."
    },
    {
        icon:"🌺",
        titolo:"The Kamehameha is named after a real Hawaiian king",
        testo:"Goku's most iconic energy technique shares its name with Kamehameha I, the ruler who in the 19th century first unified the Hawaiian Islands under a single kingdom. Toriyama chose the name mainly for the punchy sound of the word, but the historical reference is no coincidence and is often cited among the series' trivia."
    },
    {
        icon:"🎭",
        titolo:"Dragon Ball GT wasn't written by Toriyama",
        testo:"Unlike the other series, Dragon Ball GT (1996-1997) didn't originate from a Toriyama story: the author provided only some initial concepts and the character designs, while the script and plot were developed entirely by the Toei Animation staff. That's one reason why GT is often considered separate from the more \"authorial\" continuity of the rest of the franchise."
    },
    {
        icon:"🔄",
        titolo:"With Super, Toriyama went back to writing himself",
        testo:"After keeping his distance during Dragon Ball GT, Toriyama took an active role again with Dragon Ball Super (2015), personally writing the original story of the films Battle of Gods and Resurrection 'F' on which the series is based, and overseeing the scripts of the following episodes far more closely."
    },
    {
        icon:"🧬",
        titolo:"Cell is a mosaic of all the enemies seen so far",
        testo:"Cell was conceived as a \"bio-android\" built by Dr. Gero with the DNA of the strongest warriors Goku had met up to that point, Saiyans included, plus Namekian cells and Android technology. That's why his forms (Imperfect, Semi-Perfect, Perfect) show techniques and even physical traits reminiscent of Piccolo, Vegeta, Frieza and Androids 17 and 18, whom he absorbs in the story."
    },
    {
        icon:"🕯️",
        titolo:"Akira Toriyama passed away in March 2024",
        testo:"Akira Toriyama passed away on March 1, 2024 at the age of 68; the news was made public a week later, on March 8, prompting a wave of tributes from fans and fellow creators around the world. Until the last months of his life he had continued to work personally on Dragon Ball Daima, his last project connected to the series."
    },
    {
        icon:"🖋️",
        titolo:"Daima was a project Toriyama truly wanted",
        testo:"Unlike GT, Dragon Ball Daima (2024-2025) came from an original idea by Toriyama himself, who wrote its script and closely followed its production until his death. It is considered his last completed work in the franchise, a return to the more adventurous and lighthearted tone of the original Dragon Ball."
    },
    {
        icon:"🌍",
        titolo:"One of the best-selling manga of all time",
        testo:"With over 260 million copies sold worldwide across its 42 original volumes, Dragon Ball is one of the best-selling manga series in history, published and adapted in dozens of countries on every continent. Its influence can still be seen today in much of the action manga and anime that followed, from Naruto to My Hero Academia."
    },
    {
        icon:"🥋",
        titolo:"Inspired by martial arts films and Jackie Chan",
        testo:"Besides Journey to the West, another great source of inspiration for Toriyama was the kung fu and martial arts films he loved to watch, especially those of Jackie Chan: the mix of spectacular fights and physical comedy that defines films like Drunken Master is clearly reflected in the tone of Dragon Ball's early story arcs."
    },
    {
        icon:"🔤",
        titolo:"Why \"Z\"? It was meant to be the end of the story",
        testo:"\"Z\", the last letter of the Latin alphabet, was chosen for the title Dragon Ball Z precisely to suggest the closing chapter of the saga, originally conceived as the last great act of Goku's story. The series' huge commercial success, however, convinced the publisher and producers to continue well beyond those initial plans."
    },
    {
        icon:"⭐",
        titolo:"The Dragon Balls and their stars",
        testo:"The seven Dragon Balls are marked by a number of red stars ranging from one to seven, a simple but effective visual detail designed to make them instantly recognizable to both characters and readers. The idea of magical objects collected in a numbered set, able to grant a wish once reunited, once again recalls the mythology of Journey to the West."
    },
    {
        icon:"✂️",
        titolo:"The first Western dubs were heavily censored",
        testo:"The first Western TV versions of Dragon Ball Z, such as the Ocean dub broadcast in North America in the '90s, cut violent scenes and changed dialogue and even the original music to fit the children's TV standards of the time. Only with later uncensored home video releases could Western audiences see the series closer to the original Japanese version."
    }
];


/*==========================
SAGA DATA (booklet library + dedicated pages)
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
    id:"db1", era:"db", title:"The Adventure Begins", subtitle:"Pilaf Saga & Tenkaichi Tournament",
    icon:"road", range:"1–28", total:28, filler:2, fillerNote:null,
    characters:["Goku","Bulma","Master Roshi","Krillin"],
    sections:[
        {heading:"A boy in the forest",
        paragraphs:[
            "It all begins in the forest at the foot of Mount Paozu, where a monkey-tailed boy named Son Goku lives alone, as strong as an adult and as naive as a puppy. He has never seen a car, doesn't know what a city is, and believes the four-star Dragon Ball left to him by his grandfather Gohan is simply a family heirloom.",
            "His meeting with the young inventor Bulma, who is searching for the legendary Dragon Balls that can grant a wish, draws him into a journey that will change his life forever. The two set off in the Capsule House, a portable car-home, starting a road adventure that alternates comic moments with the first real dangers."
        ]},
        {heading:"Pilaf's gang and the first companions",
        paragraphs:[
            "Along the way they are joined by companions destined to remain in legend forever: the elderly Master Roshi, Goku's future teacher and owner of the three-star ball; the fighting monk Krillin, who will become his rival and best friend; the shapeshifting pig Oolong and the cat Puar, both able to change form at will.",
            "Together they face the petty Emperor Pilaf, a small-time tyrant who wants to use the balls to conquer the world with his henchmen Shu and Mai. His schemes, often mocked by the series itself, are still dangerous enough to put the group's lives at risk more than once."
        ]},
        {heading:"Three years of training",
        paragraphs:[
            "The tone changes when Goku trains for three years under Master Roshi alongside Krillin, in a dojo where discipline and sacrifice count for more than natural talent. The trials are exhausting: deliveries on foot carrying huge weights, work in the fields, races against time, all designed to build physical and mental endurance even before fighting technique.",
            "It is here that Goku learns the Kamehameha, the energy technique that will stay with him for his whole career, and discovers that true strength comes from patient repetition, not from an innate gift."
        ]},
        {heading:"The 21st Tenkaichi Tournament",
        paragraphs:[
            "The arc closes with the 21st Tenkaichi Tournament, the most important martial arts tournament in the world, where Goku faces real rivals from different schools for the first time, including a mysterious masked fighter named Jackie Chun, who hides a surprising identity.",
            "This saga lays the foundations for everything to come: friendship, the search for the Dragon Balls, tournaments as a testing ground and the steady growth of a hero who, episode after episode, stops being a wild child and becomes the strongest warrior in the universe."
        ]}
    ]
},
{
    id:"db2", era:"db", title:"The Red Ribbon Army", subtitle:"Red Ribbon Army, General Blue, Commander Red & Baba",
    icon:"flag", range:"29–77", total:49, filler:5, fillerNote:null,
    characters:["Goku","Commander Red","General Blue","Tao Pai Pai"],
    sections:[
        {heading:"Grandpa Gohan's ball",
        paragraphs:[
            "While searching for the four-star ball, the lost keepsake of his grandfather Gohan, Goku clashes with the Red Ribbon Army, a global criminal force led by the ruthless Commander Red, determined to collect all the Dragon Balls to gain unlimited wealth and power.",
            "Alone, little Goku dismantles military bases, tanks and entire squads of soldiers with strength and ingenuity, proving that Master Roshi's training has paid off far beyond expectations."
        ]},
        {heading:"General Blue and Commander Red",
        paragraphs:[
            "Among his opponents, General Blue stands out for his hypnosis and icy cruelty, able to paralyze Goku with a glance in one of the saga's tensest fights. At the top of the organization, the tiny but fierce Commander Red rules through terror, ready to eliminate his own men for a single failure.",
            "The rivalries inside the army, between ambitious generals and terrified subordinates, offer an almost satirical look at corrupt power, with Goku often benefiting from his enemies' organizational chaos."
        ]},
        {heading:"Tao Pai Pai and Korin Tower",
        paragraphs:[
            "The real turning point comes with Tao Pai Pai, the ultimate assassin hired to eliminate Goku: a fight that ends in a humiliating defeat for the protagonist, who is forced into a second, grueling training on Korin Tower to finally face him as an equal.",
            "Here Goku drinks the Sacred Water and befriends the cat master Korin, the tower's guardian, gaining the strength he needs for a rematch that completely reverses the outcome of their first fight."
        ]},
        {heading:"The last ball and Baba's tournament",
        paragraphs:[
            "After the army's fall, the search for the last ball leads Goku to the fortune teller Baba, Master Roshi's sister, who holds a small tournament among her strongest warriors as a test to win back the ball: an episode that introduces new rivals and sets the stage for the next tournament.",
            "It is a saga of growth and of the first real losses: beloved characters die, come back to life thanks to the Dragon Balls, and Goku learns that strength isn't enough without intelligence and determination, themes that will stay with him throughout his fighting career."
        ]}
    ]
},
{
    id:"db3", era:"db", title:"The Demon Piccolo", subtitle:"Tien, King Piccolo & Piccolo Jr.",
    icon:"crown", range:"78–153", total:76, filler:4, fillerNote:null,
    characters:["Goku","Tien","King Piccolo","Piccolo"],
    sections:[
        {heading:"The 22nd Tournament and the Crane School",
        paragraphs:[
            "At the 22nd Tenkaichi Tournament Goku faces the Crane School, represented by the cold, talented Tien and his telepathic companion Chiaotzu: a technical, ruthless clash that raises the tournament to unprecedented heights for the first time, introducing techniques such as the Tri-Beam and the power of the third eye.",
            "The tournament ends with a surprise victory that leaves its mark on every participant, and sows the first doubts about the real difference between honest training and forbidden techniques, such as the brainwashing Tien suffered at the hands of his master."
        ]},
        {heading:"The awakening of King Piccolo",
        paragraphs:[
            "Soon after, an ancient threat rises again: King Piccolo, an evil demon sealed in a jar centuries earlier by Mutaito, breaks free and spreads chaos, killing legendary masters and conquering the planet through terror, in one of the darkest sequences of the entire original work.",
            "Goku, now a young adult, must face him in a fight that marks the series' first true point of no return, with painful losses among his allies and a tension the original manga had never reached before."
        ]},
        {heading:"Piccolo Jr. and King Kai's training",
        paragraphs:[
            "Defeated and on the verge of death, King Piccolo spawns a son and heir, Piccolo Jr., before he dies. The young demon sets his sights on the 23rd Tenkaichi Tournament to avenge his father, while Goku, killed in battle, reaches the Other World and trains under King Kai, Lord of the Worlds, learning the Kaio-ken technique.",
            "This plot device introduces for the first time the idea of an afterlife where you can train, an element that will return many times in the series' mythology over the following years."
        ]},
        {heading:"The 23rd Tenkaichi Tournament",
        paragraphs:[
            "The final duel between Goku and Piccolo Jr., with the arena destroyed and blows that can split mountains, brings the original Dragon Ball story to an epic close, with a twist that reverses the fight in its final moments.",
            "The arc symbolically opens the door to the next saga, where Piccolo, defeated but not killed, will eventually choose to ally himself with his old enemy, laying the groundwork for one of the most meaningful friendships in all of Dragon Ball Z."
        ]}
    ]
},
{
    id:"dbz1", era:"dbz", title:"The Saiyans Arrive", subtitle:"Saiyan Saga",
    icon:"burst", range:"1–39", total:39, filler:5, fillerNote:null,
    characters:["Goku","Raditz","Vegeta","Nappa","Piccolo","Gohan"],
    sections:[
        {heading:"Raditz and the truth about Goku",
        paragraphs:[
            "Years after the defeat of Piccolo Jr., a warrior with a tail like Goku's lands on Earth: he is Raditz, Goku's older brother, who reveals a shocking truth. Goku is not human but a Saiyan, a warrior from a race of space conquerors, sent as a baby to destroy the planet before losing his memory in a childhood accident.",
            "Raditz kidnaps little Gohan, Goku's son, as leverage to force his brother to join him in conquering other worlds, also revealing the existence of two other surviving Saiyans, far more dangerous than he is."
        ]},
        {heading:"The sacrifice of Piccolo and Goku",
        paragraphs:[
            "To stop Raditz and save his son, Goku is forced into an unthinkable alliance with Piccolo, his old enemy. Only by joining forces can they immobilize the Saiyan, but the final blow costs both of them their lives: Piccolo sacrifices himself to fire the decisive attack, and Goku is crushed to death together with Raditz.",
            "The sacrifice is one of the most iconic moments of the series and introduces the concept of the Eyes of Kaio and of an afterlife full of souls ready to train, while on Earth Bulma and the others start preparing for the coming attack."
        ]},
        {heading:"The wait and the training",
        paragraphs:[
            "With Goku in the Other World for a year of extraordinary training under King Kai, the Z Fighters left on Earth (Piccolo, Krillin, Tien, Chiaotzu and Yamcha) prepare for the worst, even training a young Gohan who can release a hidden power when in danger.",
            "Piccolo, meanwhile, trains Gohan with very harsh methods, laying the foundations of a bond that will become one of the most moving in the entire series."
        ]},
        {heading:"Vegeta and Nappa on Earth",
        paragraphs:[
            "The real threat arrives a year later: Vegeta, Prince of the Saiyans, and the gigantic Nappa land on Earth looking for the Dragon Balls to become immortal. The Z Fighters put up resistance but pay a very high price: Yamcha, Chiaotzu, Tien and Piccolo himself fall one after another to Nappa's devastating power.",
            "Only when a powered-up Goku returns from the Other World do the scales finally begin to tip in Earth's favor."
        ]},
        {heading:"The Great Ape transformation",
        paragraphs:[
            "The final battle against Vegeta, culminating in his transformation into a Great Ape under an artificial moon of his own making, brings the heroes to the brink of total defeat: only one last, desperate team effort by Gohan, Krillin and an exhausted Goku manages to stop him.",
            "Vegeta flees defeated and humiliated, but Earth has now learned it isn't alone in the universe, and the Z Fighters prepare for a journey that will take them far beyond the borders of their own planet."
        ]}
    ]
},
{
    id:"dbz2", era:"dbz", title:"Namek in Flames", subtitle:"Namek, Captain Ginyu & Frieza",
    icon:"planet", range:"40–107", total:68, filler:10, fillerNote:null,
    characters:["Goku","Gohan","Vegeta","Frieza","Captain Ginyu"],
    sections:[
        {heading:"The journey to Namek",
        paragraphs:[
            "To revive the fallen with Earth's Dragon Balls, now unusable after a single wish, Bulma, Gohan and Krillin set off for planet Namek, home to other native balls. The interstellar journey, aboard a spaceship salvaged from the remains of the Saiyan invasion, marks the series' first real leap in scale, leaving Earth behind from this moment on.",
            "There they discover that the galactic emperor Frieza, the same tyrant who wiped out the Saiyan people years earlier, is already gathering the native balls to become immortal, backed by an army of soldiers and scientists."
        ]},
        {heading:"The race for the balls and Vegeta",
        paragraphs:[
            "Vegeta is also on the green planet, having survived the battle on Earth and seeking redemption and personal power, ready to betray anyone to gain immortality before Frieza. His presence upsets the balance further, creating a three-way war between the Earthlings, Frieza and the Saiyan prince.",
            "Meanwhile the Namekians, a peaceful people with extraordinary regenerative and telepathic abilities, desperately try to protect their balls from the invaders, revealing new details about their culture and their connection with Kami, Earth's guardian."
        ]},
        {heading:"The Ginyu Force",
        paragraphs:[
            "Frieza's special forces, the infamous Ginyu Force, bring fights as absurd as they are deadly: five warriors with theatrical poses and unique powers, including the famous body swap between Captain Ginyu and Goku, which forces the heroes into desperate strategies to get back into their original bodies.",
            "The episode, among the most beloved for its tone halfway between comic and tense, shows how even the most powerful enemies can be beaten with ingenuity rather than brute force alone."
        ]},
        {heading:"Frieza's true face",
        paragraphs:[
            "When Goku finally reaches Namek after recovering from his wounds, Frieza's true nature comes to light: a tyrant who can transform into ever more devastating forms, each hidden behind an apparently weaker look than the last, up to a final, almost indestructible form.",
            "The revelation that Frieza personally destroyed the Saiyans' home planet out of fear of the Super Saiyan legend adds a layer of personal tragedy to the whole story, fueling the anger of both Goku and Vegeta."
        ]},
        {heading:"Krillin's death and the birth of the Super Saiyan",
        paragraphs:[
            "Krillin's death at the hands of Frieza, who blows him up before Goku's eyes after pretending to call a truce, unleashes an uncontrollable rage in the protagonist, driving him past a limit considered legendary for millennia.",
            "So the first Super Saiyan in twenty thousand years is born: golden hair, an electric aura and a power finally able to stand up to the galactic emperor, in one of the most celebrated transformations in the history of Japanese animation."
        ]},
        {heading:"Escape from an exploding planet",
        paragraphs:[
            "The final battle against Frieza, on a collapsing planet about to explode and followed by a daring escape into space aboard a Namekian ship, closes one of the most celebrated story arcs of the entire series, redefining forever what it means to be a Saiyan warrior.",
            "On Earth, meanwhile, the Dragon Balls are used to bring the fallen back to life and even to move all the surviving Namekians to a new planet, ending the story on a bittersweet but hopeful note."
        ]}
    ]
},
{
    id:"dbz3", era:"dbz", title:"The Shadow of Garlic Jr.", subtitle:"Garlic Jr. Saga (entirely filler)",
    icon:"vortex", range:"108–118", total:11, filler:11, fillerNote:"100% filler",
    characters:["Gohan","Piccolo","Krillin","Garlic Jr."],
    sections:[
        {heading:"A forgotten enemy",
        paragraphs:[
            "While Goku is still lost in space after escaping Namek, Earth must face alone a threat never told in the original manga: Garlic Jr., an immortal demon already defeated years earlier by Goku's father in a battle never shown directly, returns seeking revenge.",
            "Helping him is the mysterious Black Water Mist, a substance that awakens the darkest and most violent instincts of anyone who breathes it, turning ordinary people into aggressive puppets at his service."
        ]},
        {heading:"Gohan and Piccolo, alone against everything",
        paragraphs:[
            "With Goku away, it falls to Piccolo and a young Gohan, in his first real test as a lead without his father at his side, to defend the planet. The arc was created entirely for the anime, to fill the gap with the manga, but it deepens the bond between master and pupil in a way the comic hadn't yet had the chance to do.",
            "The responsibility weighing on Gohan's shoulders, forced to grow up fast without his father's support, anticipates themes that will become central in later years of the series."
        ]},
        {heading:"The Dead Zone",
        paragraphs:[
            "Garlic Jr. opens a rift to the Dead Zone, a dark, timeless dimension from which he can never escape if sealed inside: the final challenge is to force him across that threshold before it is too late for the whole planet.",
            "Although it isn't part of the manga's continuity, this saga has become a fandom classic, even being referenced years later in Dragon Ball Super, proof of how much these \"extra\" stories left their mark on the series' imagination."
        ]}
    ]
},
{
    id:"dbz4", era:"dbz", title:"The Androids and Cell's Perfection", subtitle:"Trunks, Androids, Imperfect/Perfect Cell & Cell Games",
    icon:"machine", range:"119–194", total:76, filler:15, fillerNote:null,
    characters:["Goku","Vegeta","Trunks","Cell","Gohan","Android 18"],
    sections:[
        {heading:"A warrior from the future",
        paragraphs:[
            "A mysterious Saiyan warrior arrives from the future to warn the Z Fighters: in three years, two androids created by Dr. Gero, a scientist of the disbanded Red Ribbon Army, will bring death and destruction on a planetary scale. That warrior is Trunks, the son of Vegeta and Bulma, from a devastated timeline where almost all the heroes are already dead.",
            "His revelation, including the news of Goku's coming death from a heart disease, kicks off a grueling period of training and a race against time to change a future already written."
        ]},
        {heading:"The awakening of Androids 17 and 18",
        paragraphs:[
            "When Androids 17 and 18 awaken, they turn out to be more unpredictable than expected: capricious, almost playful in their cruelty, they escape the control of Dr. Gero himself and kill him first. Their boredom and lack of any real goal make them even more unpredictable than the series' classic villains.",
            "But the real threat is a third experiment, kept secret even from the other androids: Cell, a bioengineered being born from the cells of Goku, Vegeta, Frieza, Piccolo and other legendary warriors, able to absorb the androids to complete his evolution."
        ]},
        {heading:"The Hyperbolic Time Chamber",
        paragraphs:[
            "The race to stop Cell before he reaches his perfect form takes up the heart of the saga, with the Hyperbolic Time Chamber: a dimension where a year equals a single day outside, but where gravity and extreme isolation test even the strongest.",
            "It is here that Vegeta, determined never again to be surpassed by Goku, is the first to unlock the second-level Super Saiyan, a power even more devastating than the first golden transformation."
        ]},
        {heading:"The Cell Games",
        paragraphs:[
            "After the attempt to stop his evolution fails, Cell absorbs both androids and reaches his Perfect Form, then organizes his own tournament, the Cell Games, challenging the entire planet to stop him in front of the world's cameras.",
            "Goku surprises everyone by withdrawing after the first round to make way for a young Gohan, convinced that the boy hides a potential greater than his own, despite general protests over an apparently incomprehensible choice."
        ]},
        {heading:"Gohan's rage",
        paragraphs:[
            "It is here that a teenage Gohan, pushed past every limit by the death of his friend Android 16 and by years of repressed anger, unlocks a power not even Goku possesses, in one of the most celebrated climaxes of the entire saga.",
            "Goku's final sacrifice, teleporting with Cell far from Earth to save the planet from a final explosion, seems like the end, but the story still has one last, surprising chapter in store before the final victory."
        ]}
    ]
},
{
    id:"dbz5", era:"dbz", title:"The Other World Tournament", subtitle:"Other World Saga (entirely filler, with King Kai)",
    icon:"halo", range:"195–207", total:13, filler:13, fillerNote:"100% filler",
    characters:["Goku","King Kai","Pikkon"],
    sections:[
        {heading:"The choice to stay dead",
        paragraphs:[
            "Having died saving Earth from Cell's self-destruction, Goku chooses to remain in the afterlife instead of returning with the Dragon Balls, convinced his presence keeps drawing threats to the planet. It's a decision that surprises friends and family and further defines the protagonist's almost reckless character.",
            "While waiting for a chance to return, Goku decides to make use of his time by training and taking part in life in the Other World, finding that even death, in Dragon Ball, has its adventures."
        ]},
        {heading:"King Kai's Tournament",
        paragraphs:[
            "He takes part in the Other World Tournament organized by King Kai, a lighthearted and at times comic event that gathers the greatest departed fighters in the history of the universe, with bizarre rules and an audience of souls and minor deities.",
            "Entirely original to the anime and with no counterpart in the manga, this saga works as a more relaxed interlude after the tension of the Cell Games, exploring the bizarre, fairy-tale side of Dragon Ball's afterlife."
        ]},
        {heading:"Pikkon, the Other World rival",
        paragraphs:[
            "Among his opponents, Pikkon stands out: a West Other World warrior with a haughty manner and extraordinary power, who gives Goku one of the most intense fights ever seen in a \"friendly\" setting, pushing him to use techniques never shown before, such as Kaio-ken combined with Super Saiyan.",
            "The tournament comes to an abrupt end when Goku learns that a huge threat is about to return to Earth: Babidi, a wizard able to awaken Majin Buu. From here on, Goku will finally get permission to return to the planet for a single day, setting off the next chapter."
        ]}
    ]
},
{
    id:"dbz6", era:"dbz", title:"The Great Saiyaman", subtitle:"Great Saiyaman Saga & 25th Tenkaichi Tournament",
    icon:"sun", range:"208–232", total:25, filler:10, fillerNote:null,
    characters:["Gohan","Videl","Goten","Trunks"],
    sections:[
        {heading:"Seven years later",
        paragraphs:[
            "Seven years after Cell's defeat, Earth enjoys an unusual period of peace. Gohan, now a teenager, starts high school and leads a double life as a model student and a masked superhero, the clumsy but sincere Great Saiyaman, protecting the city without revealing his identity.",
            "The saga's tone, much lighter than the rest of the series, shows an almost school-comedy side, with Gohan dealing with tests, classmates and his first teenage embarrassments."
        ]},
        {heading:"Videl and the new friends",
        paragraphs:[
            "Meeting Videl, the determined and stubborn daughter of world champion Hercule, turns Gohan's life upside down, and he ends up teaching her to fly and training her in martial arts after she discovers part of his secret identity.",
            "Gohan also befriends new companions such as Goten, the younger brother Goku never knew, and an equally lively young Trunks, both already able to turn Super Saiyan almost as a game."
        ]},
        {heading:"The 25th Tenkaichi Tournament",
        paragraphs:[
            "The arc culminates in the 25th Tenkaichi Tournament, a lighter and more carefree event than the previous ones, where the new generation of warriors (Goten, Trunks and Videl) shows the world what they are made of, with comic combinations and the half-serious revelation of the Son family's true powers.",
            "Behind the carefree tone, however, a growing threat is hiding: in the shadow of the tournament, a wizard named Babidi watches the strongest fighters to choose his champion, silently laying the groundwork for the storm about to hit Earth."
        ]}
    ]
},
{
    id:"dbz7", era:"dbz", title:"The Fury of Majin Buu", subtitle:"Babidi, Majin Buu, Fusion & Kid Buu",
    icon:"mask", range:"233–291", total:59, filler:8, fillerNote:null,
    characters:["Goku","Vegeta","Gohan","Majin Buu","Goten","Trunks"],
    sections:[
        {heading:"The awakening of Majin Buu",
        paragraphs:[
            "The wizard Babidi awakens Majin Buu, a creature of pure energy sealed away millennia earlier by the sage Bibidi, able to regenerate from any wound and to turn his enemies into candy or cookies with a single touch, then devour them with childlike indifference.",
            "News of his awakening spreads panic among the Z Fighters, who know that no transformation seen so far automatically guarantees victory against a being practically impossible to kill for good."
        ]},
        {heading:"Vegeta's corruption",
        paragraphs:[
            "Consumed by pride and frustrated at always being one step behind Goku, Vegeta lets himself be corrupted by Babidi's magic to gain enough power to finally surpass his rival, going so far as to sacrifice part of his humanity for a duel he considers more important than saving the planet.",
            "His fight with Goku, fought almost in private, far from the others, is among the most intense and psychologically charged of the entire series, and it culminates in a sacrifice that redefines the character forever."
        ]},
        {heading:"Fusion",
        paragraphs:[
            "The battle against Buu forces the whole Son family to surpass itself: Goten and Trunks learn Fusion, the ultimate technique that merges two warriors into one for a limited time through a precisely choreographed dance, giving rise to the mighty but capricious Gotenks.",
            "Meanwhile Gohan, trained by the ancient Elder Kai on the Namekians' sacred planet, finally unlocks his Hidden Potential, reaching a level of power that surprises even him."
        ]},
        {heading:"Kid Buu, pure destruction",
        paragraphs:[
            "But Buu is an ever-evolving enemy: each defeat makes him mutate into simpler and deadlier versions, until he sheds every trace of goodness and reveals his original form, Kid Buu, pure destruction with no filters or tricks, able to destroy entire planets for pure fun.",
            "His fury forces the survivors to take refuge on King Kai's planet, while Earth is reduced to rubble in one of the most devastating sequences ever shown in the series."
        ]},
        {heading:"The final Spirit Bomb",
        paragraphs:[
            "In the final battle, Goku turns to the Spirit Bomb, energy given by every living being in the universe, in a climax that literally reaches every corner of the galaxy and requires the help of world champion Hercule to convince all of humanity to take part.",
            "The victory closes not only the Buu saga but the entire story of Dragon Ball Z, showing a ten-year time skip with a new generation ready to take up the torch, and paving the way, years later, for a new tournament and a new god."
        ]}
    ]
},
{
    id:"super1", era:"super", title:"Battle of the Gods", subtitle:"Battle of Gods Saga",
    icon:"deity", range:"1–14", total:14, filler:null, fillerNote:"few episodes, mostly original anime material",
    characters:["Goku","Beerus","Whis","Vegeta"],
    sections:[
        {heading:"Beerus's dream",
        paragraphs:[
            "Ten years after Buu's defeat, a new kind of threat appears: not a conqueror, but a God of Destruction. Beerus, a cosmic entity of immeasurable power and capricious temperament, wakes from a long sleep in search of the legendary Super Saiyan God he has dreamed about, to challenge him to battle.",
            "His cosmic role, maintaining the balance of the universe by destroying what threatens to upset it, makes him a morally ambiguous character: not evil in the traditional sense, but unpredictable and potentially lethal to anyone who annoys him."
        ]},
        {heading:"Whis and the gods' tour",
        paragraphs:[
            "At his side is the angel Whis, a guardian and teacher with even greater power than his own pupil, who accompanies Beerus on a tour of the planets in search of this opponent, spreading terror wherever they go with Beerus's extreme touchiness: irritating him is enough to risk the destruction of an entire planet.",
            "Their relationship, full of sharp banter and mutual respect, introduces for the first time the more comic and lighthearted tone that will define much of Dragon Ball Super."
        ]},
        {heading:"Bulma's birthday",
        paragraphs:[
            "When Beerus reaches Earth during Bulma's birthday party, Goku, called back from the afterlife for the occasion thanks to the Dragon Balls, accepts the challenge without hesitation, unaware of the real gap in power that separates him from the God of Destruction.",
            "The party, attended by practically every classic character in the series, also offers a rare moment of ensemble fun before the decisive battle."
        ]},
        {heading:"The Super Saiyan God",
        paragraphs:[
            "Despite the ritual help of five pure-hearted Saiyans to temporarily create the Super Saiyan God, a form able to tap into the energy of the gods, the fight shows how enormous the power gap still is, and only an unexpected gesture by Beerus himself averts tragedy.",
            "It is the start of a new era for the series: after Buu, for the first time Dragon Ball introduces a cosmic hierarchy of gods, universes and rules never explored before, laying the groundwork for the ambition that will define all of Dragon Ball Super."
        ]}
    ]
},
{
    id:"super2", era:"super", title:"The Resurrection of 'F'", subtitle:"Resurrection 'F' Saga",
    icon:"machine", range:"15–27", total:13, filler:null, fillerNote:"very few filler episodes",
    characters:["Goku","Vegeta","Frieza","Sorbet"],
    sections:[
        {heading:"Frieza's remains",
        paragraphs:[
            "The scattered remains of Frieza, destroyed years earlier on Namek, are gathered by his loyal soldiers, convinced that the Dragon Balls can bring him back to life. The wish is granted, and a Frieza reborn for revenge decides, for the first time in his life, to train seriously after centuries of arrogance built on innate talent alone.",
            "The very fact that a tyrant used to winning without effort chooses to sweat to get stronger shows how deep the humiliation he suffered on Namek runs."
        ]},
        {heading:"The surprise attack",
        paragraphs:[
            "Determined to strike where it hurts most, Frieza gathers an entire army and attacks Earth at a moment of apparent calm, catching the Z Fighters by surprise before they can react, in one of the cruelest and most unsettling sequences of the series, with several longtime allies wounded or killed within minutes.",
            "The coldness with which Frieza orchestrates his revenge, unhurried and savoring every moment, confirms his nature as a pure villain, in contrast with the more ambiguous shades of the enemies met in later years."
        ]},
        {heading:"Golden Frieza",
        paragraphs:[
            "When Goku and Vegeta arrive, Frieza reveals a new golden transformation, the fruit of his training, generating enough power to compete almost as an equal with two Super Saiyan Blues, overturning every expectation about the gap in strength between him and his old enemies.",
            "Only the timely intervention of Whis, who slows time to let the two Saiyans recover from their wounds, reverses the outcome of the fight in its final moments."
        ]},
        {heading:"A new start among the universes",
        paragraphs:[
            "The battle ends with the final destruction of the planet and Frieza's defeat, but it also marks the start of a new phase for the series: Goku, intrigued by the God of Destruction Champa, Beerus's twin brother, proposes a friendly match between their respective universes.",
            "This apparently harmless proposal will set off a series of tournaments that will change forever the scale and ambition of the entire Dragon Ball Super saga."
        ]}
    ]
},
{
    id:"super3", era:"super", title:"The Universe 6 Challenge", subtitle:"Universe 6 Saga",
    icon:"twin", range:"28–46", total:19, filler:null, fillerNote:"very few filler episodes",
    characters:["Goku","Vegeta","Cabba","Hit"],
    sections:[
        {heading:"Champa and Vados",
        paragraphs:[
            "Champa, God of Destruction of Universe 6 and Beerus's twin brother, proposes a friendly tournament between ten warriors per universe, with the Super Dragon Balls as the prize, able to grant any wish, including requests that are impossible in their own universe.",
            "It is the first real in-depth contact between Goku's Universe 7 and a parallel universe with its own history, its own heroes and even its own mirrored version of known planets."
        ]},
        {heading:"Cabba, the surviving Saiyan",
        paragraphs:[
            "Among the Universe 6 warriors, Cabba stands out: a young Saiyan who survived in a timeline where the home planet was never destroyed. His meeting with Vegeta, who becomes an unexpected mentor to him, offers a moving look at what the Saiyan people might have been without Frieza.",
            "Vegeta's emotion at finding, even in a different universe, a fragment of his lost culture adds a rare depth to an arc otherwise dominated by fighting."
        ]},
        {heading:"Hit, the assassin of time",
        paragraphs:[
            "The tournament also introduces Hit, a legendary assassin able to manipulate time with a technique almost impossible to counter, who gives Goku one of the most tactical and frustrating fights of his career, forcing him to invent countermeasures on the spot without any specific training.",
            "The duel, based more on intelligence than on brute force, is one of the most original moments of the saga."
        ]},
        {heading:"A surprise ending",
        paragraphs:[
            "In the end the tournament closes with a surprise finish that leaves Universe 6 without an official winner but with new alliances born on the field, planting the seed of a disturbing question: if universes can compete for fun, what would happen if they did so to survive?",
            "That question, deliberately left open, will become the core of the entire second half of Dragon Ball Super."
        ]}
    ]
},
{
    id:"super4", era:"super", title:"Future Trunks", subtitle:"Future Trunks Saga (Goku Black & Zamasu)",
    icon:"storm", range:"47–76", total:30, filler:null, fillerNote:"very few filler episodes",
    characters:["Trunks","Goku Black","Zamasu","Vegeta"],
    sections:[
        {heading:"A devastated future",
        paragraphs:[
            "A now adult Trunks returns from the devastated future he lives in, desperately seeking help: a new threat, identical to Goku but with a soul as black as night, is exterminating humanity planet after planet without mercy or apparent explanation.",
            "His name is Goku Black, and his hatred of mortals seems incomprehensible: none of the typical motives of earlier villains (power, revenge, conquest) seem to apply to him, making him even more disturbing."
        ]},
        {heading:"Who Goku Black really is",
        paragraphs:[
            "The truth that emerges is chilling: Black is actually Zamasu, an apprentice Kai convinced the gods must eliminate corrupt humanity to save the universe, who stole Goku's body through the Time Rings after seizing the Body Change technique.",
            "His ideology, however extreme, comes from a sincere (if distorted) observation of mortal cruelty, making him one of the most philosophically complex antagonists of the series."
        ]},
        {heading:"Timelines and the fusion of the two Zamasus",
        paragraphs:[
            "His alliance with an alternate version of himself from another timeline creates an enemy able to regenerate endlessly thanks to the immortality granted by the Kai gods. Through time travel and multiple timelines, the saga explores the darkest and most philosophical themes the series has ever tackled.",
            "The fusion of the two Zamasus into an almost immortal entity calling itself \"Fused Zamasu\", able to expand until he merges with the universe itself, brings the threat to an unprecedented scale, raising uncomfortable questions about what justice really means."
        ]},
        {heading:"Zeno's intervention",
        paragraphs:[
            "Only an extreme intervention, the erasure of the entire timeline by Zeno, the King of All, manages to end the threat, showing for the first time a power greater even than that of the gods of destruction.",
            "Zeno's appearance forever redefines the balance of power across the series' entire cosmology, introducing an entity whose word alone can erase whole universes on a whim, and setting the stage for the next arc."
        ]}
    ]
},
{
    id:"super5", era:"super", title:"The Tournament of Power", subtitle:"Universe Survival Saga",
    icon:"grid", range:"77–131", total:55, filler:null, fillerNote:"very few filler episodes",
    characters:["Goku","Vegeta","Frieza","Jiren","Gohan","Android 17"],
    sections:[
        {heading:"Zeno's decision",
        paragraphs:[
            "Zeno, the King of All, decides to clean up the multiverse: the eight remaining universes will face off in a team tournament of ten warriors each, the Tournament of Power. The universes of the losing teams will be erased from existence, turning what could have been a simple game into the highest stakes ever seen in the series.",
            "The news spreads panic among the Gods of Destruction, who are forced to quickly recruit the strongest warriors of their universes to avoid total annihilation."
        ]},
        {heading:"The Universe 7 team",
        paragraphs:[
            "Goku recruits a mixed team of old and new allies, including, surprisingly, Frieza himself, temporarily revived for the occasion in exchange for his cooperation, an unthinkable alliance that says a lot about how serious the stakes have become.",
            "Gohan, Piccolo, Android 17, Android 18, Krillin and Tien also join the team, each with a personal reason to fight to the end."
        ]},
        {heading:"Opponents from other universes",
        paragraphs:[
            "The other universes reveal extraordinary warriors: from the monks of the Tenth Universe to the mysterious fighters of the Ninth, along with assassins, robots and alien creatures of every kind, each with fighting styles radically different from anything seen so far.",
            "The pitched battle, lasting several consecutive story days, puts every character of the series to the test in elimination fights, where simply falling out of the arena is enough to be knocked out for good along with your universe."
        ]},
        {heading:"Jiren, the strongest warrior",
        paragraphs:[
            "Above them all stands the fearsome Jiren of Universe 11, considered the strongest mortal warrior of all time: a silent, disciplined fighter, apparently without weaknesses, able to repel Goku and Vegeta at once with no apparent effort.",
            "Android 17, underestimated by many, shows surprising cunning by staying in the contest longer than anyone expected, while Gohan further unlocks his potential in one of the character's last great moments in the spotlight."
        ]},
        {heading:"Ultra Instinct",
        paragraphs:[
            "Pushed to the limit by Jiren himself, Goku reaches Ultra Instinct for the first time, the ultimate form that moves the body without a single conscious thought, reacting instinctively to every attack with superhuman precision.",
            "The tournament ends with a surprise finale that saves all the participating universes thanks to a wish made with the Super Dragon Balls, but it leaves an indelible mark: for the first time victory isn't only a matter of fists, but of sacrifice, strategy and alliances between former enemies."
        ]}
    ]
},
{
    id:"gt1", era:"gt", title:"The Black Balls of Fate", subtitle:"Black Star Dragon Ball Saga",
    icon:"star", range:"1–22", total:22, filler:null, fillerNote:"original anime production, no manga source",
    characters:["Goku","Trunks","Pan","Pilaf"],
    sections:[
        {heading:"The wrong wish",
        paragraphs:[
            "A wish made by mistake by Pilaf, still obsessed with reducing Goku to his weakest form after decades of humiliation, turns him back into a child with a spell able to undo the effects of aging, giving him the body he had at the start of the original series.",
            "But the real surprise comes with the discovery that the Black Star Dragon Balls used to grant that wish have scattered across the universe, bringing a catastrophic consequence for the whole planet."
        ]},
        {heading:"An unusual crew",
        paragraphs:[
            "If they aren't found within a year, Earth is doomed to explode. Goku, now a child, sets off with his granddaughter Pan, a fighter despite her young age, and a more mature Trunks aboard a spaceship, beginning a true interstellar journey from planet to planet.",
            "The dynamic among the three, a child grandfather, a stubborn granddaughter and a now adult family friend, offers a comic, affectionate tone never seen before in this combination."
        ]},
        {heading:"Planets and monsters along the way",
        paragraphs:[
            "With no source in Toriyama's manga, as he only handled the character designs for this series, this saga takes a lighter, more episodic tone, alternating bizarre planets, local monsters and fights often shorter than Z's standards, with a streak of almost sci-fi space adventure.",
            "Each stop on the journey introduces different alien cultures, often with an underlying moral or a local twist, in a style closer to an episodic anthology than to a continuous story arc."
        ]},
        {heading:"The Dark Planet",
        paragraphs:[
            "The journey ends on the mysterious Dark Planet, where it is revealed that behind the scattering of the balls lies a far more ambitious plan, linking this apparently light adventure to a much greater and more personal threat to Goku and his family.",
            "This final twist overturns the carefree tone of the first episodes and leads directly to the next saga, which is much darker and more dramatic."
        ]}
    ]
},
{
    id:"gt2", era:"gt", title:"Baby, Super 17 and the Shadow Dragons", subtitle:"Baby Saga, Super 17 Saga & Shadow Dragon Saga",
    icon:"vortex", range:"23–64", total:42, filler:null, fillerNote:"original anime production, no manga source",
    characters:["Goku","Vegeta","Pan","Baby","Super 17"],
    sections:[
        {heading:"The Tuffle parasite",
        paragraphs:[
            "An alien parasite named Baby, the last survivor of the Tuffle people exterminated centuries earlier by the Saiyans for control of planet Plant, possesses the bodies of Earth's inhabitants one after another, including Vegeta's, in a plan of revenge that threatens to wipe the Saiyan line from the universe forever.",
            "The possession of Vegeta, which temporarily turns him into an enemy of his own allies, offers one of the most painful internal conflicts of the series, with his family forced to face someone they love in the guise of a monster."
        ]},
        {heading:"Super 17",
        paragraphs:[
            "With Baby defeated, Dr. Gero and his assistant Dr. Myuu, both back from Hell through a dimensional rift, create Super 17, the ultimate fusion of the original Android 17 and his Hell counterpart: a practically immortal enemy, able to regenerate by draining energy directly from the underworld.",
            "Only the cooperation of the real Android 17 and the Z Fighters, united against his corrupted copy, manages to break this apparently endless cycle of regeneration."
        ]},
        {heading:"The Shadow Dragons",
        paragraphs:[
            "The final arc, the darkest of all GT, opens when the Dragon Balls, overused and corrupted by decades of wishes, generate seven Shadow Dragons from their own negative energy: devastating entities, each embodying a single star of the original ball, able to reduce entire cities to rubble with a single breath.",
            "Each Shadow Dragon represents a different aspect of corruption, from the most destructive chaos to the subtlest manipulation, forcing the heroes to face them one by one all over the world."
        ]},
        {heading:"The ultimate Super Saiyan 4",
        paragraphs:[
            "Only by joining the strength of three generations of the Son family (Goku, Pan and even a redeemed Vegeta) and thanks to a transformation never seen before, do the warriors manage to stop the last and most powerful of the Shadow Dragons, the very embodiment of the corrupted Eternal Dragon.",
            "The melancholy, surprising ending closes the entire era of Dragon Ball GT with a time skip showing a peaceful future, sealing Goku's journey with one last, moving farewell to his loved ones."
        ]}
    ]
},
{
    id:"daima", era:"daima", title:"The Demon Realm", subtitle:"Dragon Ball Daima",
    icon:"gate", range:"1–20", total:20, filler:null, fillerNote:"original story written by Akira Toriyama before his death",
    characters:["Goku","Vegeta","Majin Buu","Glorio"],
    sections:[
        {heading:"A centuries-old mistake",
        paragraphs:[
            "The Demon King Gomah, ruler of the Demon Realm, discovers that centuries earlier an intervention from Earth mistakenly shrank his world to a fraction of its original size, and in revenge he casts a spell that turns Goku and his most powerful allies into children.",
            "The spell reduces not only the age but also drastically the strength of the warriors involved, upsetting the balance of power reached so far and forcing everyone to start almost from scratch."
        ]},
        {heading:"Shrunk but not beaten",
        paragraphs:[
            "Shrunk but not beaten, Goku, Vegeta, Bulma, Piccolo, Majin Buu and Uub set off for the Demon Realm itself to discover the truth and find a way back to normal, an ensemble adventure that brings together classic characters rarely seen working side by side in the same arc.",
            "Traveling with them is Glorio, a mysterious winged demon who seems to hide secrets tied to the origins of planet Earth and to the reason the Demon Realm was separated from it so long ago."
        ]},
        {heading:"Warring factions",
        paragraphs:[
            "The Demon Realm turns out to be a world divided into rival factions, populated by bizarre and unsettling creatures, where Goku and his companions must navigate fragile alliances, local power tournaments and a simmering civil war among demons, rediscovering the taste of pure adventure that defined the very first 1986 series.",
            "The return to a format closer to an episodic journey, after years of cosmic battles on a universal scale, deliberately marks a change of tone from Dragon Ball Super."
        ]},
        {heading:"Toriyama's last story",
        paragraphs:[
            "Conceived and written personally by Akira Toriyama shortly before his death in March 2024, this saga is considered the last original story to come directly from his pen: a chapter that symbolically closes the circle, taking the series back to the adventurous, fairy-tale atmosphere of its origins.",
            "For fans, Daima is a true creative testament from the author, one last journey written with the same care and the same spirit with which everything began almost forty years earlier."
        ]}
    ]
}
];
