import { ShowCloseListener } from "./ui/ShowCloseListener.js";

const detailsContainer = document.querySelector(".details-container");

new ShowCloseListener();

function hideDetails() {
    detailsContainer.hidden = true;
}

window.hideDetails = hideDetails;