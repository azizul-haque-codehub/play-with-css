// Marquee slider logics
const list = document.querySelector(".list");
list.style.setProperty("--quantity", list.childElementCount);
[...list.children].forEach((element, indx) => {
    element.style.setProperty("--position", indx);
});