import React from 'react'
import { useMyContext } from './Provider';

const InComponent = () => {
  const { progress } = useMyContext();


  return (
    <div>InComponent
      <button onClick={() => { progress.on() }}>on</button>
      <button onClick={() => { progress.off() }}>off</button>
    </div>
  )
}

export default InComponent