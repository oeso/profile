'use strict';

var req = new XMLHttpRequest();
var url = 'https://api.bithumb.com/public/ticker/BTC';

req.open('GET', url, false);
req.send(null);

console.log(req)