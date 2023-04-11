import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
flex: 2;
padding: 20px;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const LargeWidget = () => {
  return (
    <Container>
        Large Widget
    </Container>
  )
}

export default LargeWidget