import { Visibility } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { userRequest } from '../requestMethods';

const Container = styled.div`
flex: 1;
padding: 20px;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
margin-right: 20px;
`;
const Title = styled.span`
font-size: 32px;
font-weight: 600;
`;
const UserList = styled.ul`
margin: 0;
padding: 0;
list-style: none;
`;
const User = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
margin: 20px 0px;
`;
const Image = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
`;
const UserContainer = styled.div`
display: flex;
flex-direction: column;
`;
const Name = styled.span`
font-weight: 600;
`;
const Role = styled.span`
font-weight: 300;
`;
const Button = styled.button`
display: flex;
align-items: center;
border: none;
border-radius: 10px;
padding: 7px 10px;
background-color: #f1ecff;
color: #9820c9;
cursor: pointer;
`;

const SmallWidget = () => {
    const[users, setUsers] = useState([])
    useEffect(()=>{
        const getUsers = async()=>{
            try{
                const res = await userRequest.get('users/?new=true');
                setUsers(res.data)
            }catch{}
        }
        getUsers()
    }, [])
  return (
    <Container>
        <Title>New Join Members</Title>
        <UserList>
            {users.map((user)=>(
            <User key={user._id}>
                <Image src={user.img || "https://i.ibb.co/9yb61th/IMG-20190221-094518-Bokeh-01.jpg"} ></Image>
                <UserContainer>
                    <Name>{user.username}</Name>
                </UserContainer>
                <Button>
                    <Visibility />
                    Display
                </Button>
            </User>
            ))}
        </UserList>
    </Container>
  )
}

export default SmallWidget