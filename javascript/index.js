//Los Angeles
function updateTime() {
   
    let losAngelesElement = document.getElementById("los-angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");


    losAngelesDateElement.innerHTML = losAngelesTime.format("LL");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small]");

    // Tokyo

let tokyoElement = document.getElementById("tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");


tokyoDateElement.innerHTML = tokyoTime.format("LL");
tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small]");

// Sydney


let sydneyElement = document.getElementById("sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");


sydneyDateElement.innerHTML = sydneyTime.format("LL");
sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small]");
 

}

updateTime();
setInterval(updateTime, 1000);

