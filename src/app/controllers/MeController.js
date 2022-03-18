const Course = require('../models/Course');
const {mutipleMongooseToObject} = require('../../util/mongoose');
class CourseController {

    //Get me/stored/courses
    storedCourses(req, res, next){

        Promise.all([Course.find({}),Course.countDocumentsDeleted({})])
            .then(([courses,countDeleted]) => {
                res.render('me/stored-courses', {
                    countDeleted,
                    courses : mutipleMongooseToObject(courses)
                })
            })
            .catch(next)
    }
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trash-courses', {
                courses : mutipleMongooseToObject(courses)
            }))
            .catch(next)
    }
    
}

module.exports = new CourseController();
//xuat ra doi tuong newscontroller