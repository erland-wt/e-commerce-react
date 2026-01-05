function ProductCard({ product }) {
    return (
        <div className='product-card'>
            <h3>{product.title}</h3>
            <div className="category-price">
                <p><strong>Category: </strong>{product.category}</p>
                <p>${product.price}</p>
            </div>
        </div>
    );
}

export default ProductCard;