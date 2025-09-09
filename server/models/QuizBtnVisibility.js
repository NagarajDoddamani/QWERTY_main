const mongoose=require('mongoose')

const VisibilitySchema=new mongoose.Schema({
    isVisible : Boolean
});

module.exports=mongoose.model('QuizBtnVisibility',VisibilitySchema)