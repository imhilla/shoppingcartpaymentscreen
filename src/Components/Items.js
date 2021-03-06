import React, { useState } from 'react';
import styled from 'styled-components';
import { PlusCircle } from '@styled-icons/boxicons-regular/PlusCircle';
import { MinusCircle } from '@styled-icons/boxicons-regular/MinusCircle';
import { Delete } from '@styled-icons/fluentui-system-filled/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { add, minus } from '../features/cartSlice';

function Items({ url, name, price, subinformation }) {
  const [mynumber, setNumber] = useState(1)
  const [myprice, setPrice] = useState(price)

  const minus = ()=>{
    if(mynumber > 1){
      setNumber(mynumber - 1)
    }
  }

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
        <MyMinusCircle onClick={(() => { minus()})} />
        <Number>{mynumber}</Number>
        <MyPlusCircle onClick={(() => { setNumber(mynumber + 1) })} />
      </AddMin>
      <Miniwrapper>
        <Price>
          {'$' + (myprice.replace(/\$/g, '') * mynumber).toFixed(2)}
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
  font-size: 13px;
  color: gray;
`
const ItemNameHeader = styled.h1`
  font-size: 15px;
`

const ItemContainer = styled.div`
  padding: 0 10px;
  text-align: start;
`

const Wrapper = styled.div`
  display: flex;
  padding: 1em 0;
  justify-content: space-between;
  align-items: center;
`
const Image = styled.img`
  width: 130px;
  height: auto;
  border-radius: 20px;
  cursor: pointer;
  object-fit: cover;
`
