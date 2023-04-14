import { Publish } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
flex: 4;
`;
const AddProductTitle = styled.h1``;
const AddProductForm = styled.form`
margin-top: 10px;
`;
const AddProductItem = styled.div`
width: 250px;
display: flex;
flex-direction: column;
margin-bottom: 10px;
>Label{
    color: gray;
  font-weight: 600;
  margin-bottom: 10px;
}
>Input{
    padding: 10px;
}
>Select{
    padding: 10px;
}
`;
const Label = styled.label`

`;
const Input = styled.input``;
const Select = styled.select``;
const Option = styled.option``;
const AddProductButton = styled.button`
margin-top: 10px;
padding: 7px 10px;
border: none;
border-radius: 10px;
background-color: #9820c9;
color: #fff;
font-weight: 600;
cursor: pointer;
`;


const NewProduct = () => {
    return (
        <Container>
            <AddProductTitle>New Product</AddProductTitle>
            <AddProductForm>
                <AddProductItem>
                    <Label>Image</Label>
                    <Label htmlFor='file'><Publish style={{ cursor: "pointer" }} /></Label>
                    <Input type="file" id="file" style={{ display: 'none' }} />
                </AddProductItem>
                <AddProductItem>
                    <Label>Product Name</Label>
                    <Input type="text" placeholder="Mens tShirt" />
                </AddProductItem>
                <AddProductItem>
                    <Label>In stock</Label>
                    <Select name='inStock' id='inStock' >
                        <Option value="yes" >Yes</Option>
                        <Option value="no" >No</Option>
                    </Select>
                </AddProductItem>
                <AddProductItem>
                    <Label>Active</Label>
                    <Select name='active' id='active' >
                        <Option value="yes" >Yes</Option>
                        <Option value="no" >No</Option>
                    </Select>
                </AddProductItem>
                <AddProductButton>Create</AddProductButton>
            </AddProductForm>
        </Container>
    )
}

export default NewProduct