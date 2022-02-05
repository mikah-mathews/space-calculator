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
    let expectedLivingDays = Math.floor(this.lifeExpectancy * 365);
    return expectedLivingDays;
  }

  mercuryCurrentAge(ageDays) {
    let mercuryYears = Math.floor(ageDays / 88);
    return mercuryYears;
  }

  mercuryLifeExpectancy(expectedDays) {
    let mercuryYears = Math.floor(expectedDays / 88);
    return mercuryYears;
  }

  venusCurrentAge(ageDays) {
    let venusYears = Math.floor(ageDays / 225);
    return venusYears;
  }

  venusLifeExpectancy(expectedDays) {
    let venusYears = Math.floor(expectedDays / 225);
    return venusYears;
  }

  marsCurrentAge(ageDays) {
    let marsYears = Math.floor(ageDays / 687);
    return marsYears;
  }

  marsLifeExpectancy(expectedDays) {
    
  }

  jupiterCurrentAge(ageDays) {
    let jupiterYears = Math.floor(ageDays / 4310);
    return jupiterYears;
  } 

}