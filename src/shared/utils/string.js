/**
 * Checks if string is undefined, null,
 * or is only whitespace, including
 * tabs.
 *
 * Source:
 * https://stackoverflow.com/questions/10232366/how-to-check-if-a-variable-is-null-or-empty-string-or-all-whitespace-in-javascri
 *
 * @param str
 * @returns {boolean}
 */
const isEmpty = str =>
  str === undefined || str === null || str.match(/^\s*$/) !== null

const string = {
  isEmpty,
}

export default string
