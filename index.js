'use strict'

// refer from: [addr-to-ip-port](https://github.com/feross/addr-to-ip-port/blob/master/index.js)
const ADDR_RE = /^\[?([^\]]+)\]?:(\d+)$/ // ipv4/ipv6/hostname + port

module.exports = class Addr {
  constructor(arr) {
    this.addrs = [];
    this.length = arr.length;
    this.size = 0;
    this.n = -1;

    for (let item of arr) {
      if (this.size === 1000) this.reset();
      if (typeof item === 'object') {
        if (!item.host) throw new Error('invalid addr: ' + item);
        this.addrs.push({
          host: item.host,
          port: item.port || null,
        })
        this.size += 1
      } else if (typeof item === 'string') {
        const m = ADDR_RE.exec(addr);
        if (!m) throw new Error('invalid addr: ' + item);
        this.addrs.push({
          host: m[1],
          port: Number(m[2]) || null,
        })
        this.size += 1
      }
    }
  }

  reset() {
    this.addrs = [];
    this.size = 0;
  }

  get() {
    this.n = (this.n + 1) % this.length;
    return this.addrs[this.n];
  }
}