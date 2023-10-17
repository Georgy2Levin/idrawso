const prefix = '/500/';
const sPrefix = '/500s/';

const sectionsDiv = document.querySelector(".sections");
const buttonsDiv = document.querySelector(".buttons-div");

function getMiniatures(name, arNames) {    
    const res = arNames.map(n => {let nameExt = `${n}.jpg`;
        return `<img src="${sPrefix}${nameExt}" alt="${name}" class="miniatures" detail-img-src="${prefix}${nameExt}">`
})
    return res.join('');
}

function fillSection(name, arNames) {
    return `<div class="span-section"><span class="span-title">${name}</span></div>${getMiniatures(name, arNames)}`
 }

export async function showButtonsMakeSections(foo) {
    const allFotos = fetch("/src/fotos.json")
                    .then(res => res.json());
    const objFotos = await allFotos;
    const arNamesFotos = Object.entries(objFotos);
    const elements = arNamesFotos.reduce((res, cur) => {      
        let nameObj = `${cur[0]}`;
        let name = nameObj.replace("-s-","&#10076;s-");
        name = name.replace(/-/g, " ");        
        res.buttons += `<button class="button-menu")">${name}</button>`;
        res.sections += `<section class="${nameObj}" hidden>${fillSection(name, cur[1])}</section>`
        return res;
    },{"buttons":'',"sections":''});

    divsInnerHtml(elements.buttons, elements.sections);
    foo();
}

function divsInnerHtml(buttons, sections) {
    buttonsDiv.innerHTML = `${buttons}<button class="button-menu-all">SHOW ALL</button>`;
    sectionsDiv.innerHTML = sections;
}