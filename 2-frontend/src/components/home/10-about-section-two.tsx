import React from 'react'

function AboutSectionTwo() {
    return (
        <section className="about-section-two">
            <div className="anim-icons">
                <span className="icon icon-e wow zoomIn"></span>
                <span className="icon icon-dots-2 bounce-x"></span>
            </div>
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-6 col-md-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <h2>Over 36 years in distant learning for skills</h2>
                                <div className="text">Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim. Sed risus augue, commodo ornare felis non, eleifend molestie metus pharetra eleifend.</div>
                            </div>

                            <div className="row">
                                <div className="about-block col-lg-6 col-md-6 col-sm-6 wow fadeInUp">
                                    <div className="inner-box">
                                        <span className="info-text">Best off canvas program</span>
                                        <div className="info-box">
                                            <div className="thumb"><img src="images/resource/avatar-1.jpg" alt="" /></div>
                                            <h5 className="name">John Doe</h5>
                                            <span className="designation">Student</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="about-block style-two col-lg-6 col-md-6 col-sm-6 wow fadeInRight">
                                    <div className="inner-box">
                                        <span className="info-text">Best degree program</span>
                                        <div className="info-box">
                                            <div className="thumb"><img src="images/resource/avatar-2.jpg" alt="" /></div>
                                            <h5 className="name">Albart Brown</h5>
                                            <span className="designation">TEACHER</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="image-column col-lg-6 col-md-12">
                        <div className="inner-column wow fadeInLeft">
                            <div className="icons-box">
                                <span className="icon icon-dotted-map"></span>
                                <span className="icon icon-dotted-line"></span>
                                <span className="icon icon-papper-plan"></span>
                            </div>
                            <figure className="image overlay-anim wow fadeInUp"><img src="images/resource/about-3.jpg" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSectionTwo