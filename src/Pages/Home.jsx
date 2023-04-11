import React from 'react'
import styled from 'styled-components'
import FeaturedInfo from '../Components/FeaturedInfo';
import Chart from '../Components/Chart';
import { UserData } from '../dummyData';
import SmallWidget from '../Components/SmallWidget';
import LargeWidget from '../Components/LargeWidget';

const Container = styled.div`
flex: 4;
`;
const HomeWidgets = styled.div`
margin: 20px;
display: flex;
`;


const Home = () => {
  return (
    <Container>
        <FeaturedInfo />
        <Chart data={UserData} title="User Analytics" grid dataKey="ActiveUser"/>
        <HomeWidgets>
          <SmallWidget />
          <LargeWidget />
        </HomeWidgets>
    </Container>
  )
}

export default Home