const newsRouter = require('./news');
const coursesRouter = require('./courses');
const sideRouter = require('./side')
const meRouter = require('./me')
function route(app){

    app.use('/me',meRouter);

    app.use('/courses',coursesRouter);
    
    app.use('/news',newsRouter);

    app.use('/',sideRouter);
    
}

module.exports = route;

// index.js gọi route() -> router xử lý tuyến đường
// rẻ nhánh 
// nhánh -> các controller tương ứng 
// controller trả về view