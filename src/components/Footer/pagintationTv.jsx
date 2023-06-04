import React from 'react'

//React Paginate 
import ReactPaginate from 'react-paginate';

//Bootstrap 






//Styles
import styles from "./styles.module.css"

const PaginationFooterTv = ({ getCurrentPageTv }) => {

    const handlePageClick = (data) => {
        getCurrentPageTv(data.selected + 1)
    }


    const pageCount = 500;

    return (
        <>
            <div className={styles.PagEl}>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    containerClassName={" pagination justify-content-center p-5 m-0"}
                    pageClassName={styles.pageItem}
                    previousClassName={styles.pageItem}
                    nextClassName={styles.pageItem}
                    breakClassName={styles.pageItem}
                    initialPage={2}
                    activeClassName={styles.activePage}
                // previousLabel={styles.pageItem}
                // nextLabel={styles.pageItem}
                />
            </div>

            <div className={styles.footerBody}>  </div>
        </>
    )
}


export default PaginationFooterTv