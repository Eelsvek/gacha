import CHARACTER_DATA from '@/data/characters';

export const ProbabilityMap = Object.freeze({
  5: .5,
  4: 1,
  3: 9,
  2: 20,
  1: 80,
});

export const ULTRA_RARE_PERCENTAGE = ProbabilityMap[5];
export const SUPER_RARE_PERCENTAGE = ProbabilityMap[4];
export const RARE_PERCENTAGE = ProbabilityMap[3];
export const UNCOMMON_PERCENTAGE = ProbabilityMap[2];
export const COMMON_PERCENTAGE = ProbabilityMap[1];

const getCharacter = () => {
  const characters = mapCharacterRarity(CHARACTER_DATA);

  console.log('math.random', Math.random());
  // console.log('characterChance', characters);

  return characters[0];
};

export const selectCharacter = (characters, percentage) => {
  let character;
  if (percentage <= ULTRA_RARE_PERCENTAGE) {
    const ultraRareCharacters = filterCharactersByChance(characters, ULTRA_RARE_PERCENTAGE);
    character = selectRandomlyFrom(ultraRareCharacters);
  } else if (percentage <= SUPER_RARE_PERCENTAGE) {
    const superRareCharacters = filterCharactersByChance(characters, SUPER_RARE_PERCENTAGE);
    character = selectRandomlyFrom(superRareCharacters);
  } else if (percentage <= RARE_PERCENTAGE) {
    const rareCharacters = filterCharactersByChance(characters, RARE_PERCENTAGE);
    character = selectRandomlyFrom(rareCharacters);
  } else if (percentage <= UNCOMMON_PERCENTAGE) {
    const uncommonCharacters = filterCharactersByChance(characters, UNCOMMON_PERCENTAGE);
    character = selectRandomlyFrom(uncommonCharacters);
  } else if (percentage <= COMMON_PERCENTAGE) {
    const commonCharacters = filterCharactersByChance(characters, COMMON_PERCENTAGE);
    character = selectRandomlyFrom(commonCharacters);
  } else {
    const commonCharacters = filterCharactersByChance(characters, COMMON_PERCENTAGE);
    character = selectRandomlyFrom(commonCharacters);
  }

  return character;
};

const filterCharactersByChance = (characters, chance) => {
  return characters.filter(c => c.chance === chance);
};

const selectRandomlyFrom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const mapCharacterRarity = (characters) => {
  return characters.map(c => {
    return {
      ...c,
      chance: ProbabilityMap[c.rarity]
    };
  });
};

export const singleRoll = () => {
  return getCharacter();
};

export default null;