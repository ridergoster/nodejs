var express = require('express');
var server = express();

require('./middlewares')(server);
require('./models')(server);
require('./actions')(server);
require('./routes')(server);

console.log('Server listening on port 8080');
server.listen(8080);
