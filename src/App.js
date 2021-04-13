import styled from 'styled-components';
import Credit from './Components/credit';
import OrderContainer from './Components/orderContainer';

function App() {
  return (
    <Wrapper className="App">
      <OrderContainer />
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