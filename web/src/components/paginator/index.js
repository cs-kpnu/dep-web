'use client';

import React from 'react';
import styles from './style.module.css';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const getPageNumbers = () => {
        const pages = [];
        // На мобільних показуємо 1 сусіда, на десктопі 2
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 480;
        const siblingCount = isMobile ? 0 : 1;

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
            return pages;
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = isMobile ? 3 : 4;
            for (let i = 1; i <= leftItemCount; i++) pages.push(i);
            pages.push('...');
            pages.push(totalPages);
        } else if (shouldShowLeftDots && !shouldShowRightDots) {
            pages.push(1);
            pages.push('...');
            let rightItemCount = isMobile ? 3 : 4;
            for (let i = totalPages - rightItemCount + 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1);
            pages.push('...');
            for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) pages.push(i);
            pages.push('...');
            pages.push(totalPages);
        }
        return pages;
    };
    return (
        <nav className={styles.paginationWrapper}>
            {/* Стрілка вліво */}
            <button
                className={styles.arrowBtn}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                ←
            </button>

            <div className={styles.pagesList}>
                {getPageNumbers().map((page, index) => (
                    <button
                        key={index}
                        className={`${styles.pageBtn} ${page === currentPage ? styles.active : ''} ${page === '...' ? styles.dots : ''}`}
                        onClick={() => typeof page === 'number' && onPageChange(page)}
                        disabled={page === '...'}
                    >
                        {page}
                    </button>
                ))}
            </div>

            {/* Стрілка вправо */}
            <button
                className={styles.arrowBtn}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                →
            </button>
        </nav>
    );
};

export default Pagination;