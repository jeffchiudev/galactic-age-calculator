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

  test('Should correctly calculate user age into Mars years (age/1.88)', () => {
    expect(user1.marsAge()).toEqual(20);
  })

  test('Should correctly calculate user age into Jupiter years (age/11.86)', () => {
    expect(user1.jupiterAge()).toEqual(3);
  })
})