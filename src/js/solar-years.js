export default class SolarYear {
  constructor(age) {
    this.age = age;
  }

  ageDays() {
    let ageInDays = Math.floor(this.age * 365);
    return ageInDays;
  }

  mercury(ageDays) {
    let mercuryYears = Math.floor(ageDays / 88);
    return mercuryYears;
  }

  venus(ageDays) {
    let venusYears = Math.floor(ageDays / 225);
    return venusYears;
  }

}