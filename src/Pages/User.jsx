import { CalendarToday, Email, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Topbar from '../Components/Topbar';
import Sidebar from '../Components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { updateUsers } from '../redux/apiCalls';


const Wrapper = styled.div``;
const SidebarContainer = styled.div`
display: flex;
`;
const Container = styled.div`
flex: 4;
padding: 20px;
`;
const UserTitleContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
const Title = styled.h1``;
const Button = styled.button`
width: 80px;
border: none;
border-radius: 5px;
padding: 5px;
background-color: #9820c9;
color: #fff;
cursor: pointer;
margin-right: 20px;
font-size: 16px;
`;
const UserContainer = styled.div`
display: flex;
margin-top: 20px;
`;
const UserDisplay = styled.div`
padding: 20px;
flex: 1;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const UserUpdate = styled.div`
padding: 20px;
flex: 2;
margin-left: 20px;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const UserShowTop = styled.div`
display: flex;
align-items: center;
`;

const UserShowTopTitle = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
`;
const Name = styled.span`
font-weight: 600;
`;



const UserShowBottom = styled.div`
margin-top: 20px;
`;
const UserShowTitle = styled.span`
font-size: 14px;
font-weight: 600;
color: rgb(175, 170, 170);
`;
const UserShowInfo = styled.div`
display: flex;
align-items: center;
margin: 20px 0px;
color: #444;
`;
const UserShowIcon = styled.div`
`;
const UserShowInfoTitle = styled.span`
margin-left: 10px;
`;


const UserUpdateTitle = styled.span`
font-size: 24px;
font-weight: 600;
`;
const UserUpdateForm = styled.form`
display: flex;
justify-content: space-between;
margin-top: 20px;
`;
const UserUpdateRight = styled.div`
`;
const UserUpdateItem = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
`;
const Label = styled.label`
font-size: 18px;
margin-bottom: 5px;
`;
const Input = styled.input`
border: none;
border-bottom: 1px solid gray;
width: 45vw;
height: 30px;
`;

const UserUpdateButton = styled.button`
margin: 20px 0px;
padding: 5px 20px;
border: none;
border-radius: 5px;
background-color: #9820c9;
color: #fff;
cursor: pointer;
margin-right: 20px;
font-weight: 600;
`;

const User = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const userId = location.pathname.split('/')[2]
    const user = useSelector((state)=>state.user.users.find((user)=>user._id===userId))
    const [inputs, setInputs] = useState({})

    const handleClick = (e)=>{
        setInputs((prev)=>{
            return{...prev, [e.target.name]: e.target.value}
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const user = {...inputs}
        updateUsers(userId, user, dispatch)
    }
    return (
        <Wrapper>
            <Topbar />
            <SidebarContainer>
                <Sidebar />
                <Container>
                    <UserTitleContainer>
                        <Title>Edit User</Title>
                        <Link to="/newUser" ><Button>Create</Button></Link>
                    </UserTitleContainer>
                    <UserContainer>
                        <UserDisplay>
                            <UserShowTop>
                                <UserShowTopTitle>
                                    <Name>{user.username}</Name>
                                </UserShowTopTitle>
                            </UserShowTop>
                            <UserShowBottom>
                                <UserShowTitle>Contact Details</UserShowTitle>
                                <UserShowInfo>
                                    <UserShowIcon>
                                        <PhoneAndroid />
                                    </UserShowIcon>
                                    <UserShowInfoTitle>{user.phone}</UserShowInfoTitle>
                                </UserShowInfo>
                                <UserShowInfo>
                                    <UserShowIcon>
                                        <MailOutline />
                                    </UserShowIcon>
                                    <UserShowInfoTitle>{user.email}</UserShowInfoTitle>
                                </UserShowInfo>
                                <UserShowInfo>
                                    <UserShowIcon>
                                        <LocationSearching />
                                    </UserShowIcon>
                                    <UserShowInfoTitle>{user.address}</UserShowInfoTitle>
                                </UserShowInfo>
                            </UserShowBottom>
                        </UserDisplay>
                        <UserUpdate>
                            <UserUpdateTitle>Edit</UserUpdateTitle>
                            <UserUpdateForm>
                                <UserUpdateRight>
                                    <UserUpdateItem>
                                        <Label>Username</Label>
                                        <Input name='username' type="text" placeholder={user.username}
                                        onChange={handleClick} />
                                    </UserUpdateItem>
                                    <UserUpdateItem>
                                        <Label>Email</Label>
                                        <Input name='email' type="text" placeholder={user.email}
                                        onChange={handleClick} />
                                    </UserUpdateItem>
                                    <UserUpdateItem>
                                        <Label>Phone</Label>
                                        <Input name='phone' type="text" placeholder={user.phone}
                                        onChange={handleClick} />
                                    </UserUpdateItem>
                                    <UserUpdateItem>
                                        <Label>Address</Label>
                                        <Input name='address' type="text" placeholder={user.address}
                                        onChange={handleClick} />
                                    </UserUpdateItem>
                                    <UserUpdateButton onClick={handleSubmit}>Update</UserUpdateButton>
                                </UserUpdateRight>
                            </UserUpdateForm>
                        </UserUpdate>
                    </UserContainer>
                </Container>
            </SidebarContainer>
        </Wrapper>
    )
}

export default User