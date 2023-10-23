import React, { Fragment } from 'react'
import StoreItems from '../components/StoreItems/StoreItems'


const Store = () => {
  const temData: {id: string, desc: string, img: string } [] = [
    {
      id: "1",
      desc: "something1",
      img: "/img1.jpg"
    },
    {
      id: "2",
      desc: "something2",
      img: "/img2.jpg"
    },
    {
      id: "3",
      desc: "something3",
      img: "/img3.jpg"
    }
  ]

  return (
    <Fragment>
      <h1>Store</h1>
      <StoreItems itemsProps={temData}/>
    </Fragment>
  )
}

export default Store