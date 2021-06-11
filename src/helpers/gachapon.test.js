import characters from '@/data/characters';
import { singleRoll, selectCharacter, mapCharacterRarity, ULTRA_RARE_PERCENTAGE, SUPER_RARE_PERCENTAGE, RARE_PERCENTAGE, UNCOMMON_PERCENTAGE, COMMON_PERCENTAGE } from './gachapon';


const testCharacters = mapCharacterRarity(characters);

describe('gachapon.js', () => {
  describe('singleRoll', () => {
    test('it should return a character', () => {
      const result = singleRoll();

      expect(result).toBeTruthy();
    });
  });

  describe.only('selectCharacter', () => {
    const tests = [
      {
        name: 'should return an ultra rare character',
        input: testCharacters,
        expected: ULTRA_RARE_PERCENTAGE
      },
      {
        name: 'should return a super rare character',
        input: testCharacters,
        expected: SUPER_RARE_PERCENTAGE,
        shouldThrow: true
      },
      {
        name: 'should return a rare character',
        input: testCharacters,
        expected: RARE_PERCENTAGE,
        shouldThrow: true
      },
      {
        name: 'should return an uncommon character',
        input: testCharacters,
        expected: UNCOMMON_PERCENTAGE
      },
      {
        name: 'should return a common character',
        input: testCharacters,
        expected: COMMON_PERCENTAGE
      }
    ];

    tests.forEach(t => {
      test(t.name, () => {
        const expectation = expect(selectCharacter(t.input, t.expected));

        if (t.shouldThrow) {
          console.log('???', expectation);
          expectation.to.throw();
        } else {
          expectation.to.eq(t.expected);
        }
      });
    });
  });
});