import React from 'react'

export default function HeaderAuthorDesc({ props }) {
  const {content, shortDesc, handleToggleShortDesc} = props;
  return (
    <>
      {content ? (
        <div className="authorDesc">
            <h2 className="authorDescHeading">Tiểu sử</h2>        
            <div className="meta-author-field meta-author-desc">
                <div className={"text ".concat(shortDesc ? '__short' : '')}
                    dangerouslySetInnerHTML={{
                      __html : content
                    }}>                
                </div>
                <div className={"behind-cover ".concat(shortDesc ? '' : 'hide')}>
                    <a className="btnAuthorDesc" 
                        href="#"
                        onClick={handleToggleShortDesc}>Xem thêm</a>
                </div>
            </div>
        </div>
      ) : null}
    </>
  )
}
