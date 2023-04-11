import { Badge } from '@material-ui/core';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
height: 50px;
background-color: white;
position: sticky;
top: 0;
z-index: 999;
`;
const Wrapper = styled.div`
height: 100%;
padding: 0 20px;
display: flex;
align-items: center;
justify-content: space-between;
`;
const TopLeft = styled.div`
`;
const TopRight = styled.div`
`;
const Logo = styled.span`
color: #9820c9;
font-weight: bold;
font-size: 30px;
cursor: pointer;
`;

const TopBarIconContainer = styled.div`
position: relative;
display: flex;
`;

const NotificationIcon = styled.div`
color: #555;
margin: 10px 10px 0 0;
cursor: pointer;
`;
const LanguageIcon = styled.div`
color: #555;
margin: 10px 10px 0 0;
cursor: pointer;
`;
const SettingIcon = styled.div`
color: #555;
margin: 10px 10px 0 0;
cursor: pointer;
`;
const Image = styled.img`
height: 40px;
width: 40px;
border-radius: 50px;
cursor: pointer;
object-fit: cover;
`;

const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <TopLeft>
          <Logo>RakhshanAdmin</Logo>
        </TopLeft>
        <TopRight>
          <TopBarIconContainer>

            <NotificationIcon>
              <Badge badgeContent={2} color="primary">
                <NotificationsNone />
              </Badge>
            </NotificationIcon>

            <LanguageIcon>
              <Badge badgeContent={2} color="primary">
                <Language />
              </Badge>
            </LanguageIcon>

            <SettingIcon>
              <Settings />
            </SettingIcon>

            <Image src='https://i.ibb.co/9yb61th/IMG-20190221-094518-Bokeh-01.jpg'></Image>


          </TopBarIconContainer>
        </TopRight>
      </Wrapper>
    </Container>
  )
}

export default Topbar