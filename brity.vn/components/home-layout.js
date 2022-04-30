import React, { useEffect, useState } from 'preact/compat'
import dynamic from 'next/dynamic';
import SeoHelmet from '@components/seo-helmet';

const Header = dynamic(() => import('@components/header'));
const LetterSlider = dynamic(() => import('@home_layout/letter-slider'));
const ShowcaseBottom = dynamic(() => import('@home_layout/showcase-bottom'));

function HomeLayout({pageContext}) {

    const { stories, socials, header, seo } = pageContext.data;
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setTimeout(function() {

            setLoading(false);

        }, 500);
        
    }, []);

    return (

        <>    
            {seo && (
                <SeoHelmet data = {seo} />
            )}

            {!loading ? (
                <>
                    <Header data = {header} />  

                    <main id="main">

                        <LetterSlider data = {stories} />                
                        <ShowcaseBottom data = {socials} />
                        
                    </main>
                </>
            ) : <div></div>}

           
        </>

    )

}


export default HomeLayout;
