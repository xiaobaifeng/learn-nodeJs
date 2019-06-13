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
 * yargs 模块提供 argv 对象，用来读取命令行参数。请看改写后的 hello 。
 * 可以使用 alias 方法，指定 name 是 n 的别名。
 * argv 对象有一个下划线（_）属性，可以获取非连词线开头的参数。
 */

// var argv = require('yargs')
//   .alias('n', 'name')
//   .argv;

// console.log('hello ', argv.n);
// console.log(argv._);

/**
 * 六、命令行参数的配置
 * yargs 模块还提供3个方法，用来配置命令行参数。
 * demand：是否必选
 * default：默认值
 * describe：提示
 */

// var argv = require('yargs')
//   .demand(['n'])
//   .default({'n': tom})
//   .describe({'n': 'your name'})
//   .argv;

/**
 * 上面代码指定 n 参数不可省略，默认值为 tom，并给出一行提示。
 * options 方法允许将所有这些配置写进一个对象。
 */

// var argv = require('yargs')
//   .options('n', {
//     alias: 'name',
//     demand: true,
//     default: '醉眼',
//     describe: 'your name',
//     type: 'string'
//   })
//   // .boolean(['g'])
//   .option('g', {
//     boolean: true
//   })
//   .argv;
  
// console.log('hello ', argv);

/**
 * 七、帮助信息
 * yargs 模块提供以下方法，生成帮助信息。
 * usage：用法格式
 * example：提供例子
 * help：显示帮助信息
 * epilog：出现在帮助信息的结尾
 */

var argv = require('yargs')
  .options('n', {
    alias: 'name',
    demand: true,
    default: '醉眼',
    describe: 'your name',
    type: 'string'
  })
  .usage('Usage: hello [options]')
  .example('hello -n tom', 'say hello to Tom')
  .help('h')
  .alias('h', 'help')
  .epilog('copyright 2015')
  .argv;

console.log('hello ', argv);