import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import App from "../App";
import { useDispatch,useSelector} from "react-redux";
import {add} from'../Store/CartSlice'
import { use } from "react";
import {getProducts} from '../Store/ProductSlice'

function Product() {
  const dispatch=useDispatch();
  const {data :Products}=useSelector(state=>state.Product)
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
 
  const addToCart=(Product)=>{
    dispatch(add(Product));

  }

  const Cards = Products.map((Product) => (
    <div className="col-md-5">
    <Card key={Product.id} className="h-100" style={{ width: "18rem"}}>
      <Card.Img variant="top" src={Product.image} />
      <Card.Body>
        <Card.Title>{Product.title}</Card.Title>
        <Card.Text>
            {Product.price+" $"}
        </Card.Text>
        <Button variant="primary" onClick={()=>addToCart(Product)}>Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>
  ));
  return (
    <>
      <h1 className="product-header">Product Dashboard</h1> 
      {Cards}
    </>
  );
}
export default Product;
