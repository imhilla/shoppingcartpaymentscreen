import React, { useState } from 'react';
import styled from 'styled-components';
// import { PlusCircle } from '@styled-icons/boxicons-regular/PlusCircle';
// import { MinusCircle } from '@styled-icons/boxicons-regular/MinusCircle';

function Items({ url, name, price, subinformation }) {
  const [mynumber, setNumber] = useState(1)

  return (
    <Wrapper>
      <Image src={url} />
      <ItemContainer>
        <ItemNameHeader>
          {name}
        </ItemNameHeader>
        <SubInfo>
          {subinformation}
        </SubInfo>
      </ItemContainer>
      <AddMin>
        <MyMinusCircle >-</MyMinusCircle>
        <Number>{mynumber}</Number>
        <MyPlusCircle>+</MyPlusCircle>
      </AddMin>
      <Price>
        {price}
      </Price>
    </Wrapper>
  )
}

export default Items

const MyMinusCircle = styled.button`
  height: 20px;
  width: auto;
  border-radius: 50%;
  border: 1px solid gray;
`

const MyPlusCircle = styled.button`
  height: 20px;
  border-radius: 50%;
  border: 1px solid gray;
  width: auto;
`

const Number = styled.div`
  font-size: 15px;
`

const Price = styled.div`

`

const AddMin = styled.div`
  display: flex;
`

const SubInfo = styled.p`
  font-size: 15px;
`
const ItemNameHeader = styled.h1`
  font-size: 18px;
`

const ItemContainer = styled.div`

`

const Wrapper = styled.div`
  display: flex;
  padding: 1em 0;
`
const Image = styled.img`
  width: 100px;
  height: auto;
  border-radius: 20px;
  cursor: pointer;
  object-fit: cover;
`