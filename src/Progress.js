import React, { useEffect, useState } from 'react'

const Progress = ({setProgress}) => {

  const [flag, setFlag] = useState(false)

  const on = () => setFlag(true)
  const off = () => setFlag(false)

  useEffect(() => {
    console.log(123);
    setProgress(progress => {
      progress.on = on
      progress.off = off
      return progress
    })
  }, [])
  
  return (
    <div style={{display : !flag ? 'none' : 'block'}}>Progress</div>
  )
}
export default Progress