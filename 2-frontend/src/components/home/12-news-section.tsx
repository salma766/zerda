import React from 'react'

function NewsSection() {
    return (
        <section className="news-section">

            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">directly from blog</span>
                    <h2>Our latest news &<br /> upcoming blog posts</h2>
                </div>

                <div className="row">
                    {/* News Block */}
                    <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><a href="news-details.html"><img src="images/resource/news-1.jpg" alt="" /></a></figure>
                                <span className="date"><b>20</b> SEP</span>
                            </div>
                            <div className="content-box">
                                <div className="content">
                                    <ul className="post-info">
                                        <li><i className="fa fa-user"></i> by Admin</li>
                                        <li><i className="fa fa-comments"></i> 2 Comments</li>
                                    </ul>
                                    <h4 className="title"><a href="news-details.html">The quality role of the elementary teacher in education</a></h4>
                                    <a href="news-details.html" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* News Block */}
                    <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><a href="news-details.html"><img src="images/resource/news-2.jpg" alt="" /></a></figure>
                                <span className="date"><b>20</b> SEP</span>
                            </div>
                            <div className="content-box">
                                <div className="content">
                                    <ul className="post-info">
                                        <li><i className="fa fa-user"></i> by Admin</li>
                                        <li><i className="fa fa-comments"></i> 2 Comments</li>
                                    </ul>
                                    <h4 className="title"><a href="news-details.html">The quality role of the elementary teacher in education</a></h4>
                                    <a href="news-details.html" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* News Block */}
                    <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><a href="news-details.html"><img src="images/resource/news-3.jpg" alt="" /></a></figure>
                                <span className="date"><b>20</b> SEP</span>
                            </div>
                            <div className="content-box">
                                <div className="content">
                                    <ul className="post-info">
                                        <li><i className="fa fa-user"></i> by Admin</li>
                                        <li><i className="fa fa-comments"></i> 2 Comments</li>
                                    </ul>
                                    <h4 className="title"><a href="news-details.html">The quality role of the elementary teacher in education</a></h4>
                                    <a href="news-details.html" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsSection