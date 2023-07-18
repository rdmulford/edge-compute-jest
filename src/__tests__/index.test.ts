import { getSecret } from '..';

describe('getSecret', () => {
  it('should get secret', async () => {
    expect(await getSecret()).toBe('test');
  });
});
