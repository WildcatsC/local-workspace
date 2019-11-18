// workshop 01 plus 02;

const express = require('express')
const app = express()
const port = 1024

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'iamlegend24',
    database: 'NIGGA'
});
var words = "";


// function reverse(str) {
//     let result = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         result += str[i];
//     }
//     return result;
// }

app.get('/', (req, res) => { // Query:  http://localhost:1024/?publish=fucknigga
    connection.connect();
    // res.send(reverse(req.query.string));
    w = req.query.publish;
    console.log(w);
    var insert = "INSERT INTO nigga_chatroom VALUES (?, NOW())";
    // var values = [
    //     [w]
    // ];
    connection.query(insert, w, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    connection.end();
})

//not done yet
app.get('/view', (req, res) => {

    connection.connect();

    // connection.query();
    connection.query('SELECT * FROM nigga_chatroom',
        function(error, results, fields) {
            if (error) throw error;
            // console.log('nigga_chatroom\n', results[0].solution);
            console.log(results);
        });
    //res.send('nigga_chatroom');
    connection.end();
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));