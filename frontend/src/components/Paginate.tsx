interface PaginationProps {
    productsPerPage: number;
    totalProducts: number;
    currentPage: number;
    paginate: (pageNumber: number) => void;
  }
  
export default function Pagination({ productsPerPage, totalProducts, currentPage, paginate }: PaginationProps) {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    const handlePageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const pageNumber = parseInt(event.target.value);
      if (pageNumber > 0 && pageNumber <= pageNumbers.length) {
        paginate(pageNumber);
      }
    };
  
    const handlePrevPage = () => {
      if (currentPage > 1) {
        paginate(currentPage - 1);
      }
    };
  
    const handleNextPage = () => {
      if (currentPage < pageNumbers.length) {
        paginate(currentPage + 1);
      }
    };
  
    return (
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button onClick={handlePrevPage} className="page-link">
              &laquo;
            </button>
          </li>
          <li className="page-item">
            <input
              type="number"
              min="1"
              max={pageNumbers.length}
              value={currentPage}
              onChange={handlePageChange}
            />
          </li>
          <li className="page-item">
            <button onClick={handleNextPage} className="page-link">
              &raquo;
            </button>
          </li>
        </ul>
      </nav>
    );
}