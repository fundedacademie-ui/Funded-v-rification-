function updateTime(){

const time = new Date().toLocaleTimeString(
"fr-FR",
{
timeZone:"America/New_York"
}
);

document.getElementById("time").textContent = time;

}

setInterval(updateTime,1000);

updateTime();
