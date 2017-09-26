# nest-rr
Get upstream HTTP server host addresses, which are passed  in a round-robin manner.

### Install
```shell
npm install neat-rr
```

### Hello RR
```js
const rr = require('./index.js')

const arr = [1, 2, 3, 4, 5]
const getRR = rr(arr);

let n = 0;
while (n < 10) {
  console.log(`Get ${getRR()} in ${n} times.`)
  n++
}
// Get 1 in 0 times.
// Get 2 in 1 times.
// Get 3 in 2 times.
// Get 4 in 3 times.
// Get 5 in 4 times.
// Get 1 in 5 times.
// Get 2 in 6 times.
// Get 3 in 7 times.
// Get 4 in 8 times.
// Get 5 in 9 times.
```