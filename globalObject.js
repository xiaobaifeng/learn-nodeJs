// 在浏览器js中，window是全局对象，而nodejs中的全局对象是global，所有的全局变量（除了
// global本身以外）都是global对象的属性

// global最根本的作用是作为全局变量的宿主，按照ECMAscript的定义，满足一下条件的变量是全局变量：
// // 在最外层定义的变量；
// // 全局对象的属性；
// // 隐式定义的变量(未定义直接赋值的变量);

// 当你定义一个全局变量的时候，这个变量同事也会成为全局对象的属性，反之亦然。
// 需要注意的是，在Node.js中你不可能在最外围定义变量，因为所有用户代码都是属于当前模块的，而模块本身不是最外围上下文
// *** 注意：永远使用var定义变量以避免引入全局变量，因为全局变量会污染命名空间，提高代码的耦合度。  ***

// __filename表示当前正在执行的脚本的文件名。他将输出文件所有位置的绝对路径。
console.info('__filename表示当前正在执行的脚本的文件名', __filename);
// __dirname表示当前执行脚本所在的目录。
console.info('__dirname表示当前执行脚本所在的目录', __dirname);
// process.cwd() 是当前执行node命令时候的文件夹地址 ——工作目录，保证了文件在不同的目录下执行时，路径始终不变
console.info('The process.cwd() method returns the current working directory of the Node.js process.', process.cwd());
