import { useState, useMemo, useEffect } from 'react';
import useProducts from '../hooks/useProducts';
import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';

function Products() {
    const { products, loading, error } = useProducts();
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    const ITEMS_PER_PAGE = 8;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [search, category]);

    const categories = useMemo(() => {
        return [...new Set(products.map(p => p.category))];
    }, [products]);

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchSearch = product.title.toLowerCase().includes(search.toLowerCase());

            const matchCategory = category ? product.category === category : true;

            return matchSearch && matchCategory;
        });
    }, [products, search, category]);

    const paginatedProducts = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [filteredProducts, currentPage]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

    return (
        <div className='content-container'>
            <h1>Products Catalog</h1>

            <div className='search-filter-container'>
                <input 
                    type='text'
                    placeholder='Search product...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ marginRight: "8px" }}
                />

                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    {categories.map(cat => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>
            

            <ProductList products={paginatedProducts} />

            <Pagination
                totalItems={filteredProducts.length}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}

export default Products;