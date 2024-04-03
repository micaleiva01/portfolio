const hidden = document.getElementById("hidden");
const seen = document.getElementById("seen");
const readMore = document.getElementById("readmore");
const readLess = document.getElementById("readless");

hidden.style.display = "none";
readLess.style.display = "none";

readMore.onclick = () => {
    hidden.style.display = "block";
    readLess.style.display = seen.style.display = "block";
    readMore.style.display = "none";
    seen.style.display = "none";
};

readLess.onclick = () => {
    hidden.style.display = readLess.style.display = "none";
    readMore.style.display = seen.style.display = "block";
};



const card = document.getElementById("card");

card.addEventListener("click",flipCard);

function flipCard() {
    card.classList.toggle("flipCard");
}