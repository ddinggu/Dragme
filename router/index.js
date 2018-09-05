const fs = require('fs');
const express = require('express');
const app = express();
const router = express.Router();

// get music data router
router.get('/list/:id', (req, res) => {
    const index = parseInt(req.params.id);
    console.log(index);
    // console.dir(req);

    fs.readFile(__dirname + '/../data/data.json', 'utf8', (err, data) =>{
        let parsingData = JSON.parse(data);
        let result = parsingData.slice(index, index+3);
        res.send(result);
    })
})

// main router
router.get('/', (req, res) => {
    res.render('index');
})

module.exports = router;
