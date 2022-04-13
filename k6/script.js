import { describe } from 'https://jslib.k6.io/expect/0.0.4/index.js';
import http from 'k6/http';

export const options = {
  thresholds: {
    checks: [{threshold: 'rate == 1.00',abortOnFail: true }],
  }
};

export default function () {
  describe('Fetch today\'s entrees', (t) => {
    const response = http.get('http://localhost:8000/api/entreesdujour');

    t.expect(response.status)
      .as('response status')
      .toEqual(200)
      .and(response)
      .toHaveValidJson()
      .and(response.json().length)
      .as('number of entree')
      .toBeGreaterThan(0);
  });
}