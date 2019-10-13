// core module (global) - IIFE - Immediayely-invoked Functin Expressions
(function() {
  // App variables

  function DisplayType(myArray, index) {
    switch (typeof myArray[index]) {
      case "number":
        console.log(`Item: ${index}: is a number`);
        break;

      case "string":
        console.log(`Item: ${index}: is a sting`);
        break;

      case "boolean":
        console.log(`Item: ${index}: is a boolean`);
        break;

      case "object":
        console.log(`Item: ${index}: is an object`);
        break;

      case "function":
        console.log(`Item: ${index}: is a function`);
        break;

      default:
        break;
    }
  }
  function Myfunction() {
    //Arguments
    //console.log(`Arguments Length: ${arguments.length}`); // argument is class, length is property
    //console.log(arguments);
    // Arguments on array
    let myArray = Array.from(arguments);

    for (let index = 0; index < myArray.length; index++) {
      DisplayType(myArray, index);
    }
  }

  /**
   * This function is used for Initialization
   *
   */
  function Start() {
    console.log(
      `%c App Initializing... `,
      "font-weight: bold; font-size: 20px;"
    );

    Main();
  }

  /**
   * This function is the where the amin functinality for our web app is happening
   *
   */
  function Main() {
    console.log(`%c App Started... `, "font-weight: bold; font-size: 20px;");

    Myfunction(true, 5, "Mas", "Bob", true);
  }

  window.addEventListener("load", Start);
})();
//})(core || (core = {}));
