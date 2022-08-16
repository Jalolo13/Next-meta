import Header from "./Header";
import Footer from "./Footer";
import SectionCards from "./SectionCards";
import SectionAboutCard from "./SectionAboutCard";
import SectionArtists from "./SectionArtists";
import SectionBlocks from "./SectionBlocks";
import SectionRoadMap from "./SectionRoadMap";
import OurPartners from "./OurPartners";

const Layout = () => {
    return (
        <>
            <Header />
            <SectionCards />
            <SectionAboutCard />
            <SectionArtists />
            <SectionBlocks />
            <SectionRoadMap />
            <OurPartners />
            <Footer />
        </>
    );
};

export default Layout;
