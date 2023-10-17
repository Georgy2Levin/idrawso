export class ShowCloseListener {
    #about = document.querySelector(".about");
    #buttonsDiv = document.querySelector(".buttons-div");
    #buttonList = document.querySelector(".button-list");
    #buttonClose = document.querySelector(".button-close");
    #first = true;
    
    showListButtons(bool, foo) {
        if(this.#first == true) {
            foo();
            this.#first = false;
        }
        this.#about.hidden = true;
        this.#buttonsDiv.hidden = !bool;
        this.#buttonList.hidden = bool;    
        this.#buttonClose.hidden = !bool;
    }

    addClickListener(foo) {
        this.#buttonList.addEventListener("click", () => this.showListButtons(true, foo));
        this.#buttonClose.addEventListener("click", () => this.showListButtons(false));
    }
}
