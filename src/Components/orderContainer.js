import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Cart } from '@styled-icons/boxicons-regular/Cart';
import Items from './Items';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';


function OrderContainer() {
  const [data, setData] = useState('')

  useEffect(() => {
    const mydata = {
      cart: [
        {
          id: 1,
          name: "Alex Vando Mens Dress Shirts Regular Fit Long Sleeve Men Shirt",
          subinformation: "Good quality construction, Easy care: This dress shirt is nicely stitched and detailed, not a lot of hanging threads.",
          price: "$23.99",
          url: image1
        },
        {
          id: 2,
          name: "Spalding NBA Street Outdoor Basketball",
          subinformation: "Performance: Durable outdoor rubber cover. Superior control: Deep channel design for easy handles..",
          price: "$25.00",
          url: image2
        },
        {
          id: 3,
          name: "HP Chromebook 14-inch HD Laptop, Intel Celeron N4000, 4 GB RAM, 32 GB eMMC, Chrome",
          subinformation: "Google play store: The millions of Android apps you know and love on your phone and tablet can now run on your Chrome device without compromising their speed.",
          price: "$59.11",
          url: image3
        },
        {
          id: 4,
          name: "Chic Home Zarah 10 Piece Comforter Bedding with Sheet Set and Decorative Pillows Shams, Queen, Grey",
          subinformation: "The Zarah queen size patchwork comforter is stuffed with 100% hypoallergenic synthetic filling – Perfect for anyone with allergies looking to breathe and sleep easy, especially children and the elderly",
          price: "$45.60",
          url: image4
        }
      ]
    }
    setData(mydata);
  }, []);

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
`