var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var studentSchema=new Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
});
module.exports=mongoose.model('Logins',studentSchema);
