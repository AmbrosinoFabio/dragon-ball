/*=========================================================
    DRAGON BALL
    script.js
=========================================================*/

/*==========================
BIBLIOTECA DEI LIBRICINI
==========================*/

const bookShelf=document.getElementById("bookShelf");
const eraFilter=document.getElementById("eraFilter");

let activeEra="all";

function creaIconShape(tipo){
    const wrap=document.createElement("div");
    wrap.className="icon-shape icon-"+tipo;
    wrap.innerHTML="<span></span><span></span><span></span>";
    return wrap;
}

function renderEraFilter(){
    const eras=["all",...Object.keys(eraInfo)];
    eras.forEach(era=>{
        const btn=document.createElement("button");
        btn.className="era-btn"+(era==="all"?" active":"");
        btn.textContent=era==="all"?"All eras":eraInfo[era].label;
        btn.style.setProperty("--era-color", era==="all"?"#e8b84b":eraInfo[era].color);
        btn.addEventListener("click",()=>{
            activeEra=era;
            document.querySelectorAll(".era-btn").forEach(b=>b.classList.remove("active"));
            btn.classList.add("active");
            renderBooks();
        });
        eraFilter.appendChild(btn);
    });
}

function renderBooks(){
    bookShelf.innerHTML="";
    const lista=sagaData.filter(s=>activeEra==="all"||s.era===activeEra);
    lista.forEach((saga,index)=>{
        const info=eraInfo[saga.era];
        const book=document.createElement("div");
        book.className="book";
        book.style.setProperty("--book-color", info.color);
        book.style.setProperty("--book-delay", (index%6)*0.08+"s");

        const cover=document.createElement("div");
        cover.className="book-cover";

        const spine=document.createElement("div");
        spine.className="book-spine";
        cover.appendChild(spine);

        cover.appendChild(creaIconShape(saga.icon));

        const covEra=document.createElement("span");
        covEra.className="book-era-tag";
        covEra.textContent=info.label;
        cover.appendChild(covEra);

        const covTitle=document.createElement("h4");
        covTitle.textContent=saga.title;
        cover.appendChild(covTitle);

        const covSub=document.createElement("p");
        covSub.textContent=saga.subtitle;
        cover.appendChild(covSub);

        const covEp=document.createElement("span");
        covEp.className="book-ep-tag";
        covEp.textContent="📺 "+saga.total+" episodes";
        cover.appendChild(covEp);

        book.appendChild(cover);
        book.addEventListener("click",()=>{
            window.location.href="saga.html?id="+encodeURIComponent(saga.id);
        });
        bookShelf.appendChild(book);
    });

    const shelfObserver=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    },{threshold:.15});
    document.querySelectorAll(".book").forEach(b=>shelfObserver.observe(b));
}

renderEraFilter();
renderBooks();


/*==========================
SCOUTER
==========================*/

const charSelect=document.getElementById("charSelect");

const formSelect=document.getElementById("formSelect");

const scanButton=document.getElementById("scanButton");

const scouterValue=document.getElementById("scouterValue");

const scouterWarning=document.getElementById("scouterWarning");

const scouterScreen=document.getElementById("scouterScreen");

let selectedCharacter=null;

let selectedForm=null;

Object.keys(charactersData).forEach(name=>{

    const btn=document.createElement("button");

    btn.className="char-btn";

    btn.dataset.char=name;

    btn.innerHTML=

    "<span class='char-icon'>"+charactersData[name].icon+"</span>"+

    "<span class='char-name'>"+name+"</span>";

    btn.addEventListener("click",()=>{

        selectedCharacter=name;

        selectedForm=null;

        scanButton.disabled=true;

        document.querySelectorAll(".char-btn").forEach(b=>b.classList.remove("active"));

        btn.classList.add("active");

        mostraForme(name);

        resetScouter();

    });

    charSelect.appendChild(btn);

});

/*==========================
GALLERIA PERSONAGGI
==========================*/

const characterGrid=document.getElementById("characterGrid");

function selezionaPersonaggio(nome){
    const btn=charSelect.querySelector('[data-char="'+nome+'"]');
    if(btn) btn.click();
}

function formaPiuForte(nome){
    const forme=charactersData[nome].forms;
    return forme[forme.length-1];
}

function formattaPotere(power){
    return typeof power==="number" ? power.toLocaleString("en-US") : power;
}

function powerPercent(power){
    if(power==="unlimited") return 100;
    const log=Math.log10(Math.max(power,1));
    const pct=(log-1)/(12-1)*100;
    return Math.min(100,Math.max(6,Math.round(pct)));
}

/* distintivo a raggiera condiviso da tutte le schede (stella a 10 punte) */
const BURST_POINTS="50,6 59.3,21.5 75.9,14.4 74.3,32.4 91.8,36.4 80,50 91.8,63.6 74.3,67.6 75.9,85.6 59.3,78.5 50,94 40.7,78.5 24.1,85.6 25.7,67.6 8.2,63.6 20,50 8.2,36.4 25.7,32.4 24.1,14.4 40.7,21.5";

const characterVisuals={
    "Goku":{
        tag:"SAIYAN", bg:"#241608", accent:"#ff8c1a",
        symbol:'<path d="M50,26 C64,40 68,54 60,70 C55,78 45,78 40,70 C32,54 36,40 50,26 Z" fill="ACCENT"/>'
    },
    "Vegeta":{
        tag:"SAIYAN", bg:"#160f2e", accent:"#a68cff",
        symbol:'<polygon points="26,70 26,55 34,38 42,55 50,32 58,55 66,38 74,55 74,70" fill="ACCENT"/>'
    },
    "Piccolo":{
        tag:"NAMEKIAN", bg:"#072014", accent:"#4fd98c",
        symbol:'<path d="M50,78 C34,72 26,56 30,40 C34,26 46,20 50,24 C54,20 66,26 70,40 C74,56 66,72 50,78 Z" fill="ACCENT"/>'
    },
    "Gohan":{
        tag:"SAIYAN HYBRID", bg:"#1a1408", accent:"#ffd24f",
        symbol:'<polygon points="50,34 22,26 22,64 50,74 78,64 78,26" fill="ACCENT"/>'
    },
    "Frieza":{
        tag:"MUTANT", bg:"#05171c", accent:"#5fd6ff",
        symbol:'<polygon points="50,15 68,42 50,85 32,42" fill="ACCENT"/>'
    },
    "Cell":{
        tag:"BIO-ANDROID", bg:"#191f08", accent:"#c7e84f",
        symbol:'<polygon points="50,18 78,34 78,66 50,82 22,66 22,34" fill="ACCENT"/>'
    },
    "Majin Buu":{
        tag:"MAJIN", bg:"#2a0f1c", accent:"#ff5fa0",
        symbol:'<path d="M50,22 C66,22 76,36 74,52 C72,70 60,80 46,78 C32,76 24,62 26,46 C28,30 38,22 50,22 Z" fill="ACCENT"/>'
    },
    "Trunks":{
        tag:"SAIYAN HYBRID", bg:"#0f1a24", accent:"#6fb8ff",
        symbol:'<path d="M50,14 L55,60 L50,68 L45,60 Z M34,62 L66,62 L66,68 L34,68 Z M45,68 L55,68 L55,84 L45,84 Z" fill="ACCENT"/>'
    },
    "Goten":{
        tag:"SAIYAN HYBRID", bg:"#241a08", accent:"#ffb84f",
        symbol:'<polygon points="50,15 61,40 88,40 66,57 74,83 50,67 26,83 34,57 12,40 39,40" fill="ACCENT"/>'
    },
    "Bra":{
        tag:"SAIYAN HYBRID", bg:"#240f1c", accent:"#ffa8d6",
        symbol:'<path d="M50,72 C20,50 20,25 40,25 C48,25 50,32 50,32 C50,32 52,25 60,25 C80,25 80,50 50,72 Z" fill="ACCENT"/>'
    },
    "Gogeta":{
        tag:"FUSION", bg:"#241608", accent:"#ff4f4f",
        symbol:'<polygon points="50,10 58,42 90,50 58,58 50,90 42,58 10,50 42,42" fill="ACCENT"/>'
    },
    "Vegito":{
        tag:"FUSION", bg:"#160f2e", accent:"#c8a8ff",
        symbol:'<path d="M50,22 C60,22 68,30 68,40 C68,50 60,58 50,58 C40,58 32,50 32,40 C32,30 40,22 50,22 Z M42,58 L58,58 L50,86 Z" fill="ACCENT"/>'
    },
    "Gotenks":{
        tag:"FUSION", bg:"#08141f", accent:"#4fe0e0",
        symbol:'<path d="M50,50 C50,30 66,26 66,42 C66,54 56,56 50,50 Z M50,50 C50,70 34,74 34,58 C34,46 44,44 50,50 Z" fill="ACCENT"/>'
    }
};

if(characterGrid){

    Object.keys(charactersData).forEach((nome,idx)=>{

        const info=characterBios[nome];
        const top=formaPiuForte(nome);
        const base=charactersData[nome].forms[0];
        const visual=characterVisuals[nome];
        const ruolo=info.role.split("·")[0].trim();
        const fileNum=String(idx+1).padStart(2,"0");

        const card=document.createElement("div");
        card.className="character-card";

        card.innerHTML=
            '<span class="db-corner tl"></span><span class="db-corner tr"></span>'+
            '<span class="db-corner bl"></span><span class="db-corner br"></span>'+
            '<div class="db-id">FILE Nº '+fileNum+' — '+visual.tag+'</div>'+
            '<div class="db-viewport"><svg viewBox="0 0 100 100">'+
                '<polygon points="'+BURST_POINTS+'" fill="'+visual.bg+'" stroke="'+visual.accent+'" stroke-width="2.5"/>'+
                visual.symbol.replace(/ACCENT/g,visual.accent)+
            '</svg></div>'+
            '<h4>'+nome+'</h4>'+
            '<span class="character-role">'+ruolo+'</span>'+
            '<p class="character-bio">'+info.bio+'</p>'+
            '<div class="db-field"><span>Debut</span><b>'+info.debut+'</b></div>'+
            '<div class="db-field"><span>Strongest form</span><b>'+top.name+'</b></div>'+
            '<div class="db-bar-label"><span>Power level (base)</span><b>'+formattaPotere(base.power)+'</b></div>'+
            '<div class="db-bar"><i style="--pct:'+powerPercent(base.power)+'%"></i></div>'+
            '<div class="db-bar-label"><span>Peak reading</span><b>'+formattaPotere(top.power)+'</b></div>'+
            '<div class="db-bar"><i style="--pct:'+powerPercent(top.power)+'%"></i></div>';

        const activateBtn=document.createElement("button");
        activateBtn.type="button";
        activateBtn.className="character-activate";
        activateBtn.textContent="📡 Activate on the Scouter";
        activateBtn.addEventListener("click",()=>{
            selezionaPersonaggio(nome);
            document.getElementById("scouter").scrollIntoView({behavior:"smooth"});
        });
        card.appendChild(activateBtn);

        characterGrid.appendChild(card);

    });

    const galleryObserver=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    },{threshold:.15});

    document.querySelectorAll(".character-card").forEach(c=>galleryObserver.observe(c));

}

/*==========================
CURIOSITA' (LIBRO SFOGLIABILE)
==========================*/

const triviaPages=document.getElementById("triviaPages");

if(triviaPages){

    const totalePagine=triviaData.length;
    let triviaIndex=0;

    const pageEls=triviaData.map((voce,i)=>{

        const page=document.createElement("article");
        page.className="trivia-page";

        const fold=document.createElement("span");
        fold.className="trivia-page-fold";
        page.appendChild(fold);

        const iconEl=document.createElement("div");
        iconEl.className="trivia-icon";
        iconEl.textContent=voce.icon;
        page.appendChild(iconEl);

        const titleEl=document.createElement("h3");
        titleEl.textContent=voce.titolo;
        page.appendChild(titleEl);

        const textEl=document.createElement("p");
        textEl.textContent=voce.testo;
        page.appendChild(textEl);

        const numEl=document.createElement("span");
        numEl.className="trivia-page-num";
        numEl.textContent=String(i+1).padStart(2,"0")+" / "+String(totalePagine).padStart(2,"0");
        page.appendChild(numEl);

        triviaPages.appendChild(page);
        return page;

    });

    const dotsEl=document.getElementById("triviaDots");

    const dotEls=triviaData.map((_,i)=>{
        const dot=document.createElement("button");
        dot.type="button";
        dot.className="trivia-dot";
        dot.setAttribute("aria-label","Go to page "+(i+1));
        dot.addEventListener("click",()=>vaiAllaPagina(i));
        dotsEl.appendChild(dot);
        return dot;
    });

    const counterEl=document.getElementById("triviaCounter");
    const prevBtn=document.getElementById("triviaPrev");
    const nextBtn=document.getElementById("triviaNext");

    function aggiornaLibro(){

        pageEls.forEach((page,i)=>{

            const distanza=i-triviaIndex;

            page.classList.remove("is-active","is-prev","is-next");

            if(distanza===0){

                page.classList.add("is-active");
                page.style.zIndex=totalePagine+5;
                page.style.transform="";

            }else if(distanza<0){

                page.classList.add("is-prev");
                page.style.zIndex=0;
                page.style.transform="";

            }else{

                page.classList.add("is-next");
                const offset=Math.min(distanza,4);
                page.style.zIndex=totalePagine-offset;
                page.style.transform="translate("+(offset*5)+"px,"+(offset*5)+"px) scale("+(1-offset*.015)+")";

            }

        });

        dotEls.forEach((dot,i)=>dot.classList.toggle("active",i===triviaIndex));

        counterEl.textContent="Page "+(triviaIndex+1)+" of "+totalePagine;

        prevBtn.disabled=triviaIndex===0;
        nextBtn.disabled=triviaIndex===totalePagine-1;

    }

    function vaiAllaPagina(i){
        triviaIndex=Math.max(0,Math.min(totalePagine-1,i));
        aggiornaLibro();
    }

    prevBtn.addEventListener("click",()=>vaiAllaPagina(triviaIndex-1));
    nextBtn.addEventListener("click",()=>vaiAllaPagina(triviaIndex+1));

    triviaPages.addEventListener("keydown",e=>{
        if(e.key==="ArrowRight"){ vaiAllaPagina(triviaIndex+1); }
        if(e.key==="ArrowLeft"){ vaiAllaPagina(triviaIndex-1); }
    });

    let triviaTouchStartX=null;

    triviaPages.addEventListener("touchstart",e=>{
        triviaTouchStartX=e.touches[0].clientX;
    },{passive:true});

    triviaPages.addEventListener("touchend",e=>{
        if(triviaTouchStartX===null) return;
        const dx=e.changedTouches[0].clientX-triviaTouchStartX;
        if(dx<-40) vaiAllaPagina(triviaIndex+1);
        if(dx>40) vaiAllaPagina(triviaIndex-1);
        triviaTouchStartX=null;
    },{passive:true});

    aggiornaLibro();

}

function mostraForme(nome){

    formSelect.innerHTML="";

    charactersData[nome].forms.forEach(forma=>{

        const btn=document.createElement("button");

        btn.className="form-btn";

        btn.textContent=forma.name;

        btn.addEventListener("click",()=>{

            selectedForm=forma;

            document.querySelectorAll(".form-btn").forEach(b=>b.classList.remove("active"));

            btn.classList.add("active");

            scanButton.disabled=false;

        });

        formSelect.appendChild(btn);

    });

}

const SOGLIA_ROTTURA_SCHERMO=5000000000;

const fullscreenCrack=document.getElementById("fullscreenCrack");

function rompiSchermoIntero(){

    if(!fullscreenCrack) return;

    fullscreenCrack.classList.remove("active");

    void fullscreenCrack.offsetWidth;

    fullscreenCrack.classList.add("active");

    setTimeout(()=>{

        fullscreenCrack.classList.remove("active");

    },2000);

}

function resetScouter(){

    scouterValue.textContent="— — —";

    scouterWarning.classList.add("hidden");

    scouterScreen.classList.remove("shake");

    scouterScreen.classList.remove("broken");

    if(fullscreenCrack) fullscreenCrack.classList.remove("active");

}

function formattaNumero(numero){

    return numero.toLocaleString("en-US");

}

scanButton.addEventListener("click",()=>{

    if(!selectedForm) return;

    scouterWarning.classList.add("hidden");

    scouterScreen.classList.remove("broken");

    scanButton.disabled=true;

    if(selectedForm.power==="unlimited"){

        animaValoreIllimitato();

        return;

    }

    if(selectedForm.power>=SOGLIA_ROTTURA_SCHERMO){

        animaRotturaSchermo(selectedForm.power);

        return;

    }

    animaConteggio(selectedForm.power);

});

function animaRotturaSchermo(target){

    const durata=1100;

    const inizio=performance.now();

    function step(ora){

        const progresso=Math.min((ora-inizio)/durata,1);

        const valoreAttuale=Math.floor(target*progresso);

        scouterValue.textContent=formattaNumero(valoreAttuale);

        if(progresso<1){

            requestAnimationFrame(step);

        }else{

            scouterValue.textContent=formattaNumero(target);

            rompiSchermo();

        }

    }

    requestAnimationFrame(step);

}

function rompiSchermo(){

    scouterScreen.classList.add("broken");

    rompiSchermoIntero();

    scouterWarning.textContent="💥 POWER TOO HIGH — SCREEN SHATTERED 💥";

    scouterWarning.classList.remove("hidden");

    scanButton.disabled=false;

}

function animaConteggio(target){

    const durata=1400;

    const inizio=performance.now();

    function step(ora){

        const progresso=Math.min((ora-inizio)/durata,1);

        const valoreAttuale=Math.floor(target*progresso);

        scouterValue.textContent=formattaNumero(valoreAttuale);

        if(progresso<1){

            requestAnimationFrame(step);

        }else{

            scouterValue.textContent=formattaNumero(target);

            fineScansione(target);

        }

    }

    requestAnimationFrame(step);

}

function animaValoreIllimitato(){

    const simboli=["? ? ?","# # #","∞ ∞ ∞","E R R"];

    let i=0;

    const interval=setInterval(()=>{

        scouterValue.textContent=simboli[i%simboli.length];

        i++;

    },120);

    setTimeout(()=>{

        clearInterval(interval);

        scouterValue.textContent="ERROR";

        scouterScreen.classList.add("broken");

        rompiSchermoIntero();

        scouterWarning.textContent="💥 SCOUTER OFF THE SCALE — IMMEASURABLE POWER 💥";

        scouterWarning.classList.remove("hidden");

        scanButton.disabled=false;

    },1800);

}

function fineScansione(valore){

    if(valore>9000){

        scouterWarning.textContent="⚠️ IT'S OVER 9000!! ⚠️";

        scouterWarning.classList.remove("hidden");

        scouterScreen.classList.add("shake");

        setTimeout(()=>{

            scouterScreen.classList.remove("shake");

        },400);

    }

    scanButton.disabled=false;

}

/*==========================
CONFRONTA GUERRIERI
==========================*/

const compareCharA=document.getElementById("compareCharA");
const compareFormA=document.getElementById("compareFormA");
const compareCharB=document.getElementById("compareCharB");
const compareFormB=document.getElementById("compareFormB");
const compareButton=document.getElementById("compareButton");
const compareResult=document.getElementById("compareResult");
const compareAvatarA=document.getElementById("compareAvatarA");
const compareAvatarB=document.getElementById("compareAvatarB");
const compareRowA=document.getElementById("compareRowA");
const compareRowB=document.getElementById("compareRowB");
const compareIconA=document.getElementById("compareIconA");
const compareIconB=document.getElementById("compareIconB");
const compareNameA=document.getElementById("compareNameA");
const compareNameB=document.getElementById("compareNameB");
const compareFillA=document.getElementById("compareFillA");
const compareFillB=document.getElementById("compareFillB");
const compareValueA=document.getElementById("compareValueA");
const compareValueB=document.getElementById("compareValueB");
const compareMessage=document.getElementById("compareMessage");

if(compareCharA && compareCharB){

    function popolaSelectPersonaggi(select){
        Object.keys(charactersData).forEach(nome=>{
            const opt=document.createElement("option");
            opt.value=nome;
            opt.textContent=charactersData[nome].icon+" "+nome;
            select.appendChild(opt);
        });
    }

    function popolaSelectForme(selectForme, nomePersonaggio){
        selectForme.innerHTML="";
        charactersData[nomePersonaggio].forms.forEach((forma,i)=>{
            const opt=document.createElement("option");
            opt.value=i;
            opt.textContent=forma.name;
            selectForme.appendChild(opt);
        });
    }

    function aggiornaAvatar(avatarEl, nomePersonaggio){
        avatarEl.textContent=charactersData[nomePersonaggio].icon;
    }

    popolaSelectPersonaggi(compareCharA);
    popolaSelectPersonaggi(compareCharB);
    if(compareCharB.options.length>1) compareCharB.selectedIndex=1;

    popolaSelectForme(compareFormA, compareCharA.value);
    popolaSelectForme(compareFormB, compareCharB.value);
    aggiornaAvatar(compareAvatarA, compareCharA.value);
    aggiornaAvatar(compareAvatarB, compareCharB.value);

    compareCharA.addEventListener("change",()=>{
        popolaSelectForme(compareFormA, compareCharA.value);
        aggiornaAvatar(compareAvatarA, compareCharA.value);
    });

    compareCharB.addEventListener("change",()=>{
        popolaSelectForme(compareFormB, compareCharB.value);
        aggiornaAvatar(compareAvatarB, compareCharB.value);
    });

    function scalaBarraLog(potenza){
        if(potenza==="unlimited") return 100;
        if(potenza<=0) return 2;
        const scala=Math.log10(potenza+1)/Math.log10(1e12);
        return Math.max(4, Math.min(100, scala*100));
    }

    function animaValoreBarra(el, target, durata){
        if(target==="unlimited"){
            el.textContent="∞";
            return;
        }
        const inizio=performance.now();
        function step(ora){
            const progresso=Math.min((ora-inizio)/durata,1);
            el.textContent=formattaNumero(Math.floor(target*progresso));
            if(progresso<1) requestAnimationFrame(step);
            else el.textContent=formattaNumero(target);
        }
        requestAnimationFrame(step);
    }

    compareButton.addEventListener("click",()=>{

        compareButton.disabled=true;

        const nomeA=compareCharA.value;
        const nomeB=compareCharB.value;
        const formaA=charactersData[nomeA].forms[compareFormA.value];
        const formaB=charactersData[nomeB].forms[compareFormB.value];

        let esito;
        if(formaA.power==="unlimited" && formaB.power==="unlimited"){
            esito="tie-unlimited";
        }else if(formaA.power==="unlimited"){
            esito="A";
        }else if(formaB.power==="unlimited"){
            esito="B";
        }else if(formaA.power===formaB.power){
            esito="pareggio";
        }else{
            esito=formaA.power>formaB.power?"A":"B";
        }

        const barraA=scalaBarraLog(formaA.power);
        const barraB=scalaBarraLog(formaB.power);
        const durataAnimazione=800;

        let messaggio;
        if(esito==="tie-unlimited"){
            messaggio="🤝 Both possess immeasurable power: no scouter can determine a winner.";
        }else if(esito==="pareggio"){
            messaggio="🤝 A perfect tie! The two power levels are identical.";
        }else{
            const vincitore=esito==="A"?nomeA:nomeB;
            const vincitoreForma=esito==="A"?formaA:formaB;
            const perdenteForma=esito==="A"?formaB:formaA;
            let rapportoTxt="";
            if(vincitoreForma.power!=="unlimited" && perdenteForma.power!=="unlimited" && perdenteForma.power>0){
                const rapporto=vincitoreForma.power/perdenteForma.power;
                rapportoTxt=" (about "+(rapporto>=10?Math.round(rapporto):rapporto.toFixed(1))+"× stronger)";
            }else if(vincitoreForma.power==="unlimited"){
                rapportoTxt=" (off-the-scale power)";
            }
            messaggio="🏆 <b>"+vincitore+"</b> wins the fight"+rapportoTxt+"!";
        }

        compareIconA.textContent=charactersData[nomeA].icon;
        compareIconB.textContent=charactersData[nomeB].icon;
        compareNameA.textContent=nomeA+" · "+formaA.name;
        compareNameB.textContent=nomeB+" · "+formaB.name;

        compareRowA.classList.toggle("winner", esito==="A");
        compareRowB.classList.toggle("winner", esito==="B");

        compareValueA.textContent="0";
        compareValueB.textContent="0";

        compareResult.classList.add("show");

        compareFillA.style.setProperty("--target-width", barraA+"%");
        compareFillB.style.setProperty("--target-width", barraB+"%");

        // rimuovi la classe che avvia l'animazione, forza il reflow, poi
        // riaggiungila: e il modo standard e affidabile per far ripartire
        // un'animazione CSS anche quando si ri-confronta senza cambiare
        // selezione (una semplice transition non si riavvierebbe)
        compareFillA.classList.remove("animate");
        compareFillB.classList.remove("animate");

        void compareFillA.offsetWidth;

        compareFillA.classList.add("animate");
        compareFillB.classList.add("animate");

        animaValoreBarra(compareValueA, formaA.power, durataAnimazione);
        animaValoreBarra(compareValueB, formaB.power, durataAnimazione);

        setTimeout(()=>{
            compareMessage.innerHTML=messaggio;
            compareButton.disabled=false;
        },durataAnimazione);

    });

}
