// workshop 01

const express = require('express')
const app = express()
const port = 1024


function reverse(str) {
    let result = "";
    for (var i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

app.get('/', (req, res) => {
    // res.send(reverse(req.query.string));
    res.send("fuck you");
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))