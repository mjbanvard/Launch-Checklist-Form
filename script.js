// Write your JavaScript code here!

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
       }
       if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
           alert("Fuel Level and Carge Mass must be entered numerically");
       }
       event.preventDefault();
   });
//Planetary data Fetch and HTML Display
   fetch("https://handlers.education.launchcode.org/static/planets.json")
        .then(function(response){
            return response.json();
        })
        .then(function(planet){
            let i= Math.floor(Math.random()*planet.length);
            document.getElementById("missionTarget").innerHTML=  `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${planet[i].name}</li>
                    <li>Diameter: ${planet[i].diameter}</li>
                    <li>Star: ${planet[i].star}</li>
                    <li>Distance from Earth: ${planet[i].distance}</li>
                    <li>Number of Moons: ${planet[i].moons}</li>
                </ol>
                <img src="${planet[i].image}">`
        })
});

