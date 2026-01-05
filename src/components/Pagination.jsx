function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages <= 1) return null;

    return (
        <div className="pagination-container">
            {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;

                return (
                    <button key={page} onClick={() => onPageChange(page)} disabled={page === currentPage}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
}

export default Pagination;