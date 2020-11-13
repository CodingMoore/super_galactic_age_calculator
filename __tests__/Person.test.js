import { Person } from '../src/js/Person.js';

describe("Person", () => {
  
  let person;

  beforeEach(() => {
    person = new Person("Bob", 50, 100)
    
  });

  test('Should correctly create an instance of Person().', () => {
    expect(person).toEqual({name: "Bob", age: 50, lifeExpect: 100});
  });

});