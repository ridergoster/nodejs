var http = require('http');

var server = http.createServer();
var todos = ['todoA', 'todoB', 'todoC'];

server.on('request', function(req, res){
  var method = req.method;
  var headers = req.headers;
  var host = headers['host'];
  var url = req.url;

  // PUT /todos/old/new
  // modify all the todos that have the same name with new name
  if(method === 'PUT' && /\/todos\/([a-zA-Z]*)\/([a-zA-Z]*)/.test(url)){
    var components = url.split('/')
    var old = components[2];
    var updated = components[3];

    var newTodos = [];
    todos.forEach(function(todo){
      if (todo === old)
        return newTodos.push(updated);
      newTodos.push(todo)
    });
    todos = newTodos;
    return res.end(newTodos.toString());
  }
  // POST /todos
  // Add the request body to the todos array.
  if(method === 'POST' && url === '/todos'){
    var body = [];
    req.on('data', function(chunk){
        console.log('received chunk:', chunk);
        body.push(chunk);
    });

    req.on('end', function(err){
      var todo = Buffer(body.toString());
      todos.push(todo);

      return res.end(todos.toString());
    });

    return;
  }
  // [DELETE] /todos/name
  // delete all occurences of todos that have the same name
  if (method === 'DELETE' && /\/todos/.test(url)){
    var name = url.split('/')[2];
    var newTodos = [];
    todos.forEach(function(todo){
      if (todo == name)
        return;
      newTodos.push(todo);
    });
    todos = newTodos;
    res.end(todos.toString());
  }
  // [GET] /todos
  // Return/respond the content of todos array.
  if (method === 'GET' && url === '/todos')
    return res.end(todos.toString())

  res.statusCode = 404;
  res.end('cannot ' + method + ' ' + url);
});

console.log('Server listening on port 3000');
server.listen(3000);
