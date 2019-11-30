const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-bar");
    const proba = document.querySelector(".proba");

    burger.addEventListener("click", () => {
        //Toggle navigation bar
        nav.classList.toggle("nav-active");

        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();