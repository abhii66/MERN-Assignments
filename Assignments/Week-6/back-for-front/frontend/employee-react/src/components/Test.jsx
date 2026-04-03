import {useContext} from 'react'
import { counterContextObj } from '../contexts/ContextProvider'
import { useCounterStore } from '../store/useCounterStore';

function Test() {

    let newCounter1=useCounterStore((state)=>state.newCounter1)
    let incrementCounter1=useCounterStore((state)=>state.incrementCounter1)

  const {counter1,changeCounter1}=useContext(counterContextObj);
  console.log("Test Rendered")
  return (
    <div><div>
      <h1 className='text-4xl'>Counter1 : {counter1}</h1>
      <button onClick={changeCounter1} className='bg-amber-500 p-4'>Change</button>
      <h1 className='text-4xl'>New Counter1 : {newCounter1}</h1>
      <button onClick={incrementCounter1} className='bg-amber-500 p-4'>Increment New Counter!</button>
    </div></div>
  )
}

export default Test