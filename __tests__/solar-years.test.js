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

  test('Should take the inputted life expectancy', () => {
    expect(testYear.lifeExpectancy).toEqual(93);
  });

  test('Should convert earth life expectancy to days', () => {
    let expectancyDays = testYear.expectedDays();
    expect(expectancyDays).toEqual(33945);
  });

  test('Should return age in Mercury Years', () => {
    let ageDays = testYear.ageDays();
    expect(testYear.mercuryCurrentAge(ageDays)).toEqual(87);
  });

  test('Should return life expectancy in Mercury years', () => {
    let mercuryExpectancy = testYear.expectedDays();
    expect(testYear.mercuryLifeExpectancy(mercuryExpectancy)).toEqual(385);
  });

  test('Should return age in Venus Years', () => {
    let ageDays = testYear.ageDays();
    expect(testYear.venusCurrentAge(ageDays)).toEqual(34);
  });

  test('Should return life expectancy in Venus years', () => {
    let venusExpectancy = testYear.expectedDays();
    expect(testYear.venusLifeExpectancy(venusExpectancy)).toEqual(150);
  });

  test('Should return age in Mars years', () => {
    let ageDays = testYear.ageDays();
    expect(testYear.marsCurrentAge(ageDays)).toEqual(11);
  });

  test('Should return age in Jupiter years', () => {
    //4310
    let ageDays = testYear.ageDays();
    expect(testYear.jupiterCurrentAge(ageDays)).toEqual(1);
  });

  

  
});