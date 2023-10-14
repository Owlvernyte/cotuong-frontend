import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center">
      <ul className="flex items-center">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`mx-1 px-3 py-2 rounded-lg ${
                currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
              }`}
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;