import UserAge from '../src/js/userAge';

describe('UserAge', () => {

  test('Should correctly intake a user and a users age', () => {
    const user1 = new UserAge("Jeff", 38);
    expect(user1.name).toEqual("Jeff");
    expect(user1.earthAge).toEqual(39);
  });
})