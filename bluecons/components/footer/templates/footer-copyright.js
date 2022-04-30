import React from 'preact/compat'
export default function FooterCopyright({ data }) {
    const {copyright} = data;
    return (
        <>
            {copyright ? (
                <div className="footer-copyright"
                    dangerouslySetInnerHTML={{
                        __html: copyright
                    }}>
                </div>
            ) : null}
        </>
    )
}
