const express = require('express');

const server = express();

server.get('*', (req, res) => (res.send( 'hello' ), res.end()));
server.listen(3245, () => {});
