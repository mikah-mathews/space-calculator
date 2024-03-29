export default class SolarYear {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  ageDays() {
    let ageInDays = Math.floor(this.age * 365);
    return ageInDays;
  }

  pastLifeExpectancy() {
    let currentAge = parseInt(this.age);
    let lifeExpectancy = parseInt(this.lifeExpectancy);
    if (lifeExpectancy < currentAge) {
      currentAge = currentAge - lifeExpectancy;
    }
    return currentAge;
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
    let marsYears = Math.floor(expectedDays / 687);
    return marsYears;
  }

  jupiterCurrentAge(ageDays) {
    let jupiterYears = Math.floor(ageDays / 4310);
    return jupiterYears;
  } 

  jupiterLifeExpectancy(expectedDays) {
    let jupiterYears = Math.floor(expectedDays / 4301);
    return jupiterYears;
  }

}