/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;
  if (n <= 0) return 0;
  if (n === 0) return 1;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  product = 0
  if (typeof(n) !== "number") return 'NaN'
  if (n < 0) return undefined
  if (n===0) return 1;
  for (i = 0;i <= n; ++i) {
    product = i * [i +1]
  }
  return i;
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  const output = [];
  if (isNaN(n)) return null;
  if (n <= 0) return ouput;
  else
    for (let i = 1; i <= n; i++) {
      output.push(i);
    }
  return output;
}

/**
 * @param {string[]} strings - an array of strings
 * @returns {string} the longest string in `strings`
 * @throws {TypeError} if the array contains non-string elements
 */
export function getLongestString(strings) {
  if (strings.length === 0) return "";
  const longest = strings.reduce(
    (accumulator, currentValue) =>
      currentValue.length > accumulator.length ? currentValue : accumulator,
    ""
  );
  return longest;
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance = []) {
  const present = attendance.filter((status) => {
    if (status) return true;
  });
  return present.length;
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  if (typeof dna != "string") return null;
  if (dna === "") return "";
  const complements = dna.map((element) => {
    switch (element) {
      case "A":
        element = "T";
        break;
      case "G":
        element = "C";
        break;
      case "C":
        element = "G";
        break;
      case "A":
        element = "T";
        break;
      default:
        return element;
    }
  });
  const longest = complements.reduce(
    (accumulator, currentValue) =>
      currentValue.length > accumulator.length
        ? currentValue
        : accumulator.length,
    ""
  );
  return longest;
}