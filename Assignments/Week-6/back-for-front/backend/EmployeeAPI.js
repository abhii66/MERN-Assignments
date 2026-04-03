import { EmployeeModel } from "./EmployeeModel.js"
import exp from 'express'
export const empApp=exp.Router()

//create emp
empApp.post('/employees',async(req,res)=>{
    let emp=req.body
    const newUserDocument=new EmployeeModel(emp)
    const result= await newUserDocument.save()
        console.log("result: ", result)
        res.status(201).json({message:"Employee added."})
})

//Read all emps
empApp.get("/employees", async (req, res) => {
  let empList = await EmployeeModel.find();
  res.status(200).json({ message: "list of emps", payload: empList });
});

//Update emp id
empApp.put("/employees/:id", async (req, res) => {
  const modifiedEmp = req.body;
  //find and update
  let updatedEmp = await EmployeeModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: { ...modifiedEmp },
    },
    { returnDocument: "after" },
  );
  if (!updatedEmp) {
    return res.status(404).json({ message: "emp not found" });
  }
  res.status(200).json({ message: "employee updated", payload: updatedEmp });
});

//Delete emp by id
empApp.delete("/employees/:id", async (req, res) => {
  let deletedEmp = await EmployeeModel.findByIdAndDelete(req.params.id);
  if (!deletedEmp) {
    return res.status(404).json({ message: "emp not found" });
  }
  res.status(200).json({ message: "employee deleted", payload: deletedEmp });
});