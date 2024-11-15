import { drinkFlavor } from './dummy';
import {sum} from './util';

test('renders learn react link', () => {
  expect(sum([1, 2])).toBe(3);
  expect(sum([1, 3,2])).to
  
});


test('throws on octopus', () => {
  function drinkOctopus() {
    drinkFlavor('octopus');
  }

  // Test that the error message says "yuck" somewhere: these are equivalent
  expect(drinkOctopus).toThrow(/yuck/);
  expect(drinkOctopus).toThrow('yuck');

  // Test the exact error message
  expect(drinkOctopus).toThrow(/^yuck, octopus flavor$/);
  expect(drinkOctopus).toThrow(new Error('yuck, octopus flavor'));

});