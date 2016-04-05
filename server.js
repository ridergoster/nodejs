var http = require('http');

var server = http.createServer();
var todos = ['todo-1', 'todo-2', 'todo-3'];

server.on('request', function(req, res){
  var method = req.method;
  var headers = req.headers;
  var host = headers['host'];


  // POST /todos
  // Add the request body to the todos array.

  // GET /todos
  // Return/respond the content of todos array.

});

console.log('Server listening on port 3000');
server.listen(3000);
