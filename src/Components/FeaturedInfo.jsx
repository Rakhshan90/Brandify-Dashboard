import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'


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
const Icon = styled.div`
color: ${props=>props.type === "down" && "red"};
color: ${props=>props.type === "up" && "green"};
font-size: 14px;
margin-left: 5px;
`;
const Desc = styled.span`
font-size: 15px;
color: gray;
`;


const FeaturedInfo = () => {
    return (
        <Container>
            <FeaturedItem>
                <Title>Revenue</Title>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>₹250000</FeaturedMoney>
                    <FeaturedMoneyRate>
                        -11.4 <Icon type="down"><ArrowDownwardOutlined /></Icon> 
                    </FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <Desc>Compared to last month</Desc>
            </FeaturedItem>
            <FeaturedItem>
                <Title>Sales</Title>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>₹450000</FeaturedMoney>
                    <FeaturedMoneyRate>
                        -11.4 <Icon type="down"><ArrowDownwardOutlined /></Icon>
                    </FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <Desc>Compared to last month</Desc>
            </FeaturedItem>
            <FeaturedItem>
                <Title>Cost</Title>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>₹260000</FeaturedMoney>
                    <FeaturedMoneyRate>
                        +2.1 <Icon type="up"><ArrowUpwardOutlined /></Icon>
                    </FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <Desc>Compared to last month</Desc>
            </FeaturedItem>
        </Container>
    )
}

export default FeaturedInfo