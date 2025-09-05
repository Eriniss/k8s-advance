import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        { duration: '1m', target: 1000 },
        { duration: '2m', target: 1000 },
        { duration: '1m', target: 0 }
    ]
}

export default function () {
    // MetalLB IP 주소
    http.get('http://192.168.219.200');
    sleep(1)
}