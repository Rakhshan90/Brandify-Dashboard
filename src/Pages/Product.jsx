import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import Chart from '../Components/Chart';
// import { ProductData } from '../dummyData';
import { Publish } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userRequest } from '../requestMethods';
import Topbar from '../Components/Topbar';
import Sidebar from '../Components/Sidebar';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import app from '../firebase';
import { updateProducts } from '../redux/apiCalls';


const Wrapper = styled.div``;
const SidebarContainer = styled.div`
display: flex;
`;
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

export default function Product() {
    const location = useLocation()
    const productId = location.pathname.split('/')[2]
    const [pStats, setPStats] = useState([]);
    const product = useSelector((state) => state.product.products.find((product) => product._id === productId))
    const dispatch = useDispatch()

    const MONTHS = useMemo(
        () => [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Agu",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        []
    );


    const [inputs, setInputs] = useState({})
    const [file, setFile] = useState(null)


    const clickHandle = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        })
    }

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get("orders/income?pid=" + productId);
                const list = res.data.sort((a, b) => {
                    return a._id - b._id
                })
                list.map((item) =>
                    setPStats((prev) => [
                        ...prev,
                        { name: MONTHS[item._id - 1], Sales: item.total },
                    ])
                );
            } catch (err) {
                console.log(err);
            }
        };
        getStats();
    }, [productId, MONTHS]);

    const handleSubmit = (e) => {
        e.preventDefault()
        //this will make file unique in name by creating time at which file is uploaded
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app)
        const storageRef = ref(storage, fileName)

        const uploadTask = uploadBytesResumable(storageRef, file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;

                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    // console.log({ ...inputs, img: downloadURL });
                    const product = {
                        ...inputs, img: downloadURL
                    }
                    updateProducts(productId, product, dispatch)

                });
            }
        );

    }

    console.log(file)
    console.log(inputs)

    return (
        <Wrapper>
            <Topbar />
            <SidebarContainer>
                <Sidebar />

                <Container>
                    <TitleContainer>
                        <ProductTitle>Product</ProductTitle>
                        <Link to="/newProduct">
                            <ProductAddButton>Create</ProductAddButton>
                        </Link>
                    </TitleContainer>
                    <ProductTopContainer>
                        <ProductTopLeft>
                            <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
                        </ProductTopLeft>
                        <ProductTopRight>
                            <ProductInfoTop>
                                <ProductInfoImg src={product.img} ></ProductInfoImg>
                                <ProductInfoTitle>{product.title}</ProductInfoTitle>
                            </ProductInfoTop>
                            <ProductInfoBottom>
                                <ProductInfoItem>
                                    <ProductInfoKey>id:</ProductInfoKey>
                                    <ProductInfoValue>{product._id}</ProductInfoValue>
                                </ProductInfoItem>
                                <ProductInfoItem>
                                    <ProductInfoKey>price:</ProductInfoKey>
                                    <ProductInfoValue>{product.price}</ProductInfoValue>
                                </ProductInfoItem>
                                <ProductInfoItem>
                                    <ProductInfoKey>in stock:</ProductInfoKey>
                                    <ProductInfoValue>{product.inStock}</ProductInfoValue>
                                </ProductInfoItem>
                            </ProductInfoBottom>
                        </ProductTopRight>
                    </ProductTopContainer>
                    <ProductBottomContainer>
                        <ProductForm>
                            <ProductFormLeft>
                                <Label>Product Name</Label>
                                <Input type="text" name='title' placeholder={product.title} onChange={clickHandle} />
                                <Label>Product Description</Label>
                                <Input type="text" name='desc' placeholder={product.desc} onChange={clickHandle} />
                                <Label>Price</Label>
                                <Input type="text" name='price' placeholder={product.price} onChange={clickHandle} />
                                <Label>In stock</Label>
                                <Select name='inStock' id='inStock' >
                                    <Option value="true" >Yes</Option>
                                    <Option value="false" >No</Option>
                                </Select>

                            </ProductFormLeft>
                            <ProductFormRight>
                                <ProductUpload>
                                    <Image src={product.img} alt='' ></Image>
                                    <Label htmlFor='file'>
                                        <Publish style={{ cursor: "pointer" }} />
                                    </Label>
                                    <Input type='file' id='file' style={{ display: "none" }}
                                        onChange={(e) => setFile(e.target.files[0])} />
                                </ProductUpload>
                                <ProductUpdateButton onClick={handleSubmit} >Update</ProductUpdateButton>
                            </ProductFormRight>
                        </ProductForm>
                    </ProductBottomContainer>
                </Container>
            </SidebarContainer>
        </Wrapper>
    )
}

