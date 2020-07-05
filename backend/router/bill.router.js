var express=require('express');
var {model}=require('mongoose');
var Billcontroller=require('../controllers/bill.controller');
var BillRouter=express.Router();

BillRouter.get('/',Billcontroller.show)
BillRouter.get('/Trashbill',Billcontroller.getTrashBill)

BillRouter.post('/add',Billcontroller.add)
BillRouter.post('/update',Billcontroller.update)
BillRouter.post('/remove',Billcontroller.remove)
module.exports=BillRouter;