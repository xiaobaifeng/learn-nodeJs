#!/usr/bin/env node
// 命令行参数可以用系统变量 process.argv 获取。
// step1 console.log('hello ', process.argv[2]);
var name = process.argv[2];
var exec = require('child_process').exec;

var child = exec('echo hello ' + name, function (err, stdout, stderr) {
  if (err) throw err;
  console.log(stdout);
})
