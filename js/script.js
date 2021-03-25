document.getElementById('trigger').addEventListener('click', () => {
    document.querySelector('.nav__list').classList.toggle('show');
    document.querySelector('.mobile-menu__btn').classList.toggle('open');
});

let acc = document.getElementsByClassName("accordion__header");
let i;


for (i=0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        let main = this.nextElementSibling;
        if (main.style.display === "block") {
            main.style.display = "none";
        } else {
            main.style.display = "block"
        }

    });
}

const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs__content");

for(let el of tabLinks) {
    el.addEventListener("click", e => {
        e.preventDefault();

        document.querySelector('.tabs li.open').classList.remove("open");
        document.querySelector('.tabs__content.open').classList.remove("open");

        const parentListItem = el.parentElement;
        parentList.classList.add("open");
        const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

        const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
        panel[0].classList.add("open");
    });
}