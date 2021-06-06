import { singleRoll } from './gachapon'

describe('gachapon.js', () => {
  describe('singleRoll', () => {
    const result = singleRoll()

    expect(result).toBeTruthy()
  })
})