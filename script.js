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
       console.log(pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value)
       if (pilotName.value === "" || copilotName.value === "" ||
           fuelLevel.value === "" || cargoMass.value === "") {
           alert("All fields are required!");
       }
       if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
           alert("Fuel Level and Carge Mass must be entered numerically");
       }
       event.preventDefault();
    // stop the form submission
       
    //If shuttle is not ready to launch

//     <div id="launchStatusCheck">
//     <h2 id="launchStatus">Awaiting Information Before Launch</h2>
//     <div id="faultyItems">
//         <ol>
//             <li id="pilotStatus">Pilot Ready</li>
//             <li id="copilotStatus">Co-pilot Ready</li>
//             <li id="fuelStatus">Fuel level high enough for launch</li>
//             <li id="cargoStatus">Cargo mass low enough for launch</li>
//         </ol>
//      </div>
//      </div>

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
                `<span style="visibility:visible">Fuel level high enough for launch</span>`;
            };
        if (cargoMass.value > 10000) {
            document.getElementById("cargoStatus").innerHTML=
                `<span style="visibility:visible">Cargo mass too high for launch</span>`;
            } else {
            document.getElementById("cargoStatus").innerHTML=
                `<span style="visibility:visible">Cargo mass too high for launch</span>`;
            };
    } else {
        document.getElementById("launchStatus").innerHTML= 
            `<span style="color:green;">Shuttle is ready to Launch</span>`;
        document.getElementById("pilotStatus").innerHTML=
            `<span style="visibility:visible">Pilot ${pilotName.value} is ready for launch</span>`;
        document.getElementById("copilotStatus").innerHTML=
            `<span style="visibility:visible">Co-Pilot ${copilotName.value} is ready for launch</span>`;
    }
    // let newItem = 
    //     `<style>
    //         li {visibility:visible;}
    //     </style>`
    // document.getElementById("faultyItems").insertBefore(newItem, `<ol>`)
        
    
       });

    
});

