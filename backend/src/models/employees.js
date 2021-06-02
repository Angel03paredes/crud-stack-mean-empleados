const {Schema,model} = require("mongoose");

const employees = new Schema({
    name : {type:String , require : true},
    position: {type:String,require:true},
    office: {type:String,require:true},
    salary : {type:Number,require:true}
},{
    timestamps:true,
    versionKey:false
});

module.exports = model("Employee",employees);