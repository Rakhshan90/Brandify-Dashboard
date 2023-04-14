import React from 'react'
import styled from 'styled-components'
import Chart from '../Components/Chart';
import { ProductData } from '../dummyData';
import { Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';


const Container = styled.div`
flex: 4;
padding: 20px;
`;
const TitleContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
const ProductTitle = styled.h1``;
const ProductAddButton = styled.button`
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
const ProductTopContainer = styled.div`
display: flex;
`;
const ProductTopLeft = styled.div`
flex: 1;
`;
const ProductTopRight = styled.div`
flex: 1;
margin: 20px;
padding: 20px;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
margin-right: 20px;
`;
const ProductInfoTop = styled.div`
display: flex;
align-items: center;
`;
const ProductInfoImg = styled.img`
height: 40px;
width: 40px;
border-radius: 50%;
object-fit: cover;
margin-right: 20px;
`;
const ProductInfoTitle = styled.span`
font-weight: 600;
`;
const ProductInfoBottom = styled.div`
margin-top: 10px;
`;
const ProductInfoItem = styled.div`
display: flex;
justify-content: space-between;
width: 150px;
`;
const ProductInfoKey = styled.span`
font-weight: 300;
`;
const ProductInfoValue = styled.span``;

const ProductBottomContainer = styled.div`
margin: 20px;
padding: 20px;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
margin-right: 20px;
`;
const ProductForm = styled.form`
display: flex;
justify-content: space-between;
`;
const ProductFormLeft = styled.div`
display: flex;
flex-direction: column;
>Label{
    margin-bottom: 10px;
    color: gray;
}
>Input{
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid gray;
    padding: 5px;
}
>Select{
    height: 30px;
    margin-bottom: 10px;
}
`;
const ProductFormRight = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const Label = styled.label``;
const Input = styled.input``;
const Select = styled.select``;
const Option = styled.option``;
const ProductUpload = styled.div`
display: flex;
align-items: center;
`;
const Image = styled.img`
width: 100px;
height: 100px;
border-radius: 10px;
object-fit: cover;
margin-right: 20px;
`;
const ProductUpdateButton = styled.button`
border: none;
border-radius: 5px;
padding: 5px;
background-color: #9820c9;
color: #fff;
cursor: pointer;
margin-right: 20px;
font-weight: 600;
`;

const Product = () => {
    return (
        <Container>
            <TitleContainer>
                <ProductTitle>Product</ProductTitle>
                <Link to="/newProduct">
                    <ProductAddButton>Create</ProductAddButton>
                </Link>
            </TitleContainer>
            <ProductTopContainer>
                <ProductTopLeft>
                    <Chart data={ProductData} dataKey="Sales" title="Sales Performance" />
                </ProductTopLeft>
                <ProductTopRight>
                    <ProductInfoTop>
                        <ProductInfoImg src="https://i.ibb.co/RQsps5W/p9.png" ></ProductInfoImg>
                        <ProductInfoTitle>Men tShirt</ProductInfoTitle>
                    </ProductInfoTop>
                    <ProductInfoBottom>
                        <ProductInfoItem>
                            <ProductInfoKey>id:</ProductInfoKey>
                            <ProductInfoValue>232</ProductInfoValue>
                        </ProductInfoItem>
                        <ProductInfoItem>
                            <ProductInfoKey>sales:</ProductInfoKey>
                            <ProductInfoValue>1200</ProductInfoValue>
                        </ProductInfoItem>
                        <ProductInfoItem>
                            <ProductInfoKey>active:</ProductInfoKey>
                            <ProductInfoValue>yes</ProductInfoValue>
                        </ProductInfoItem>
                        <ProductInfoItem>
                            <ProductInfoKey>in stock:</ProductInfoKey>
                            <ProductInfoValue>no</ProductInfoValue>
                        </ProductInfoItem>
                    </ProductInfoBottom>
                </ProductTopRight>
            </ProductTopContainer>
            <ProductBottomContainer>
                <ProductForm>
                    <ProductFormLeft>
                        <Label>Product Name</Label>
                        <Input type="text" placeholder="Mens tShirt" />
                        <Label>In stock</Label>
                        <Select name='inStock' id='inStock' >
                            <Option value="yes" >Yes</Option>
                            <Option value="no" >No</Option>
                        </Select>
                        <Label>Active</Label>
                        <Select name='active' id='active' >
                            <Option value="yes" >Yes</Option>
                            <Option value="no" >No</Option>
                        </Select>
                    </ProductFormLeft>
                    <ProductFormRight>
                        <ProductUpload>
                            <Image src="https://i.ibb.co/RQsps5W/p9.png" alt='' ></Image>
                            <Label htmlFor='file'>
                                <Publish style={{ cursor: "pointer" }} />
                            </Label>
                            <Input type='file' id='file' style={{ display: "none" }} />
                        </ProductUpload>
                        <ProductUpdateButton>Update</ProductUpdateButton>
                    </ProductFormRight>
                </ProductForm>
            </ProductBottomContainer>
        </Container>
    )
}

export default Product