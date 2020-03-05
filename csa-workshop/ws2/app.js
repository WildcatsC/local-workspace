// 要在mysql shell 这样许可连接： ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'iamlegend24'

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'iamlegend24',
    daiatabase: 'n'
});

connection.connect();

connection.query('SELECT * FROM nigga_chatroom', function(error, results, fields) {
    if (error) throw error;
    console.log(results);
});

connection.end();