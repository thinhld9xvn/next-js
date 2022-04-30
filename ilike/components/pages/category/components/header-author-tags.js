import React from 'react'

export default function HeaderAuthorTags({ data }) {
    const {image, profile} = data;
  return (
      <>
        {image && profile ? (
            <div className="authorTags flex">
                <div className="meta-avatars avatar">
                    <img src={image} alt="avatar" />
                </div>
                <div className="meta-info author-info"
                    dangerouslySetInnerHTML={{
                        __html : profile
                    }}>
                </div>            
            </div>
        ) : null}
    </>
  )
}
