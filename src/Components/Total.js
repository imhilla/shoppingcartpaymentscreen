import React from 'react';
import styled from 'styled-components';

function Total({ subtotal, shipping, taxes, total }) {
  return (
    <Wrapper>
      <Container>
        <Header>Subtotal</Header>
        <MyTotal>$ {subtotal}</MyTotal>
      </Container>

      <Container>
        <Header>Shipping fees</Header>
        <MyTotal>$ {shipping}</MyTotal>
      </Container>

      <Container>
        <Header>Taxes</Header>
        <MyTotal>$ {taxes}</MyTotal>
      </Container>

      <Container>
        <Header>Total(including tax)</Header>
        <Final>$ {total}</Final>
      </Container>
    </Wrapper>
  )
}

export default Total
const MyTotal = styled.div``
const Final = styled.div``
const Header = styled.h1`
  font-size: 15px;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const Wrapper = styled.div`
  width: 100%;
`