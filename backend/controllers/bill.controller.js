var BillModel=require('../models/bill.model.js')
module.exports={
    show:async (req,res)=>{
        var data = await BillModel.find({isTrash:false});
        // console.log(data);
        res.send(data);

    },
    getTrashBill:async (req,res)=>{
        var data = await BillModel.find({isTrash: true});
        // console.log(data);
        res.send(data);

    },
    add: async (req,res)=>{
        let {ten,soluong,giaohangden,ngay,tongtien,isComplete = false,isTrash = false}  = req.body;
        var newBill = await BillModel({ten:ten, soluong:soluong, 
            giaohangden:giaohangden, ngay:ngay, tongtien:tongtien, isComplete:isComplete, isTrash:isTrash});
        newBill.save();
        res.status(200).send();
        
    },
    update: async (req,res)=>{
        let {_id}  = req.body;
        await BillModel.updateOne({_id:_id},{isComplete:true})
        res.status(200).send();
    },
    remove: async (req,res)=>{
        let {_id}  = req.body;
        await BillModel.updateOne({_id:_id},{isTrash:true})
        res.status(200).send();
    }
}