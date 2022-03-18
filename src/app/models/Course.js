const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
// const methodOverride = require('method-override');
const Course = new Schema({
    name : {type : String,  required : true},
    description : {type : String},
    image : {type : String},
    videoid:{
        type : String,
        required : true
    },
    level : {
        type : String
    }
    ,
    slug : {type: String, slug : 'name'}
},{
    timestamps : true
})
//  plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
    deleteAt : true,
    overrideMethods: 'all' }); 

module.exports = mongoose.model('Course',Course);