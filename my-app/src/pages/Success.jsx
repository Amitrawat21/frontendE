import React from 'react'
import { useLocation } from 'react-router-dom'

const Success = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div style={{backgroundColor : "blue" , width : "100vw" , height : "100vh"  , color : "white"  , fontSize : "2rem" , display : "flex", justifyContent : "center"}}>
      it is  success
    </div>
  )
}

export default Success
