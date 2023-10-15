export class ShowElements {
    #buttonElements = document.querySelectorAll(".button-menu");
    #sectionElements = document.querySelectorAll(".sections section");
    #ACTIVE_CLASS = "active";

    show(index) {
        index = +index;
        this.#buttonElements.forEach(b => b.classList.remove(this.#ACTIVE_CLASS));
        this.#sectionElements.forEach(s => s.hidden = true);
        this.#buttonElements[index].classList.add(this.#ACTIVE_CLASS);
        this.#sectionElements[index].hidden = false;
    }
    
    showAll() {    
        this.#buttonElements.forEach(b => b.classList.remove(this.#ACTIVE_CLASS));
        this.#sectionElements.forEach(s => s.hidden = false);    
        this.#buttonElements[this.#buttonElements.length-1].classList.add(this.#ACTIVE_CLASS);
    }
}