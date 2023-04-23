import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import FeaturedInfo from '../Components/FeaturedInfo';
import Chart from '../Components/Chart';
import { UserData } from '../dummyData';
import SmallWidget from '../Components/SmallWidget';
import LargeWidget from '../Components/LargeWidget';
import { userRequest } from '../requestMethods';
import Topbar from '../Components/Topbar'
import Sidebar from '../Components/Sidebar';


const Wrapper = styled.div`
`;
const Container = styled.div`
flex: 4;

`;
const SidebarContainer = styled.div`
display: flex;
`
const HomeWidgets = styled.div`
margin: 20px;
display: flex;
`;


const Home = () => {
  const [userStats, setUserStats] = useState([])

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

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get('/users/stats');
        res.data.map((item) =>
          setUserStats((prev) => [...prev,
          { name: MONTHS[item._id - 1], "ActiveUser": item.total },
          ])
        )
      } catch { }
    }
    getStats()
  }, [MONTHS])
  return (
    <Wrapper>
      <Topbar />
      <SidebarContainer>
        <Sidebar />
        <Container>
          <FeaturedInfo />
          {/* <Chart data={UserData} title="User Analytics" grid dataKey="ActiveUser" /> */}
          <Chart data={userStats} title="User Analytics" grid dataKey="ActiveUser" />
          <HomeWidgets>
            <SmallWidget />
            <LargeWidget />
          </HomeWidgets>
        </Container>
      </SidebarContainer>
    </Wrapper>
  )
}

export default Home