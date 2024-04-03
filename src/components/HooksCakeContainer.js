import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions';

function HooksCakeContainer() {
    const numOfCakes =  useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch(); // hook to access the store’s dispatch function. It allows you to trigger an action in 
  return (
    <div>
        <h2>Number of cakes - {numOfCakes}</h2>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer