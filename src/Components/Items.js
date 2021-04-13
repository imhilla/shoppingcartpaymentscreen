import React from 'react';
import styled from 'styled-components';

function Items({ url, name, price, subinformation }) {
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

      </AddMin>
      <Price>
        {price}
      </Price>
    </Wrapper>
  )
}

export default Items

const Price = styled.div`

`

const AddMin = styled.div`

`

const SubInfo = styled.p`

`
const ItemNameHeader = styled.h1`

`

const ItemContainer = styled.div`

`

const Wrapper = styled.div`
  display: flex;
  padding: 1em 0;
`
const Image = styled.img`
  width: auto;
  height: 100px;
  border-radius: 20px;
  cursor: pointer;
`