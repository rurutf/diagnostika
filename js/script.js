document.getElementById('trigger').addEventListener('click', () => {
    document.querySelector('.nav__list').classList.toggle('show');
    document.querySelector('.mobile-menu__btn').classList.toggle('open');
});

let acc = document.getElementsByClassName("accordeon__header");
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
