// core module (global) - IIFE - Immediayely-invoked Functin Expressions
(function() {
  // App variables
  let RollButton;
  let Result;
  let minRange;
  let maxRange;
  let minRangeValue;
  let maxRangeValue;
  let min;
  let max;

  function RandomRange(min, max) {
    let randomNumber;
    let maxminusmin = max - min + 1;

    //randomNumber = Math.random();
    //randomNumber = Math.random() * max;
    randomNumber = Math.floor(Math.random() * maxminusmin) + min;

    return randomNumber;
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

    RollButton = document.getElementById("RollButton");
    Result = document.getElementById("Result");

    minRange = document.getElementById("minRange");
    maxRange = document.getElementById("maxRange");
    minRangeValue = document.getElementById("minRangeValue");
    maxRangeValue = document.getElementById("maxRangeValue");
    min = 1;
    max = 6;

    Main();
  }

  /**
   * This function is the where the amin functinality for our web app is happening
   *
   */
  function Main() {
    // console.log(`%c App Started... `, "font-weight: bold; font-size: 20px;");

    let Roll;

    Result.innerHTML = "0";

    minRangeValue.innerHTML = min;
    maxRangeValue.innerHTML = max;

    RollButton.addEventListener("click", function() {
      Roll = RandomRange(min, max);
      Result.innerHTML = Roll;
      Result.style.fontSize = "25px";

      console.log(
        `%cGenerated Number: ${Roll}`,
        "font-weight: bold; font-size: 20px; color: green;"
      );
    });

    minRange.addEventListener("input", function() {
      min = parseInt(minRange.value);
      max = parseInt(maxRange.value);
      if (min > max) {
        minRange.value = maxRange.value;
        min = max;
      }

      minRangeValue.innerHTML = minRange.value;
    });

    maxRange.addEventListener("input", function() {
      min = parseInt(minRange.value);
      max = parseInt(maxRange.value);
      if (max < min) {
        maxRange.value = minRange.value;
        max = min;
      }
      maxRangeValue.innerHTML = maxRange.value;
    });
  }

  console.log(
    `%cGenerated Random Number : ${RandomRange(1, 6)}`,
    "font-weight: bold; font-size: 20px; color: green;"
  );

  window.addEventListener("load", Start);
})();
//})(core || (core = {}));
