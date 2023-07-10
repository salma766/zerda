import { Link } from "react-router-dom"

function MainSlider() {
    return (
        <section className="main-slider">
            <div className="rev_slider_wrapper fullwidthbanner-container" id="rev_slider_one_wrapper" data-source="gallery">
                <div className="rev_slider fullwidthabanner" id="rev_slider_one" data-version="5.4.1">
                    <ul>
                        {/* Slide 1 */}
                        <li data-index="rs-1" data-transition="zoomout">
                            {/* MAIN IMAGE */}
                            <img src="images/main-slider/1.jpg" alt="" className="rev-slidebg" />

                            <div className="tp-caption tp-shape tp-shapewrapper tp-resizeme big-ipad-hidden rs-parallaxlevel-1"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingtop="[0,0,0,0]"
                                data-responsive_offset="on"
                                data-type="shape"
                                data-height="auto"
                                data-whitespace="nowrap"
                                data-width="none"
                                data-hoffset="['-260','-100','-100','-100']"
                                data-voffset="['-270','-190','-190','-190']"
                                data-x="['left','left','left','left']"
                                data-y="['middle','middle','middle','middle']"
                                data-frames='[{"from":"x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                                <figure><img src="images/main-slider/icon/icon-book.png" alt="" /></figure>
                            </div>

                            <div className="tp-caption tp-shape tp-shapewrapper tp-resizeme big-ipad-hidden rs-parallaxlevel-1"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingtop="[0,0,0,0]"
                                data-responsive_offset="on"
                                data-type="shape"
                                data-height="auto"
                                data-whitespace="nowrap"
                                data-width="none"
                                data-hoffset="['-300','-100','-100','-100']"
                                data-voffset="['280','-190','-190','-190']"
                                data-x="['right','right','right','right']"
                                data-y="['middle','middle','middle','middle']"
                                data-frames='[{"from":"x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                                <figure><img src="images/main-slider/icon/icon-globe.png" alt="" /></figure>
                            </div>

                            <div className="tp-caption tp-resizeme rs-parallaxlevel-2 big-ipad-hidden"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingtop="[0,0,0,0]"
                                data-responsive_offset="on"
                                data-type="shape"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-width="none"
                                data-hoffset="['-250','-120','-120','-120']"
                                data-voffset="['190','100','100','100']"
                                data-x="['left','left','left','left']"
                                data-y="['middle','middle','middle','middle']"
                                data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                                <figure><img src="images/main-slider/icon/icon-dots.png" alt="" /></figure>
                            </div>


                            <div className="tp-caption tp-resizeme rs-parallaxlevel-3 big-ipad-hidden"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingtop="[0,0,0,0]"
                                data-responsive_offset="on"
                                data-type="shape"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-width="none"
                                data-hoffset="['-170','120','120','120']"
                                data-voffset="['220','180','180','180']"
                                data-x="['center','center','center','center']"
                                data-y="['middle','middle','middle','middle']"
                                data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                                <figure><img src="images/main-slider/icon/icon-star.png" alt="" /></figure>
                            </div>

                            <div className="tp-caption tp-resizeme rs-parallaxlevel-1 big-ipad-hidden"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingtop="[0,0,0,0]"
                                data-responsive_offset="on"
                                data-type="shape"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-width="none"
                                data-hoffset="['-40','120','120','120']"
                                data-voffset="['-160','100','100','100']"
                                data-x="['center','center','center','center']"
                                data-y="['middle','middle','middle','middle']"
                                data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                                <figure><img src="images/main-slider/icon/icon-arrow.png" alt="" /></figure>
                            </div>

                            <div className="tp-caption tp-resizeme rs-parallaxlevel-2 big-ipad-hidden"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingtop="[0,0,0,0]"
                                data-responsive_offset="on"
                                data-type="shape"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-width="none"
                                data-hoffset="['-120','-30','-30','-30']"
                                data-voffset="['-180','-180','-180','-180']"
                                data-x="['right','right','right','right']"
                                data-y="['middle','middle','middle','middle']"
                                data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                                <figure><img src="images/main-slider/icon/icon-dots-2.png" alt="" /></figure>
                            </div>

                            <div className="tp-caption tp-resizeme rs-parallaxlevel-1 big-ipad-hidden"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingtop="[0,0,0,0]"
                                data-responsive_offset="on"
                                data-type="shape"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-width="none"
                                data-hoffset="['-160','-50','0','150']"
                                data-voffset="['170','120','120','120']"
                                data-x="['right','right','right','right']"
                                data-y="['middle','middle','middle','middle']"
                                data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                                <figure><img src="images/main-slider/icon/icon-circle-1.png" alt="" /></figure>
                            </div>

                            <div className="tp-caption tp-resizeme rs-parallaxlevel-1 big-ipad-hidden"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingtop="[0,0,0,0]"
                                data-responsive_offset="on"
                                data-type="shape"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-width="none"
                                data-hoffset="['30','-50','0','150']"
                                data-voffset="['300','120','120','120']"
                                data-x="['center','center','center','center']"
                                data-y="['middle','middle','middle','middle']"
                                data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                                <figure><img src="images/main-slider/icon/icon-circle-2.png" alt="" /></figure>
                            </div>

                            <div className="tp-caption tp-resizeme rs-parallaxlevel-1 big-ipad-hidden"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingtop="[0,0,0,0]"
                                data-responsive_offset="on"
                                data-type="shape"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-width="none"
                                data-hoffset="['250','-50','0','150']"
                                data-voffset="['-190','120','120','120']"
                                data-x="['center','center','center','center']"
                                data-y="['middle','middle','middle','middle']"
                                data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                                <figure><img src="images/main-slider/icon/icon-circle-3.png" alt="" /></figure>
                            </div>


                            <div className="tp-caption tp-resizeme rs-parallaxlevel-2 big-ipad-hidden"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingtop="[0,0,0,0]"
                                data-responsive_offset="on"
                                data-type="shape"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-width="none"
                                data-hoffset="['-220','-30','-30','-30']"
                                data-voffset="['-80','-180','-180','-180']"
                                data-x="['right','right','right','right']"
                                data-y="['middle','middle','middle','middle']"
                                data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                                <figure><img src="images/main-slider/icon/icon-bulb.png" alt="" /></figure>
                            </div>

                            <div className="tp-caption tp-resizeme"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingtop="[0,0,0,0]"
                                data-responsive_offset="on"
                                data-type="shape"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-width="none"
                                data-hoffset="['-100','-100','-200','-320']"
                                data-voffset="['0','0','-30','-30']"
                                data-x="['right','right','right','right']"
                                data-y="['bottom','bottom','bottom','bottom']"
                                data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                                <figure className="main-image"><img src="images/main-slider/image-1.png" alt="" /></figure>
                            </div>

                            <div className="tp-caption"
                                data-paddingbottom="[15,15,15,15]"
                                data-paddingleft="[15,15,15,15]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingtop="[0,0,0,0]"
                                data-responsive_offset="on"
                                data-type="text" data-height="none"
                                data-width="['750','750','750','750']"
                                data-whitespace="normal"
                                data-hoffset="['0','0','0','0']"
                                data-voffset="['-205','-190','-210','-220']"
                                data-x="['left','left','left','left']"
                                data-y="['middle','middle','middle','middle']"
                                data-textalign="['top','top','top','top']"
                                data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'>
                                <span className="title">START TO NEW JOURNEY</span>
                            </div>

                            <div className="tp-caption"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[15,15,15,15]"
                                data-paddingright="[15,15,15,15]"
                                data-paddingtop="[0,0,0,0]"
                                data-responsive_offset="on"
                                data-type="text" data-height="none"
                                data-width="['750','750','750','450']"
                                data-whitespace="normal"
                                data-hoffset="['0','0','0','0']"
                                data-voffset="['-55','-50','-50','-90']"
                                data-x="['left','left','left','left']"
                                data-y="['middle','middle','middle','middle']"
                                data-textalign="['top','top','top','top']"
                                data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'>
                                <h1>Best <span className="style-font">online</span> <br />courses from Zerda Academy</h1>
                            </div>

                            <div className="tp-caption"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[15,15,15,15]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingtop="[0,0,0,0]"
                                data-responsive_offset="on"
                                data-type="text" data-height="none"
                                data-width="['750','750','750','450']"
                                data-whitespace="normal"
                                data-hoffset="['0','0','0','0']"
                                data-voffset="['110','90','100','65']"
                                data-x="['left','left','left','left']"
                                data-y="['middle','middle','middle','middle']"
                                data-textalign="['top','top','top','top']"
                                data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'>
                                <div className="text">Zerda Academy vous donne accès à des cours et ateliers crées<br /> par des spécialistes en marketing digital au fait des meilleures pratiques<br /> de l’industrie.</div>
                            </div>


                            <div className="tp-caption" data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[15,15,15,15]"
                                data-paddingright="[15,15,15,15]"
                                data-paddingtop="[0,0,0,0]"
                                data-responsive_offset="on"
                                data-type="text" data-height="none"
                                data-width="['700','750','700','450']"
                                data-whitespace="normal"
                                data-hoffset="['0','0','0','0']"
                                data-voffset="['200','185','200','185']"
                                data-x="['left','left','left','left']"
                                data-y="['middle','middle','middle','middle']"
                                data-textalign="['top','top','top','top']"
                                data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'>
                                <Link to={'/courses'} className="theme-btn btn-style-one">Find Course</Link>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default MainSlider