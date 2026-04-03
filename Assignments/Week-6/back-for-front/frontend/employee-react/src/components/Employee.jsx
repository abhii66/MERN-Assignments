import { useLocation } from "react-router"

function Employee() {
    const {state}=useLocation();
    // console.log(state)

  return (
    <div className="text-center p-10 border rounded-3xl shadow-2xl text-2xl">
        <p>Name : {state.name}</p>
        <p>Email : {state.email}</p>
        <p>Mobile : {state.mobile}</p>
        <p>Desgination : {state.designation}</p>
        <p>Company Name : {state.companyName}</p>
    </div>
  )
}

export default Employee