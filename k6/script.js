import { check } from 'k6';
import http from 'k6/http';

export default function () {
  const res = http.get('http://localhost:9000');
  const resBackend = http.get('http://localhost:8000/api/entreesdujour');
  console.log(resBackend.json().length)
  check(res, {
    'is frontend status 200': (r) => r.status === 200,
  });
  check(resBackend, {
    'is backend status 200': (r) => r.status === 200,
  });
  check(resBackend.json(), {
    'is response length > 0': (r) => r.length > 0,
  });
}