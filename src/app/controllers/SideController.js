const Course = require('../models/Course');
const {mutipleMongooseToObject} = require('../../util/mongoose')
class SideController {

    // Get [/home]
    index(req, res, next){
        // res.render('home');
        Course.find({})
            .then(courses => {
                res.render('home',{
                    courses : mutipleMongooseToObject(courses)
                })
            })
            .catch(next);
    }
    search(req,res){
        res.render('search')
    }
}

module.exports = new SideController();
//xuat ra doi tuong newscontroller