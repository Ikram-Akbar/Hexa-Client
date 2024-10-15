import CallToActionSection from "../../Components/CallToAction/CallToAction";
import CustomerReviews from "../../Components/CustomerReviews/CustomerReviews";
import HeroSection from "../../Components/HeroSection/HeroSection";
import ServicesOverviewSection from "../../Components/ServicesOverview/ServicesOverview";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";


const Home = () => {
    return (
        <div>
            <HeroSection />
            <WhyChooseUs />
            <ServicesOverviewSection />
            <CallToActionSection/>
            <CustomerReviews />
            
        </div>
    );
};

export default Home;