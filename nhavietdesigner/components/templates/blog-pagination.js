 import React, {useEffect, useState} from "react"

 import { CATEGORY_PER_PAGE } from "@constants/constants"

 import { connect } from 'react-redux';

 import Pagination from 'react-bootstrap/Pagination'

const onClick_choosePage = async (n, updatedPaged, e) => {

    await updatedPaged(n);    
    
}    

const getTempPaginationBar = (data) => {       
    
    let items = [];        

    const { resultsFiltered, paged, updatedPaged } = data;

    const total = resultsFiltered.length,
        numPerPage = CATEGORY_PER_PAGE,
        pageCount = total / numPerPage;

    for (let number = 1; number <= pageCount; number++) {

        items.push(

            <Pagination.Item key={number} 
                            active={number === paged}
                            onClick={e => onClick_choosePage(number, updatedPaged, e)}>
                {number}
            </Pagination.Item>

        );

    }
    
    return (

        <div className="paginations">

            <Pagination>{items}</Pagination>            

        
        </div>
    )
}       
 
function BlogPagination({ resultsFiltered,
                          paged, 
                          updatedPaged }) {

    const tempPaginationBar = getTempPaginationBar({ resultsFiltered, paged, updatedPaged });

    return (
        
        <>
            {tempPaginationBar}
        </>
        

    )

}

function mapStateToProps(state) {   

    return { 
        resultsFiltered: state.globalReducer.resultsFiltered,
        paged : state.globalReducer.paged

    }

}

function mapDispatchToProps(dispatch) {

    return {

        updatedPaged : async (v) => await dispatch({

            type : "UPDATED_CURRENT_PAGED",
            payload : v

        })
 
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPagination);
 