let inputRank = function (rankStr) {

  if (rankStr.length === 0) {
    throw `SR.301 Rank Error - Empty Rank string`
  } else if (rankStr.trim().length !== rankStr.length && rankStr.trim().length === 0) {
    throw `SR.302 Rank Error - Blank Rank string`
  }
}
module.exports = inputRank;