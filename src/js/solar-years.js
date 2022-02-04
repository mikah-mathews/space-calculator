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

  mercuryCurrentAge(ageDays) {
    let mercuryYears = Math.floor(ageDays / 88);
    return mercuryYears;
  }

  mercuryLifeExpectancy(expectedDays) {
    
  }

  venusCurrentAge(ageDays) {
    let venusYears = Math.floor(ageDays / 225);
    return venusYears;
  }

  marsCurrentAge(ageDays) {
    let marsYears = Math.floor(ageDays / 687);
    return marsYears;
  }

  jupiterCurrentAge(ageDays) {
    let jupiterYears = Math.floor(ageDays / 4310);
    return jupiterYears;
  } 

}