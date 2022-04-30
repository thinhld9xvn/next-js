import React from 'preact/compat'

function getTempSocialItem(data) {

    return (
        <li key={data.id} className="magnetize">
            <a href={data.url}>{data.text}</a>
        </li>
    );

}

function SocialNetwork({ data }) {

    const arrSocialData = [];

    data.map(item => arrSocialData.push(getTempSocialItem(item)));

    return (

        <div className="col-xl-6 col-md-6">
            <div className="sliding-social">
                <div className="follow-us">Follow us <i className="far fa-heart"></i></div>
                <ul className="social">
                    {arrSocialData}
                </ul>
            </div>
        </div>

    )

}

export default SocialNetwork

