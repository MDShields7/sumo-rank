let input = function (type, item) {
  if (type.toLowerCase() === "rank") {
    type = "Rank"
  } else if (type.toLowerCase() === "format") {
    type = "Format"
  }
  let num;
  type === 'Rank' ? num = "3" : num = "4";

  if (arguments.length === 1) {
    throw `SR.001 ${type} Error - Insufficient Arguments`
  } else if (typeof item !== "string") {
    throw `SR.${num}01 ${type} Error - Incorrect ${type} type, not a string`
  } else if (item.length === 0) {
    throw `SR.${num}02 ${type} Error - Empty ${type} string`
  } else if (item.trim().length !== item.length && item.trim().length === 0) {
    throw `SR.${num}03 ${type} Error - Blank ${type} string`
  }
  formatTypes = ["Nn", "nn", "N", "n", "Dd", "dd", "D", "d", "#", " "];
  rankTypes = ["Yokozuna", "yokozuna", "Y", "y", "Ozeki", "ozeki", "O", "o", "Sekiwake", "sekiwake", "S", "s", "Komisubi", "komisubi", "K", "k", "Maegashira", "maegashira", "M", "m", /[0-9]/, " "];
  var typeArr;
  var typeArrOrig;
  if (type === "Rank") {
    typeArr = rankTypes;
    typeArrOrig = rankTypes;
  } else if (type === "Format") {
    typeArr = formatTypes;
    typeArrOrig = formatTypes;
    // item = item.toLowerCase();
  }
  let multiples = [false];
  var newArr = [];
  for (let j = 0; j < item.length; j++) {
    for (let i = 0; i < typeArr.length; i++) {
      let slice = item.slice(j, j + (typeArr[i].length));
      console.log('i:', i, 'j:', j, 'type:', '"' + typeArr[i] + '"', 'slice:', '"' + slice + '"', 'item:', '"' + item + '"')
      if (typeof typeArr[i] === "string" && typeArr[i] === slice) {
        console.log('matched', typeArr[i], "&", slice)
        newArr.push(typeArr[i])
        item = spliceString(item, j, typeArr[i].length)
        j--
      } else if (typeof typeArr[i] === "object" && typeArr[i].match(slice)) {
        console.log('matched', typeArr[i], "&", slice)
        newArr.push(typeArr[i])
        item = spliceString(item, j, typeArr[i].length)
        j--
      }
    }
  }
  let testFor = (function () {
    let newTypes;
    let formatTypesArr = [
      ["Nn", "nn", "N", "n"],
      ["Dd", "dd", "D", "d"],
      "#", " "];
    let rankTypesArr = [
      ["Yokozuna", "yokozuna", "Y", "y"],
      ["Ozeki", "ozeki", "O", "o"],
      ["Sekiwake", "sekiwake", "S", "s"],
      ["Komisubi", "komisubi", "K", "k"],
      ["Maegashira", "maegashira", "M", "m"],
      " "];
    if (type === "Rank") {
      newTypes = rankTypesArr;
    } else {
      newTypes = formatTypesArr;
    }
    return {
      multiples: function (arrElem) {
        for (let i = newTypes.length - 1; i >= 0; i--) {
          if (type === "Rank") {
            if (Array.isArray(newTypes[i])) {
              if (arrElem === newTypes[i][0] ||
                arrElem === newTypes[i][1] ||
                arrElem === newTypes[i][2] ||
                arrElem === newTypes[i][3]) {
                newTypes.splice(i, 1);
                return true;
              }
            } else if (arrElem === newTypes[i]) {
              newTypes.splice(i, 1)
              return true;
            } else if (arrElem === ' ') {
              return true;
            }
          } else if (type === "Format") {
            if (Array.isArray(newTypes[i])) {
              if (arrElem === newTypes[i][0] ||
                arrElem === newTypes[i][1] ||
                arrElem === newTypes[i][2] ||
                arrElem === newTypes[i][3]) {
                newTypes.splice(i, 1);
                return true;
              }
            } else if (arrElem === newTypes[i]) {
              newTypes.splice(i, 1)
              return true;
            } else if (arrElem === ' ') {
              return true;
            }
          }
        }
        return false;
      }
    }
  })();
  newArr.map(elem => {
    if (testFor.multiples(elem) === false && multiples[0] === false) {
      multiples = [true, elem];
    }
  })
  if (item.length !== 0) {
    throw `SR.${num}04 ${type} Error - Rejected characters ${multiples[1]}`
  } else if (multiples[0] !== false) {
    throw `SR.${num}05 ${type} Error - Found multiple instances`
  } else if (item.length === 0) {
    return newArr;
  }

  function spliceString(str, index, length) {
    let newStr = str.slice(0, index) + str.slice(index + length);
    return newStr;
  }
}

module.exports = input;