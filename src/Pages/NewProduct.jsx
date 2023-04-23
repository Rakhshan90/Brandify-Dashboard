// import { Publish } from '@material-ui/icons';
import React, { useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase'
import styled from 'styled-components'
import Topbar from '../Components/Topbar';
import Sidebar from '../Components/Sidebar';
import { addProducts } from '../redux/apiCalls';
import { useDispatch } from 'react-redux';


const Wrapper = styled.div``;
const SidebarContainer = styled.div`
display: flex;
`;
const Container = styled.div`
flex: 4;
`;
const AddProductTitle = styled.h1``;
const AddProductForm = styled.form`
margin: 10px 0px;
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
    const [inputs, setInputs] = useState({})
    const [file, setFile] = useState(null)
    const [cat, setCat] = useState([])
    const [color, setColor] = useState([])
    const [size, setSize] = useState([])
    const dispatch = useDispatch()

    const clickHandle = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        })
    }
    const clickCat = (e) => {
        setCat(e.target.value.split(","));
    }
    const clickColor = (e) => {
        setColor(e.target.value.split(","));
    }
    const clickSize = (e) => {
        setSize(e.target.value.split(","));
    }

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
                    // console.log({ ...inputs, img: downloadURL, categories: cat });
                    const product = {
                        ...inputs, img: downloadURL, categories: cat, size: size,
                        color: color
                    }
                    addProducts(product, dispatch)
                });
            }
        );

    }
    console.log(inputs)
    console.log(cat)
    console.log(file)
    console.log(size)
    console.log(color)
    return (
        <Wrapper>
            <Topbar />
            <SidebarContainer>
                <Sidebar />

                <Container>
                    <AddProductTitle>New Product</AddProductTitle>
                    <AddProductForm>
                        <AddProductItem>
                            <Label>Image</Label>
                            <Input
                                type='file'
                                id='file'
                                onChange={(e) => setFile(e.target.files[0])} />
                        </AddProductItem>
                        <AddProductItem>
                            <Label>Title</Label>
                            <Input name='title' type="text" placeholder="Title" onChange={clickHandle} />
                        </AddProductItem>
                        <AddProductItem>
                            <Label>Description</Label>
                            <Input name='desc' type="text" placeholder="Description" onChange={clickHandle} />
                        </AddProductItem>
                        <AddProductItem>
                            <Label>Price</Label>
                            <Input name='price' type="number" placeholder="Price of Product" onChange={clickHandle} />
                        </AddProductItem>
                        <AddProductItem>
                            <Label>Categories</Label>
                            <Input type="text" placeholder="mens, shirt" onChange={clickCat} />
                        </AddProductItem>
                        <AddProductItem>
                            <Label>Color</Label>
                            <Input type="text" placeholder="color" onChange={clickColor} />
                        </AddProductItem>
                        <AddProductItem>
                            <Label>Size</Label>
                            <Input type="text" placeholder="S, M, L, XL" onChange={clickSize} />
                        </AddProductItem>
                        <AddProductItem>
                            <Label>In stock</Label>
                            <Select name='inStock' id='inStock' >
                                <Option value="true" >Yes</Option>
                                <Option value="false" >No</Option>
                            </Select>
                        </AddProductItem>

                        <AddProductButton onClick={handleSubmit}>Create</AddProductButton>
                    </AddProductForm>
                </Container>
            </SidebarContainer>
        </Wrapper>
    )
}

export default NewProduct