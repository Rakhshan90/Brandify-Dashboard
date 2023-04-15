import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
margin-top: 20px;
flex: 4;
`;
const NewUserTitle = styled.h1``;
const NewUserForm = styled.form`
display: flex;
flex-wrap: wrap;
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
  return (
    <Container>
        <NewUserTitle>New User</NewUserTitle>
        <NewUserForm>
            <NewUserItem>
                <Label>Username</Label>
                <Input type="text" placeholder="chris" />
            </NewUserItem>
            <NewUserItem>
                <Label>Full Name</Label>
                <Input type="text" placeholder="chris bale" />
            </NewUserItem>
            <NewUserItem>
                <Label>Email</Label>
                <Input type="email" placeholder="user@example.com" />
            </NewUserItem>
            <NewUserItem>
                <Label>Password</Label>
                <Input type="password" placeholder="password" />
            </NewUserItem>
            <NewUserItem>
                <Label>Phone</Label>
                <Input type="text" placeholder="+91 329382XXXX" />
            </NewUserItem>
            <NewUserItem>
                <Label>Address</Label>
                <Input type="text" placeholder="UP | India" />
            </NewUserItem>
            <NewUserItem>
                <Label>Gender</Label>
                <NewUserGender>
                    <Input type='radio' name='gender' value='male' id='male' />
                    <Label for="male">Male</Label>
                    <Input type='radio' name='gender' value='female' id='female' />
                    <Label for="female">Female</Label>
                    <Input type='radio' name='gender' value='other' id='other' />
                    <Label for="other">Other</Label>
                </NewUserGender>
            </NewUserItem>
            <NewUserItem>
                <Label>Active</Label>
                <Select name='active' id='active'>
                    <Option value='yes'>Yes</Option>
                    <Option value='no'>No</Option>
                </Select>
            </NewUserItem>
            <NewUserItem>
            <NewUserButton>Create</NewUserButton>
            </NewUserItem>
        </NewUserForm>
    </Container>
  )
}

export default NewUser