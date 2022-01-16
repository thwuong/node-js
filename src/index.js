const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000

// logger khi save code 
app.use(morgan('combined'));

// template engines
app.engine('hbs',handlebars.engine({extname: ".hbs"}));
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'resources/views'));

// cau hinh static
app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})