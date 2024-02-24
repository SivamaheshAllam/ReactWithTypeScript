import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
function ProductComponent() {
    let products = useSelector((state: any) => {
        return state.allProducts.products;
      });
      console.log("productsssss", products);
      let rednderList=products.map((product:any)=>{
        const {id,title,image, description, category,rating, price}=product;  
  return (
    
    <div  style={{display:"inline-block"}}>
      <Card style={{ width: "18rem",margin:"20px", height:"26rem" }}>
        <Card.Img variant="top" src={image} style={{width:"200px", height:"200px"}}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          {/* <Card.Text style={{overflow:'hidden'}}>
            {description}
          </Card.Text> */}
          <div>
          <Button variant="primary"><Link to={`/product/${id}`} style={{color:"white"}}>View Details</Link></Button>
          </div>
        </Card.Body>
      </Card>
      {/* <div key={id} className="ui link cards"> 
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
  </div>*/}
      </div> )
});
return <>{rednderList}</>;
}

export default ProductComponent;
