import {Schema,model, version} from "mongoose"

const empSchema=Schema({
    name:{
        type:String,
        required:[true,"Name is required."]
    },
    email:{
        type:String,
        required:[true,"Email is required."],
        unique:[true,"This email already exists."]
    },
    mobile:{
        type:Number,
        required:[true,"Contact is required."]
    },
    designation:{
        type:String,
        required:[true,"Designation is required."]
    },
    companyName:{
        type:String,
        required:[true,"CompanyName is required."]
    }
},{
    versionKey:false,
    timeStamps:true
})

export const EmployeeModel=model("employee",empSchema)