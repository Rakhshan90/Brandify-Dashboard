import React, { useState } from 'react'
import { DataGrid } from "@material-ui/data-grid";
import styled from 'styled-components';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../dummyData';
import { Link } from 'react-router-dom';


const Container = styled.div`
flex: 4; 
`;
const Wrapper = styled.div`
display: flex;
align-items: center;
`;
const Image = styled.img`
width: 32px;
height: 32px;
border-radius: 50%;
object-fit: cover;
margin-right: 10px;
`;
const Button = styled.button`
border: none;
border-radius: 10px;
padding: 5px 10px;
/* background-color: #f6f2ff; */
background-color: #9820c9;
/* color: #9820c9; */
color: #fff;
margin-right: 20px;
cursor: pointer;
`;
const DeleteIcon = styled.div`
color: red;
cursor: pointer;
display: flex;
align-items: center;
`;


export default function UserList() {
  const [user, setUser] = useState(userRows);
  const handleClick = (id)=>{
    setUser(user.filter((item)=>item.id !== id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    {
      field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
        return (
          <Wrapper>
            <Image src={params.row.avatar} alt="" ></Image>
            {params.row.username}
          </Wrapper>
        )
      }
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
          <Link to={"/user/" + params.row.id}>
            <Button>Edit</Button>
          </Link>
            <DeleteIcon onClick={()=>handleClick(params.row.id)}>
            <DeleteOutline />
            </DeleteIcon>
          </>
        )
      }
    },
  ];

  

  return (
    <Container>
      <DataGrid
        rows={user}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </Container>
  )
}

