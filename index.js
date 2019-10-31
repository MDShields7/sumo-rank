; (function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.sumoRank = factory(root.b);
  }
}(this, function () {

  String.prototype.sumoRank = function (formatStr) {
    // IMMUTABLE VARIABLES
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
    const komusubi = {
      Nn: "Komusubi",
      nn: "komusubi",
      N: "K",
      n: "k"
    }
    const maegashira = {
      Nn: "Maegashira",
      nn: "maegashira",
      N: "M",
      n: "m"
    }
    const juryo = {
      Nn: "Juryo",
      nn: "juryo",
      N: "J",
      n: "j"
    }
    const makushita = {
      Nn: "Makushita",
      nn: "makushita",
      N: "Ms",
      n: "ms"
    }
    const sandanme = {
      Nn: "Sandanme",
      nn: "sandanme",
      N: "Sd",
      n: "sd"
    }
    const jonidan = {
      Nn: "Jonidan",
      nn: "jonidan",
      N: "Jd",
      n: "jd"
    }
    const jonokuchi = {
      Nn: "Jonokuchi",
      nn: "jonokuchi",
      N: "Jk",
      n: "jk"
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
    const rankLetterTypes = ["Yokozuna", "yokozuna", "Ozeki", "ozeki", "Sekiwake", "sekiwake", "Komusubi", "komusubi", "Maegashira", "maegashira", "Juryo", "juryo", "Makushita", "makushita", "Sandanme", "sandanme", "Jonidan", "jonidan", "Jonokuchi", "jonokuchi", "East", "east", "West", "west", "Ms", "ms", "Sd", "sd", "Jd", "jd", "Jk", "jk", "Y", "y", "O", "o", "S", "s", "K", "k", "M", "m", "J", "j", "E", "e", "W", "w"];
    const rankNumberTypes = [null, /[0-9]{1}/, /[0-9]{2}/, /[0-9]{3}/]
    const formatTypes = ["Nn", "nn", "N", "n", "Dd", "dd", "D", "d", "#"];
    // MUTABLE VARIABLES
    let formatStrCopy = '';
    let rankStr = this.toString();
    let errorResult = null;
    let numbers = {};
    let rank = {
      name: null,
      number: null,
      direction: null
    }

    errorTest();
    findRanks();
    replaceRanks();
    testNumberLimits();
    returnResult();

    function errorTest() {
      try {
        inputRank(rankStr)
        inputFormat(formatStr)
      }
      catch (error) {
        errorResult = error;
      }
    }
    function inputRank(rankStr) {
      if (rankStr.length === 0) {
        throw `SR.301 Rank Error - Empty Rank string`
      } else if (rankStr.trim().length !== rankStr.length && rankStr.trim().length === 0) {
        throw `SR.302 Rank Error - Blank Rank string`
      }
    }
    function inputFormat(formatStr) {
      if (typeof formatStr !== "string") {
        throw `SR.403 Format Error - Incorrect Format type, not a string`
      } else if (formatStr.length === 0) {
        throw `SR.401 Format Error - Empty Format string`
      } else if (formatStr.trim().length !== formatStr.length && formatStr.trim().length === 0) {
        throw `SR.402 Format Error - Blank Format string`
      } else {
        formatStrCopy = formatStr.slice();
      }
    }
    function populateNumbers() {
      for (let i = 0; i < 200; i++) {
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
      // Takes out rank instances from rank string on which this method was called
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
          } else if (type === "Komusubi" || type === "komusubi" || type === "K" || type === "k") {
            rankAssignTypes("name", komusubi);
            rankStr = spliceStr(rankStr, rankIndex, rankIndex + rankLetterTypes[i].length)[1];
          } else if (type === "Maegashira" || type === "maegashira" || type === "M" || type === "m") {
            rankAssignTypes("name", maegashira);
            rankStr = spliceStr(rankStr, rankIndex, rankIndex + rankLetterTypes[i].length)[1];
          } else if (type === "Juryo" || type === "juryo" || type === "J" || type === "j") {
            rankAssignTypes("name", juryo);
            rankStr = spliceStr(rankStr, rankIndex, rankIndex + rankLetterTypes[i].length)[1];
          } else if (type === "Makushita" || type === "makushita" || type === "Ms" || type === "ms") {
            rankAssignTypes("name", makushita);
            rankStr = spliceStr(rankStr, rankIndex, rankIndex + rankLetterTypes[i].length)[1];
          } else if (type === "Sandanme" || type === "Sandanme" || type === "Sd" || type === "sd") {
            rankAssignTypes("name", sandanme);
            rankStr = spliceStr(rankStr, rankIndex, rankIndex + rankLetterTypes[i].length)[1];
          } else if (type === "Jonidan" || type === "jonidan" || type === "Jd" || type === "jd") {
            rankAssignTypes("name", jonidan);
            rankStr = spliceStr(rankStr, rankIndex, rankIndex + rankLetterTypes[i].length)[1];
          } else if (type === "Jonokuchi" || type === "jonokuchi" || type === "Jk" || type === "jk") {
            rankAssignTypes("name", jonokuchi);
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
      if ((rank.name === maegashira && rank.number > 17
        || rank.name === juryo && rank.number > 14
        || rank.name === makushita && rank.number > 60
        || rank.name === sandanme && rank.number > 100)) {
        try {
          throw `SR.101 Non-existent Rank Name/Number Error - ${rank.name.Nn} Rank can not have a number of ${rank.number}`
        }
        catch (error) {
          errorResult = error;
        }
      }
    }
    function returnResult() {
      if (errorResult) {
        return errorResult;
      } else {
        return formatStrCopy;
      }
    }
  }
  return String.prototype.sumoRank;
}));