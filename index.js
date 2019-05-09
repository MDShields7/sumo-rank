const inputRank = require('./src/input.rank');
const inputFormat = require('./src/input.format');

String.prototype.sumoRank = function (formatStr) {
  let rankStr = this.toString();
  console.log('rankStr:', "'" + rankStr + "'", 'formatStr:', "'" + formatStr + "'")
  // METHODS
  function errorTest() {
    try {
      let rankError = inputRank(rankStr)
      let formatError = inputFormat(formatStr)
    }
    catch (error) {
      console.log('errorTest1 error', error)
    }
  }
  function addNumbers() {
    for (let i = 0; i < 100; i++) {
      numbers[i] = i;
    }
  }
  function rankThrowErr(rType, rValue) {
    if (rank[rType] === null) {
      rank[rType] = rValue;
    } else {
      throw `SR.305 Rank Error - Found multiple instances`
    }
  }
  function spliceStr(str, start, end) {
    let slice1 = str.slice(0, start);
    let slice2 = str.slice(end);
    let sliceReturn = str.slice(start, end)
    return [sliceReturn, slice1.concat(slice2)];
  }
  function findRanks() {
    // Populate rankNumTypes
    addNumbers();
    // Populate rank state by searching for rank in rankString
    for (let i = 0; i < rankLetterTypes.length; i++) {
      let rankIndex = rankStr.indexOf(rankLetterTypes[i])
      if (rankIndex !== -1) {
        let type = rankLetterTypes[i];
        if (type === "Yokozuna" || type === "yokozuna" || type === "Y" || type === "y") {
          rankThrowErr("name", yokozuna);
          rankStr = spliceStr(rankStr, rankIndex, rankIndex + rankLetterTypes[i].length)[1];
        } else if (type === "Ozeki" || type === "ozeki" || type === "O" || type === "o") {
          rankThrowErr("name", ozeki);
          rankStr = spliceStr(rankStr, rankIndex, rankIndex + rankLetterTypes[i].length)[1];
        } else if (type === "Sekiwake" || type === "Sekiwake" || type === "S" || type === "s") {
          rankThrowErr("name", sekiwake);
          rankStr = spliceStr(rankStr, rankIndex, rankIndex + rankLetterTypes[i].length)[1];
        } else if (type === "Komisubi" || type === "komisubi" || type === "K" || type === "k") {
          rankThrowErr("name", komisubi);
          rankStr = spliceStr(rankStr, rankIndex, rankIndex + rankLetterTypes[i].length)[1];
        } else if (type === "Maegashira" || type === "maegashira" || type === "M" || type === "m") {
          rankThrowErr("name", maegashira);
          rankStr = spliceStr(rankStr, rankIndex, rankIndex + rankLetterTypes[i].length)[1];
        } else if (type === "East" || type === "east" || type === "E" || type === "e") {
          rankThrowErr("direction", east);
          rankStr = spliceStr(rankStr, rankIndex, rankIndex + rankLetterTypes[i].length)[1];
        } else if (type === "West" || type === "west" || type === "W" || type === "w") {
          rankThrowErr("direction", west);
          rankStr = spliceStr(rankStr, rankIndex, rankIndex + rankLetterTypes[i].length)[1];
        }
      }
    }
    for (let j = rankNumberTypes.length; j >= 0; j--) {
      let rankObj = rankStr.match(rankNumberTypes[j]);
      let rankIndex = -1;
      if (rankObj !== null) {
        rankIndex = rankObj["index"];
      }
      if (rankIndex !== -1) {
        let slice = spliceStr(rankStr, rankIndex, rankIndex + j)[0];
        rank.number = numbers[slice];
      }
    }
  }
  let formatStrCopy = formatStr.slice();
  function returnRanks() {
    for (let k = 0; k < formatStrCopy.length; k++) {
      for (let l = 0; l < formatTypes.length; l++) {
        let fItem = formatTypes[l];
        let sliceEnd = k + fItem.length;
        let slice = formatStrCopy.slice(k, sliceEnd);
        if (fItem === slice) {
          let rKey;
          if (l === 0 || l === 1 || l === 2 || l === 3) {
            rKey = "name"
            formatStrCopy = formatStrCopy.replace(fItem, rank[rKey][fItem])
            k += rank[rKey][fItem].length;
          } else if (l === 4 || l === 5 || l === 6 || l === 7) {
            rKey = "direction"
            formatStrCopy = formatStrCopy.replace(fItem, rank[rKey][fItem])
            k += rank[rKey][fItem].length;
          } else {
            rKey = "number"
            formatStrCopy = formatStrCopy.replace(fItem, rank[rKey])
            k += rank[rKey].toString().length;
          }
        }
      }
    }
  }
  // VARIABLES
  let rank = {
    name: null,
    number: null,
    direction: null
  }
  const yokozuna = {
    Nn: "Yokozuna",
    nn: "yokozuna",
    N: "Y",
    n: "y"
  }
  const ozeki = {
    Nn: "Ozeki",
    nn: "ozeki",
    N: "O",
    n: "o"
  }
  const sekiwake = {
    Nn: "Sekiwake",
    nn: "sekiwake",
    N: "S",
    n: "s"
  }
  const komisubi = {
    Nn: "Komisubi",
    nn: "komisubi",
    N: "K",
    n: "k"
  }
  const maegashira = {
    Nn: "Maegashira",
    nn: "maegashira",
    N: "M",
    n: "m"
  }
  const east = {
    Dd: "East",
    dd: "east",
    D: "E",
    d: "e"
  }
  const west = {
    Dd: "West",
    dd: "west",
    D: "W",
    d: "w"
  }
  let numbers = {};
  const rankLetterTypes = ["Yokozuna", "yokozuna", "Ozeki", "ozeki", "Sekiwake", "sekiwake", "Komisubi", "komisubi", "Maegashira", "maegashira", "East", "east", "West", "west", "Y", "y", "O", "o", "S", "s", "K", "k", "M", "m", "E", "e", "W", "w"];
  const rankNumberTypes = [null, /[0-9]{1}/, /[0-9]{2}/]
  formatTypes = ["Nn", "nn", "N", "n", "Dd", "dd", "D", "d", "#"];
  //
  errorTest();
  findRanks();
  returnRanks();
  // console.log('rank', rank);
  console.log('formatStrCopy', "'" + formatStrCopy + "'");

  return formatStrCopy;
}

// let test1 = "yokozuna 1 east".sumoRank("Nn # Dd")
// let test2 = "O2e".sumoRank("Nn # Dd")
let test3 = "Maegashira 12 West".sumoRank("#Dd")