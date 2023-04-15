import React, { useState } from 'react'
import styled from 'styled-components'
import { login } from '../../../Client/src/redux/apiCalls';
import { useDispatch } from 'react-redux'

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const Input = styled.input`
padding: 10px;
margin-bottom: 20px;
border-radius: 5px;
`;
const Button = styled.button`
width: 100%;
height: 40px;
border: none;
border-radius: 4px;
background-color: #9820c9;
color: white;
cursor: pointer;
font-weight: 500;
`;

const Login = () => {

    

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const dispatch = useDispatch()
    const clickHandler = (e)=>{
        e.preventDefault()
        login(dispatch, {username, password})
    }
  return (
    <Container>
        <Input type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)} />
        <Input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
        <Button onClick={clickHandler}>Login</Button>
    </Container>
  )
}

export default Login