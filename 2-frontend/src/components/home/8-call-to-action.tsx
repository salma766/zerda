import React from 'react'

function CallToAction() {
    return (
        <section className="call-to-action" style={{ backgroundImage: "url(images/background/1.jpg)" }}>
            <div className="anim-icons">
                <span className="icon icon-calculator zoom-one"></span>
                <span className="icon icon-pin-clip zoom-one"></span>
                <span className="icon icon-dots"></span>
            </div>

            <div className="auto-container">
                <div className="row">
                    <div className="title-column col-lg-8 col-md-12">
                        <div className="inner-column">
                            <div className="sec-title light">
                                <span className="style-font">Communauté</span>
                                <h1>Rejoignez le groupe Facebook de Zerda Academy</h1>
                                <a href="page-course-details.html" className="theme-btn btn-style-one"><span className="btn-title">Rejoindre</span></a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default CallToAction