import React, { useState } from 'react';

const products = [
    {
        id: 1,
        name: 'Product 1',
        img: 'https://www.raneen.com/media/catalog/product/1/_/1_16__167_2.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=1000&width=1000&canvas=1000:1000',
        price: 10.99,
    },
    {
        id: 2,
        name: 'Product 2',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjpMwCTlbnwESjRZdAjAVJX9j4OTMbES92zVpWleGeaKxR_9iVKay5lx0ZOn_oH9EXY_8&usqp=CAU',
        price: 19.99,
    },
];

function HomePage() {
    const [productList, setProductList] = useState(products);
    const [editingProductId, setEditingProductId] = useState(null);
    const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(true);
    const [newProduct, setNewProduct] = useState({
        name: '',
        img: '',
        price: 0,
    });
    const [searchTerm, setSearchTerm] = useState('');

    const handleDelete = (productId) => {
        console.log("Deleting product with ID:", productId);
        const updatedList = productList.filter((product) => product.id !== productId);
        setProductList(updatedList);
    };

    const handleEdit = (productId) => {
        setEditingProductId(productId);
    };

    const handleSave = (productId, updatedProduct) => {
        const updatedList = productList.map((product) =>
            product.id === productId ? updatedProduct : product
        );
        setProductList(updatedList);
        setEditingProductId(null);
    };

    const handleCancel = () => {
        setEditingProductId(null);
    };
    const handleInputChange = (field, value) => {
        setNewProduct({ ...newProduct, [field]: value });
        setIsAddButtonDisabled(!(newProduct.name && newProduct.img && newProduct.price));
    };

    const handleAddProduct = () => {
        if (newProduct.name && newProduct.img && newProduct.price) {
            const newProductId = productList.length + 1;
            const newProductWithId = { ...newProduct, id: newProductId };
            setProductList([...productList, newProductWithId]);
            setNewProduct({
                name: '',
                img: '',
                price: 0,
            });
            setIsAddButtonDisabled(true); 
        }
    };


    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            setNewProduct({ ...newProduct, img: event.target.result });
        };
        reader.readAsDataURL(file);
    };

    const filteredProducts = productList.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
        <div style={productListStyle}>
                <div style={productCardStyle}>
                    <h3>Add a New Product</h3>
                    <input
                        type="text"
                        placeholder="Product Name"
                        value={newProduct.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        style={inputStyle}
                        required
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={inputStyle}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={newProduct.price}
                        onChange={(e) => handleInputChange('price', e.target.value)}
                        style={inputStyle}
                        required
                    />
                    <button onClick={handleAddProduct} style={buttonStyle} disabled={isAddButtonDisabled}>
                        Add Product
                    </button>

                    <input
                        type="text"
                        placeholder="Search by product name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={inputStyle}
                    />
                </div>
            </div>
            <div style={soso}>

                {
                    filteredProducts.map((product) => (
                        <div key={product.id} style={productCardStyle}>
                            {editingProductId === product.id ? (
                                <ProductForm
                                    product={product}
                                    onSave={(updatedProduct) => handleSave(product.id, updatedProduct)}
                                    onCancel={handleCancel}
                                />
                            ) : (
                                <>
                                    <img src={product.img} alt={product.name} style={productImageStyle} />
                                    <h3 style={productNameStyle}>{product.name}</h3>
                                    <p style={productPriceStyle}>Price: ${product.price}</p>
                                    <button onClick={() => handleDelete(product.id)} style={buttonStyle}>
                                        Delete
                                    </button>
                                    <button onClick={() => handleEdit(product.id)} style={buttonStyle}>
                                        Edit
                                    </button>
                                </>
                            )}
                        </div>
                    ))
                }
            </div>

        </div >
    );
}
function ProductForm({ product, onSave, onCancel }) {
    const [name, setName] = useState(product.name);
    const [img, setImg] = useState(product.img);
    const [price, setPrice] = useState(product.price);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            setImg(event.target.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = { id: product.id, name, img, price };
        onSave(updatedProduct);
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input type="file" accept="image/*" onChange={handleImageUpload} style={inputStyle} />
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} style={inputStyle} />
            <button type="submit" style={buttonStyle}>Save</button>
            <button type="button" onClick={onCancel} style={buttonStyle}>Cancel</button>
        </form>
    );
}


const productListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center', 
};

const productCardStyle = {

    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '16px',
    margin: '16px',
};
const soso = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', 
    alignItems: 'center', 
}
const productImageStyle = {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
};

const productNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '8px 0',
};

const productPriceStyle = {
    fontSize: '16px',
    marginBottom: '8px',
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '16px',
};

const inputStyle = {
    marginBottom: '8px',
    padding: '8px',
};

const buttonStyle = {
    padding: '8px 16px',
    marginRight: '8px',
};

export default HomePage;