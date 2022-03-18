const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const app = express();
const methodOverride = require('method-override')
const port = 3000
const route = require('./routes');
const db = require('./config/db');
const { json } = require('express/lib/response');
// connect db
db.connect();
// logger khi save code 
// app.use(morgan('combined'));
// cau hinh static
app.use(express.static(path.join(__dirname,'public')))

// template engines
app.engine("hbs",
    handlebars.engine({ 
        extname: '.hbs',
        helpers : {
          sum : (a,b) => a+b
        }
}));
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'resources','views'));
app.use(methodOverride('_method'))

app.use(express.json())
//routes init
route(app);



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})