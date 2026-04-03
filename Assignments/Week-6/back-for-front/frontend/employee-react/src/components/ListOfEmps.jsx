import { useState } from "react";
import { useEffect } from "react";
import {useNavigate} from "react-router"
import axios from 'axios'
function ListOfEmps() {

  const [emps, setEmps] = useState([]);
  const navigate=useNavigate();

  const gotoEmp=(empObj)=>{
    // navigating to /employee with empOnj
    navigate("/employee",{state:empObj})
  }
  const gotoEditEmp=(empObj)=>{
    // navigating to /employee with empOnj
    navigate("/edit-emp",{state:empObj})
  }

  const deleteEmpId=async(empObj)=>{
    let res = await axios.delete(`http://localhost:6677/employee-api/employees/${empObj._id}`)
    if(res.status===200){
      getEmps(); 
    }
  }

  //get all employees
  async function getEmps() {
      let res = await fetch("http://localhost:6677/employee-api/employees");
      if (res.status === 200) {
        let resObj = await res.json();
        setEmps(resObj.payload);
      }
    }

  useEffect(() => {
    async function getEmps() {
      let res = await fetch("http://localhost:6677/employee-api/employees");
      if (res.status === 200) {
        let resObj = await res.json();
        setEmps(resObj.payload);
      }
    }
    getEmps();
  }, []);
  return (
    <div>
      <h1 className='text-3xl text-center'>List Of Employee</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {
          emps.map((empObj)=>(
            <div key={empObj._id} className="my-5 rounded-2xl bg-white p-5 text-2xl">
            <p>User : {empObj.name}</p>
            <p>Email : {empObj.email}</p>
            <div className="flex justify-around p-4">
              <button onClick={()=>gotoEmp(empObj)} className="bg-blue-400 p-3 rounded-2xl text-white">View</button>
              <button onClick={()=>gotoEditEmp(empObj)} className="bg-cyan-700 p-3 rounded-2xl text-white">Edit</button>
              <button onClick={()=>deleteEmpId(empObj)}className="bg-red-500 p-3 rounded-2xl text-white">Delete</button>
            </div>
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default ListOfEmps