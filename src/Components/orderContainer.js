import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Cart } from '@styled-icons/boxicons-regular/Cart';
import Items from './Items';
import Total from './Total';


function OrderContainer({ mydata }) {
  const [data, setData] = useState(0)
  const [subtotal, setSubtotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [taxes, setTaxes] = useState(5.51)
  const [shipping, setShipping] = useState(3.23)

  useEffect(() => {
    setData(mydata);
  }, []);

  useEffect(() => {
    const arr = []
    if (data) {
      data.cart.forEach((element) => {
        arr.push(parseFloat(element.price.replace(/\$/g, '')))
      })
    }
    const sum = arr.reduce((accumulator, element) => {
      return accumulator + element;
    }, 0);
    setSubtotal(sum)
  }, [data])

  const items = data ? (
    <div>
      {data.cart.map(element => (
        <Items
          key={element.id}
          url={element.url}
          name={element.name}
          price={element.price}
          subinformation={element.subinformation}
        />
      ))}
    </div>) : (
    <div>
      no
    </div>)

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
        {items}
      </ItemContainer>
      <Total
        subtotal={subtotal}
        shipping={shipping}
        taxes={taxes}
        total={total}
      />
    </Wrapper>
  )
}

export default OrderContainer

const Mycart = styled(Cart)`
  height: 30px;
  padding-right: 10px;
`

const ItemContainer = styled.div`
  font-size: 10px;
`
const Header = styled.div`
  display: flex;
`
const First = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
const Second = styled.h1`
  font-size: 15px;
  min-width: 20%;
  text-align: right;
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
  padding: 2em;
`