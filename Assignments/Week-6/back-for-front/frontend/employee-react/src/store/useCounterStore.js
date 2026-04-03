import {create} from 'zustand'

//create store
export const useCounterStore=create((set)=>({
    //state
    newCounter:0,
    newCounter1:10,
    //add user state(name,age,email)
    user:{name:"lexus",email:"lexusla123@gmail.com",age:19},
    // function to change email
    changeEmail:()=>set({...user,email:"nexus123@gmail.com"}),
    // function to change name and email
    changeNameAndAge:()=>set({...user,name:"Nexus",age:18}),
    //functions to modify
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    incrementCounter1:()=>set(state=>({newCounter1:state.newCounter1+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0}),
    //function to change newCounter to 500
    changeValue:()=>set({newCounter:500}),
    //function to decrement newCounter1 by 2
    decrementCounterBy2:()=>set(state=>({newCounter1:state.newCounter1-2})),
}))