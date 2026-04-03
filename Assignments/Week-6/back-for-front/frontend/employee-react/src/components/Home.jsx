import {useContext} from 'react'
import { counterContextObj } from '../contexts/ContextProvider'
import Test from './Test';
import {useCounterStore} from "../store/useCounterStore"

function Home() {
  //get useCounterStore hook to get state of Zustand Store
  let newCounter=useCounterStore((state)=>state.newCounter);
  let incrementCounter=useCounterStore((state)=>state.incrementCounter);

  const {counter,changeCounter}=useContext(counterContextObj);
  console.log("Home Rendered")
  return (
    <div>
      <h1 className='text-4xl'>Counter : {counter}</h1>
      <button onClick={changeCounter} className='bg-amber-500 p-4'>Change</button>
      <h1 className='text-4xl'>New Counter : {newCounter}</h1>
      <button onClick={incrementCounter} className='bg-amber-500 p-4'>Increment New Counter</button>
      <Test />
    </div>
  )
}

export default Home