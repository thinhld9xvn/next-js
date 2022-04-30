import React, {useEffect} from 'preact/compat'

export default function VideoWidget({ data }) {

    useEffect(() => {

        if ( typeof(document) !== 'undefined' ) {

            const elem = document.querySelector('.scroll-link');
            const vid = document.getElementById('myVideo');

            const scrollDownEvent = (e) => {

                e.preventDefault();
                
                if ( window.innerWidth > 991 ) {

                    window.scroll(0, window.innerHeight);

                }

            }

            elem.addEventListener('click', scrollDownEvent);

            setTimeout(function() {

                
                vid && vid.play();

            }, 500);

        }
        
        return () => {  

        }

    }, []);

    return (
        <div className="section home-video-section fp-section fp-table">

            <div className="fp-tableCell wrapper">

                <div className="vk-home__video">

                    <video id="myVideo" 
                            playsInline={true} 
                            autoPlay={true} 
                            muted={true} 
                            loop={true}>

                        <source src={data} type="video/mp4" />
                        Your browser does not support HTML5 video.

                    </video>

                    <a href="#" 
                        className="text-center mt-125 scroll-link"> 

                        <img src={`/static/images/scroll.png`} 
                            loading="lazy"
                            title="scroll" 
                            alt="scroll" />

                    </a>

                </div>

            </div>
            
        </div>
    )
}
