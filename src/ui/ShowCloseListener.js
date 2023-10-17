import { showButtonsMakeSections } from "./construction.js";
import { ButtonsClickListener } from "./ButtonsClickListener.js";
import { ImgClickListener } from "./ImgClickListener.js";

export class ShowCloseListener {
    #about = document.querySelector(".about");
    #buttonsDiv = document.querySelector(".buttons-div");
    #buttonList = document.querySelector(".button-list");
    #buttonClose = document.querySelector(".button-close");
    #first = true;

    constructor() {  
        this.addClickListener();        
    }
    
    showListButtons(bool) {
        if(this.#first == true) {
            showButtonsMakeSections(addImgButtonClickListeners);
            this.#first = false;
        }
        this.#about.hidden = true;
        this.#buttonsDiv.hidden = !bool;
        this.#buttonList.hidden = bool;    
        this.#buttonClose.hidden = !bool;
    }

    addClickListener() {
        this.#buttonList.addEventListener("click", () => this.showListButtons(true));
        this.#buttonClose.addEventListener("click", () => this.showListButtons(false));
    }
}

function  addImgButtonClickListeners() {
    const buttons = new ButtonsClickListener();
    const img = new ImgClickListener();
}