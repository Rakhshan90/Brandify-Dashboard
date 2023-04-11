import { LineStyle, Person, Storefront, Timeline, TrendingUp,
  BarChart, AttachMoney, MailOutline, FeedbackOutlined, ChatBubbleOutlineOutlined, WorkOutlineOutlined, ReportProblemOutlined} from '@material-ui/icons';

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
flex: 1;
display: flex;
height: calc(100vh - 50px);
position: sticky;
top: 50;
background-color: rgb(251, 251, 255);
`;
const Wrapper = styled.div`
padding: 20px;
color: #555;
`;
const SidebarMenu = styled.div`
margin-bottom: 10px;
`;
const Title = styled.h3`
color: rgb(187, 186, 186);
font-size: 13px;
`;
const List = styled.ul`
padding: 5px;
list-style: none;
`;
const ListItems = styled.li`
padding: 5px;
width: 15vw;
cursor: pointer;
display: flex;
align-items: center;
border-radius: 10px;
&:hover, &:active{
  background-color: #f1ecff;
}
`;

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <SidebarMenu>
          <Title>Dashboard</Title>
          <List>
            <ListItems active>
              <LineStyle />
              Home
            </ListItems>
            <ListItems>
              <Timeline />
              Analytics
            </ListItems>
            <ListItems>
              <TrendingUp />
              Sales
            </ListItems>
          </List>
        </SidebarMenu>
        <SidebarMenu>
          <Title>QuickMenu</Title>
          <List>
            <ListItems>
              <Person />
              Users
            </ListItems>
            <ListItems>
              <Storefront />
              Products
            </ListItems>
            <ListItems>
              <AttachMoney />
              Transactions
            </ListItems>
            <ListItems>
              <BarChart />
              Reports
            </ListItems>
          </List>
        </SidebarMenu>
        <SidebarMenu>
          <Title>Notifications</Title>
          <List>
            <ListItems>
              <MailOutline />
              Mail
            </ListItems>
            <ListItems>
              <FeedbackOutlined />
              Feedback
            </ListItems>
            <ListItems>
              <ChatBubbleOutlineOutlined />
              Messages
            </ListItems>
          </List>
        </SidebarMenu>
        <SidebarMenu>
          <Title>Staff</Title>
          <List>
            <ListItems>
              <WorkOutlineOutlined />
              Manage
            </ListItems>
            <ListItems>
              <Timeline />
              Analytics
            </ListItems>
            <ListItems>
              <ReportProblemOutlined />
              Reports
            </ListItems>
          </List>
        </SidebarMenu>
      </Wrapper>
    </Container>
  )
}

export default Sidebar