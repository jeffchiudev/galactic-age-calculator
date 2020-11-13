export default class UserAge {
  constructor(name, earthAge) {
    this.name = name;
    this.earthAge = earthAge;
  }

  mercuryAge(earthAge) {
    mercuryAge = earthAge / .24;
  }
}