const prefix = '/500/';
const sPrefix = '/500s/';

const ACTIVE_CLASS = "active";
const about = document.querySelector(".about");
const buttonList = document.querySelector(".button-list");
const buttonClose = document.querySelector(".button-close");
const sectionsDiv = document.querySelector(".sections");
const buttonsDiv = document.querySelector(".buttons-div");
const detailsContainer = document.querySelector(".details-container");
const detailsImage = document.querySelector(".details-image");

function show(index) {
    about.hidden = true;
    const buttonElements = document.querySelectorAll(".button-menu");
    const sectionElements = document.querySelectorAll("section");
    buttonElements.forEach(b => b.classList.remove(ACTIVE_CLASS));
    sectionElements.forEach(s => s.hidden = true);    
    buttonElements[index].classList.add(ACTIVE_CLASS);
    sectionElements[index].hidden = false;
}

function showAll() {    
    const buttonElements = document.querySelectorAll(".button-menu");
    const sectionElements = document.querySelectorAll("section");
    buttonElements.forEach(b => b.classList.remove(ACTIVE_CLASS));
    sectionElements.forEach(s => s.hidden = false);    
    buttonElements[buttonElements.length-1].classList.add(ACTIVE_CLASS);
}

function getMiniatures(name, arNames) {    
    const res = arNames.map(n => {let nameExt = `${n}.jpg`;
        return `<img src="${sPrefix}${nameExt}" alt="${name}" class="miniatures" onclick="zoom('${prefix}${nameExt}')">`
})
    return res.join('');
}

function zoom(adress) {
    detailsContainer.hidden = false;
    detailsImage.setAttribute("src", adress);
}

async function showButtonsMakeSections() {
    const allFotos = fetch("/src/fotos.json")
                    .then(res => res.json());
    const objFotos = await allFotos;
    const arNamesFotos = Object.entries(objFotos);
    const elements = arNamesFotos.reduce((res, cur, i) => {      
        let nameObj = `${cur[0]}`;
        let name = nameObj.replace("-s-","&#10076;s-");
        name = name.replace(/-/g, " ");        
        res.buttons += `<button class="button-menu" onclick="show(${i})">${name}</button>`;
        res.sections += `<section class="${nameObj}" hidden>${fillSection(name, cur[1])}</section>`
        return res;
    },{"buttons":'',"sections":''});

    buttonsDiv.innerHTML = `${elements.buttons}<button class="button-menu" onclick="showAll()">SHOW ALL</button>`;
    sectionsDiv.innerHTML = elements.sections;
}

showButtonsMakeSections();

function fillSection(name, arNames) {
   return `<div class="span-section"><span class="span-title">${name}</span></div>${getMiniatures(name, arNames)}`
}

function showListButtons(bool) {
    about.hidden = true;
    buttonsDiv.hidden = !bool;
    buttonList.hidden = bool;
    buttonClose.hidden = !bool;
}

function hideDetails() {
    detailsContainer.hidden = true;
}