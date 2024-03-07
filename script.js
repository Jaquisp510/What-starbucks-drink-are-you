let coffeeButton = document.querySelector(".coffee-button");
let button = document.querySelector(".submit");
let result = document.querySelector(".result");

button.onclick = function() {

    let ageInput = Number(document.querySelector(".age").value);
    let weatherInput = document.querySelector(".weather").value;


    if (ageInput >= 10 && weatherInput === "Rainy") {
        result.innerHTML =
            "you started drinking coffee at " + ageInput + " and your favorite weather is " + weatherInput + "<img src='https://sev.h-cdn.co/assets/17/18/4000x2250/hd-aspect-1493829263-frapps.jpg'>" +" so you are a Frap";
    } else if (ageInput < 10 && (weatherInput === "Rainy" || weatherInput === "Cold")) {
        result.innerHTML =
            " you started drinking coffee at " + ageInput + " and your favorite weather is " + weatherInput + "<img src='https://qph.cf2.quoracdn.net/main-qimg-f21609c0b26717f54d99a2a25bf6c1d7-lq'>"+ " so you are Hot coffee";

    } else if (weatherInput === "sunny") {
        document.querySelector(".result").innerHTML =
            "Capitalize S!!";
    } else if (weatherInput === "warm") {
        document.querySelector(".result").innerHTML =
            "Capitalize W!!!";
    } else if (weatherInput === "rainy") {
        document.querySelector(".result").innerHTML =
            "Capitalize R!!";
    } else if (weatherInput === "cold") {
        document.querySelector(".result").innerHTML =
            "Capitalize C";

    } else if (ageInput > 10 && (weatherInput === "Sunny" || weatherInput === "Warm")) {
        result.innerHTML =
            "you started drinking coffee at " + ageInput + " and your favorite weather is " + weatherInput + "<img src='https://www.tastingtable.com/img/gallery/every-starbucks-refresher-ranked-worst-to-best/l-intro-1655041777.jpg'>" +" so you are a Refresher";
    } else if (ageInput < 10 && (weatherInput === "Sunny" || weatherInput === "Warm")) {
        result.innerHTML =
            "you started drinking coffee at " + ageInput + " and your favorite weather is " + weatherInput + "<img src='https://frostingandfettuccine.com/wp-content/uploads/2022/12/Caramel-Iced-Coffee-6.jpg'>" +" So you are a Iced coffee";
    }


    //         result.innerHTML =
    //             "ur older than 9";

    //     }
    //     let weatherInput = document.querySelector(".weather").value;
    //     console.log(ageInput);
    //     if (weatherInput === "rainy") {
    //         result.innerHTML =
    //             "ur older than 9";

    //     } else if (weatherInput === "sunny") {
    //         result.innerHTML =
    //             "ur younger than 9";

    //     }

};