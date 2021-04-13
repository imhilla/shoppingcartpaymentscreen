import React, { useState } from 'react';
import styled from 'styled-components';
import { PlusCircle } from '@styled-icons/boxicons-regular/PlusCircle';
import { MinusCircle } from '@styled-icons/boxicons-regular/MinusCircle';
import { Delete } from '@styled-icons/fluentui-system-filled/Delete';

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
        <MyMinusCircle />
        <Number>{mynumber}</Number>
        <MyPlusCircle />
      </AddMin>
      <Miniwrapper>
        <Price>
          {price}
        </Price>
        <Mydelete />
      </Miniwrapper>
    </Wrapper>
  )
}

export default Items
const Miniwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  padding: 0 5px;
`
const Mydelete = styled(Delete)`
  height: 20px!important;
  padding: 0 5px;
`

const MyMinusCircle = styled(MinusCircle)`
  height: 20px;
`

const MyPlusCircle = styled(PlusCircle)`
  height: 20px;
`

const Number = styled.div`
  font-size: 15px;
  padding: 0 10px;
`

const Price = styled.div`
  font-size: 18px;
`

const AddMin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`

const SubInfo = styled.p`
  font-size: 15px;
`
const ItemNameHeader = styled.h1`
  font-size: 18px;
`

const ItemContainer = styled.div`
  padding: 0 10px;
`

const Wrapper = styled.div`
  display: flex;
  padding: 1em 0;
  justify-content: center;
  align-items: center;
`
const Image = styled.img`
  width: 100px;
  height: auto;
  border-radius: 20px;
  cursor: pointer;
  object-fit: cover;
`
