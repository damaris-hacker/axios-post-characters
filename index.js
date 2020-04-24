// When the WALL-E button is clicked
// document.getElementById("post-wall-e").onclick = () => {
    // Create an object with data to submit
//     const characterInfo = {
//       name: "WALL-E",
//       occupation: "Waste Allocation Robot",
//       weapon: "Head laser"
//     };
//     // Make a POST request
//     axios
//       .post("https://ih-crud-api.herokuapp.com/characters", characterInfo)
//       .then(response => console.log("post successful and the response is: ", response))
//       .catch(error => console.log("Oh No! Error is: ", error));
//   };

document.getElementById("character-form").onsubmit = event => {
    event.preventDefault(); // <= !!!
   
    console.log("form submit");
  };

  const theNames = document.getElementsByClassName("the-name");
const theOccupations = document.getElementsByClassName("the-occupation");
const theWeapons = document.getElementsByClassName("the-weapon");
 
document.getElementById("character-form").onsubmit = event => {
  event.preventDefault();
 
  const characterInfo = {
    name: theNames[0].value,
    occupation: theOccupations[0].value,
    weapon: theWeapons[0].value
  };
 
  axios
    .post("https://ih-crud-api.herokuapp.com/characters", characterInfo)
    .then(response => console.log("You just created this character: ", response.data))
    .catch(error => console.log("Error is: ", error));
};