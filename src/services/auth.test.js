import authServices from './auth.services';

const mockedUser = {
  id: '123',
  name: 'Wizeline',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

describe('auth services', () => {
  it('auth service should return user data when the credentials are correct', async () => {
    const response = await authServices().loginApi('wizeline', 'Rocks!');

    expect(response).toBeDefined();
    expect(response).toMatchObject(mockedUser);
  });

  it('auth service should return error message when the credentials are not correct', async () => {
    try {
      await authServices().loginApi('ArielMD', '123');
    } catch (error) {
      expect(error.message).toBeDefined();
      expect(error.message).toBe('Username or password invalid');
    }
  });
});
