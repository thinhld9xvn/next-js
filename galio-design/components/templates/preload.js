import React, {useEffect, useState} from 'preact/compat'

export default function Preload() {

    const [loading, setLoading] = useState(true);
    const [stylePage, setStylePage] = useState({
        transform : "translateZ(20px)"
    });

    useEffect(() => {

        setTimeout(function() {    
            
            setStylePage({...stylePage, display : 'none'});
            setLoading(false);

        }, 2000);

    }, []);

    return (
        <section className="preloader" 
                 style={stylePage}>
            <div className="preloader__wrap">
                <div className="preloader__letters">
                    <div className="card preloader__card">
                        <div className="card__symbol card__symbol_big">
                            G
                        </div>
                        <div className="card__symbol card__symbol_small">
                            G
                        </div>
                    </div>
                    <div className="card preloader__card">
                        <div className="card__symbol card__symbol_big">
                            A
                        </div>
                        <div className="card__symbol card__symbol_small">
                            A
                        </div>
                    </div>
                    <div className="card preloader__card">
                        <div className="card__symbol card__symbol_big">
                            L
                        </div>
                        <div className="card__symbol card__symbol_small">
                            L
                        </div>
                    </div>
                    <div className="card preloader__card">
                        <div className="card__symbol card__symbol_big">
                            I
                        </div>
                        <div className="card__symbol card__symbol_small">
                            I
                        </div>
                    </div>
                    <div className="card preloader__card">
                        <div className="card__symbol card__symbol_big">
                            O
                        </div>
                        <div className="card__symbol card__symbol_small">
                            O
                        </div>
                    </div>
                </div>
                <div className="progress preloader__progress">
                    <div className="progress__line" data-progress-line></div>
                </div>
            </div>
        </section>
    )
}
