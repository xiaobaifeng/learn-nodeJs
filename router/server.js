var http = require('http');
var url = require('url');

function start(route) {
  function onRequest (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received.');

    route(pathname);
    // text/plain
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<div>Hello World!<br> from ' + pathname + '</div>');
    response.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log('Server has started');
}

exports.start = start;
