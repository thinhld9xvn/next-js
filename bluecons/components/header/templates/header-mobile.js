import React from 'preact/compat';
import Link from 'next/link'
import { getLogoSrc } from '@js_dir/utils/logoUtils';

export default function HeaderMobile({ data, props }) {
  const {handleToggleMobileMenu} = props;
  const logoSrc = getLogoSrc(data);  
  return (
    <div className="menu-head-mobile">
        <Link href="/">
            <a className="logo logo-mobile">
                <img src={logoSrc.white}
                    alt="" />
            </a>
        </Link>
        <i className="far fa-times"
           onClick={handleToggleMobileMenu}></i>
    </div>
  )
}
