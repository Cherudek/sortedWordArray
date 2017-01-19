
function findLongestWord(str) {
  
  var strSplitArray = str.split(" ");
  
  var sortedWordArray = strSplitArray.sort (function (a,b) {
      return b.length - a.length;
  });
      return sortedWordArray[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
