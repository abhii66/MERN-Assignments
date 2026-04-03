import { useEffect,useState,useContext } from "react"
import { useForm } from "react-hook-form"
import { useLocation,useNavigate } from "react-router";
import axios from 'axios'
import { counterContextObj } from "../contexts/ContextProvider";

function EditEmp() {

  const {counter,changeCounter}=useContext(counterContextObj);

  const {register,handleSubmit,formState:{errors},setValue}=useForm();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  //get empObj from navigate hook
  const {state}=useLocation();
  const navigate=useNavigate();
  useEffect(()=>{
    setValue("name",state.name);
    setValue("email",state.email);
    setValue("mobile",state.mobile);
    setValue("designation",state.designation);
    setValue("companyName",state.companyName);
  },[])

  const saveModifiedEmp = async (modifiedEmp) => {
    // console.log(modifiedEmp);
    try{
    //make HTTP PUT req
    const res = await axios.put(`http://localhost:6677/employee-api/employees/${state._id}`, modifiedEmp);
    if (res.status === 200) {
      //navigate to ListOfEMps
      navigate("/list");
    }
    }
    catch(err){
            //dealing w error
            setError(err.message);
        }finally{
            setLoading(false);
        }
  };

    if(loading){
         <p className="text-blue-600 text-center text-3xl">Loading...</p>
    }
    if(error){
        return <p className="text-red-600 text-center text-3xl">{error}</p>
    }

  return (
    <div>
      <div>
      <h1 className='text-4xl'>Counter : {counter}</h1>
      <button onClick={changeCounter} className='bg-amber-500 p-4'>Change</button>
    </div>
      <h1 className="text-center text-4xl my-4 ">Edit Employee</h1>
        <form className="text-center block mx-auto  max-w-md" onSubmit={handleSubmit(saveModifiedEmp)}>
            <input type="text" placeholder="Enter employee name" {...register("name") } className=" text-2xl border rounded-2xl p-4 mx-auto block my-3 w-full"/>
            <input type="text" placeholder="Enter email id" {...register("email") } className=" text-2xl border rounded-2xl p-4 mx-auto block my-3 w-full"/>
            <input type="text" placeholder="Enter mobile number" {...register("mobile") } className=" text-2xl border rounded-2xl p-4 mx-auto block w-full my-3"/>
            <input type="text" placeholder="Enter designation" {...register("designation") } className=" text-2xl border rounded-2xl p-4 mx-auto block my-3 w-full"/>
            <input type="text" placeholder="Enter company name" {...register("companyName") } className=" text-2xl border rounded-2xl p-4 mx-auto block my-3 w-full"/>
            <button type="submit" className="block mx-auto my-3 bg-green-800 p-3 rounded-2xl text-white">Save</button>
        </form>
    </div>
  )
}

export default EditEmp