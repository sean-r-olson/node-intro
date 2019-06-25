const characterList = require ('./anime.module');

for (character of characterList) {
    console.log(`${character.name} is from ${character.show}`)
}

