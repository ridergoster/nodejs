var express = require('express');
var server = express();

require('./settings')(server);
require('./models')(server);
require('./actions')(server);
require('./middlewares')(server);
require('./routes')(server);

console.log('Server listening on port 8080');
server.listen(server.settings.port);
