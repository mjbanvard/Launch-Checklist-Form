// Write your JavaScript code here!

window.addEventListener("load", function () {
   let form = document.querySelector("form");
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

    // Input Validation
    form.addEventListener("submit", function (event) {
       let pilotName = document.querySelector("input[name=pilotName]");
       let copilotName = document.querySelector("input[name=copilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let cargoMass = document.querySelector("input[name=cargoMass]");
       let alphaCheck = function(name) {
           let x = /^[A-Za-z]+$/;
           console.log(x.test(name));
           return x.test(name);
       };
       console.log(pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value)
       if (pilotName.value === "" || copilotName.value === "" ||
           fuelLevel.value === "" || cargoMass.value === "") {
           alert("All fields are required!");
       } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
           alert("Make sure to enter valid information for each field!");
       } else if (!alphaCheck(pilotName.value) || !alphaCheck(copilotName.value)) {
           alert("Please enter names in string form!")
       };
 
    // stop the form submission
 
    if (fuelLevel.value < 10000 || cargoMass.value > 10000) {
        document.getElementById("launchStatus").innerHTML= 
            `<span style="color:red;">Shuttle not ready to Launch</span>`;
        document.getElementById("pilotStatus").innerHTML=
            `<span style="visibility:visible">Pilot ${pilotName.value} is ready for launch</span>`;
        document.getElementById("copilotStatus").innerHTML=
            `<span style="visibility:visible">Co-Pilot ${copilotName.value} is ready for launch</span>`;
        if (fuelLevel.value < 10000) {
            document.getElementById("fuelStatus").innerHTML=
                `<span style="visibility:visible">Fuel level too low for launch</span>`;
            } else {
            document.getElementById("fuelStatus").innerHTML=
                `<span style="visibility:visible">Fuel level is high enough for launch</span>`;
            };
        if (cargoMass.value > 10000) {
            document.getElementById("cargoStatus").innerHTML=
                `<span style="visibility:visible">Cargo mass too high for launch</span>`;
            } else {
            document.getElementById("cargoStatus").innerHTML=
                `<span style="visibility:visible">Cargo mass is low enough for launch</span>`;
            };
    } else {
        document.getElementById("launchStatus").innerHTML= 
            `<span style="color:green;">Shuttle is ready to Launch</span>`;
        document.getElementById("pilotStatus").innerHTML=
            `<span style="visibility:visible">Pilot ${pilotName.value} is ready for launch</span>`;
        document.getElementById("copilotStatus").innerHTML=
            `<span style="visibility:visible">Co-Pilot ${copilotName.value} is ready for launch</span>`;
        document.getElementById("fuelStatus").innerHTML=
            `<span style="visibility:visible">Fuel level is high enough for launch</span>`;
        document.getElementById("cargoStatus").innerHTML=
            `<span style="visibility:visible">Cargo mass is low enough for launch</span>`;
        
    };
    event.preventDefault();  
    });
});

