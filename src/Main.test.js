import { initializeTimes, updateTimes } from './timeUtils';

beforeEach(() => {
  window.fetchAPI = jest.fn(() => ['17:00', '18:00']);
});

test('initializeTimes returns expected times', () => {
  const times = initializeTimes();
  expect(window.fetchAPI).toHaveBeenCalled();
  expect(times).toEqual(['17:00', '18:00', '19:00', '20:00']);
});

