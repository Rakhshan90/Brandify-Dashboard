import React, { useEffect, useState } from 'react'
import { DataGrid } from "@material-ui/data-grid";
import styled from 'styled-components';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Topbar from '../Components/Topbar';
import Sidebar from '../Components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUsers, getUsers } from '../redux/apiCalls';


const Container = styled.div`
flex: 4; 
`;
const Wrapper = styled.div`

`;
const SidebarContainer = styled.div`
display: flex;
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
  const dispatch = useDispatch()
  const users = useSelector((state)=>state.user.users)

  useEffect(()=>{
    getUsers(dispatch)
  }, [dispatch])
  const handleClick = (id) => {
    // setUser(users.filter((item) => item.id !== id));
    deleteUsers(id, dispatch)
  }

  
  const columns = [
    { field: '_id', headerName: 'ID', width: 280 },
    {
      field: 'username', headerName: 'Username', width: 200, renderCell: (params) => {
        return (
          <Wrapper>
            {params.row.username}
          </Wrapper>
        )
      }
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'isAdmin',
      headerName: 'Status',
      width: 140,
    },
    { field: 'phone', headerName: 'Phone', width: 140 },
    { field: 'address', headerName: 'Address', width: 180 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <Button>Edit</Button>
            </Link>
            <DeleteIcon onClick={() => handleClick(params.row._id)}>
              <DeleteOutline />
            </DeleteIcon>
          </>
        )
      }
    },
  ];



  return (
    <Wrapper>
      <Topbar />
      <SidebarContainer>
        <Sidebar />
        <Container>
          <DataGrid
            rows={users}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row)=>row._id}
            pageSize={10}
            checkboxSelection
          />
        </Container>
      </SidebarContainer>
    </Wrapper>
  )
}

