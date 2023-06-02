let pronouns = ["the", "our"];
let adjectives = ["great", "big"];
let nouns = ["jogger", "racoon"];
let exts = [".com", ".net"];

/*function domainName(pronoun, adjective, noun, ext) {
  return `${pronoun}${adjective}${noun}${ext}`;
}*/

for (let pronoun of pronouns) {
  for (let adjective of adjectives) {
    for (let noun of nouns) {
      for (let ext of exts) {
        console.log(`${pronoun}${adjective}${noun}${ext}`);
      }
    }
  }
}
