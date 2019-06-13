// 阻塞代码实例

var fs = require('fs');

console.log('\x1b[36m%s\x1b[0m', '阻塞代码实例 -- blocking code');

var data = fs.readFileSync('input.txt');

console.log('\x1b[33m%s\x1b[0m',data.toString());

console.log('\x1b[32m%s\x1b[0m', '程序执行结束！');

// 非阻塞代码实例

console.log('\x1b[36m%s\x1b[0m', '非阻塞代码实例 --- Non-blocking code');

fs.readFile('input.txt', function(err, data){
  if (err) return console.error(err);
  console.log('\x1b[33m%s\x1b[0m',data.toString());
})

console.log('\x1b[32m%s\x1b[0m', '程序执行结束！');
