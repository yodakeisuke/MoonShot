import { aryMax } from 'components/viewModel/Why/WhyState';

describe('function: aryMax', () => {
  test('pass 1 , 2 to return 2', () => {
    expect(aryMax(1, 2)).toStrictEqual(2);
  });

  test('pass 3 , 2 to return 3', () => {
    expect(aryMax(3, 2)).toStrictEqual(3);
  });
});
