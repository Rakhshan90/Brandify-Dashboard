import React, { useState } from 'react'
import styled from 'styled-components'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../dummyData';
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


const ProductList = () => {

  const [product, productUser] = useState(productRows);
  const handleClick = (id)=>{
    productUser(product.filter((item)=>item.id !== id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    {
      field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
        return (
          <Wrapper>
            <Image src={params.row.img} alt="" ></Image>
            {params.row.name}
          </Wrapper>
        )
      }
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
    },
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
          <Link to={"/product/" + params.row.id}>
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
        rows={product}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </Container>
  )
}

export default ProductList