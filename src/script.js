function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = moment().format(`MMM Do YYYY`);
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "h:mm:ss:SSS"
  )} <small>${losAngelesTime.format("A")}</small>`;

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = moment().format(`MMM Do YYYY`);
  sydneyTimeElement.innerHTML = `${sydneyTime.format(
    "h:mm:ss:SSS"
  )} <small>${sydneyTime.format("A")}</small>`;

  let lisbonElement = document.querySelector("#lisbon");
  let lisbonDateElement = lisbonElement.querySelector(".date");
  let lisbonTimeElement = lisbonElement.querySelector(".time");
  let lisbonTime = moment().tz("Europe/Lisbon");

  lisbonDateElement.innerHTML = moment().format(`MMM Do YYYY`);
  lisbonTimeElement.innerHTML = `${lisbonTime.format(
    "h:mm:ss:SSS"
  )} <small>${lisbonTime.format("A")}</small>`;
}

updateTime();
setInterval(updateTime, 1);
