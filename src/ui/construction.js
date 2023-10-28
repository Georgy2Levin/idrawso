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
    const allFotosJson = await fetch("/src/fotos.json")
                    .then(res => res.json());
    let elements = {"buttons":'',"sections":''};
    for(const key in allFotosJson) {
        const name = key.replace("-s-","&#10076;s-").replace(/-/g, " ");
        elements.buttons += `<button class="button-menu")">${name}</button>`;
        elements.sections += `<section class="${key}" hidden>${fillSection(name, allFotosJson[key])}</section>`;
    }
    divsInnerHtml(elements.buttons, elements.sections);
    foo();
}

function divsInnerHtml(buttons, sections) {
    buttonsDiv.innerHTML = `${buttons}<button class="button-menu-all">SHOW ALL</button>`;
    sectionsDiv.innerHTML = sections;
}