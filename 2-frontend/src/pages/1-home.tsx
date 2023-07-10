
import MainSlider from "../components/home/1-main-slider";
import AboutSection from "../components/home/2-about-section";
import CoursesSection from "../components/home/3-courses-section";
import FeaturesSection from "../components/home/4-features-section";
import CategoriesSectionCurrent from "../components/home/5-categories-section-current";
import SignupSection from "../components/home/6-signup-section";
import TeamSection from "../components/home/7-team-section";
import CallToAction from "../components/home/8-call-to-action";
import TestimonialSection from "../components/home/9-testimonial-section";
import AboutSectionTwo from "../components/home/10-about-section-two";
import CountdownSection from "../components/home/11-countdown-section";
import NewsSection from "../components/home/12-news-section";
import ClientSection from "../components/home/13-client-section";
import Header from "../layouts/header";
import Footer from "../layouts/footer";


function Home() {
    return (
        <>
            <Header />
            <MainSlider />
            <AboutSection />
            <FeaturesSection />
            <CategoriesSectionCurrent />
            <SignupSection />
            <TeamSection />
            <CallToAction />
            {/* <TestimonialSection /> */}
            {/* <AboutSectionTwo /> */}
            {/* <CountdownSection /> */}
            {/* <NewsSection /> */}
            {/* <ClientSection /> */}
            <Footer />
        </>
    )
}

export default Home