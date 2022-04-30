import React, {useState, useEffect} from 'preact/compat'
import Link from 'next/link'
import { DEFAULT_LOGO, HOME_PAGE_URL } from '@constants/constants'
import {connect} from 'react-redux'
function Logo({ siteOptions }) {
    const [siteLogo, setSiteLogo] = useState(DEFAULT_LOGO);
    useEffect(() => {
        if (siteOptions) {
            let logo = siteOptions.filter(e => e.option_name === 'logo');
            setSiteLogo(logo.length ? logo[0].option_value : DEFAULT_LOGO);
        }
    }, [siteOptions]);
    return (
        <Link href={HOME_PAGE_URL}>
            <a className="logo" title="ilike">
                <img src={siteLogo} alt="logo" />
            </a>
        </Link>
    )
}
function mapStateToProps(state) {   
    return {
        siteOptions : state.globalReducer.siteOptions
    }
  }
function mapDispatchToProps(dispatch) {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Logo);
