export default class UserAge {
  constructor(name, earthAge) {
    this.name = name;
    this.earthAge = earthAge;
  }

  mercuryAge() {
    return Math.round(this.earthAge / .24);
  }

  marsAge() {
    return Math.round(this.earthAge/ 1.88);
  }
}