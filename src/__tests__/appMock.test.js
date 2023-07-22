import GameSavingLoader from '../js/GameSavingLoader';
import read from '../js/reader';

jest.mock('../js/reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('function load - error', () => {
  read.mockRejectedValue(new Error('Async error message'));

  GameSavingLoader.load().catch((e) => {
    expect(e).toEqual('Async error message');
  });
});
