import React from 'react'
import { useLocation } from 'react-router-dom'

const Success = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div style={{backgroundColor : "white" , width : "100vw" , height : "100vh"  , color : "black"  , fontSize : "2rem" , display : "flex", justifyContent : "center"}}>
      it is  successful
    </div>
  )
}

export default Success
