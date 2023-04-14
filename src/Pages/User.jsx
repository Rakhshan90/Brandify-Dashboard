import { CalendarToday, Email, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
const Image = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
`;
const UserShowTopTitle = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
`;
const Name = styled.span`
font-weight: 600;
`;
const Role = styled.span`
font-weight: 300;
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
const UserUpdateLeft = styled.div``;
const UserUpdateItem = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
`;
const Label = styled.label`
font-size: 14px;
margin-bottom: 5px;
`;
const Input = styled.input`
border: none;
border-bottom: 1px solid gray;
width: 250px;
height: 30px;
`;

const UserUpdateRight = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;
const UserUpdateUpload = styled.div`
display: flex;
align-items: center;
`;
const UserUpdateImage = styled.img`
height: 100px;
width: 100px;
border-radius: 10px;
object-fit: cover;
margin-right: 20px;
`;
const UserUpdateButton = styled.button`
border: none;
border-radius: 5px;
padding: 5px;
background-color: #9820c9;
color: #fff;
cursor: pointer;
margin-right: 20px;
font-weight: 600;
`;

const User = () => {
    return (
        <Container>
            <UserTitleContainer>
                <Title>Edit User</Title>
                <Link to="/newUser" ><Button>Create</Button></Link>
            </UserTitleContainer>
            <UserContainer>
                <UserDisplay>
                    <UserShowTop>
                        <Image src="https://i.ibb.co/9yb61th/IMG-20190221-094518-Bokeh-01.jpg" alt=""></Image>
                        <UserShowTopTitle>
                            <Name>Adam</Name>
                            <Role>Software Engineer</Role>
                        </UserShowTopTitle>
                    </UserShowTop>
                    <UserShowBottom>
                        <UserShowTitle>Account Details</UserShowTitle>
                        <UserShowInfo>
                            <UserShowIcon>
                                <PermIdentity />
                            </UserShowIcon>
                            <UserShowInfoTitle>Adam3921</UserShowInfoTitle>
                        </UserShowInfo>
                        <UserShowInfo>
                            <UserShowIcon>
                                <CalendarToday />
                            </UserShowIcon>
                            <UserShowInfoTitle>10.05.1998</UserShowInfoTitle>
                        </UserShowInfo>
                        <UserShowTitle>Contact Details</UserShowTitle>
                        <UserShowInfo>
                            <UserShowIcon>
                                <PhoneAndroid />
                            </UserShowIcon>
                            <UserShowInfoTitle>+91 23121XXXXX</UserShowInfoTitle>
                        </UserShowInfo>
                        <UserShowInfo>
                            <UserShowIcon>
                                <MailOutline />
                            </UserShowIcon>
                            <UserShowInfoTitle>adam@gmail.com</UserShowInfoTitle>
                        </UserShowInfo>
                        <UserShowInfo>
                            <UserShowIcon>
                                <LocationSearching />
                            </UserShowIcon>
                            <UserShowInfoTitle>Mumbai, India</UserShowInfoTitle>
                        </UserShowInfo>
                    </UserShowBottom>
                </UserDisplay>
                <UserUpdate>
                    <UserUpdateTitle>Edit</UserUpdateTitle>
                    <UserUpdateForm>
                        <UserUpdateLeft>
                            <UserUpdateItem>
                                <Label>Username</Label>
                                <Input type="text" placeholder="Adam3921" />
                            </UserUpdateItem>
                            <UserUpdateItem>
                                <Label>Full name</Label>
                                <Input type="text" placeholder="Adam sheikh" />
                            </UserUpdateItem>
                            <UserUpdateItem>
                                <Label>Email</Label>
                                <Input type="text" placeholder="adam@gmail.com" />
                            </UserUpdateItem>
                            <UserUpdateItem>
                                <Label>Phone</Label>
                                <Input type="text" placeholder="+91 23121XXXXX" />
                            </UserUpdateItem>
                            <UserUpdateItem>
                                <Label>Address</Label>
                                <Input type="text" placeholder="Mumbai | India" />
                            </UserUpdateItem>
                        </UserUpdateLeft>
                        <UserUpdateRight>
                            <UserUpdateUpload>
                                <UserUpdateImage src="https://i.ibb.co/9yb61th/IMG-20190221-094518-Bokeh-01.jpg" alt=""></UserUpdateImage>
                                <Label htmlFor='file'> <Publish style={{ cursor: "pointer" }} /> </Label>
                                <Input type='file' id='file' style={{ display: "none" }} />
                            </UserUpdateUpload>
                            <UserUpdateButton>Update</UserUpdateButton>
                        </UserUpdateRight>
                    </UserUpdateForm>
                </UserUpdate>
            </UserContainer>
        </Container>
    )
}

export default User