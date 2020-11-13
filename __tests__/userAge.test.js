import UserAge from '../src/js/userAge';

describe('UserAge', () => {
  let user1;
  beforeEach(() => {
    user1 = new UserAge("Jeff", 38);
  });

  test('Should correctly intake a user and a users age', () => {
    expect(user1.name).toEqual("Jeff");
    expect(user1.earthAge).toEqual(38);
  });

  test('Should correctly calculate user age into mercury age (age/.24)', () => {
    expect(user1.mercuryAge()).toEqual(158);
  });

  test('Should correctly calculate user age into Venus years (age/.62)', () => {
    expect(user1.venusAge()).toEqual(61)
  });

  test('Should correctly calculate user age into Mars years (age/1.88)', () => {
    expect(user1.marsAge()).toEqual(20);
  });

  test('Should correctly calculate user age into Jupiter years (age/11.86)', () => {
    expect(user1.jupiterAge()).toEqual(3);
  });

  test('Should correctly log the users life expectancy according to user entering the avg life expectancy for their region', () => {
    expect(user1.lifeLeft(82.25)).toEqual(44.25);
  });

  test('Should correctly calculate years OVER average exectancy if the user age is > than the average life exectancy of their region (on earth)', () => {
    let user1 = new UserAge("Jeff", "90")
    expect(user1.lifeLeft(82.25)).toEqual("you are 7.75 years over the average life expectancy on Earth.  Keep taking care of yourself!!");
  })
})