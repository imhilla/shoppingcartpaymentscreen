import styled from 'styled-components';
import Credit from './Components/credit';
import OrderContainer from './Components/orderContainer';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';

function App() {
  const mydata = {cart: []}
  return (
    <Wrapper className="App">
      <OrderContainer mydata={mydata} />
      <Credit />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 95vh;
  width: auto;
  background-color: white;
  padding: 1em;
`