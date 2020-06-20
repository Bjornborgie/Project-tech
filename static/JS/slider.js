
const carouselSlide = document.querySelector(".carousel-slide");
const carouselContainer = document.querySelector(".carousel-container");

const carouselImages = document.querySelectorAll(".carousel-slide img");
const PrevButton = document.createElement("button");



const PrevButtonText = document.createTextNode("prev");
const nextButton = document.createElement("button");
const nextButtonText = document.createTextNode("next");
const buttons = document.querySelector(".buttons");
const dotsNav = document.querySelector(".caroussel-nav");
const root = document.querySelector(":root");

carouselContainer.classList.add("javaScript-car")

PrevButton.appendChild(PrevButtonText);
nextButton.appendChild(nextButtonText);


buttons.appendChild(PrevButton);
buttons.appendChild(nextButton);







// Counter

let counter = 1;
const size = carouselImages[0].clientWidth




for (let i = 0; i < carouselImages.length - 2; i++) {
    const carNav = document.createElement("button");
    carNav.classList.add([i]);
    dotsNav.appendChild(carNav);



    const dots = Array.from(document.querySelectorAll(".caroussel-nav button"));


    for (let i = 0; i < dots.length; i++) {

        console.log(dots[i].className);

        if (counter - 1 === Number(dots[i].className)) {

            dots[i].classList.add("active");
        }
    }
}

root.style.setProperty("--size", - size + "px");

function nextButtonMath() {
    if (counter >= carouselImages.length - 1) return;
    root.style.setProperty("--animation", "transform 0.4s ease-in-out");
    const dots = Array.from(document.querySelectorAll(".caroussel-nav button"));
    dots[counter - 1].classList.remove("active");

    counter++;
    root.style.setProperty("--size", - size + "px");
    root.style.setProperty("--counter", counter);


    console.log(counter);

    for (let i = 0; i < dots.length; i++) {
        if (counter - 1 === Number(dots[i].className)) {

            dots[i].classList.add("active");
        };

    };

};

function previousButtonMath() {
    if (counter <= 0) return;
    root.style.setProperty("--animation", "transform 0.4s ease-in-out");
    const dots = Array.from(document.querySelectorAll(".caroussel-nav button"));
    dots[counter - 1].classList.remove("active");
    counter--;
    root.style.setProperty("--size", - size+ "px");
    root.style.setProperty("--counter", counter);
    console.log(counter);


    for (let i = 0; i < dots.length; i++) {
        if (counter - 1 === Number(dots[i].className)) {

            dots[i].classList.add("active");
        }

    }
}



// button listeners

nextButton.addEventListener("click", function () {
    nextButtonMath();
});


PrevButton.addEventListener("click", function () {
    previousButtonMath();
});


let dotsButtons = document.querySelectorAll(".caroussel-nav button");

for (let i = 0; i < dotsButtons.length; i++) {


    dotsButtons[i].addEventListener("click", function () {

 

        if (i - counter >= 1) {
            dotsButtons[counter - 1].classList.remove("active");
            counter = i;
            nextButtonMath();



        }
        else if (counter - i - 1 >= 2) {
            console.log("hoi");
            dotsButtons[counter - 1].classList.remove("active");
            console.log(i);
            counter = i+2;
            previousButtonMath();

        }



        else if (i + 1 > counter) {
            nextButtonMath();

        }

        else if (i + 1 < counter) {
            previousButtonMath();

        }


        else if (i + 1 == counter) {

        }

        else {

        }


    });



};






carouselSlide.addEventListener("transitionend", function () {
    if (carouselImages[counter].id === "lastClone") {
        counter = carouselImages.length - 2;
        root.style.setProperty("--animation", "none");
        dots[counter - 1].classList.remove("active");
        root.style.setProperty("--counter", counter);   
        root.style.setProperty("--size", - size +"px");
             console.log(counter);
        for (let i = 0; i < dots.length; i++) {
            if (counter - 1 === Number(dots[i].className)) {

                dots[i].classList.add("active");
            }

        }

    }


    if (carouselImages[counter].id === "firstClone") {
        root.style.setProperty("--animation", "none");
        counter = carouselImages.length - counter;
        root.style.setProperty("--counter", counter);   
        const dots = Array.from(document.querySelectorAll(".caroussel-nav button"));
        dots[counter - 1].classList.remove("active");
        root.style.setProperty("--size", - size +"px");
             for (let i = 0; i < dots.length; i++) {
            if (counter - 1 === Number(dots[i].className)) {

                dots[i].classList.add("active");
            };

        };
    };



});



