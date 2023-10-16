import { ButtonsClickListener } from "./ui/ButtonsClickListener.js";
import { ImgClickListener } from "./ui/ImgClickListener.js";

const prefix = '/500/';
const sPrefix = '/500s/';

const about = document.querySelector(".about");
const buttonList = document.querySelector(".button-list");
const buttonClose = document.querySelector(".button-close");
const sectionsDiv = document.querySelector(".sections");
const buttonsDiv = document.querySelector(".buttons-div");
const detailsContainer = document.querySelector(".details-container");
let first = true;

function getMiniatures(name, arNames) {    
    const res = arNames.map(n => {let nameExt = `${n}.jpg`;
        return `<img src="${sPrefix}${nameExt}" alt="${name}" class="miniatures" detail-img-src="${prefix}${nameExt}">`
})
    return res.join('');
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
        res.buttons += `<button class="button-menu")">${name}</button>`;
        res.sections += `<section class="${nameObj}" hidden>${fillSection(name, cur[1])}</section>`
        return res;
    },{"buttons":'',"sections":''});

    buttonsDiv.innerHTML = `${elements.buttons}<button class="button-menu-all">SHOW ALL</button>`;
    sectionsDiv.innerHTML = elements.sections;
    addClickListeners();
}



function addClickListeners() {
    const buttons = new ButtonsClickListener();
    const img = new ImgClickListener();
}

function fillSection(name, arNames) {
   return `<div class="span-section"><span class="span-title">${name}</span></div>${getMiniatures(name, arNames)}`
}

function showListButtons(bool) {
    if(first == true) {
        showButtonsMakeSections();
        first = false;
    }
    about.hidden = true;
    buttonsDiv.hidden = !bool;
    buttonList.hidden = bool;
    buttonClose.hidden = !bool;
}

function hideDetails() {
    detailsContainer.hidden = true;
}


window.showListButtons = showListButtons;
window.hideDetails = hideDetails;