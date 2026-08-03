/*=========================================================
    DRAGON BALL
    saga.js — pagina dedicata a una singola saga
=========================================================*/

function creaIconShape(tipo){
    const wrap=document.createElement("div");
    wrap.className="icon-shape icon-"+tipo;
    wrap.innerHTML="<span></span><span></span><span></span>";
    return wrap;
}

const params=new URLSearchParams(window.location.search);
const sagaId=params.get("id");

const saga=sagaData.find(s=>s.id===sagaId);

const sagaArticle=document.getElementById("sagaArticle");
const sagaNotFound=document.getElementById("sagaNotFound");

if(!saga){

    sagaNotFound.classList.remove("hidden");

}else{

    sagaArticle.classList.remove("hidden");

    const info=eraInfo[saga.era];

    document.body.classList.add("theme-"+saga.era);
    document.body.classList.add("saga-bg-"+saga.icon);

    document.getElementById("pageTitleTag").textContent=saga.title+" | Dragon Ball";
    document.getElementById("pageDescriptionTag").setAttribute("content",
        saga.title+" ("+info.label+", episodi "+saga.range+"): "+saga.subtitle+". Storia completa della saga su Dragon Ball, il sito fan-made con la biblioteca di tutte le saghe.");

    const sagaHero=document.getElementById("sagaHero");
    sagaHero.style.setProperty("--saga-color", info.color);

    const heroIcon=document.getElementById("sagaHeroIcon");
    heroIcon.appendChild(creaIconShape(saga.icon));

    document.getElementById("sagaEra").textContent=info.label+" · "+info.years;
    document.getElementById("sagaTitle").textContent=saga.title;
    document.getElementById("sagaSubtitle").textContent=saga.subtitle;

    const statsEl=document.getElementById("sagaStats");

    const statEp=document.createElement("span");
    statEp.className="stat-chip";
    statEp.innerHTML="📺 Episodi "+saga.range+" <b>("+saga.total+" totali)</b>";
    statsEl.appendChild(statEp);

    const statFiller=document.createElement("span");
    statFiller.className="stat-chip";
    if(saga.filler!==null){
        statFiller.innerHTML="🎬 Filler: <b>"+saga.filler+"</b>"+(saga.fillerNote?" ("+saga.fillerNote+")":"");
    }else{
        statFiller.innerHTML="🎬 Filler: "+saga.fillerNote;
    }
    statsEl.appendChild(statFiller);

    const charsEl=document.getElementById("sagaCharacters");
    saga.characters.forEach(nome=>{
        const chip=document.createElement("span");
        chip.textContent=nome;
        charsEl.appendChild(chip);
    });

    const bodyEl=document.getElementById("sagaBody");
    saga.sections.forEach((sezione,i)=>{
        const sectionEl=document.createElement("section");
        sectionEl.className="saga-section";

        const h2=document.createElement("h2");
        h2.textContent=sezione.heading;
        sectionEl.appendChild(h2);

        sezione.paragraphs.forEach((testo,pIndex)=>{
            const p=document.createElement("p");
            if(i===0 && pIndex===0) p.className="saga-drop-cap";
            p.textContent=testo;
            sectionEl.appendChild(p);
        });

        bodyEl.appendChild(sectionEl);
    });

    // navigazione precedente/successiva tra le saghe, in ordine cronologico
    const indice=sagaData.findIndex(s=>s.id===saga.id);
    const precedente=sagaData[(indice-1+sagaData.length)%sagaData.length];
    const successiva=sagaData[(indice+1)%sagaData.length];

    const pagerEl=document.getElementById("sagaPager");

    const prevLink=document.createElement("a");
    prevLink.className="saga-pager-link saga-pager-prev";
    prevLink.href="saga.html?id="+encodeURIComponent(precedente.id);
    prevLink.innerHTML="<span>← Saga precedente</span><b>"+precedente.title+"</b>";
    pagerEl.appendChild(prevLink);

    const nextLink=document.createElement("a");
    nextLink.className="saga-pager-link saga-pager-next";
    nextLink.href="saga.html?id="+encodeURIComponent(successiva.id);
    nextLink.innerHTML="<span>Saga successiva →</span><b>"+successiva.title+"</b>";
    pagerEl.appendChild(nextLink);

    window.scrollTo(0,0);

}
