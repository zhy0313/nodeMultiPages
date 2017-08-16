const express = require('express')
const path=require('path');
const bodyParser = require('body-parser')


const index = require('./routers/index')

const app = express()
const port = process.env.PORT || 3000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'webpages')));//指向编译后的HTML文件目录
app.use(express.static(path.join(__dirname, 'webstatics')));//指向编译后的js、css等静态资源目录

app.use('/testApi', index);

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

module.exports = app