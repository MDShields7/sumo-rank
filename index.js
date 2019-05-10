const inputRank = require('./src/input.rank');
const inputFormat = require('./src/input.format');

String.prototype.sumoRank = function (formatStr) {
  let rankStr = this.toString();
  let errorResult;
  console.log('rankStr:', "'" + rankStr + "'", 'formatStr:', "'" + formatStr + "'")
  // METHODS
  function errorTest() {
    try {
      let rankError = inputRank(rankStr)
      let formatError = inputFormat(formatStr)
    }
    catch (error) {
      errorResult = error;
    }
  }
  function populateNumbers() {
    for (let i = 0; i < 100; i++) {
      numbers[i] = i;
    }
  }
  function rankAssignTypes(rType, rValue) {
    try {
      if (rank[rType] === null) {
        rank[rType] = rValue;
      } else {
        throw `SR.305 Rank Error - Found multiple instances`
      }
    }
    catch (error) {
      errorResult = error;
    }
  }
  function spliceStr(str, start, end) {
    // takes out rank instances from rank string on which this method was called
    let slice1 = str.slice(0, start);
    let slice2 = str.slice(end);
    let sliceReturn = str.slice(start, end)
    return [sliceReturn, slice1.concat(slice2)];
  }
  function findRanks() {
    populateNumbers();
    // Populate rank state by searching for rank in rankString
    for (let i = 0; i < rankLetterTypes.length; i++) {
      let rankIndex = rankStr.indexOf(rankLetterTypes[i])
      if (rankIndex !== -1) {
        let type = rankLetterTypes[i];
        if (type === "Yokozuna" || type === "yokozuna" || type === "Y" || type === "y") {
          rankAssignTypes("name", yokozuna);
          rankStr = spliceStr(rankStr, rankIndex, rankIndex + rankLetterTypes[i].length)[1];
        } else if (type === "Ozeki" || type === "ozeki" || type === "O" || type === "o") {
          rankAssignTypes("name", ozeki);
          rankStr = spliceStr(rankStr, rankIndex, rankIndex + rankLetterTypes[i].length)[1];
        } else if (type === "Sekiwake" || type === "Sekiwake" || type === "S" || type === "s") {
          rankAssignTypes("name", sekiwake);
          rankStr = spliceStr(rankStr, rankIndex, rankIndex + rankLetterTypes[i].length)[1];
        } else if (type === "Komisubi" || type === "komisubi" || type === "K" || type === "k") {
          rankAssignTypes("name", komisubi);
          rankStr = spliceStr(rankStr, rankIndex, rankIndex + rankLetterTypes[i].length)[1];
        } else if (type === "Maegashira" || type === "maegashira" || type === "M" || type === "m") {
          rankAssignTypes("name", maegashira);
          rankStr = spliceStr(rankStr, rankIndex, rankIndex + rankLetterTypes[i].length)[1];
        } else if (type === "East" || type === "east" || type === "E" || type === "e") {
          rankAssignTypes("direction", east);
          rankStr = spliceStr(rankStr, rankIndex, rankIndex + rankLetterTypes[i].length)[1];
        } else if (type === "West" || type === "west" || type === "W" || type === "w") {
          rankAssignTypes("direction", west);
          rankStr = spliceStr(rankStr, rankIndex, rankIndex + rankLetterTypes[i].length)[1];
        }
      }
    }
    for (let j = rankNumberTypes.length - 1; j >= 0; j--) {
      let rankObj = rankStr.match(rankNumberTypes[j]);
      let rankIndex = -1;
      if (rankObj !== null) {
        rankIndex = rankObj["index"];
      }
      if (rankIndex !== -1) {
        let slice = spliceStr(rankStr, rankIndex, rankIndex + j)[0];
        rankStr = spliceStr(rankStr, rankIndex, rankIndex + j)[1];
        rank.number = numbers[slice];
        break;
      }
    }
    if (rankStr.trim().length !== 0) {
      throw `SR.304 Non-rank items Error - '${rankStr}' found in string`
    }
  }
  let formatStrCopy = formatStr.slice();
  function replaceRanks() {
    // Loops thru format string an replaces format with desired format/rank type
    for (let k = 0; k < formatStrCopy.length; k++) {
      for (let l = 0; l < formatTypes.length; l++) {
        let fItem = formatTypes[l];
        let sliceEnd = k + fItem.length;
        let slice = formatStrCopy.slice(k, sliceEnd);
        if (fItem === slice) {
          let rKey;
          if (l === 0 || l === 1 || l === 2 || l === 3) {
            rKey = "name";
            if (rank[rKey] === null) {
              throw `SR.306 Insufficient Rank Info Error - format string requests 'rank name' type, but rank string does not provide it`
            }
            formatStrCopy = formatStrCopy.replace(fItem, rank[rKey][fItem])
            k += rank[rKey][fItem].length;
          } else if (l === 4 || l === 5 || l === 6 || l === 7) {
            rKey = "direction";
            if (rank[rKey] === null) {
              throw `SR.308 Insufficient Rank Info Error - format string requests 'rank direction' type, but rank string does not provide it`
            }
            formatStrCopy = formatStrCopy.replace(fItem, rank[rKey][fItem])
            k += rank[rKey][fItem].length;
          } else if (l === 8) {
            rKey = "number";
            if (rank[rKey] === null) {
              throw `SR.307 Insufficient Rank Info Error - format string requests 'rank number' type, but rank string does not provide it`
            }
            formatStrCopy = formatStrCopy.replace(fItem, rank[rKey])
            k += rank[rKey].toString().length - 1;
          }
        }
      }
    }
  }
  function testNumberLimits() {
    // Makes sure all rank/number combos are valid
    // example: Maegashira cannot go over 17
    if ((rank.name === maegashira && rank.number > 17)) {
      try {
        throw `SR.101 Non-existent Rank Name/Number Error - ${rank.name.Nn} Rank can not have a number of ${rank.number}`
      }
      catch (error) {
        errorResult = error;
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
  replaceRanks();
  testNumberLimits();
  if (errorResult) {
    console.log('errorResult', "'" + errorResult + "'");
    return errorResult
  } else {
    console.log('returning', "'" + formatStrCopy + "'");
    return formatStrCopy;
  }
}

// let test1 = 123.sumoRank("Nn # Dd")
// let test1 = "yokozuna 1 east".sumoRank("Nn # Dd")
// let test2 = "O2e".sumoRank("Nn # Dd")
// let test3 = "Maegashira 12 West".sumoRank("#Dd")
// let test4 = "Maegashira 17 east".sumoRank("Nn # Dd")

// let test5 = "17 east".sumoRank("")
let test6 = "Maegashira 17 eo east".sumoRank("Nn # Dd")