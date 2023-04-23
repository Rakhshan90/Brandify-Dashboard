import React, { useState } from 'react'
import styled from 'styled-components'
import Topbar from '../Components/Topbar';
import Sidebar from '../Components/Sidebar';
import { Publish } from '@material-ui/icons';
import { addUsers } from '../redux/apiCalls';
import { useDispatch } from 'react-redux';


const Wrapper = styled.div``;
const SidebarContainer = styled.div`
display: flex;
`;
const Container = styled.div`
margin: 20px 0px;
flex: 4;
`;
const NewUserTitle = styled.h1``;
const NewUserForm = styled.form`
display: flex;
flex-direction: column;
`;
const NewUserItem = styled.div`
width: 400px;
display: flex;
flex-direction: column;
margin-top: 10px;
margin-right: 20px;
`;
const Label = styled.label`
font-size: 14px;
font-weight: 600;
margin-bottom: 10px;
color: rgb(151, 150, 150);
`;
const Input = styled.input`
height: 20px;
padding: 10px;
border: 1px solid gray;
border-radius: 5px;

`;
const NewUserGender = styled.div`
> Input{
    margin-top: 15px;
}
>Label{
    margin: 10px;
    font-size: 18px;
    color: #555;
}
`;
const Select = styled.select`
height: 40px;
border-radius: 5px;
`;
const Option = styled.option``;
const NewUserButton = styled.button`
width: 200px;
border: none;
border-radius: 5px;
padding: 5px;
background-color: #9820c9;
color: #fff;
cursor: pointer;
margin-right: 20px;
font-weight: 600;
`;


const NewUser = () => {
    const[inputs, setInputs] = useState({})
    const dispatch = useDispatch()
    const handleClick = (e)=>{
        setInputs((prev)=>{
            return{...prev, [e.target.name] : e.target.value };
        })
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        const user = {...inputs}
        addUsers(user, dispatch)
    }
    console.log(inputs)
    return (
        <Wrapper>
            <Topbar />
            <SidebarContainer>
                <Sidebar />

                <Container>
                    <NewUserTitle>New User</NewUserTitle>
                    <NewUserForm>
                        <NewUserItem>
                            <Label>Username</Label>
                            <Input name="username" type="text" placeholder="chris" 
                            onChange={handleClick} />
                        </NewUserItem>
                        <NewUserItem>
                            <Label>Email</Label>
                            <Input name="email" type="email" placeholder="user@example.com"
                            onChange={handleClick}  />
                        </NewUserItem>
                        <NewUserItem>
                            <Label>Password</Label>
                            <Input name="password" type="password" placeholder="password"
                            onChange={handleClick}  />
                        </NewUserItem>
                        <NewUserItem>
                            <Label>Phone</Label>
                            <Input name="phone" type="text" placeholder="+91 329382XXXX"
                            onChange={handleClick}  />
                        </NewUserItem>
                        <NewUserItem>
                            <Label>Address</Label>
                            <Input name="address" type="text" placeholder="UP | India"
                            onChange={handleClick}  />
                        </NewUserItem>
                        <NewUserItem>
                            <Label>Active</Label>
                            <Select name='active' id='active'
                            onChange={handleClick}  >
                                <Option value='yes'>Yes</Option>
                                <Option value='no'>No</Option>
                            </Select>
                        </NewUserItem>
                        <NewUserItem>
                            <NewUserButton onClick={handleSubmit}>Create</NewUserButton>
                        </NewUserItem>
                    </NewUserForm>
                </Container>
            </SidebarContainer>
        </Wrapper>
    )
}

export default NewUser