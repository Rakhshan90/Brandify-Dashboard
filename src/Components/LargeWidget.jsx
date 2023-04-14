import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
flex: 2;
padding: 20px;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const Title = styled.h3`
font-size: 22px;
font-weight: 600;
`;
const WidgetTable = styled.table`
width: 100%;
border-spacing: 20px;
`;
const TableHead = styled.thead``;
const TableBody = styled.tbody``;
const Row = styled.tr``;
const Rowhead = styled.th`
text-align: left;
`;
const Rowdata = styled.td`
display: ${props => props.type === 'user' && "flex"};
align-items: ${props => props.type === 'user' && "center"};
font-weight: ${props => props.type === 'user' && "600"};
/* display: flex;
align-items: center;
font-weight: 600; */
`;
const Image = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
margin-right: 10px;
`;
const Name = styled.span`

`;
const Button = styled.button`
padding: 5px 7px;
border: none;
border-radius: 10px;
background-color: #${props => props.type === "A" && "e5faf2"};
background-color: #${props => props.type === "D" && "fff0f1"};
background-color: #${props => props.type === "P" && "ebf1fe"};
color: #${props => props.type === "A" && "3bb077"};
color: #${props => props.type === "D" && "d95087"};
color: #${props => props.type === "P" && "2a7ade"};
`;

const LargeWidget = () => {
  return (
    <Container>
      <Title>Transactions</Title>
      <WidgetTable>
        <TableHead>
          <Row>
            <Rowhead>Customer</Rowhead>
            <Rowhead>Date</Rowhead>
            <Rowhead>Amount</Rowhead>
            <Rowhead>Status</Rowhead>
          </Row>
        </TableHead>
        <TableBody>
          <Row>
            <Rowdata type="user">
              <Image src="https://i.ibb.co/9yb61th/IMG-20190221-094518-Bokeh-01.jpg"></Image>
              <Name>Henry</Name>
            </Rowdata>
            <Rowdata>12-Apr-23</Rowdata>
            <Rowdata>₹250000</Rowdata>
            <Rowdata>
              <Button type="A">Approved</Button>
            </Rowdata>
          </Row>
          <Row>
            <Rowdata type="user">
              <Image src="https://i.ibb.co/9yb61th/IMG-20190221-094518-Bokeh-01.jpg"></Image>
              <Name>Suzane</Name>
            </Rowdata>
            <Rowdata>12-Apr-23</Rowdata>
            <Rowdata>₹250000</Rowdata>
            <Rowdata>
              <Button type="D">Declined</Button>
            </Rowdata>
          </Row>
          <Row>
            <Rowdata type="user">
              <Image src="https://i.ibb.co/9yb61th/IMG-20190221-094518-Bokeh-01.jpg"></Image>
              <Name>Mariyam</Name>
            </Rowdata>
            <Rowdata>12-Apr-23</Rowdata>
            <Rowdata>₹250000</Rowdata>
            <Rowdata>
              <Button type="P">Pending</Button>
            </Rowdata>
          </Row>
          <Row>
            <Rowdata type="user">
              <Image src="https://i.ibb.co/9yb61th/IMG-20190221-094518-Bokeh-01.jpg"></Image>
              <Name>Yusuf</Name>
            </Rowdata>
            <Rowdata>12-Apr-23</Rowdata>
            <Rowdata>₹250000</Rowdata>
            <Rowdata>
              <Button type="A">Approved</Button>
            </Rowdata>
          </Row>
        </TableBody>
      </WidgetTable>
    </Container>
  )
}

export default LargeWidget