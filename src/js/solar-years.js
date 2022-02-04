export default class SolarYear {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  ageDays() {
    let ageInDays = Math.floor(this.age * 365);
    return ageInDays;
  }

  expectedDays() {
    let expectedLivingDays = Math.floor(this.lifeExpectancy * 365)
    return expectedLivingDays;
  }

  mercury(ageDays, expectedDays) {
    let mercuryYears = Math.floor(ageDays / 88);
    let mercuryExpectancy = Math.floor(expectedDays / 88);
    return (mercuryYears, mercuryExpectancy);
  }

  venus(ageDays) {
    let venusYears = Math.floor(ageDays / 225);
    return venusYears;
  }

  mars(ageDays) {
    let marsYears = Math.floor(ageDays / 687);
    return marsYears;
  }

  jupiter(ageDays) {
    let jupiterYears = Math.floor(ageDays / 4310);
    return jupiterYears;
  } 

}