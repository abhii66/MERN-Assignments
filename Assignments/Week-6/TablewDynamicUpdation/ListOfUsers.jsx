import { useState } from "react"
import { useForm } from "react-hook-form"
function ListOfUsers(){

        const [users,setUsers]=useState([])
        const {register, //to register form fields
        handleSubmit, //to handle form submission
        formState:{errors} //to handle validations
    }=useForm();

    //on submit function
    const onFormSubmit=(obj)=>{
        console.log(obj);
        setUsers([...users, obj]);
    };



    return(
        <div>
            <div className= "bg-orange-500 my-8 p-10 max-w-md mx-auto">
            <h1 className="text-center text-5xl">Create User List</h1>
            {/* form */}
            <form className="max-w-md mx-auto mt-12" onSubmit={handleSubmit(onFormSubmit)}>
              <div className="mb-3">
                <label htmlFor="username">UserName</label>
                <input type="text" {...register("username",
                    {
                        required:"Username Required",
                        minLength:6,
                        maxLength:12,
                        validate:(value)=>value.trim().length!==0 || "White space is not valid"
                    }
                )} id="username" className="border w-full p-3"/>
                {/* username validation error message */}
                {errors.username?.type==="required" && <p className="text-red-600">{errors.username.message}</p>}
                {errors.username?.type==="minLength" && <p className="text-red-600">Min length of username is 6</p>}
                {errors.username?.type==="maxLength" && <p className="text-red-600">Username is too long</p>}
                {errors.username?.type==="validate" && <p className="text-red-600">White space is not valid</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="email">Email</label>
 <input type="email" {...register("email",
                    {
                        required:"Email Required"
                    }
                )} id="email" className="border w-full p-3"/>
                {/* username validation error message */}
                {errors.email?.type==="required" && <p className="text-red-600">{errors.email.message}</p>}
                {errors.email?.type==="validate" && <p className="text-red-600">{errors.email.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="dateOfBirth">Date Of Birth</label>
                <input type="date" {...register("dateOfBirth",
                    {
                        required:"Date Of Birth Required"
                    }
                )} id="dateOfBirth" className="border w-full p-3"/>
                {/* username validation error message */}
                {errors.dateOfBirth?.type==="required" && <p className="text-red-600">{errors.dateOfBirth.message}</p>}
            </div>
            <button type="submit" className="bg-blue-500 block mx-auto p-2">Add User</button>
            </form>
            </div>
            <div className= "bg-red-500 my-8 p-10 max-w-md mx-auto">
            <h1 className="text-center text-5xl">List Of Users</h1>
            <table className="border border-collapse p-3 mx-auto my-12">
                <thead className="p-2">
                    <tr>
                    <th className="p-2 border border-collapse">Username</th>
                    <th className="border border-collapse p-3">Email</th>
                    <th className="border border-collapse p-3">Date Of Birth</th>
                    </tr>
                </thead>
                <tbody >
                    {users.map((obj, index) => (
            <tr key={index}>
              <td className="border border-collapse p-3">{obj.username}</td>
              <td className="border border-collapse p-3">{obj.email}</td>
              <td className="border border-collapse p-3">{obj.dateOfBirth}</td>
            </tr>
          ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default ListOfUsers