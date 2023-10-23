import React from 'react'
import { Col, Row } from 'react-bootstrap'
import StoreItem from './StoreItem';

type itemsProps = {
  id: string
  desc: string
  img: string
}[];

const StoreItems = ({ itemsProps }: { itemsProps: itemsProps }) => {
  return (
      <Row md={2} xs={1} lg={3} className="g-3">
        {itemsProps.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
  )
}

export default StoreItems