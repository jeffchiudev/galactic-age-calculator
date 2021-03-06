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

  saturnAge() {
    return Math.round(this.earthAge/ 29.46);
  }

  lifeLeft(avgLifeExpectancy) {
    if (avgLifeExpectancy > this.earthAge) {
      return avgLifeExpectancy - this.earthAge;  
    } else {
      let overAverage = this.earthAge - avgLifeExpectancy;
      return `you are ${overAverage} years over the average life expectancy on Earth.  Keep taking care of yourself!!`;
    }
  }

  mercuryLifeLeft(avgLifeExpectancy) {
    let mercuryExpectancy = Math.round(avgLifeExpectancy / .24);
    if (mercuryExpectancy > this.mercuryAge()) {
      return mercuryExpectancy - this.mercuryAge();
    } else {
      return `You are ${this.mercuryAge() - mercuryExpectancy} over the average Mercurian life expectancy; Great work!`;
    }
  }

  venusLifeLeft(avgLifeExpectancy) {
    let venusExpectancy = Math.round(avgLifeExpectancy / .62);
    if (venusExpectancy > this.venusAge()) {
      return venusExpectancy - this.venusAge();
    } else {
      return `You are ${this.venusAge() - venusExpectancy} over the average Venusian life expectancy; Great work!`;
    }
  }

  marsLifeLeft(avgLifeExpectancy) {
    let marsExpectancy = Math.round(avgLifeExpectancy / 1.88);
    if (marsExpectancy > this.marsAge()) {
      return marsExpectancy - this.marsAge();
    } else {
      return `You are ${this.marsAge() - marsExpectancy} over the average Martian life expectancy; Great work!`;
    }
  }

  jupiterLifeLeft(avgLifeExpectancy) {
    let jupiterExpectancy = Math.round(avgLifeExpectancy / 11.86);
    if (jupiterExpectancy > this.jupiterAge()) {
      return jupiterExpectancy - this.jupiterAge();
    } else {
      return `You are ${this.jupiterAge() - jupiterExpectancy} over the average Jovian life expectancy; Great work!`;
    }
  }

  saturnLifeLeft(avgLifeExpectancy) {
    let saturnExpectancy = Math.round(avgLifeExpectancy / 29.46);
    if (saturnExpectancy > this.saturnAge()) {
      return saturnExpectancy - this.saturnAge();
    } else {
      return `You are ${this.saturnAge() - saturnExpectancy} over the average Saturnian life expectancy; Great work!`;
    }
  }
}