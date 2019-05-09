let inputRank = function (rankStr) {

  if (typeof rankStr !== "string") {
    throw `SR.301 Rank Error - Incorrect Rank type, not a string`
  } else if (rankStr.length === 0) {
    throw `SR.302 Rank Error - Empty Rank string`
  } else if (rankStr.trim().length !== rankStr.length && rankStr.trim().length === 0) {
    throw `SR.303 Rank Error - Blank Rank string`
  }
}
module.exports = inputRank;