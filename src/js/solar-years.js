export default class SolarYear {
  constructor(age) {
    this.age = age;
  }

  ageDays() {
    let ageInDays = Math.floor(this.age * 365);
    return ageInDays;
  }

  mercury() {

  }

}