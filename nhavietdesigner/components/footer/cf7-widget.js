import React from 'preact/compat'

export default function Cf7Widget() {
    return (
        <div className="vk-form--register">
            <div role="form" 
                className="wpcf7">
                <form action="" 
                        method="post" 
                        className="wpcf7-form">                            
                    <p>
                        <span className="wpcf7-form-control-wrap name_ft">
                            <input type="text" 
                                    name="name_ft" 
                                    size="40" 
                                    className="wpcf7-form-control wpcf7-text form-control" 
                                    placeholder="Email" />
                        </span>
                        <button type="submit" 
                                className="vk-btn">
                            <i className="ti-arrow-right"></i>
                        </button>
                    </p>
                </form>
            </div>
        </div>
    )
}
