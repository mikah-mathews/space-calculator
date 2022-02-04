import SolarYear from './../src/js/solar-years.js'

describe('Solar Year', () => {

  test('Should take inputted age', () => {
    const testYear = new SolarYear(21);
    expect(testYear.age).toEqual(21);
  });

  test('Should return age in days', () => {
    const testYear = new SolarYear(21);
    expect(testYear.ageDays()).toEqual(7665);
  });

  test('Should return age in Mercury Years', () => {
    const testYear = new SolarYear(21);
    const ageDays = testYear.ageDays();
    expect(testYear.mercury(ageDays)).toEqual(87);
  });

});