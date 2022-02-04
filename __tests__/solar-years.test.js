import SolarYear from './../src/js/solar-years.js'

describe('Solar Year', () => {
  let testYear
  beforeEach(() => {
    testYear = new SolarYear(21, 93);
  });

  test('Should take inputted age', () => {
    expect(testYear.age).toEqual(21);
  });

  test('Should return age in days', () => {
    expect(testYear.ageDays()).toEqual(7665);
  });

  test('Should return age in Mercury Years', () => {
    let ageDays = testYear.ageDays();
    let mercuryExpectancy = testYear.ageDays();
    expect(testYear.mercury(ageDays, mercuryExpectancy)).toEqual(87);
  });

  test('Should return age in Venus Years', () => {
    let ageDays = testYear.ageDays();
    expect(testYear.venus(ageDays)).toEqual(34);
  });

  test('Should return age in Mars years', () => {
    let ageDays = testYear.ageDays();
    expect(testYear.mars(ageDays)).toEqual(11);
  });

  test('Should return age in Jupiter years', () => {
    //4310
    let ageDays = testYear.ageDays();
    expect(testYear.jupiter(ageDays)).toEqual(1);
  });

  test('Should take the inputted life expectancy', () => {
    expect(testYear.lifeExpectancy).toEqual(93);
  });

  test('Should convert earth life expectancy to days', () => {
    let expectancyDays = testYear.expectedDays();
    expect(expectancyDays).toEqual(33945);
  });

  test('Should return life expectancy in Mercury years', () => {
    let mercuryExpectancy = testYear.ageDays();
    expect(testYear.mercury(mercuryExpectancy)).toEqual(87);
  });
});