var express = require('express');
var app = express();

app.get('/', (req, res)=>
res.sendfile('/index.html')
);
app.listen(3000, function(){
    console.log('server is running on port 3000')
});
