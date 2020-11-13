export default class UserAge {
  constructor(name, earthAge) {
    this.name = name;
    this.earthAge = earthAge;
  }

  mercuryAge() {
    return Math.round(this.earthAge / .24);
  }

  venusAge() {
    return Math.round(this.earthAge/ .62);
  }

  marsAge() {
    return Math.round(this.earthAge/ 1.88);
  }

  jupiterAge() {
    return Math.round(this.earthAge/ 11.86);
  }

  lifeLeft(avgLifeExpectancy) {
    if (avgLifeExpectancy > this.earthAge) {
      return avgLifeExpectancy - this.earthAge;  
    } else if (this.earthAge > avgLifeExpectancy) {
      let overAverage = this.earthAge - avgLifeExpectancy;
      return `you are ${overAverage} years over the average life expectancy on Earth.  Keep taking care of yourself!!`;
    }
  }

  mercuryLifeLeft(avgLifeExpectancy) {
    let mercuryExpectancy = Math.round(avgLifeExpectancy / .24);
    if (mercuryExpectancy > this.mercuryAge()) {
      return mercuryExpectancy - this.mercuryAge();
    } else if (mercuryExpectancy < this.mercuryAge()) {
      return `You are ${this.mercuryAge() - mercuryExpectancy} over the average Mercurian life expectancy; Great work!`
    }
  }

  
};