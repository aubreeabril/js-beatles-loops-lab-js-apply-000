function theBeatlesPlay(musicians, instruments) {
  const newArray = []

  for (let i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray;
}

function johnLennonFacts(facts) {
  const exclamations = []

  while(i < facts.length) {
    exclamations.push(`${facts}!!!`)
  }
  return exclamations;
}
