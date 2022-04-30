import React from "preact/compat"

import TemplatePaginationBar from "./blog-pagination/template-pagination-bar";   
 
export default function BlogPagination({ loading, props }) {

    return (        
        <TemplatePaginationBar data = {{ loading }}
                                props = {props} />
    )

}