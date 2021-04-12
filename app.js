const url = require('url');
const querystring = require('querystring');
const express = require('express');
const unblocker = require('unblocker');
const Transform = require('stream').Transform;


const app = express();

var unblockerConfig = {
    prefix: '/proxy/'
};

app.use(unblocker(unblockerConfig));

app.use('/', express.static(__dirname + '/public'));

app.get("/no-js", function(req, res) {
    var site = querystring.parse(url.parse(req.url).query).url;
    res.redirect(unblockerConfig.prefix + site);
});


app.listen(Number(process.env.PORT || 80))


