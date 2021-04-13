import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Cart } from '@styled-icons/boxicons-regular/Cart';
import Items from './Items';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import Total from './Total';


function OrderContainer() {
  const [data, setData] = useState(0)
  const [subtotal, setSubtotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [taxes, setTaxes] = useState(5.51)
  const [shipping, setShipping] = useState(3.23)

  useEffect(() => {
    const mydata = {
      cart: [
        {
          id: 1,
          name: "Alex Vando Mens Dress Shirts",
          subinformation: "Good quality construction, Easy care: This dress shirt is nicely stitched and detailed with 100% hypoallergenic synthetic filling.",
          price: "$23.99",
          url: image1
        },
        {
          id: 2,
          name: "Spalding NBA Street Outdoor Basketball",
          subinformation: "Performance: Durable outdoor rubber cover. Superior control: Deep channel design for easy handles",
          price: "$25.00",
          url: image2
        },
        {
          id: 3,
          name: "HP Chromebook 14-inch HD Laptop, Intel Celeron N4000.",
          subinformation: "Google play store: The millions of Android apps you know and love on your phone and tablet can now run on your Chrome device without compromising their speed.",
          price: "$59.11",
          url: image3
        },
        {
          id: 4,
          name: "Chic Home Zarah 10 Piece Comforter Bedding with Sheet Set and Decorative Pillows Shams.",
          subinformation: "The Zarah queen size patchwork comforter is stuffed with 100% hypoallergenic synthetic filling.",
          price: "$45.60",
          url: image4
        }
      ]
    }
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
  })

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