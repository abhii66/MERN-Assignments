import { useState } from "react";

function Counter(){
    //state
    const [count,setCount] = useState(0);
    //functions to modify the state
    const increment=()=>{
        setCount(count+1);
    };
    const decrement=()=>{
        setCount(count-1);
    };

    const reset=(value)=>{
        setCount(value)
    }

    //return
    return (
        <div>
        <div className="text-center p-10 border-2">
            <h1 className="text-8xl">Count:{count}</h1>
            </div>
            <div>
            <button className="px-10 py-10 bg-green-600" onClick={increment}>+</button>
            <button className="px-10 py-10 bg-red-600" onClick={decrement}>-</button>
            <button className="px-10 py-10 bg-blue-600" onClick={()=>reset(0)}>reset</button>
            </div>
        </div>
    )
}

export default Counter