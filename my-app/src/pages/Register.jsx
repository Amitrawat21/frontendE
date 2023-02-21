import styled from "styled-components";
import { mobile } from "../responsive";
import {useState} from 'react'
import { NavLink } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const P = styled.span`
width: 40%;
border: none;
padding: 15px 20px;
background-color: blue;
color: white;
cursor: pointer;


`

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [input  , setInput] = useState({
    username : "",
    email : "",
    password : "",

  });



  const setVal = (e)=>{
    
    const {name , value} =e.target
  
    setInput({
      ...input ,
      [name] : value
    })
  }



  
  const addUserdata = async (e)=>{
    e.preventDefault()
    const {username , email , password } = input
    if(username === ""){
      alert("please enter your username")
    }
    else if(email === ""){
      alert("please enter your email")

    }
    else if(!email.includes("@")){
      alert("enter valid email")
    }
    else if(password === ""){
      alert("please enter your password")

    }
   
    else if(password.length<6){
      alert("password must me 6 char")
    }
   

    else{
       alert(" user registration sucessfully done")

      const data = await fetch("http://localhost:5000/api/auth/register", {
        method : "POST",
        headers : {
          "content-type" : "application/Json"
        },
        body : JSON.stringify({
          username , email , password

        })
      });
      const res =await data.json();
      console.log(res)
     
      if(res.status === 200){
        alert("user registration sucessfully")
        setInput({ ...input , username , email : "", password : "" });

      }
    }
    

  }


  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
         
          <Input type =  "username" name = "username" id = "username" placeholder="username"  value={input.username} onChange={setVal} />
          <Input type = "email" name  = "email"  id = "email" placeholder="email"  value={input.email} onChange={setVal} />
          <Input type = "password" name  = "password"  id = "password"  placeholder="password"  value={input.password} onChange={setVal} />
        
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button   onClick={addUserdata}>CREATE</Button>
        <P>already have an account ? <NavLink style={{color : "white ," , textDecoration : "none"}} to = "/login"> click here to login</NavLink></P>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;