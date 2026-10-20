const openButton = document.getElementById("openButton");

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