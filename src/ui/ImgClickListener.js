export class ImgClickListener {
    #detailsContainer = document.querySelector(".details-container");
    #detailsImage = document.querySelector(".details-image");
    #miniatures = document.querySelectorAll(".miniatures");

    constructor() {
        this.addClickListener();
    }

    zoom(adress) {
        this.#detailsContainer.hidden = false;
        this.#detailsImage.setAttribute("src", adress);
    }
    
    addClickListener() {
        const length = this.#miniatures.length;
        for(let i = 0;i < length;i++) {
            const mini = this.#miniatures[i];
            let adress = mini.getAttribute("detail-img-src");
            mini.addEventListener("click", () => this.zoom(adress));
        }
    }
}