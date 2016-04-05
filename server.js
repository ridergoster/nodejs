var express = require('express');
var server = express();

require('./models')(server);
require('./actions')(server);
require('./routes')(server);

console.log('Server listening on port 3000');
server.listen(3000);
