import UserAge from '../src/js/userAge';

describe('UserAge', () => {

  // beforeEach(() => {
  //   user1 = new UserAge("Jeff", 38);
  // });

  test('Should correctly intake a user and a users age', () => {
    const user1 = new UserAge("Jeff", 38);
    expect(user1.name).toEqual("Jeff");
    expect(user1.earthAge).toEqual(38);
  });

  test('Should correctly calculate user age into mercury age (age/.24)', () => {
    const user1 = new UserAge("Jeff", 38);
    expect(user1.mercuryAge()).toEqual(38);
  });
})