import styled from 'styled-components';
import Credit from './Components/credit';
import OrderContainer from './Components/orderContainer';
import { useSelector } from 'react-redux';

function App() {
  const mydata = useSelector((state)=> state.cart)
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