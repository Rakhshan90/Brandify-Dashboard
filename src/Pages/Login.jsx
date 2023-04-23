import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { login } from '../redux/apiCalls';
import { useNavigate } from 'react-router-dom';



const Container = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const Input = styled.input`
padding: 10px;
margin-bottom: 20px;
`;
const Button = styled.button`
width: 15vw;
padding: 10px;
border: none;
border-radius: 4px;
background-color: #9820c9;
color: white;
cursor: pointer;
font-weight: 500;
`;

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const clickHandler = (e) => {
    e.preventDefault()
    login(dispatch, { username, password })
    navigate('/')
  }

  return (
    <Container>
      <Input type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)} />
      <Input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={clickHandler}>Login</Button>
    </Container>
  )
}

export default Login