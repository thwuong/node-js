const Course = require('../models/Course');
const {mongooseToObject} = require('../../util/mongoose');
const { redirect } = require('express/lib/response');
class CourseController {

    //Get courses/:slug
    show(req, res, next){
        Course.findOne( {slug : req.params.slug})
            .then(course => 
                res.render('courses/show', {course : mongooseToObject(course)})
            )
            .catch(next)
        
    }
    // get courses/create
    create(req, res, next){
        res.render('courses/create');
    }
    // post courses/store
    store(req, res, next){
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${formData.videoid}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBPo5vy-nCVWOZZm81nP-qomktTrg`
        const course = new Course(formData);
        course.save()
            .then(()=> res.redirect('/'))
            .catch()
    }
    // GET /:id/edit
    edit(req, res, next){
        Course.findById(req.params.id)
            .then((course) => {
                res.render('courses/edit',{
                    course : mongooseToObject(course)
                })
            })
            .catch(next)
    }
    //  PUT courses/:id
    update(req, res, next){
        Course.updateOne({
            _id : req.params.id
        }, req.body)
        .then(() => res.redirect('/me/stored/courses'))
    }
    // DELETE courses/:id
    delete(req, res, next){
        Course.delete({_id : req.params.id},)
            .then(() => res.redirect('back'))
            .catch(next)
    }
    // PATCH courses/:id/restore
    restore(req, res, next){
        Course.restore({ _id : req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    // Xóa vv
    force(req, res, next){
        Course.deleteOne({_id : req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
    // [POST] // /courses/handle-form-actions
    handleFormActions(req, res, next){
        switch(req.body.action){
            case 'delete' :
                Course.delete({_id : {$in : req.body.courseIds}})
                .then(() => res.redirect('back'))
                .catch(next)
                break;
            case 'restore' :
                Course.restore({_id : {$in : req.body.courseIds}})
                .then(() => res.redirect('back'))
                .catch(next)
                break;
            case 'force' :
                Course.deleteMany({_id : req.body.courseIds})
                .then(() => res.redirect('back'))
                .catch(next)
                break;
            default : res.json({message : 'Action ivalid!'})
        }
    }
    
}

module.exports = new CourseController();
//xuat ra doi tuong newscontroller