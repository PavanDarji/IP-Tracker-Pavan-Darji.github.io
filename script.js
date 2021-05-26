const lookUpBtn = document.querySelector(".lookup-btn");
const ipDisplay = document.querySelector(".ip-display");
const locationDisplay = document.querySelector(".location-display");
const geoDisplay = document.querySelector(".geo-display");
const device = document.querySelector(".device");


lookUpBtn.addEventListener("click", () => {

    axios.get("https://ipinfo.io/json/").then(response => {
        ipDisplay.textContent = `Your IP Address  : ${response.data.ip}`;
        locationDisplay.textContent = `Your Current Location: ${response.data.city},${response.data.region},${response.data.country}`;
        geoDisplay.textContent = `Your GEO Address : ${response.data.loc}`;
        device.textContent = `Your Network Device  : ${response.data.org}`;
        
    });
});

