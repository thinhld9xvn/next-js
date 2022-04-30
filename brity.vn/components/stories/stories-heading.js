import React from 'preact/compat'

function StoriesHeading({ data }) {

    return (

        <div className="container box-animate">
            <div className="page-header type-one box-animate animated">
                <span className="little-title"
                      dangerouslySetInnerHTML={{
                          __html : data.label
                      }}></span>
                <h1 className="title"
                    style={{ textAlign: "left" }}
                    dangerouslySetInnerHTML={{
                        __html : data.heading
                    }}></h1>
            </div>
            <div className="top_60 box-animate">
                <div className="description"
                    dangerouslySetInnerHTML={{
                        __html : data.description
                    }}>

                </div>
            </div>
        </div>


    )

}

export default StoriesHeading

