import testData from './test_data';

/**
 * Mock the fetching of data for now. Replace this function with a real
 * row-fetching API call later on.
 *
 * @returns {Promise} the row data
 */
export default function () {
  return new Promise((resolve) => {
    resolve(testData);
  });
}
