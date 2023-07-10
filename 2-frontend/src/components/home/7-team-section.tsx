import React from 'react'

function TeamSection() {
    return (
        <section className="team-section">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Nos formateurs</span>
                    <h2>Nos cours sont conçus et donnés par des professionnels de l’industrie avec une expérience à l’échelle nationale et internationale.</h2>
                </div>

                <div className="row">
                    {/* Team block */}
                    <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><a href="#"><img src="images/resource/chiheb.jpg" alt="" /></a></figure>
                                <span className="share-icon fa fa-share-alt"></span>
                                <div className="social-links">
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="info-box">
                                <h4 className="name"><a href="#">Chiheb Ben Aissa</a></h4>
                                <span className="designation">PDG - Zerda Group</span>
                            </div>
                        </div>
                    </div>

                    {/* Team block */}
                    <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><a href="#"><img src="images/resource/MahmoudBenAissa-1.jpg" alt="" /></a></figure>
                                <span className="share-icon fa fa-share-alt"></span>
                                <div className="social-links">
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="info-box">
                                <h4 className="name"><a href="#">Mahmoud Ben Aissa</a></h4>
                                <span className="designation">Stratège Marketing  - Zerda Digital</span>
                            </div>
                        </div>
                    </div>

                    {/* Team block */}
                    <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><a href="#"><img src="images/resource/seb-IMG-1.jpg" alt="" /></a></figure>
                                <span className="share-icon fa fa-share-alt"></span>
                                <div className="social-links">
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="info-box">
                                <h4 className="name"><a href="#">Sebastien Sylvester</a></h4>
                                <span className="designation">Stratège contenu - Zerda Digital</span>
                            </div>
                        </div>
                    </div>

                    {/* Team block */}
                    <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><a href="#"><img src="images/resource/AnasTridimage-1.jpg" alt="" /></a></figure>
                                <span className="share-icon fa fa-share-alt"></span>
                                <div className="social-links">
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="info-box">
                                <h4 className="name"><a href="#">Anas Tradi</a></h4>
                                <span className="designation">Concepteur UX Sénior</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection