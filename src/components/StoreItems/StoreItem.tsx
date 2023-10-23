import React, { Fragment } from 'react'

type itemProps = {
  id: string
  desc: string
  img: string
}

const StoreItem = ({ id, desc, img }: itemProps) => {
  return (
    <Fragment>
      <h1>{id}</h1>
      <h1>{desc}</h1>
      <h1>{img}</h1>
    </Fragment>
  )
}

export default StoreItem