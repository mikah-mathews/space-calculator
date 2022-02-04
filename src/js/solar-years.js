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

}