import SolarYear from './../src/js/solar-years.js'

describe('Solar Year', () => {
  let testYear
  beforeEach(() => {
    testYear = new SolarYear(21);
  });

  test('Should take inputted age', () => {
    expect(testYear.age).toEqual(21);
  });

  test('Should return age in days', () => {
    expect(testYear.ageDays()).toEqual(7665);
  });

  test('Should return age in Mercury Years', () => {
    let ageDays = testYear.ageDays();
    expect(testYear.mercury(ageDays)).toEqual(87);
  });

  test('Should return age in Venus Years', () => {
    let ageDays = testYear.ageDays();
    expect(testYear.venus(ageDays)).toEqual(34);
  });

  test('Should return age in Mars years', () => {
    let ageDays = testYear.ageDays();
    expect(testYear.mars(ageDays)).toEqual(11);
  });
});