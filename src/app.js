let pronouns = ["the", "our", "my"];
let adjectives = ["great", "big", "best"];
let nouns = ["jogger", "racoon", "rabbit"];
let exts = [".com", ".net", ".gov", ".org", ".edu"];

for (let pronoun of pronouns) {
  for (let adjective of adjectives) {
    for (let noun of nouns) {
      for (let ext of exts) {
        console.log(`${pronoun}${adjective}${noun}${ext}`);
      }
    }
  }
}

/*function domainName(pronoun, adjective, noun, ext) {
  return `${pronoun}${adjective}${noun}${ext}`;
}*/
