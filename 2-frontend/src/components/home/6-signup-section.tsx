import React from 'react'

function SignupSection() {
    return (
        <section className="signup-section">
            <div className="auto-container">
                <div className="anim-icons">
                    <span className="icon icon-paper-clip bounce-x"></span>
                </div>
                <div className="outer-box" style={{ backgroundImage: "url(images/background/3.jpg)" }}>
                    <span className="float-icon icon-pencil-line wow fadeInUp"></span>
                    <div className="row">
                        {/* Title Column */}
                        <div className="title-column col-lg-6 col-md-12 col-sm-12">
                            <div className="sec-title light">
                                <h2>Joignez-nous</h2>
                                <div className="text">Communiquez avec nous par téléphone ou email et faites votre premier pas dans Zerda Academy</div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="form-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* Sign Form */}
                                <div className="signup-form wow fadeInLeft">
                                    {/*Contact Form*/}
                                    <form method="post" action="https://kodesolution.com/html/2022/edulerns-html/get" id="contact-form">
                                        <div className="form-group">
                                            <input type="text" name="full_name" placeholder="Your name" required />
                                        </div>

                                        <div className="form-group">
                                            <input type="text" name="Email" placeholder="Email address" required />
                                        </div>

                                        <div className="form-group">
                                            <select className="custom-select">
                                                <option >Select course</option>
                                                <option >UI/UX Designing</option>
                                                <option >Digital Marketing</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <button className="theme-btn btn-style-one" type="submit" name="submit-form">Envoyer</button>
                                        </div>
                                    </form>
                                </div>
                                {/*End Contact Form */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignupSection