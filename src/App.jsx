import styled from "styled-components";
import Sidebar from "./Components/Sidebar"
import Topbar from "./Components/Topbar"
import Home from "./Pages/Home";


const Container = styled.div`

`;
const Wrapper = styled.div`
display: flex;
margin-top: 10px;
`;



function App() {


  return (
    <Container>
      <Topbar />
      <Wrapper>
        <Sidebar />
        <Home />
      </Wrapper>
    </Container>
  )
}

export default App
