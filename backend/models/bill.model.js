var mongoose = require('mongoose');
var BillSchema=new  mongoose.Schema({
    ten:String,soluong:Number, giaohangden:String,ngay:String,tongtien:Number, isComplete:Boolean,
    isTrash:Boolean
})
var  BillModel = mongoose.model('BillModel', BillSchema,'donhang');
module.exports=BillModel;