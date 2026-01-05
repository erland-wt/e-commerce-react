function ProductCard({ product }) {
    return (
        <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "12px", marginBottom: "12px" }}>
            <h3>{product.title}</h3>
            <p><strong>Category: </strong>{product.category}</p>
            <p><strong>Price: </strong>${product.price}</p>
        </div>
    );
}

export default ProductCard;