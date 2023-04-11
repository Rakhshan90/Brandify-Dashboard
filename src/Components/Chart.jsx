import React from 'react'
import styled from 'styled-components'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Container = styled.div`
padding: 20px;
margin: 20px;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const Title = styled.h3`
margin-bottom: 20px;
`;

const Chart = ({title, data, dataKey, grid}) => {

    

  return (
    <Container>
        <Title>{title}</Title>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data} >
                <XAxis dataKey="name" stroke='#9820c9' />
                <Line type="monotone" dataKey={dataKey} stroke='#9820c9' />
                <Tooltip />
                <CartesianGrid stroke='#e0dfdfe4' strokeDasharray="5 5" />
            </LineChart>
        </ResponsiveContainer>
    </Container>
  )
}

export default Chart