import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { userRequest } from '../requestMethods';


const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;
const FeaturedItem = styled.div`
flex: 1;
padding: 30px;
margin: 0 20px;
cursor: pointer;
border: 10px;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const Title = styled.span`
font-size: 20px;
`;
const FeaturedMoneyContainer = styled.div`
margin: 10px 0px;
display: flex;
align-items: center;
`;
const FeaturedMoney = styled.span`
font-size: 30px;
font-weight: 600;
`;
const FeaturedMoneyRate = styled.span`
display: flex;
align-items: center;
margin-left: 20px;
`;
const Desc = styled.span`
font-size: 15px;
color: gray;
`;


const FeaturedInfo = () => {
    const[income, setIncome] = useState([])
    const[perc, setPerc] = useState(0)
    useEffect(()=>{
        const getIncome = async()=>{
            try{
                const res = await userRequest.get("orders/income");
                setIncome(res.data)
                setPerc((res.data[1]?.total * 100) / res.data[0]?.total - 100);
            }catch{}
        }
        getIncome()
    }, [])
    console.log(income);
    console.log(perc);
    return (
        <Container>
            <FeaturedItem>
                <Title>Revenue</Title>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>₹{income[1]?.total}</FeaturedMoney>
                    <FeaturedMoneyRate>
                    %{Math.floor(perc)}{" "}
                        {perc<0 ? (<ArrowDownwardOutlined style={{fontSize:"30px", marginLeft:"5px", 
                    color:"red"}}/>) : (<ArrowUpwardOutlined style={{fontSize:"30px", marginLeft:"5px", 
                    color:"green"}}/>) }
                    </FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <Desc>Compared to last month</Desc>
            </FeaturedItem>
            <FeaturedItem>
                <Title>Sales</Title>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>₹450000</FeaturedMoney>
                    <FeaturedMoneyRate>
                        -11.4 <ArrowDownwardOutlined style={{fontSize:"30px", marginLeft:"5px", 
                    color:"red"}}/>
                    </FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <Desc>Compared to last month</Desc>
            </FeaturedItem>
            <FeaturedItem>
                <Title>Cost</Title>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>₹260000</FeaturedMoney>
                    <FeaturedMoneyRate>
                        +2.1 <ArrowUpwardOutlined style={{fontSize:"30px", marginLeft:"5px", 
                    color:"green"}}/>
                    </FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <Desc>Compared to last month</Desc>
            </FeaturedItem>
        </Container>
    )
}

export default FeaturedInfo