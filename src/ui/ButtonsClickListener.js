export class ButtonsClickListener {
    #buttonElements = document.querySelectorAll(".button-menu");
    #buttonElementAll = document.querySelector(".button-menu-all");
    #sectionElements = document.querySelectorAll(".sections section");
    #ACTIVE_CLASS = "active";

    show(index) {
        index = +index;
        this.#buttonElements.forEach(b => b.classList.remove(this.#ACTIVE_CLASS));
        this.#buttonElementAll.classList.remove(this.#ACTIVE_CLASS);
        this.#sectionElements.forEach(s => s.hidden = true);
        this.#buttonElements[index].classList.add(this.#ACTIVE_CLASS);
        this.#sectionElements[index].hidden = false;
    }
    
    showAll() {    
        this.#buttonElements.forEach(b => b.classList.remove(this.#ACTIVE_CLASS));
        this.#sectionElements.forEach(s => s.hidden = false);    
        this.#buttonElementAll.classList.add(this.#ACTIVE_CLASS);
    }

    addClickListener() {
        let length = this.#buttonElements.length;
        for(let i = 0;i < length;i++) {
            this.#buttonElements[i].addEventListener("click", () => this.show(i));
        }
        this.#buttonElementAll.addEventListener("click", () => this.showAll());

    }
}