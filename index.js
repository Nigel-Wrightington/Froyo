//document.querySelector("orderButton"); finds the first instance/element of "orderButton" and returns in.
//Uses CSS selector syntax to grab first element in document.
const orderButton = document.querySelector("#orderButton");
const log = document.querySelector("#log");

//we are accessing orderButton that we declared above, and we are adding an event listener.
//Pretty much that is an gonna keep a look out for a specific event to go off, like a user clicking
//a mouse. There are many different types of events that get fired off in different locations. Look up specifics when using.
orderButton.addEventListener("click", () => {
  //prompt method () prompts user with text box to user input, an "OK" button, and a "cancel" button.
  //inside prompt method ("the user prompt for what you want them to type in goes inside the round brackets")
  // let order - is creating a variable to store the user input within.
  let order = prompt(
    "Please submit your selection of Ice Cream flavors separated by commas."

    // "vanilla,chocolate,raspberry,vanilla,raspberry,chocolate"
  );

  //adding a comma above and then inputting my own string, I can add my own input to show up everytime. This is good for constructing/testing the code.

  //we are declaring a variable selectArray where will will store all the user input info. We are using the split method() as the argument, to
  //delimit/separate the user input from eachother.
  let flavorsArray = order.split(",");
  console.log(flavorsArray);

  //this a bracket notation and should be used in For in loops.
  console.log(flavorsArray[4]);

  //this is the counter for each flavor inputted. We are leaving it open ended because we are gonna fill it with user input.
  //it is an object technically.
  const flavorCounter = {};

  for (index = 0; index < flavorsArray.length; index++) {
    //flavor variable is gonna store new flavor names and then we can add them from there to the flavor counter.
    const flavor = flavorsArray[index];
    //we need an if in statement to check for flavor existing and either add it to the object/array or to add a +1 count to it.
    if (flavor in flavorCounter) {
      //add one to the count
      flavorCounter[flavor] += 1;
      //if it doesn't exist, then we have to add it
    } else {
      //place it in the object/array and assing value to 1
      flavorCounter[flavor] = 1;
    }
  }
  console.log("flavors", flavorCounter);
});
