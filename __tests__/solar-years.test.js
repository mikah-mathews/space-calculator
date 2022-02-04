import SolarYear from './../src/js/solar-years.js'

describe('Solar Year', () => {

  test('Should take inputted age', () => {
    const testYear = new SolarYear(21);
    expect(testYear.age).toEqual(21);
  });

  test('Should return age in Mercury Years', () => {
    const testYear = new SolarYear(21);
    expect(testYear.mercury()).toEqual(87);
  });

});