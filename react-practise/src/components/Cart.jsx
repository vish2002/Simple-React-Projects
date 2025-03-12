import React from 'react'
import { use } from 'react'
import { useSelector } from 'react-redux'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import {remove} from'../Store/CartSlice'

const Cart = () => {
  const ProductCart=useSelector(state=>state.cart);
  const dispatch=useDispatch();
  const RemoveItems=(Product)=>{
    dispatch(remove(Product))
  }
  const Cards = ProductCart.map((Product) => (
    <div className="col-md-3">
    <Card key={Product.id} className="h-100" style={{ width: "18rem"}}>
      <Card.Img variant="top" src={Product.image} />
      <Card.Body>
        <Card.Title>{Product.title}</Card.Title>
        <Card.Text>
            {Product.price+" $"}
        </Card.Text>
        <Button variant="danger" onClick={()=>RemoveItems(Product.id)}>Remove Items</Button>
      </Card.Body>
    </Card>
    </div>
  ));

  return (
    <div>
      {Cards}
    </div>
  )
}

export default Cart