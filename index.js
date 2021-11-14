// Code your solution here
function findMatching(source, search) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase() === search.toLowerCase()
    )
  }

  function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }
  

  function matchName(source, soughtName) {
    return source.filter( record => record.name === soughtName)
  }