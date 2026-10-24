const openButton = document.getElementById("openButton");
const noButton = document.getElementById("noButton");
noButton.addEventListener("mouseenter", function () {

    const maxX = 80;
    const maxY = 30;

    const randomX =
        (Math.random() * maxX * 2) - maxX;

    const randomY =
        (Math.random() * maxY * 2) - maxY;

    noButton.style.transform =
        `translate(${randomX}px, ${randomY}px)`;

    noBubble.classList.add("show");
});
const noBubble = document.getElementById("noBubble");

noButton.addEventListener("click", function () {
    noBubble.classList.add("show");
});

openButton.addEventListener("click", function () {

    document.querySelector(".opening").classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "about.html";
    }, 800);

});
function chooseYes() {

    const question =
        document.getElementById("happinessQuestion");

    const loading =
        document.getElementById("happinessLoading");

    const result =
        document.getElementById("happinessResult");

    const fill =
        document.getElementById("loadingFill");

    const percent =
        document.getElementById("loadingPercent");


    question.style.display = "none";

    loading.style.display = "block";

    result.style.display = "none";


    let progress = 0;


    const interval = setInterval(function () {

        progress++;

        fill.style.width = progress + "%";

        percent.textContent = progress + "%";


        if (progress >= 100) {

            clearInterval(interval);


            setTimeout(function () {

                loading.style.display = "none";

                result.style.display = "block";

            }, 400);

        }

    }, 25);

}



function chooseNo() {

    document.getElementById(
        "happinessQuestion"
    ).style.display = "none";


    document.getElementById(
        "happinessSad"
    ).style.display = "block";

}



function tryAgain() {

    document.getElementById(
        "happinessSad"
    ).style.display = "none";


    document.getElementById(
        "happinessQuestion"
    ).style.display = "block";

}
const loadingScreen =
    document.getElementById("loadingScreen");

const loadingFill =
    document.querySelector(".loading-fill");

const loadingPercent =
    document.getElementById("loadingPercent");

let loadingProgress = 0;

const loadingTimer = setInterval(function () {

    loadingProgress += 2;

    loadingFill.style.width =
        loadingProgress + "%";

    loadingPercent.textContent =
        loadingProgress + "%";

    if (loadingProgress >= 100) {

        clearInterval(loadingTimer);

        setTimeout(function () {
            loadingScreen.classList.add("hide");
        }, 400);

    }

}, 60);
