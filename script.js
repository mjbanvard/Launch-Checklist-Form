// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
{/* <h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">} */ 


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
   
});

// window.addEventListener('load', function() {
//    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
//    .then(function(res){
//        return res.json();
//    })
//    .then(function(json) {
//        //console.log(json, 'Outside event.');
//        let cont = document.getElementById("container");
//        for (i = 0; i < json.length; i ++) {
//            let astro = json[i];
//            if (astro.active) {
//                textColor = "green";
//            } else {
//                textColor = "black"
//            }
//            cont.innerHTML= cont.innerHTML + `
//            <div class="astronaut">
//            <div class="bio">
//            <font color=${textColor}>
//               <h3>${astro.firstName} ${astro.lastName}</h3>
//               <ul>
//                  <li>Hours in space: ${astro.hoursInSpace}</li>
//                  <li>Active: ${astro.active}</li>
//                  <li>Skills: ${astro.skills.join(', ')}</li>
//               </ul>
//            </font>
//            </div>
//            <img class="avatar" src=${astro.picture}>
//            </div>`;
//        }
//    });