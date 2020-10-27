var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localHost',
  user     : 'user',
  password : 'user12345',
  database : 'mydatabase'

});

var http = require("http");
var datos= [];
 
connection.connect(function(err) {
  if (err) throw err; // not connected!
  // Use the connection
  connection.query('SELECT * FROM vehiculo;', function (error, results, fields) {
    // When done with the connection, release it.
    datos=fields;
    // Console will print the message
    console.log('Server running at http://127.0.0.1:8081/');
    if (error) throw error;
    console.log('Server error');
  });
  });

  http.createServer(function (request, response) {
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end(fields);
    }).listen(8081);