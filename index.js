const express = require("express");  
const app = express();

app.get('/', function (req, res) {
    const filename = req.query.filename + ".doc" || "test.doc"
    res.download('file.doc', filename)
  });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });