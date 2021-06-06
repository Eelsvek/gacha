import characters from '@/data/characters'

const ProbabilityMap = Object.freeze({
  5: .5,
  4: 1,
  3: 9,
  2: 20,
  1: 80,
})

const getCharacter = () => {
  console.log('Probability map', ProbabilityMap)
  console.log('characters', characters)
}

export const singleRoll = () => {
  return getCharacter()
}

export default null