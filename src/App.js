import React from 'react';
import ProductCard from './product-card.js'
import ImgSrc from './images/image-product-desktop.jpg';

function App() {
  const path = "file:///home/yuvaraj/Programing/ctf_task/product-preview-card/src/images/image-product-desktop.jpg";
  return (
   <ProductCard 
   category="P E R F U M E"
   title = "Gabrielle Essence Eau De Parfum"
   description = "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL"
   Discount_price = "$149.99"
   Original_price = "$169.99"
   img_src={ImgSrc}
   />
    )
}
export default App;