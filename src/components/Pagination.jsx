function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages <= 1) return null;

    return (
        <div style={{ marginTop: "16px" }}>
            {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;

                return (
                    <button key={page} onClick={() => onPageChange(page)} style={{ marginRight: "4px", fontWeight: page === currentPage ? "bold" : "normal" }}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
}

export default Pagination;