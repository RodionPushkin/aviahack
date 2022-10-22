const express = require('express')
const app = express()
const db = require("./database");
const path = require("path");
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const port = 3000
app.use(require('cors')({
    credentials: true,
    methods: ['OPTION', 'GET', 'POST', 'PUT', 'DELETE'],
    origin: '*'
}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'dist')))

app.listen(port, () => {
    console.log(`Server started on port: ${port} at ${new Date().toLocaleString('ru')}`)
    // db.checkConnection()
})
