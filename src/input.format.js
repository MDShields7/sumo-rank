let inputFormat = function (formatStr) {
  if (typeof formatStr !== "string") {
    throw `SR.403 Format Error - Incorrect Format type, not a string`
  } else if (formatStr.length === 0) {
    throw `SR.401 Format Error - Empty Format string`
  } else if (formatStr.trim().length !== formatStr.length && formatStr.trim().length === 0) {
    throw `SR.402 Format Error - Blank Format string`
  }
}
module.exports = inputFormat;