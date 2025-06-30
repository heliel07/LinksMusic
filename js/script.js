let btnArrow = document.getElementById("btnArrow");
let imgArrow = document.getElementById("imgArrow");
let paragraphs = document.getElementById("paragraphs");
let isArrowUp = false;

btnArrow.addEventListener('mouseenter', () => {
    imgArrow.style.filter = "invert(0)";
});

btnArrow.addEventListener('mouseleave', () => {
    imgArrow.style.filter = "invert(1)";
});

btnArrow.addEventListener('click', () => {
    if (isArrowUp) {
        imgArrow.src = "img/iconArrowBottom.png";
        paragraphs.classList.remove("hidden");
    } else {
        imgArrow.src = "img/iconArrowTop.png";
        paragraphs.classList.add("hidden");
    }
    isArrowUp = !isArrowUp;
});

