import React from 'react'
import CartLogo from './images/icon-cart.svg';
function ProuctCard(props) {
   return(
    <div className="outer">
            <div className="box">
               
               <div className="img-box">
               
                     <img className="img" src={props.img_src} alt="product image is currently not available"/> 
               
               </div>

               <div className="remaining">
                      
                      <p className="category">{props.category}</p>
               
                      <h2 className="prodTitle">{props.title}</h2>
               
                      <p className="desc">{props.description}</p>
               
                      <h3 className="dPrice">{props.Discount_price}</h3>
               
                      <span className="oPrice">{props.Original_price}</span>
               
                      <a className="buyBtn" href="#"> <img src={CartLogo} className="logo"/> Add to Cart</a>	
                             
               </div>

            </div>	
    </div>
   	)
}
export default ProuctCard;