// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let items = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");

      // alert(copilotNameInput.value, fuelLevelInput.value);
      if (pilotNameInput.value === "" || copilotNameInput.value === "" ||Number.isNaN(fuelLevelInput) || Number.isNaN(cargoMassInput) ) {
         alert("All fields are required!");
         event.preventDefault();

      } else{
         items.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotNameInput} is ready for launch`
         copilotStatus.innerHTML = `Co-pilot ${copilotNameInput} is ready for launch`


      }
   });
});


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
