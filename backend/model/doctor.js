const mongoose = require('mongoose');
const doctor_schema = mongoose.Schema({
    name:{
        type:String, 
        default:"Dr. Pavan",
       
    },
    expertise:{
        type:[String],
       
    },
    image:{
        type:String,
        default:"https://img.freepik.com/premium-vector/doctor-surgeon-pharmacist-therapist-with-stethoscope-smiling-medic-worker-medical-staff_458444-338.jpg",
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        
    },
    contact:{
        type:String,
       
    },
    desc:{
        type:String,
       
    },
    date:{
        type:[String],
       
    },
    ammount:{
        type:Number,
      

    },
    is_doctor:{
        type:Boolean,
        default:true
    }
    
});

// name, expertise, image,date,contact,email,password,desc,ammount



const doctor = mongoose.model("doctor",doctor_schema);
module.exports = doctor;


