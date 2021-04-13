import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Cart } from '@styled-icons/boxicons-regular/Cart';
// import Items from './Items';
// import cartList from '../../src/content.json';

function orderContainer() {
  const [data, setData] = useState('')
  // console.log(cartList)
  useEffect(() => {
    fetch("/content.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  // const items = cartList ? (<div>yes</div>) : (<div>no</div>)
  return (
    <Wrapper>
      <Header>
        <First>
          <Mycart />
          <Summary>Order summary</Summary>
        </First>
        <Second>
          Remove all
        </Second>
      </Header>
      <ItemContainer>
        {/* <Items
          url={url}
          name={name}
          price={price}
          subinformation={subinformation}
        /> */}
        {/* {items} */}
        items

      </ItemContainer>
    </Wrapper>
  )
}

export default orderContainer

const Mycart = styled(Cart)`

`

const ItemContainer = styled.div`
  font-size: 10px;
`
const Header = styled.div`
  display: flex;
`
const First = styled.div`
  display: flex;
`
const Second = styled.h1`
  font-size: 15px;
`
const Summary = styled.h1`
  font-size: 15px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #edf5ff; 
  width: 50%;
  margin: 1em 0.5em 1em 1em;
  border-radius: 10px;
`