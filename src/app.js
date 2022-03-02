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

  let minYear = input[0]["year"]
  let totalCost = 0

  for (index = 0; index < input.length; index++ ) {

    // Check if vehicle is not a Tractor.
    if (input[index]["type"] !== "Tractor") {
      // Add vehicle's cost to totalCost
      totalCost += input[index]["value"]
      // Check if vehicle year is older than the current minYear
      if (input[index]["year"] < minYear) {
        minYear = input[index]["year"]
      }
      console.log(totalCost)
    }
  }

}
const input = [{"type": 'Truck', "year": 2020, "value": 10000},  {"type": 'Tractor', "year": 2010, "value": 15000},  {"type": 'Trailer', "year": 2008, "value": 20000}];
const expectedCost = 30000;
const expectedOldestYear = 2002;

console.log(isValid(input, expectedCost, expectedOldestYear))
/**
 * Prompt: Implement a few tests to validate that your function works as expected
 */
function testIsValid () {
  // Your code here


}
