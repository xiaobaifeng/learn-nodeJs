var http = require('http');

http.createServer(function (request, response){
  // 发送HTTP 头部
  // HTTP 状态值：200: OK
  // 内容类型 text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});

  // 发送相应数据 ‘Hello World!'
  response.end('Hello World\n'); 
}).listen(8888);

// 终端打印如下信息
console.log('\x1b[32m%s\x1b[0m', 'Server running at http://127.0.0.1:8888');
