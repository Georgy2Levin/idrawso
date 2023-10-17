import { ShowCloseListener } from "./ui/ShowCloseListener.js";
import { showButtonsMakeSections } from "./ui/construction.js";
import { ButtonsClickListener } from "./ui/ButtonsClickListener.js";
import { ImgClickListener } from "./ui/ImgClickListener.js";

const detailsContainer = document.querySelector(".details-container");

const showClose = new ShowCloseListener();
showClose.addClickListener(() => showButtonsMakeSections(addImgButtonClickListeners));

function  addImgButtonClickListeners() {
    const buttons = new ButtonsClickListener();
    const img = new ImgClickListener();
}

function hideDetails() {
    detailsContainer.hidden = true;
}

window.hideDetails = hideDetails;