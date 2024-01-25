import React from 'react'
import Colors from '../Colors/Colors';
import Sizes from '../Sizes/Sizes';

const Product = ({item}) => {
    console.log(item);
  return (
    <div>
      <img src={item.img} alt={item.title}></img>
      <div>
        <h3>{item.title}</h3>
        <p>{item.ref}</p>
        <p>{item.price}</p>
        <Colors colors={item.colors}></Colors>
        <Sizes sizes={item.sizes}></Sizes>
      </div>
    </div>
  )
}

export default Product
