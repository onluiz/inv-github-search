const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../dist')))
app.listen(3001, () => console.log('Example app listening on port 3001!'))