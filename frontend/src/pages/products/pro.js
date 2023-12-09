import React, { useState, useEffect } from 'react';
import { TiShoppingCart, TiHeart, } from 'react-icons/ti';
import { CiSearch } from "react-icons/ci";
import './pro.css';

const products = [
    { id: 1, img: require('./images/1.jpg'), name: 'Product 1', cat: 'make', price: '$19.99', fav: true },
    { id: 2, img: require('./images/2.jpg'), name: 'Product 2', cat: 'make', price: '$29.99', fav: true },
    { id: 3, img: require('./images/3.jpg'), name: 'Product 3', cat: 'lol', price: '$39.99', fav: true },
    { id: 4, img: require('./images/4.jpg'), name: 'Product 4', cat: 'lol', price: '$49.99' },
    { id: 5, img: require('./images/5.jpg'), name: 'Product 5', cat: 'wow', price: '$59.99' },
    { id: 6, img: require('./images/6.jpg'), name: 'Product 6', cat: 'wow', price: '$69.99' },
];

const ProductPage = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [sortOrder, setSortOrder] = useState('lowToHigh');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [category, setCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        filterAndSortProducts();
    }, [minPrice, maxPrice, category, searchQuery]);

    const filterAndSortProducts = () => {
        let filtered = products;

        if (minPrice) {
            filtered = filtered.filter((product) => {
                const price = parseFloat(product.price.replace('$', ''));
                return price >= parseFloat(minPrice);
            });
        }

        if (maxPrice) {
            filtered = filtered.filter((product) => {
                const price = parseFloat(product.price.replace('$', ''));
                return price <= parseFloat(maxPrice);
            });
        }

        if (category) {
            filtered = filtered.filter((product) => product.cat === category);
        }

        if (searchQuery) {
            filtered = filtered.filter((product) => {
                const productName = product.name.toLowerCase();
                return productName.includes(searchQuery.toLowerCase());
            });
        }

        const sorted = [...filtered].sort((a, b) => {
            const priceA = parseFloat(a.price.replace('$', ''));
            const priceB = parseFloat(b.price.replace('$', ''));
            return sortOrder === 'lowToHigh' ? priceA - priceB : priceB - priceA;
        });

        setFilteredProducts(sorted);
    };

    const handleMinPriceChange = (e) => {
        setMinPrice(e.target.value);
    };

    const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
    };

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
    };
    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
    };
    return (

        <div className="product-container">

            <section className="categories-section">
                <h2 className="heading">Our Categories</h2>
                <div className="ag-format-container">
                    <div className="ag-courses_box">
                        <div class="ag-courses_item"
                            onClick={() => handleCategoryChange('lol')}
                        >

                            <a href="#d" class="ag-courses-item_link">
                                <div class="ag-courses-item_bg"></div>

                                <div class="ag-courses-item_title">
                                    shampoo
                                </div>


                            </a>
                        </div>


                        <div className="ag-courses_item"
                            onClick={() => handleCategoryChange('make')}
                        >
                            <div class="ag-courses_item">
                                <a href="#d" class="ag-courses-item_link">
                                    <div class="ag-courses-item_bg"></div>

                                    <div class="ag-courses-item_title">
                                        cleansers
                                    </div>


                                </a>
                            </div>
                        </div>
                        <div class="ag-courses_item"
                            onClick={() => handleCategoryChange('wow')}
                        >
                            <a href="#d" class="ag-courses-item_link">
                                <div class="ag-courses-item_bg"></div>

                                <div class="ag-courses-item_title">
                                    conditioners
                                </div>


                            </a>
                        </div>
                    </div>
                </div>

            </section>

            <div>
                <div className="no" id='cen'>
                    <div className="center-content">
                        <input
                            type="text"
                            id="searchInput"
                            className="sosow"
                            value={searchQuery}
                            onChange={handleSearchQueryChange}
                            placeholder="Search products..."
                        />
                        <CiSearch className='gg' />
                    </div>
                </div>


                <div className="filter-options">
                    <div>
                        <label>Min Price:</label>
                        <input type="text" className="soso" value={minPrice} onChange={handleMinPriceChange} />
                        <label>Max Price:</label>
                        <input type="text" className="soso" value={maxPrice} onChange={handleMaxPriceChange} />
                        <button style={{ borderRadius: '10px', backgroundColor: "#ff5a5f" }} onClick={() => setCategory('')}>Reset All</button>
                    </div>
                </div>
            </div>

            <div className="filter-options" id="d" style={{ justifyContent: 'center' }}></div>
            {filteredProducts.length === 0 ? (<p className='heading'>no product found</p>) : (
                <h3 className='heading'>found {filteredProducts.length} product</h3>
            )}
            <div className="product-cards">


                {filteredProducts.map((product) => (
                    <div className="product-card" key={product.id}>
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
                ))}
            </div>
        </div >
    );
};

export default ProductPage;