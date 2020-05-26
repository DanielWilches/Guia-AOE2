import { ArrayNullPipe } from './array-null.pipe';

describe('ArrayNullPipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayNullPipe();
    expect(pipe).toBeTruthy();
  });
});
