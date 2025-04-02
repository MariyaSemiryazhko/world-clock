//Los Angeles
function updateTime() {
   
    let losAngelesElement = document.getElementById("los-angeles");
if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");


    losAngelesDateElement.innerHTML = losAngelesTime.format("LL");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small]");

    }
    // Tokyo

    let tokyoElement = document.getElementById("tokyo");
    
    if (tokyoElement) {
        let tokyoDateElement = tokyoElement.querySelector(".date");
        let tokyoTimeElement = tokyoElement.querySelector(".time");
        let tokyoTime = moment().tz("Asia/Tokyo");


        tokyoDateElement.innerHTML = tokyoTime.format("LL");
        tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small]");
    }
// Sydney


    let sydneyElement = document.getElementById("sydney");
    if (sydneyElement) {
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");


sydneyDateElement.innerHTML = sydneyTime.format("LL");
        sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small]");
        
        }
 

}


function updateCity(event) {
    let cityTimeZone = event.target.value;
    if(cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    
    let citiesElement = document.getElementById("cities");
    citiesElement.innerHTML = `
    <div class="city">
              <div>
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format("LL")}</div>
              </div>
              <div class="time"> ${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small> </div>
            </div>
    
    `;
}

updateTime();
setInterval(updateTime, 1000);







let citiesSelectorElement = document.getElementById("city");

citiesSelectorElement.addEventListener("change", updateCity);