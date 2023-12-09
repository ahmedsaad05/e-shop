import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { useHistory } from 'react-router-dom'; // Import the useHistory hook for navigation

function ProductCard({ product }) {
  const history = useHistory();

  const handleProductClick = () => {
    // Navigate to the product page when clicked
    history.push(`/products/${product.id}`); // Assuming you have a route like '/products/:id'
  };

  return (
    <div className="product-card" onClick={handleProductClick}>
      <div className="badge">Hot</div>
      <div className="product-tumb">
        <img src={product.img} alt="" />
      </div>
      <div className="product-details">
        <span className="product-catagory">Women, bag</span>
        <h4>
          <a href="">{product.name}</a>
          
        </h4>
        <div className="product-bottom-details">
          <div className="product-price">{product.price}</div>
          <div className="product-links">
            <i className="fa fa-cart-arrow-down" style={{ fontSize: '200%' }}>
              <TiShoppingCart />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
