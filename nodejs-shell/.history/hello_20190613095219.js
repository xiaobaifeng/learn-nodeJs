#!/usr/bin/env node

/**
 * 一、可执行脚本
 */
// console.log('hello world');

/**
 * 二、命令行参数的原始写法
 * 命令行参数可以用系统变量 process.argv 获取。
 */
// console.log('hello ', process.argv[2]);

/**
 * 三、新建进程
 * 1. 使用 child_process 创建 子进程
 * 2. 使用 shelljs 创建 子进程
 */
// step3 common code
// var name = process.argv[2];

// 1
// var exec = require('child_process').exec;

// var child = exec('echo hello ' + name, function (err, stdout, stderr) {
//   if (err) throw err;
//   console.log(stdout);
// })

// 2
// var shell = require("shelljs");

// shell.exec("echo hello " + name);

/**
 * 五、yargs 模块
 */

var argv = require('yargs').argv;

console.log('hello ', argv.name);