// Write your JavaScript code here!
window.addEventListener("load", function() {
   pictures();
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
     
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      let items = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");
      

      // alert(copilotNameInput.value, fuelLevelInput.value);
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === ""|| cargoMassInput.value === "")  {
               alert("All fields are required!");
        

      }  else if (isNaN(pilotNameInput.value) === false || isNaN(copilotNameInput.value) === false || isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
         alert("wrong type of input (Number or Text)");
      } 
         else {
         items.style.visibility = "visible";        
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`
         copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`
         
                  }  if (fuelLevelInput.value < 10000){
                        fuelStatus.innerHTML = "There is not enough fuel for the Journey";
                        launchStatus.innerHTML = "Shuttle not ready for launch";
                        } else {
                           fuelStatus.innerHTML = "Fuel level high enough for launch";
                        }

                     if (cargoMassInput.value > 10000) {
                           cargoStatus.innerHTML = "There is too much mass for the Shuttle to take off";
                           launchStatus.innerHTML = "Shuttle not ready for launch";
                        }  else {
                            cargoStatus.innerHTML = "Cargo mass low enough for launch";
                        }

                       if (fuelLevelInput.value >= 10000 && cargoMassInput.value <= 10000) {
            
                              fuelStatus.innerHTML = "Fuel level high enough for launch";
                              cargoStatus.innerHTML = "Cargo mass low enough for launch";
                              launchStatus.innerHTML = "Shuttle is ready for launch";
                              launchStatus.style.backgroundColor = "green";
                              
                       }   else {
                            launchStatus.innerHTML = "Shuttle is NOT ready for launch";
                            launchStatus.style.backgroundColor = "red";
                       }
                     
                  });
});

function pictures(){

   let url = 'https://handlers.education.launchcode.org/static/planets.json';
       fetch(url).then( function(response){
        response.json().then(function(json){
            let destination = document.getElementById('missionTarget');
            // let next = document.getElementById('next');
            let index =2;
            // console.log(json[0]);
            // next.addEventListener('click', function(){
                destination.innerHTML = `
                    <div>
                    <h2>Mission Destination</h2>
                    <ol>
                       <li>Name: ${json[index].name}</li>
                       <li>Diameter: ${json[index].diameter}</li>
                       <li>Star: ${json[index].star}</li>
                       <li>Distance from Earth: ${json[index].distance}</li>
                       <li>Number of Moons: ${json[index].moons}</li>
                    </ol>
                    <img src="${json[index].image}">
                    </div>
                `;
               //  index = (index + 1) % json.length;
            // });
                });
    });

}

