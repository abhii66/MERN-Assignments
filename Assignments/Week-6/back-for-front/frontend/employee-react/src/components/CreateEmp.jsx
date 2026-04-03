import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router";
function CreateEmp() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const {register,handleSubmit,formState:{errors}}=useForm() 

    const onFormSubmit=async(newEmpObj)=>{
        
        console.log(newEmpObj)
        try{
        setLoading(true);
        let res=await fetch("http://localhost:6677/employee-api/employees",{
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(newEmpObj)
        });
        if(res.status===201){
            //navigating to the success page
            navigate("/list")
        }else {
        let errorRes = await res.json();
        console.log("error responce is ", errorRes);
        throw new Error(errorRes.reason);
        }
        }catch(err){
            //dealing w error
            setError(err.message);
        }finally{
            setLoading(false);
        }
    }

    if(loading){
         <p className="text-blue-600 text-center text-3xl">Loading...</p>
    }
    if(error){
        return <p className="text-red-600 text-center text-3xl">{error}</p>
    }

  return (
    <div>
        <h1 className="text-center text-4xl my-4">Create New Employee</h1>
        <form className="text-center block mx-auto" onSubmit={handleSubmit(onFormSubmit)}>
            <input type="text" placeholder="Enter employee name" {...register("name") } className=" text-2xl border rounded-2xl p-4 mx-auto block my-3"/>
            <input type="text" placeholder="Enter email id" {...register("email") } className=" text-2xl border rounded-2xl p-4 mx-auto block my-3"/>
            <input type="text" placeholder="Enter mobile number" {...register("mobile") } className=" text-2xl border rounded-2xl p-4 mx-auto block my-3"/>
            <input type="text" placeholder="Enter designation" {...register("designation") } className=" text-2xl border rounded-2xl p-4 mx-auto block my-3 "/>
            <input type="text" placeholder="Enter company name" {...register("companyName") } className=" text-2xl border rounded-2xl p-4 mx-auto block my-3"/>
            <button type="submit" className="block mx-auto my-3 bg-blue-950 p-3 rounded-2xl text-white">Add Emp</button>
        </form>
    </div>
  )
}

export default CreateEmp