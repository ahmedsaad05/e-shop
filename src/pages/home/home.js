// HomePage.js
import { Link } from 'react-router-dom'; // Import the Link component
import React from 'react';
import './home.css';  // Import the CSS file for styling
import { TiShoppingCart, TiHeart } from 'react-icons/ti';

const products = [
    { id: 1, img: require('../products/images/1.jpg'), name: 'Product 1', cat: 'make', price: '$19.99', fav: true },
    { id: 2, img: require('../products/images/2.jpg'), name: 'Product 2', cat: 'make', price: '$29.99', fav: true },
    { id: 3, img: require('../products/images/3.jpg'), name: 'Product 3', cat: 'lol', price: '$39.99', fav: true },
    { id: 4, img: require('../products/images/4.jpg'), name: 'Product 4', cat: 'lol', price: '$49.99' },
    { id: 5, img: require('../products/images/5.jpg'), name: 'Product 5', cat: 'wow', price: '$59.99' },
    { id: 6, img: require('../products/images/6.jpg'), name: 'Product 6', cat: 'wow', price: '$69.99' },
];

const HomePage = () => {
    const favProducts = products.filter((product) => product.fav);
    return (
        <div className="home-container" >
            <section className="store-section">
                <div className="store-background">
                    <div className="store-content">
                        <h2>Discover the Perfect Makeup</h2>
                        <p>Shop our wide range of makeup products and enhance your beauty.</p>
                        <Link to="/products" className="store-button">Shop Now</Link>
                    </div>
                </div>
            </section>
            <section className="main-content">
                <h2 className='heading'>Featured Content</h2>
                <div className="featured-items">
                    {/* Add featured content here */}


                    {favProducts.map((product) => (
                        <div className="product-card" key={product.id}>
                            {/* Render your product card content here */}
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
                                        <i className="fa fa-cart-arrow-down" style={{ fontSize: '250%' }}>
                                            <TiShoppingCart />
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

            <section className="about-section">
                <h2 className='heading'>About Us</h2>
                <h1 style={{ color: 'red',alignSelf:'center' ,display:'flex',justifySelf:'center'}}>
                    أقوى منتجات  نظافة  الوجه والشعر والجسم وكل ماله ريحة حلوة ومابيستخدموش سكان المنوفية 
                 


                </h1>
            </section>

        </div>
    );
}

export default HomePage;
