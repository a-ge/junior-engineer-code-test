/**
 * Prompt: Implement a function that validates that the input Vehicles
 * have the expected minimum @param expectedYear and total cost is
 * @param expectedCost. Do not include vehicles with type `Trailer` in
 * either of these calculations.
 * You can assume the following shape of Vehicles below and that all
 * numbers will be sensible integers.
 * interface Vehicle {
 *   type: 'Truck' | 'Trailer' | 'Tractor'
 *   year: number
 *   value: number
 * }
 *
 * @param {Vehicle[]} input
 * @param {number} expectedCost The expected sum cost of all vehicles passed in
 * @param {number} expectedOldestYear The expected minimum year of all vehicles passed in
 * @return {boolean} A boolean indicating whether input matches expected{Cost,Year}
 */
function isValid (input, expectedCost, expectedOldestYear) {
  // Your code here

  let minYear = input[0]["year"];
  let totalCost = 0;

  for (index = 0; index < input.length; index++ ) {
    // Check if vehicle is not a Trailer.
    if (input[index]["type"] !== "Trailer") {
      // Add vehicle's cost to totalCost
      totalCost += input[index]["value"];
      // Check if vehicle year is older than the current minYear
      if (input[index]["year"] < minYear) {
        minYear = input[index]["year"];
      }
    }
  }

  if (minYear !== expectedOldestYear || totalCost !== expectedCost) {
    return false;
  } else {
    return true;
  }

}



/**
 * Prompt: Implement a few tests to validate that your function works as expected
 */
function testIsValid () {
  // Your code here

  const input = [{"type": 'Truck', "year": 2002, "value": 10000},
                {"type": 'Tractor', "year": 2010, "value": 15000},
                {"type": 'Trailer', "year": 2008, "value": 20000}];

  // Test1: result is true because minYear===expectedOldestYear and totalCost===expectedCost
  let expectedCost = 25000;
  let expectedOldestYear = 2002;

  let result = isValid(input, expectedCost, expectedOldestYear);
  if (result !== true) {
    console.log("Test1 Failed");
  } else {
    console.log("Test1 Passed");
  }

  // Test2: result is false because totalCost!==expectedCost
  expectedCost = 35000;

  result = isValid(input, expectedCost, expectedOldestYear);
  if (result !== false) {
    console.log("Test2 Failed");
  } else {
    console.log("Test2 Passed");
  }

  // Test3: result is false because minYear!==expectedOldestYear
  // resetting expectedCost to keep all else equal to true scenario
  expectedCost = 25000;
  expectedOldestYear = 2000;

  result = isValid(input, expectedCost, expectedOldestYear);
  if (result !== false) {
    console.log("Test3 Failed");
  } else {
    console.log("Test3 Passed");
  }

}
