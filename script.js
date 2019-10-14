// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

// Input Validation
window.addEventListener("load", function () {
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
       let pilotName = document.querySelector("input[name=pilotName]");
       let copilotName = document.querySelector("input[name=copilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let cargoMass = document.querySelector("input[name=cargoMass]");
       console.log(pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value)
       if (pilotName.value === "" || copilotName.value === "" ||
           fuelLevel.value === "" || cargoMass.value === "") {
           alert("All fields are required!");
           // stop the form submission
           event.preventDefault();
       };
       if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
           alert("Fuel Level and Carge Mass must be entered numerically");
           event.preventDefault();
       };
   });
});