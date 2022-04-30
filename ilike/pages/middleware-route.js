import { getPgProps } from '@js_dir/utils/middlewareProps';
import React from 'preact/compat'
import CategoryPage from '@categorypage/category-page'
import TagPage from '@tagpage/tag-page'
import PostPage from '@postpage/post-page'
export default function MiddleWareRoute({ pageContext, providers, middleType }) {
    return (
        <>
            {middleType === 'category' ? (
                <CategoryPage pageContext = {pageContext}
                                providers = {providers} />
            ) : null}         
            {middleType === 'tag' ? (   
                <TagPage pageContext = {pageContext} />
            ) : null}
            {middleType === 'post' ? (   
                <PostPage pageContext = {pageContext} />
            ) : null}
        </>
    )
}

export async function getServerSideProps({ req, res, query }) { 
    const slug = query.slug;
    return await getPgProps(slug);    
}
