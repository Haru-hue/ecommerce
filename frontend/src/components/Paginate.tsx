import { Icon } from '@iconify/react'

interface PaginationProps {
  productsPerPage: number
  totalProducts: number
  currentPage: number
  paginate: (pageNumber: number) => void
}

export default function Pagination({ productsPerPage, totalProducts, currentPage, paginate }: PaginationProps) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }

  const handlePageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pageNumber = parseInt(event.target.value)
    if (pageNumber > 0 && pageNumber <= pageNumbers.length) {
      paginate(pageNumber)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      paginate(currentPage + 1)
    }
  }

  return (
    <nav className="d-flex justify-content-center align-items-center">
      <ul className="pagination">
        {currentPage > 1 ? (
          <li className="page-item pe-3">
            <Icon icon="system-uicons:chevron-left-circle" className="text-muted fs-2" onClick={handlePrevPage} />
          </li>
        ) : (
          ''
        )}
        <li className="page-item fw-bold">
          <input
            type="number"
            min="1"
            max={pageNumbers.length}
            value={currentPage}
            onChange={handlePageChange}
            className="text-center"
          />{' '}
          / {pageNumbers.length}
        </li>
        {currentPage < pageNumbers.length ? (
          <li className="page-item ps-3">
            <Icon icon="system-uicons:chevron-right-circle" className="text-muted fs-2" onClick={handleNextPage} />
          </li>
        ) : (
          ''
        )}
      </ul>
    </nav>
  )
}
