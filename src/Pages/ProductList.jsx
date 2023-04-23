import React, { useEffect } from 'react';
import styled from 'styled-components'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProducts, getProducts } from '../redux/apiCalls';
import Topbar from '../Components/Topbar';
import Sidebar from '../Components/Sidebar';


const Wrapper = styled.div``;
const SidebarContainer = styled.div`
display: flex;
`;
const Container = styled.div`
flex: 4;
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


const ProductList = () => {

  const dispatch = useDispatch()
  const products = useSelector((state)=>state.product.products)
  useEffect(()=>{
    getProducts(dispatch)
  },[dispatch])
  const handleClick = (id)=>{
    deleteProducts(id, dispatch)
  }

  const columns = [
    { field: '_id', headerName: 'ID', width: 280 },
    {
      field: 'product', headerName: 'Product', width: 250, renderCell: (params) => {
        return (
          <Wrapper>
            <Image src={params.row.img} alt="" ></Image>
            {params.row.title}
          </Wrapper>
        )
      }
    },
    { field: 'inStock', headerName: 'Stock', width: 200 },
    {
      field: 'price',
      headerName: 'Price',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
          <Link to={"/product/" + params.row._id}>
            <Button>Edit</Button>
          </Link>
            <DeleteIcon onClick={()=>handleClick(params.row._id)}>
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
        // rows={product}
        rows={products}
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

export default ProductList