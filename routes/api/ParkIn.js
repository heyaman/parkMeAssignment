const express = require('express');
const { VehicleType } = require('../../OOPSDesign/enumType');
const router=express.Router();
let ParkingAttendant=require('../../OOPSDesign/ParkingAttendant');
let ParkingLot=require('../../OOPSDesign/ParkingLot');
let ParkingAttendant=ParkingAttendant.ParkingAttendant;
// router.get('/',(req,res)=>{
//     res.json({
//         status:200,
//         comment: 'Parked success'
//     })
// })
router.post('/',(req,res)=>{
    // need to get all details from user like: name,email,adhar id,
    // based upon this furhter action will be taken
    name=req.name;
    phone=req.phone;
    email=req.email;
    adharId=req.adharId;
    vehicleNumber=req.vehicleNumber;
    VehicleType=req.VehicleType;
    if(ParkingLot.)

    

})



module.exports=router;