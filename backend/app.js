const express = require('express');
const app = express();
const port = 8080;

const ds = require("./dataStore");

app.use(express.json({limit: '50mb'}));
app.use(express.static('public'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'accept, authorization, content-type, x-requested-with');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.setHeader('Access-Control-Allow-Origin', '*');

    next();
});

app.get('/api/v1/recipes', (req, res) => {

    const retrivedData = ds.get();
    res.statusCode = retrivedData.code;

    res.json(retrivedData.data);

})

app.post('/api/v1/recipes', (req, res) => {
    
    const response = ds.add(req.body);
    res.statusCode = response.code;
    res.json(response);

})

app.post('/api/v1/recipes', (req, res) => {
    
    const response = ds.add(req.body);
    res.statusCode = response.code;
    res.json(response);

})

app.post('/api/v1/recipes/thumbnails/', async(req, res) => {
    
    const response = await ds.addThumbnail(req.body);
    res.statusCode = response.code;
    res.json(response);

})

app.delete('/api/v1/recipes/:idx', (req, res) => {
    
    const response = ds.delete(req.params.idx);
    res.statusCode = response.code;
    res.json(response);

})

app.listen(port, async() => {
    await ds.init();
    console.log(`\x1b[32mNinjaChefs API listening on port ${port}\x1b[0m`)
})