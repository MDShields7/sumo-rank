; (function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.sumoRank = factory();
  }
}(this, function () {

  (function () {
    class Sumo {
      constructor() {
        const ranks = {
          yokozuna : {
            Nn: "Yokozuna",
            nn: "yokozuna",
            N: "Y",
            n: "y"
          },
          ozeki : {
            Nn: "Ozeki",
            nn: "ozeki",
            N: "O",
            n: "o"
          },
          sekiwake : {
            Nn: "Sekiwake",
            nn: "sekiwake",
            N: "S",
            n: "s"
          },
          komusubi : {
            Nn: "Komusubi",
            nn: "komusubi",
            N: "K",
            n: "k"
          },
          maegashira : {
            Nn: "Maegashira",
            nn: "maegashira",
            N: "M",
            n: "m"
          },
          juryo : {
            Nn: "Juryo",
            nn: "juryo",
            N: "J",
            n: "j"
          },
          makushita : {
            Nn: "Makushita",
            nn: "makushita",
            N: "Ms",
            n: "ms"
          },
          sandanme : {
            Nn: "Sandanme",
            nn: "sandanme",
            N: "Sd",
            n: "sd"
          },
          jonidan : {
            Nn: "Jonidan",
            nn: "jonidan",
            N: "Jd",
            n: "jd"
          },
          jonokuchi : {
            Nn: "Jonokuchi",
            nn: "jonokuchi",
            N: "Jk",
            n: "jk"
          },
          east : {
            Dd: "East",
            dd: "east",
            D: "E",
            d: "e"
          },
          west : {
            Dd: "West",
            dd: "west",
            D: "W",
            d: "w"
          }
        }
        const rankLetterTypes = ["Yokozuna", "yokozuna", "Ozeki", "ozeki", "Sekiwake", "sekiwake", "Komusubi", "komusubi", "Maegashira", "maegashira", "Juryo", "juryo", "Makushita", "makushita", "Sandanme", "sandanme", "Jonidan", "jonidan", "Jonokuchi", "jonokuchi", "East", "east", "West", "west", "Ms", "ms", "Sd", "sd", "Jd", "jd", "Jk", "jk", "Y", "y", "O", "o", "S", "s", "K", "k", "M", "m", "J", "j", "E", "e", "W", "w"];
        const rankNumberTypes = [null, /[0-9]{1}/, /[0-9]{2}/, /[0-9]{3}/]
        const formatTypes = ["Nn", "nn", "N", "n", "Dd", "dd", "D", "d", "#"];
        // MUTABLE VARIABLES
        let formatStrCopy = '';
        let rankStr; // .format() only
        let formatStr; // .format() only
        let rankArr // .sort() only
        let propzArr // .sort() only
        let errorResult = null;
        let numbers = {};
        let rank = {
          name: null,
          number: null,
          direction: null
        };
        const nameList = ['Ms', 'Sd', 'Jd', 'Jk', 'Y', 'O', 'S', 'K', 'M', 'J']; //.sort() only
        const directionList = ['E', 'W']; //.sort() only
        function stateReset() {
          formatStrCopy = '';
          rankStr = undefined;
          formatStr = undefined;
          rankArr = undefined;
          rank.name = null;
          rank.number = null;
          rank.direction = null;
          errorResult = null;
          numbers = {};
          rank = {
            name: null,
            number: null,
            direction: null
          }
        }
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
              for ( let rankObj in ranks ){
                let rankItem = ranks[rankObj];
                if ( type === rankItem['Dd'] || type === rankItem['dd'] || type === rankItem['D'] || type === rankItem['d']){
                  // console.log('direction is rankItem:', rankItem);
                  rankStr = spliceStr(rankStr, rankIndex, rankIndex + rankLetterTypes[i].length)[1];
                  rankAssignTypes("direction", rankItem);
                } else if ( type === rankItem['Nn'] || type === rankItem['nn'] || type === rankItem['N'] || type === rankItem['n'] ) {
                  // console.log('name is rankItem:', rankItem);
                  rankStr = spliceStr(rankStr, rankIndex, rankIndex + rankLetterTypes[i].length)[1];
                  rankAssignTypes("name", rankItem);
                }
              }
            }
          }
          for (let j = rankNumberTypes.length - 1; j >= 0; j--) {
            let rankObj = rankStr.match(rankNumberTypes[j]);
            let rankIndex = -1;
            if (rankObj !== null) {
              // console.log("rankObj", rankObj)
              rankIndex = rankObj["index"];
              // console.log("rankIndex", rankIndex)
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
          if ((rank.name === ranks.maegashira && rank.number > 17
            || rank.name === ranks.juryo && rank.number > 14
            || rank.name === ranks.makushita && rank.number > 60
            || rank.name === ranks.sandanme && rank.number > 100)) {
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
        function checkVersion() {
          if (rankArr[0]['rank'] && rankArr[0]['rank']['name']) {
            // console.log('v2')
            return sortV2();
          } else {
            // console.log('v1')
            return sortV1();
          }
        }
        function sortV1() {
          // return "Data is in version1, but sortV1 not ready"
          return rankArr.sort(function (a, b) {
            var aName = findNameVal(a['rank']);
            var bName = findNameVal(b['rank']);
            // console.log('aName ('+ aName +') === bName ('+ bName +')', aName === bName)
            if (aName === bName) {
              var aNumber = findNumberVal(a['rank']);
              var bNumber = findNumberVal(b['rank']);
              // console.log('aNumber ('+ aNumber +') === bNumber ('+ bNumber +')', aNumber === bNumber)
              if (aNumber === bNumber) {
                var aDirection = findDirectionVal(a['rank']);
                var bDirection = findDirectionVal(b['rank']);
                // console.log('aDirection ('+ aDirection +') === bDirection ('+ bDirection +')', aDirection === bDirection)
                if (aDirection === bDirection) {
                  return aDirection - bDirection;
                }
              } else {
                return aNumber - bNumber;
              }
            } else {
              return aName - bName;
            }
          })
        }
        function sortV2() {
          rankArr.sort(function (a, b) {
            var aName = getNameVal(a['rank']['name']);
            var bName = b['rank']['name'];
            var aNumber = a['rank']['number'];
            var bNumber = a['rank']['number'];
            var aDirection = a['rank']['direction'];
            if (aName === bName) {
              if (aNumber === bNumber) {
                if (aDirection === 'E') {
                  return 1 - 2;
                } else {
                  return 2 - 1;
                }
              } else {
                return aNumber - bNumber;
              }
            }
            return aName - bName;
          })
        }
        function findNameVal(rankStrV1) {
          let foundName = '';
          for (let i = 0; i < nameList.length; i++) {
            foundName = rankStrV1.indexOf(nameList[i]);
            // console.log(rankStrV1 + ':', nameList[i], 'foundName', foundName)
            if (foundName !== -1) {
              return getNameVal(nameList[i]);
            }
          }
        }
        function findNumberVal(rankStrV1) {
          for (let j = rankNumberTypes.length - 1; j >= 0; j--) {
            let rankObj = rankStrV1.match(rankNumberTypes[j]);
            // console.log(rankStrV1 + ':', rankNumberTypes[j], 'rankObj', rankObj)
            let rankIndex = -1;
            if (rankObj !== null) {
              return rank = rankObj[0];
            }
          }
        }
        function findDirectionVal(rankStrV1) {
          let foundDirection = '';
          for (let i = 0; i < directionList.length; i++) {
            foundDirection = rankStrV1.indexOf(directionList[i]);
            // console.log(directionList[i], "foundDirection", foundDirection)
            if (foundDirection !== -1 && directionList[i] === 'E') {
              return 2;
            } else if (foundDirection !== -1 && directionList[i] === 'W') {
              return 1;
            }
          }
        }
        function getNameVal(name) {
          switch (name) {
            case 'Y':
              return 1;
              break;
            case 'O':
              return 2;
              break;
            case 'S':
              return 3;
              break;
            case 'K':
              return 4;
              break;
            case 'M':
              return 5;
              break;
            case 'J':
              return 6;
              break;
            case 'Ms':
              return 7;
              break;
            case 'Sd':
              return 8;
              break;
            case 'Jd':
              return 9;
              break;
            case 'Jk':
              return 10;
              break;
          }
        }

        this.sort = function (rankArray) {
          stateReset();
          rankArr = rankArray;
          return checkVersion();
        }
        this.format = function (rank, format) {
          stateReset();
          rankStr = rank;
          formatStr = format;
          errorTest();
          findRanks();
          replaceRanks();
          testNumberLimits();
          return returnResult();
        }
      }
    }
    return sumoRank = new Sumo();
  })();

}));