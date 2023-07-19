import { getSecret } from '..';

describe('getSecret', () => {
  it('should get secret', async () => {
    expect(getSecret()).toBe('test-secret');
  });
});
